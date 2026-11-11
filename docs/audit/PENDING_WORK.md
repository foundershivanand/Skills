# SKILLFORGE // PENDING WORK MASTER INVENTORY

**Version:** 1.0.0-audit  
**Date:** 2026-11-12  

This backlog outlines all necessary remediation and enhancement tasks organized by strict priority (P0 to P3).

---

## 1. Prioritized Task Checklist

- [x] **TASK-01 (P0): Fix Level & Drill Selection in TrainView** (RESOLVED)
- [x] **TASK-02 (P0): Implement Skill Level Progression & LocalStorage Persistence** (RESOLVED)
- [x] **TASK-03 (P0): Fix Four-Factor Metric Calculations to Eliminate Speed Bias** (RESOLVED)
- [x] **TASK-04 (P1): Implement Skill Proof Persistence in LocalStorage** (RESOLVED)
- [x] **TASK-05 (P1): Implement Missing Offline Handlers for Drill Generator & Other Roles** (RESOLVED)
- [x] **TASK-06 (P1): Fix Spacebar Key Repeat & Inspection Flow in RubikTimerTool** (RESOLVED)
- [x] **TASK-07 (P1): Synchronize AI Configuration State between SettingsModal and CoachView** (RESOLVED)
- [x] **TASK-08 (P2): Add Note Field to Skill Proof Ledger UI in ProgressView** (RESOLVED)
- [x] **TASK-09 (P2): Correct Initial Streak Calculation for Fresh Visits** (RESOLVED)
- [x] **TASK-10 (P2): Optimize Vite Rollup Bundle Chunking & Code Splitting** (RESOLVED)
- [x] **TASK-11 (P3): Prune Dead Dependency (`canvas-confetti`)** (RESOLVED)
- [x] **TASK-12 (P3): Correct Misleading "Encrypted LocalStorage" Copy** (RESOLVED)
- [x] **TASK-13 (P1): Add Comprehensive Automated Unit & Integration Test Suite** (RESOLVED)

---

## 2. Task Specifications

### TASK-01: Fix Level & Drill Selection in TrainView
- **Priority:** P0 (Critical)
- **Complexity:** Medium
- **Affected Files:** `src/views/TrainView.tsx`
- **Objective:** Add interactive Level buttons and Drill selection tabs allowing the learner to switch between different levels and drills within the active skill.
- **Acceptance Criteria:**
  1. TrainView renders a Level navigation bar showing all levels defined for the skill.
  2. Clicking a level updates `selectedLevelIdx` and loads that level's drills.
  3. Clicking a drill tab updates `selectedDrillIdx` and updates the active specification, interactive tool, and visual steps.

---

### TASK-02: Implement Skill Level Progression & LocalStorage Persistence
- **Priority:** P0 (Critical)
- **Complexity:** Medium
- **Affected Files:** `src/services/storage.ts`, `src/App.tsx`, `src/views/TrainView.tsx`
- **Objective:** Enable permanent persistence of user level progression. When a learner passes a benchmark attempt, unlock the next level and increment `currentLevel`.
- **Acceptance Criteria:**
  1. `storage.ts` provides `loadSkillProgress()` and `saveSkillProgress(skillId, level)`.
  2. `App.tsx` merges persisted level progress into `allSkills`.
  3. Passing a drill attempt in TrainView advances the skill level when benchmark criteria are satisfied.

---

### TASK-03: Fix Four-Factor Metric Calculations to Eliminate Speed Bias
- **Priority:** P0 (Critical)
- **Complexity:** Medium
- **Affected Files:** `src/views/TrainView.tsx`, `src/components/tools/*.tsx`, `src/services/aiEngine.ts`
- **Objective:** Replace static mock scores (85/90/95/80) with dynamic, context-aware four-factor metrics derived from real tool performance and manual logging.
- **Acceptance Criteria:**
  1. CardMemoryTool passes dynamic accuracy score and execution time.
  2. RubikTimerTool calculates speed score relative to target benchmark.
  3. SpeedReaderTool passes comprehension accuracy and reading speed.
  4. Manual logging allows adjusting factor scores or applies balanced defaults so all four bottlenecks (Recognition, Execution, Accuracy, Speed) can be diagnosed based on actual performance.

---

### TASK-04: Implement Skill Proof Persistence in LocalStorage
- **Priority:** P1 (High)
- **Complexity:** Small
- **Affected Files:** `src/services/storage.ts`, `src/views/ProgressView.tsx`
- **Objective:** Persist all submitted skill proof records to LocalStorage so they survive browser refreshes.
- **Acceptance Criteria:**
  1. `storage.ts` provides `loadSkillProofs()` and `saveSkillProof()`.
  2. `ProgressView.tsx` initializes from `loadSkillProofs()` and appends new submissions permanently.

---

### TASK-05: Implement Missing Offline Handlers for Drill Generator & Other Roles
- **Priority:** P1 (High)
- **Complexity:** Medium
- **Affected Files:** `src/services/aiEngine.ts`
- **Objective:** Implement dedicated offline heuristic generators for `drill-generator`, `resource-agent`, and `skill-discovery`.
- **Acceptance Criteria:**
  1. Selecting `DRILL GENERATOR` in CoachView generates a structured micro-drill with objective, setup, actions, repetitions, and success criteria.
  2. Selecting `RESOURCE AGENT` provides a single high-leverage reference.
  3. Selecting `SKILL DISCOVERY` provides curated time-boxed skills.

---

### TASK-06: Fix Spacebar Key Repeat & Inspection Flow in RubikTimerTool
- **Priority:** P1 (High)
- **Complexity:** Small
- **Affected Files:** `src/components/tools/RubikTimerTool.tsx`
- **Objective:** Prevent keyboard repeat from skipping inspection and starting the solve prematurely.
- **Acceptance Criteria:**
  1. `handleKeyDown` ignores repeated keydown events (`if (e.repeat) return`).
  2. Tapping Space enters inspection.
  3. Holding Space during inspection transitions to ready state; releasing Space starts the solve.

---

### TASK-07: Synchronize AI Configuration State between SettingsModal and CoachView
- **Priority:** P1 (High)
- **Complexity:** Small
- **Affected Files:** `src/App.tsx`, `src/components/SettingsModal.tsx`, `src/views/CoachView.tsx`
- **Objective:** Lift `apiConfig` state or ensure `onConfigSaved` notifies parent and re-evaluates `CoachView`'s active provider badge.
- **Acceptance Criteria:**
  1. Saving configuration in SettingsModal immediately updates the status badge in CoachView.
  2. No page reload required to activate the configured LLM key.

---

### TASK-08: Add Comprehensive Automated Unit & Integration Test Suite
- **Priority:** P1 (High)
- **Complexity:** Medium
- **Affected Files:** `src/services/__tests__/storage.test.ts`, `src/services/__tests__/aiEngine.test.ts`, `src/components/__tests__/*.test.tsx`
- **Objective:** Create automated tests verifying storage persistence, bottleneck calculations, streak logic, and apparatus rendering.
- **Acceptance Criteria:**
  1. `npm test` executes Vitest suite and passes all test assertions.
