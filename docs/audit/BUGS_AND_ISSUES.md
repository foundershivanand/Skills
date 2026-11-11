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
| **BUG-13** | **CRITICAL** | Curriculum Data | `build_full_skills_db.py`, `src/data/skillsData.ts` | **RESOLVED** | Fixed generator to output contiguous levels 1 through `totalLevels`; eliminated missing intermediate levels. |
| **BUG-14** | **HIGH** | Scoring Algorithm | `src/views/TrainView.tsx`, `src/services/aiEngine.ts` | **RESOLVED** | Added breakdown factor selector in TrainView; balanced score defaults to eliminate 100% Speed bias. |
| **BUG-15** | **HIGH** | Data Integrity | `src/services/storage.ts#L163-L175` | **RESOLVED** | Added streak expiration check (`diffDays > 1`) in `loadStreakData()`; prevents stale streaks from displaying. |
| **BUG-16** | **MEDIUM** | Resource Leak | `src/components/tools/RubikTimerTool.tsx`, `CardMemoryTool.tsx` | **RESOLVED** | Added `useEffect` unmount cleanup for animation frame and interval timers. |
| **BUG-17** | **MEDIUM** | Data Fidelity | `src/views/ProgressView.tsx` | **RESOLVED** | Added curriculum skill selector dropdown in Skill Proof Ledger so proofs attach to correct skills. |
| **BUG-18** | **MEDIUM** | Dashboard UI | `src/views/TodayView.tsx#L77` | **RESOLVED** | Dynamically resolves drill corresponding to user's `currentLevel` instead of hardcoding Level 1. |
| **BUG-19** | **LOW** | Data Model | `src/App.tsx#L138-L180` | **RESOLVED** | Custom skill creator generates full 5-level hierarchy instead of single isolated level. |
| **BUG-20** | **LOW** | Benchmark Scaling | `src/components/tools/CardMemoryTool.tsx` | **RESOLVED** | Rescaled time limit benchmarks based on selected deck size (5 cards -> 60s, 10 -> 120s, 20 -> 180s, 52 -> 300s). |

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

---

### BUG-13: Missing Intermediate Levels in 75-Skill Curriculum
- **Location:** `build_full_skills_db.py`, `src/data/skillsData.ts`
- **Description:** The generator script constructed only Level 1, Level 2, and Level `totalLevels`. For skills with 5 to 12 levels, all intermediate levels (Level 3 to $N-1$) were absent. When a user passed Level 2, their `currentLevel` incremented to 3, but Level 3 did not exist in the array, breaking progression.
- **Root Cause:** Incomplete level generator loop in `build_full_skills_db.py`.
- **Remediation:** Implemented `generate_levels_for_skill` generating contiguous levels 1 through `levelsCount` with tailored benchmarks, drills, and visual cues. Regenerated `skillsData.ts`.

---

### BUG-14: Manual Logging Form Bias Towards Speed Bottleneck
- **Location:** `src/views/TrainView.tsx`, `src/services/aiEngine.ts`
- **Description:** Manual attempts without tool scores defaulted to scores where `speedScore` was strictly lower than all other factors (85 vs 88, 86, 92 on pass, and 50 vs 55, 58, 62 on fail). The manual logging UI had no selector for failure cause, locking 100% of diagnoses to Speed.
- **Root Cause:** Missing root-cause focus selector and asymmetric default fallbacks.
- **Remediation:** Added breakdown factor selector (`Balanced`, `Recognition`, `Execution`, `Accuracy`, `Speed`) in `TrainView.tsx` and normalized fallbacks in `aiEngine.ts` (85/85/85/85 and 60/60/60/60).

---

### BUG-15: Stale Discipline Streak Displayed on Return Visits
- **Location:** `src/services/storage.ts#L163-L175`
- **Description:** `loadStreakData()` parsed stored streak records without checking if more than 1 day had elapsed since `lastTrainedDate`. A user returning after 2 weeks would see an active streak until logging a new drill.
- **Root Cause:** Missing date expiration delta calculation on initial load.
- **Remediation:** Added `diffDays > 1` expiration guard in `loadStreakData()` resetting `currentStreak: 0` while preserving `totalSessionsCompleted`.

---

### BUG-16: Unmounted Component Timer Resource Leaks
- **Location:** `src/components/tools/RubikTimerTool.tsx`, `CardMemoryTool.tsx`
- **Description:** `requestAnimationFrame` in `RubikTimerTool` and `setInterval` in `CardMemoryTool` were not cleaned up if the user navigated away while the timers were active.
- **Root Cause:** Missing cleanup return functions in component lifecycle hooks.
- **Remediation:** Added `useEffect(() => () => { cancelAnimationFrame(...); clearInterval(...); }, [])` hooks.

---

### BUG-17: Skill Proof Ledger Attributing All Proofs to First Active Skill
- **Location:** `src/views/ProgressView.tsx`
- **Description:** `handleProofSubmit` hardcoded `activeSkills[0].title` as the proof target, preventing learners from filing verified proofs for other tracks in the catalog.
- **Root Cause:** Missing curriculum selector in the proof submission form.
- **Remediation:** Added a full-curriculum `<select>` dropdown populated from `allSkills`.

---

### BUG-18: Today Dashboard Hardcoded to Level 1 Drill
- **Location:** `src/views/TodayView.tsx#L77`
- **Description:** The Today screen displayed `skill.levels[0]?.drills[0]` regardless of the user's unlocked level.
- **Root Cause:** Hardcoded index 0 access instead of looking up `skill.currentLevel`.
- **Remediation:** Dynamically resolve drill from `skill.levels.find(l => l.levelNumber === skill.currentLevel)`.

---

### BUG-19: Custom Skill Creator Incomplete Level Tree
- **Location:** `src/App.tsx#L138-L180`
- **Description:** `handleAddNewCustomSkill` set `totalLevels: 5` but only generated Level 1.
- **Root Cause:** Truncated object literal.
- **Remediation:** Generated all 5 structured deliberate practice levels for custom pursuits.

---

### BUG-20: Unscaled Time Benchmarks in Card Memory Tool
- **Location:** `src/components/tools/CardMemoryTool.tsx`
- **Description:** Benchmark time limit remained fixed at 300s even when users switched deck sizes to 5, 10, or 20 cards.
- **Root Cause:** Hardcoded static prop default.
- **Remediation:** Added `getTimeLimitForSize` dynamically scaling limit to 60s (5 cards), 120s (10 cards), 180s (20 cards), and 300s (52 cards).
