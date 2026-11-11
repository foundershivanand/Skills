# SKILLFORGE // IMPLEMENTATION & REMEDIATION ROADMAP

**Version:** 1.0.0-audit  
**Date:** 2026-11-12  

This roadmap specifies the exact phased execution sequence required to transition SKILLFORGE into production-ready status.

---

## Phase 1: Critical Bug Fixes (P0) — Core Execution Blockers
1. **Fix TrainView Level & Drill Selection UI:**
   - Mount interactive Level buttons and Drill tabs in `TrainView.tsx`.
   - Connect `selectedLevelIdx` and `selectedDrillIdx` so users can explore and train on any level or drill.
2. **Implement Skill Level Progression Persistence:**
   - Add `loadSkillProgress()` and `saveSkillProgress()` in `storage.ts`.
   - Update `App.tsx` state to track unlocked levels.
   - Advance level upon passing benchmark criteria.
3. **Fix Four-Factor Bottleneck Scoring:**
   - Remove hardcoded mock values in `TrainView.tsx`.
   - Wire dynamic metrics from `RubikTimerTool`, `CardMemoryTool`, and `SpeedReaderTool`.
   - Ensure `analyzeBottlenecks()` can diagnose `Recognition`, `Execution`, `Accuracy`, or `Speed` based on actual performance.

---

## Phase 2: High-Priority Reliability & Data Integrity (P1)
1. **Persist Skill Proof Ledger Submissions:**
   - Add `loadSkillProofs()` and `saveSkillProof()` to `storage.ts`.
   - Integrate persistence into `ProgressView.tsx` with `http/https` URL validation.
2. **Expand Offline Multi-Agent Heuristics:**
   - Add explicit offline handlers in `aiEngine.ts` for `drill-generator`, `resource-agent`, and `skill-discovery`.
3. **Fix RubikTimerTool Spacebar Event Logic:**
   - Prevent `keydown` auto-repeat from prematurely skipping 15-second inspection.
4. **Synchronize Settings Configuration State:**
   - Connect `onConfigSaved` callback in `App.tsx` to ensure `CoachView` immediately reflects updated API keys without requiring page refresh.

---

## Phase 3: Comprehensive Automated Testing Suite
1. **Setup Vitest Configuration:**
   - Configure `vite.config.ts` with Vitest test runner definitions and JSDOM environment.
2. **Unit Tests:**
   - `storage.test.ts`: Test LocalStorage CRUD, streak calculation, slicing, and error recovery.
   - `aiEngine.test.ts`: Test bottleneck categorization, session planning, and offline heuristics.
   - `tools.test.tsx`: Test scramble generation, card shuffler, interval timer calculations, RSVP word flasher.
3. **Integration Verification:**
   - Verify view rendering and modal interactions.

---

## Phase 4: Performance, Bundle Optimization & Cleanup (P2/P3)
1. **Optimize Rollup Code Splitting:**
   - Add manual chunking in `vite.config.ts` to split `lucide-react`, `vendor` libraries, and `skillsData` so no single bundle exceeds 500 KB.
2. **Prune Unused Dependencies:**
   - Remove unused `canvas-confetti` package.
3. **Correct Security Copy:**
   - Update `SettingsModal.tsx` description to clarify unencrypted origin-local storage.

---

## Phase 5: Verification & Production Readiness
1. **Full Test Execution:**
   - Run `npm test` and verify 100% test pass rate.
2. **Typecheck & Production Build:**
   - Run `npx tsc -b` and `npm run build`.
   - Verify clean build with zero warnings.
3. **Final Health Assessment:**
   - Compile executive status and audit sign-off.
