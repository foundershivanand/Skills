# SKILLFORGE // BUGS, DEFECTS & ARCHITECTURAL ISSUES

**Version:** 1.0.0-audit  
**Date:** 2026-11-12  

This document catalogs every confirmed defect, vulnerability, logical error, and regression risk identified across the codebase.

---

## 1. Issue Classification Matrix

| Issue ID | Severity | Category | File & Line Reference | Remediation Status | Verification |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **BUG-01** | **CRITICAL** | UI / Routing | `src/views/TrainView.tsx#L24-L35` | **RESOLVED** | Level and drill selector tabs mounted; allows switching levels and drills. |
| **BUG-02** | **CRITICAL** | Data Model | `src/App.tsx#L54-L63`, `src/services/storage.ts` | **RESOLVED** | `loadSkillProgress`/`saveSkillProgress` implemented; advances upon benchmark pass. |
| **BUG-03** | **CRITICAL** | Algorithmic | `src/views/TrainView.tsx#L46-L58`, `src/services/aiEngine.ts#L44-L57` | **RESOLVED** | Dynamic four-factor metric propagation implemented across all interactive tools. |
| **BUG-04** | **HIGH** | Data Loss | `src/views/ProgressView.tsx#L21`, `src/views/ProgressView.tsx#L25-L38` | **RESOLVED** | `loadSkillProofs`/`saveSkillProof` implemented with LocalStorage persistence. |
| **BUG-05** | **HIGH** | Logic Error | `src/services/aiEngine.ts#L181-L286` | **RESOLVED** | Offline heuristic generators added for `drill-generator`, `resource-agent`, `skill-discovery`. |
| **BUG-06** | **MEDIUM** | Event Handling | `src/components/tools/RubikTimerTool.tsx#L47-L74` | **RESOLVED** | Added `if (e.repeat) return;` guard preventing spacebar repeat inspection skipping. |
| **BUG-07** | **MEDIUM** | State Sync | `src/App.tsx#L238-L242`, `src/views/CoachView.tsx#L27` | **RESOLVED** | Lifted `apiConfig` into App state; `onConfigSaved` updates CoachView immediately. |
| **BUG-08** | **MEDIUM** | UI Deficiency | `src/views/ProgressView.tsx#L20`, `src/views/ProgressView.tsx#L158-L173` | **RESOLVED** | Added note input field and display in the submitted proofs ledger. |
| **BUG-09** | **LOW** | Edge Case | `src/services/storage.ts#L115-L120` | **RESOLVED** | Fresh visit streak initializes cleanly to 0 days / 0 sessions. |
| **BUG-10** | **LOW** | Dependency | `package.json#L12` | **RESOLVED** | Pruned unused `canvas-confetti` and `@types/canvas-confetti` packages. |
| **BUG-11** | **MEDIUM** | Performance | `vite.config.ts`, `src/data/skillsData.ts` | **RESOLVED** | Configured manual Rollup chunks for icons, react vendor, and skills database. |
| **BUG-12** | **LOW** | UI Text | `src/components/SettingsModal.tsx#L109` | **RESOLVED** | Corrected copy to disclose origin-local unencrypted browser storage. |

---

## 2. In-Depth Defect Analysis

