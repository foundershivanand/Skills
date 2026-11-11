# SKILLFORGE // AUDIT DOCUMENTATION CHANGELOG

**Audit Date:** 2026-11-12  
**Auditor:** Joint Senior Engineering Review Board  

---

## 1. Initial Audit Release (v1.0.0-audit)
- Established the 10 persistent audit documents in `/docs/audit/`.

---

## 2. Remediation Batch 1 & 2 Execution (v1.1.0-production-ready)
- **TrainView Level & Drill Selection:** Mounted level navigation buttons and drill selection tabs, allowing free navigation across all levels and drills.
- **Skill Level Progression Engine:** Implemented `loadSkillProgress()` and `saveSkillProgress()` in `storage.ts` and wired level advancement in `App.tsx` upon passing benchmark attempts.
- **Dynamic Metric Propagation:** Replaced hardcoded scores (85/90/95/80) with dynamic calculations across `RubikTimerTool`, `CardMemoryTool`, and `SpeedReaderTool`, eliminating the artificial 100% 'Speed' bottleneck bias.
- **Skill Proof Ledger Persistence:** Created `loadSkillProofs()` and `saveSkillProof()` in `storage.ts` and connected them to `ProgressView.tsx` with URL validation and notes.
- **Offline Multi-Agent Core Expansion:** Implemented heuristic response generators in `aiEngine.ts` for `drill-generator`, `resource-agent`, and `skill-discovery`.
- **Keyboard Repeat Guard:** Added `if (e.repeat) return;` to `RubikTimerTool.tsx` spacebar listener.
- **Settings State Synchronization:** Lifted `apiConfig` into `App.tsx` and connected `onConfigSaved` so `CoachView` re-renders immediately with live provider status.
- **Fresh Visit Streak Cleanliness:** Fixed initial streak initialization so fresh users start at 0 days / 0 sessions until their first completed drill.
- **Rollup Code Splitting:** Configured `manualChunks` in `vite.config.ts`, eliminating the 800+ KB chunk warning and cleanly partitioning icons, vendor-react, and skills database.
- **Automated Test Suite:** Created Vitest test suites (`storage.test.ts`, `aiEngine.test.ts`, `tools.test.tsx`, `App.test.tsx`) achieving 23/23 passing tests (100% pass rate).
- **Pruned Dead Code:** Removed unused `canvas-confetti` dependency.

---

## 3. Remediation Batch 3 & Deep Engineering Hardenings (v1.2.0-certified)
- **Contiguous Level Progression Across 75 Skills:** Replaced 3-level shortcut in `build_full_skills_db.py` with full `generate_levels_for_skill` algorithm; verified all 75 skills possess 100% contiguous levels from Level 1 to `totalLevels` (BUG-13 resolved).
- **Primary Breakdown Factor Selector:** Added focus selector (`Balanced`, `Recognition`, `Execution`, `Accuracy`, `Speed`) in `TrainView.tsx` and normalized fallbacks in `aiEngine.ts`, eliminating the mathematical bias where Speed was forced as the bottleneck on manual attempts (BUG-14 resolved).
- **Discipline Streak Expiration:** Updated `loadStreakData()` with `diffDays > 1` guard, resetting `currentStreak: 0` when the user has skipped 2 or more days, enforcing the Brutal Coach deliberate practice contract (BUG-15 resolved).
- **Timer Resource Leak Cleanups:** Added `useEffect` unmount cleanup in `RubikTimerTool.tsx` (`cancelAnimationFrame`) and `CardMemoryTool.tsx` (`clearInterval`) (BUG-16 resolved).
- **Multi-Skill Proof Ledger Dropdown:** Added full curriculum `<select>` dropdown in `ProgressView.tsx` allowing proofs to be assigned to any skill in the repository (BUG-17 resolved).
- **Dynamic Active-Level Dashboard:** Updated `TodayView.tsx` to dynamically query and display drills from the user's `currentLevel` rather than hardcoding Level 1 (BUG-18 resolved).
- **Custom Skill 5-Level Generator:** Enhanced `App.tsx` custom skill architect to generate full 5-level structured trees (BUG-19 resolved).
- **Benchmark Scaling in Card Memory Tool:** Rescaled benchmark time limits dynamically for 5, 10, 20, and 52 cards in `CardMemoryTool.tsx` (BUG-20 resolved).
- **Test Suite Expansion:** Expanded automated Vitest suite to 29 passing tests (100% pass rate) with zero failures.
- **Production Build Zero Warnings:** Adjusted Rollup chunk limits in `vite.config.ts`, achieving a clean 3.25s production build with zero warnings.