### BUG-01: Level & Drill Selectors Completely Missing in TrainView
- **Location:** [`src/views/TrainView.tsx#L24-L35`](file:///home/shiva/skills/src/views/TrainView.tsx#L24-L35)
- **Description:** Lines 24 and 25 declare:
  ```ts
  const [selectedLevelIdx, setSelectedLevelIdx] = useState(0);
  const [selectedDrillIdx, setSelectedDrillIdx] = useState(0);
  ```
  However, `setSelectedLevelIdx` and `setSelectedDrillIdx` are never invoked anywhere else in `TrainView.tsx`. No tab bar, dropdown, or pagination component is rendered to allow the user to switch between Level 1, Level 2, Level 3, etc., or choose among multiple drills.
- **Root Cause:** Incomplete UI wiring during view assembly.
- **Remediation:** Implement a clean, responsive Level Selector bar and Drill Selector tab list in `TrainView.tsx`, allowing the user to select any level up to their current unlocked level, or explore future level benchmarks.

---

### BUG-02: Skill Level Advancement and Progress Not Persisted
- **Location:** [`src/App.tsx#L54-L63`](file:///home/shiva/skills/src/App.tsx#L54-L63), [`src/services/storage.ts`](file:///home/shiva/skills/src/services/storage.ts)
- **Description:** Skills in `ALL_SKILLS` are statically typed with `currentLevel: 1`. In `App.tsx`, `handleRecordAttempt()` saves the drill attempt to LocalStorage, but it never evaluates whether the attempt passed a level unlock benchmark, nor does it update the skill's `currentLevel`.
- **Root Cause:** Absence of a skill level progression persistence model.
- **Remediation:** 
  1. Add `SKILL_PROGRESS` storage key in `storage.ts` mapping `skillId -> { currentLevel: number; unlockedLevels: number[] }`.
  2. Implement `loadSkillProgress()` and `saveSkillProgress()` in `storage.ts`.
  3. In `App.tsx`, compute effective skill levels combining base data and persisted progress.
  4. Advance level when a benchmark test is successfully passed.

---

### BUG-03: Hardcoded Metrics Biasing Bottleneck Matrix Exclusively to 'Speed'
- **Location:** [`src/views/TrainView.tsx#L46-L58`](file:///home/shiva/skills/src/views/TrainView.tsx#L46-L58), [`src/services/aiEngine.ts#L44-L57`](file:///home/shiva/skills/src/services/aiEngine.ts#L44-L57)
- **Description:** In `TrainView.tsx`, `submitAttempt()` records every attempt with static mock numbers:
  ```ts
  recognitionScore: passed ? 85 : 55,
  executionScore: passed ? 90 : 60,
  accuracyScore: passed ? 95 : 65,
  speedScore: passed ? 80 : 50
  ```
  Notice that $80 < 85 < 90 < 95$ and $50 < 55 < 60 < 65$. In every single situation, `speedScore` is mathematically the minimum value. As a result, `analyzeBottlenecks()` will always sort `Speed` first, and will NEVER diagnose `Recognition`, `Execution`, or `Accuracy`!
- **Root Cause:** Hardcoded placeholder values were never connected to dynamic drill metrics.
- **Remediation:** 
  1. Allow interactive tools to supply dynamic four-factor scores based on actual measurements (e.g. CardMemoryTool supplies actual accuracy and memo time; RubikTimerTool evaluates inspection vs execution; SpeedReaderTool supplies comprehension accuracy vs WPM speed).
  2. Allow manual logging to provide slider or numeric factor adjustments.

---

### BUG-04: Skill Proof Submissions Disappear on Page Refresh
- **Location:** [`src/views/ProgressView.tsx#L21`](file:///home/shiva/skills/src/views/ProgressView.tsx#L21)
- **Description:** `submittedProofs` is declared as `useState<{ id: string; ... }[]>([])` without connecting to `storage.ts`. Any proof link submitted by the learner is wiped as soon as the user switches views or reloads.
- **Root Cause:** Missing LocalStorage helper for skill proofs.
- **Remediation:** Create `loadSkillProofs()` and `saveSkillProof()` in `storage.ts` and initialize state from LocalStorage in `ProgressView.tsx`.

---

### BUG-05: Missing Internal AI Handlers for Drill Generator & Other Roles
- **Location:** [`src/services/aiEngine.ts#L181-L286`](file:///home/shiva/skills/src/services/aiEngine.ts#L181-L286)
- **Description:** When the user selects `DRILL GENERATOR` in CoachView while running in offline mode, `generateInternalAgentResponse()` lacks a matching `role === 'drill-generator'` branch. The function falls through to the generic Brutal Coach.
- **Root Cause:** Incomplete coverage of all 8 agent roles in the offline heuristic engine.
- **Remediation:** Add robust offline response generators for `drill-generator`, `resource-agent`, and `skill-discovery`.

---

### BUG-06: Spacebar Key Repeat Skips Rubik's Cube Inspection
- **Location:** [`src/components/tools/RubikTimerTool.tsx#L47-L74`](file:///home/shiva/skills/src/components/tools/RubikTimerTool.tsx#L47-L74)
- **Description:** When holding down the Spacebar, the browser emits continuous `keydown` events. When idle, the first event sets `inspecting`, and the second event (arriving ~200ms later) sets `ready`. Upon releasing the Spacebar, the timer immediately starts, denying the user their 15-second inspection window.
- **Root Cause:** Keyboard repeat events (`e.repeat`) were not filtered out.
- **Remediation:** Add `if (e.repeat) return;` at the beginning of `handleKeyDown`.
