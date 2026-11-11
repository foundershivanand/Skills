import { Skill } from '../types';

export const ALL_SKILLS: Skill[] = [
  {
    "id": "skill-01",
    "number": 1,
    "title": "Run 5 km under 20 minutes",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "physical-endurance",
    "timeCategory": "20-hours",
    "masteryDefinition": "Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
    "prerequisites": [
      "Run 5 km continuously without walking under 26:00"
    ],
    "equipmentNeeded": [
      "Running shoes",
      "GPS watch or phone tracker",
      "400m track access"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 8/8 intervals completed in 93-95 seconds with <60s recovery.",
        "unlockCondition": "Achieve 8/8 intervals completed in 93-95 seconds with <60s recovery. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-01-01",
            "number": 1,
            "title": "Drill 01 \u2014 400m VO2 Max Repeats",
            "objective": "Isolate and master Lactate threshold & cadence lock (180 SPM).",
            "whyExists": "Trains leg turnover at 3:55/km pace and expands stroke volume.",
            "equipment": "Running shoes",
            "setup": "Ensure Running shoes is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Warm up with 10 min dynamic mobility & easy jog.",
              "Execute 8 x 400m intervals on track at exact 94-second target.",
              "Recover with 60 seconds walking rest between sets.",
              "Record all 8 splits. Zero splits allowed above 96 seconds."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "8/8 intervals completed in 93-95 seconds with <60s recovery.",
            "failureCriteria": "Any 400m lap exceeds 96 seconds. Repeat session with 75s rest.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cadence Lock (180 SPM)",
                "instruction": "Land forefoot directly beneath hip center of mass. Do not overstride ahead of knees.",
                "diagramType": "posture",
                "keyTip": "Think of ground as hot coals: short ground contact time (<210ms).",
                "commonMistake": "Heel striking ahead of knee axis creating braking force."
              },
              {
                "stepNumber": 2,
                "title": "Chest & Torso Lean",
                "instruction": "Maintain a slight 4-6 degree forward lean from the ankles, not bending from the waist.",
                "diagramType": "posture",
                "keyTip": "Gaze 15 meters forward, shoulders down and loose.",
                "commonMistake": "Bending at hips which restricts hip flexor extension."
              },
              {
                "stepNumber": 3,
                "title": "Pacing Splits Check",
                "instruction": "Lock splits at 3:58/km (95s per 400m). Never sprint the first 400m faster than 92s.",
                "diagramType": "split",
                "keyTip": "Conserve glycogen in lap 1-6; kick on lap 11-12.",
                "commonMistake": "Starting at 3:30/km and blowing up at km 3."
              }
            ]
          },
          {
            "id": "drill-01-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Lactate threshold & cadence lock (180 SPM) consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Running shoes",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 8/8 intervals completed in 93-95 seconds with <60s recovery.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cadence Lock (180 SPM)",
                "instruction": "Land forefoot directly beneath hip center of mass. Do not overstride ahead of knees.",
                "diagramType": "posture",
                "keyTip": "Think of ground as hot coals: short ground contact time (<210ms).",
                "commonMistake": "Heel striking ahead of knee axis creating braking force."
              },
              {
                "stepNumber": 2,
                "title": "Chest & Torso Lean",
                "instruction": "Maintain a slight 4-6 degree forward lean from the ankles, not bending from the waist.",
                "diagramType": "posture",
                "keyTip": "Gaze 15 meters forward, shoulders down and loose.",
                "commonMistake": "Bending at hips which restricts hip flexor extension."
              },
              {
                "stepNumber": 3,
                "title": "Pacing Splits Check",
                "instruction": "Lock splits at 3:58/km (95s per 400m). Never sprint the first 400m faster than 92s.",
                "diagramType": "split",
                "keyTip": "Conserve glycogen in lap 1-6; kick on lap 11-12.",
                "commonMistake": "Starting at 3:30/km and blowing up at km 3."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-01-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Running shoes",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cadence Lock (180 SPM)",
                "instruction": "Land forefoot directly beneath hip center of mass. Do not overstride ahead of knees.",
                "diagramType": "posture",
                "keyTip": "Think of ground as hot coals: short ground contact time (<210ms).",
                "commonMistake": "Heel striking ahead of knee axis creating braking force."
              },
              {
                "stepNumber": 2,
                "title": "Chest & Torso Lean",
                "instruction": "Maintain a slight 4-6 degree forward lean from the ankles, not bending from the waist.",
                "diagramType": "posture",
                "keyTip": "Gaze 15 meters forward, shoulders down and loose.",
                "commonMistake": "Bending at hips which restricts hip flexor extension."
              },
              {
                "stepNumber": 3,
                "title": "Pacing Splits Check",
                "instruction": "Lock splits at 3:58/km (95s per 400m). Never sprint the first 400m faster than 92s.",
                "diagramType": "split",
                "keyTip": "Conserve glycogen in lap 1-6; kick on lap 11-12.",
                "commonMistake": "Starting at 3:30/km and blowing up at km 3."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
        "drills": [
          {
            "id": "drill-01-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Running shoes, GPS watch or phone tracker, 400m track access",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cadence Lock (180 SPM)",
                "instruction": "Land forefoot directly beneath hip center of mass. Do not overstride ahead of knees.",
                "diagramType": "posture",
                "keyTip": "Think of ground as hot coals: short ground contact time (<210ms).",
                "commonMistake": "Heel striking ahead of knee axis creating braking force."
              },
              {
                "stepNumber": 2,
                "title": "Chest & Torso Lean",
                "instruction": "Maintain a slight 4-6 degree forward lean from the ankles, not bending from the waist.",
                "diagramType": "posture",
                "keyTip": "Gaze 15 meters forward, shoulders down and loose.",
                "commonMistake": "Bending at hips which restricts hip flexor extension."
              },
              {
                "stepNumber": 3,
                "title": "Pacing Splits Check",
                "instruction": "Lock splits at 3:58/km (95s per 400m). Never sprint the first 400m faster than 92s.",
                "diagramType": "split",
                "keyTip": "Conserve glycogen in lap 1-6; kick on lap 11-12.",
                "commonMistake": "Starting at 3:30/km and blowing up at km 3."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "timer-log",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
      "sampleVerification": "Proof submission will be evaluated against: 8/8 intervals completed in 93-95 seconds with <60s recovery."
    }
  },
  {
    "id": "skill-02",
    "number": 2,
    "title": "Run 10 km in one go",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "physical-endurance",
    "timeCategory": "20-hours",
    "masteryDefinition": "Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
    "prerequisites": [
      "Comfortable with 5 km continuous distance"
    ],
    "equipmentNeeded": [
      "Running shoes",
      "Heart rate monitor or GPS tracker"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 8 km run completed with >85% time in Zone 2 heart rate band.",
        "unlockCondition": "Achieve 8 km run completed with >85% time in Zone 2 heart rate band. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-02-01",
            "number": 1,
            "title": "Drill 01 \u2014 Zone 2 Aerobic Base Long Run",
            "objective": "Isolate and master Aerobic base building & mitochondrial density.",
            "whyExists": "Maximizes fat oxidation and capillaries without accumulating lactate.",
            "equipment": "Running shoes",
            "setup": "Ensure Running shoes is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Set GPS monitor to alert if heart rate exceeds Zone 2 ceiling (140-150 BPM).",
              "Run 8 km continuously at steady conversation pace.",
              "Drink 150ml water at 4 km mark without stopping stride.",
              "Finish with 4 x 100m strides to maintain neuro-muscular sharpness."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "8 km run completed with >85% time in Zone 2 heart rate band.",
            "failureCriteria": "Heart rate spikes into Zone 4 for >3 minutes. Slow pace down by 20s/km.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Zone 2 Breathing Check",
                "instruction": "You must be able to speak 3 complete sentences without gasping for breath.",
                "diagramType": "posture",
                "keyTip": "Inhale for 3 strides, exhale for 3 strides.",
                "commonMistake": "Running too fast on easy days, creating chronic fatigue."
              }
            ]
          },
          {
            "id": "drill-02-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Aerobic base building & mitochondrial density consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Running shoes",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 8 km run completed with >85% time in Zone 2 heart rate band.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Zone 2 Breathing Check",
                "instruction": "You must be able to speak 3 complete sentences without gasping for breath.",
                "diagramType": "posture",
                "keyTip": "Inhale for 3 strides, exhale for 3 strides.",
                "commonMistake": "Running too fast on easy days, creating chronic fatigue."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-02-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Running shoes",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Zone 2 Breathing Check",
                "instruction": "You must be able to speak 3 complete sentences without gasping for breath.",
                "diagramType": "posture",
                "keyTip": "Inhale for 3 strides, exhale for 3 strides.",
                "commonMistake": "Running too fast on easy days, creating chronic fatigue."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
        "drills": [
          {
            "id": "drill-02-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Running shoes, Heart rate monitor or GPS tracker",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Zone 2 Breathing Check",
                "instruction": "You must be able to speak 3 complete sentences without gasping for breath.",
                "diagramType": "posture",
                "keyTip": "Inhale for 3 strides, exhale for 3 strides.",
                "commonMistake": "Running too fast on easy days, creating chronic fatigue."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "timer-log",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
      "sampleVerification": "Proof submission will be evaluated against: 8 km run completed with >85% time in Zone 2 heart rate band."
    }
  },
  {
    "id": "skill-03",
    "number": 3,
    "title": "Sprint technique & acceleration mechanics",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
    "prerequisites": [
      "Basic sprint capability"
    ],
    "equipmentNeeded": [
      "Sprint flats/spikes",
      "Cones",
      "High-speed phone camera"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Perfect ankle-knee-hip alignment with zero lumbar arching.",
        "unlockCondition": "Achieve Perfect ankle-knee-hip alignment with zero lumbar arching. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-03-01",
            "number": 1,
            "title": "Drill 01 \u2014 Wall Acceleration Drives & Triple Extension",
            "objective": "Isolate and master Ground reaction force & drive phase angle.",
            "whyExists": "Ingrains the neural pathway for 45-degree forward force vector.",
            "equipment": "Sprint flats/spikes",
            "setup": "Ensure Sprint flats/spikes is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Place palms on wall at shoulder height, step back into 45-degree body angle.",
              "Drive right knee up to hip level, ankle dorsiflexed (toes up).",
              "Punch foot down and back directly under hip, alternating legs explosively.",
              "Perform 5 sets of 10 rapid switches with zero torso rotation."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Perfect ankle-knee-hip alignment with zero lumbar arching.",
            "failureCriteria": "Heel drops or toes point down. Repeat set with slower cadence.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Triple Extension Vector",
                "instruction": "Ankle, knee, and hip form a straight 45-degree line from ground contact to shoulder.",
                "diagramType": "posture",
                "keyTip": "Drive down and back, not straight down.",
                "commonMistake": "Standing upright immediately after step 1."
              }
            ]
          },
          {
            "id": "drill-03-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Ground reaction force & drive phase angle consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Sprint flats/spikes",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Perfect ankle-knee-hip alignment with zero lumbar arching.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Triple Extension Vector",
                "instruction": "Ankle, knee, and hip form a straight 45-degree line from ground contact to shoulder.",
                "diagramType": "posture",
                "keyTip": "Drive down and back, not straight down.",
                "commonMistake": "Standing upright immediately after step 1."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-03-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Sprint flats/spikes",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Triple Extension Vector",
                "instruction": "Ankle, knee, and hip form a straight 45-degree line from ground contact to shoulder.",
                "diagramType": "posture",
                "keyTip": "Drive down and back, not straight down.",
                "commonMistake": "Standing upright immediately after step 1."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
        "drills": [
          {
            "id": "drill-03-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Sprint flats/spikes, Cones, High-speed phone camera",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Triple Extension Vector",
                "instruction": "Ankle, knee, and hip form a straight 45-degree line from ground contact to shoulder.",
                "diagramType": "posture",
                "keyTip": "Drive down and back, not straight down.",
                "commonMistake": "Standing upright immediately after step 1."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
      "sampleVerification": "Proof submission will be evaluated against: Perfect ankle-knee-hip alignment with zero lumbar arching."
    }
  },
  {
    "id": "skill-04",
    "number": 4,
    "title": "Freestanding Handstand (60 seconds)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
    "prerequisites": [
      "60s chest-to-wall handstand hold"
    ],
    "equipmentNeeded": [
      "Gym mat or firm flat ground",
      "Clear wall space"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Hold freestanding balance off wall for >=15s on 6 of 8 attempts.",
        "unlockCondition": "Achieve Hold freestanding balance off wall for >=15s on 6 of 8 attempts. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-04-01",
            "number": 1,
            "title": "Drill 01 \u2014 Camber Hand Grip & Heel Pulls",
            "objective": "Isolate and master Wrist camber fingertip micro-adjustments & shoulder elevation.",
            "whyExists": "Teaches the fingers to brake forward falling and palms to push backward.",
            "equipment": "Gym mat or firm flat ground",
            "setup": "Ensure Gym mat or firm flat ground is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Kick up to wall with chest facing wall, hands 10cm from baseboard.",
              "Engage fingers like claws (camber grip: knuckles slightly raised).",
              "Gently pull toes away from wall using only fingertip pressure.",
              "Hold balance off the wall for 15 seconds. Repeat 8 rounds."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Hold freestanding balance off wall for >=15s on 6 of 8 attempts.",
            "failureCriteria": "Shoulders close or back bananas. Drop immediately and rest 90s.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Camber Grip",
                "instruction": "Spread fingers wide. First knuckle joints bent like claws digging into the floor.",
                "diagramType": "posture",
                "keyTip": "Weight rests on the base of palm and first knuckles.",
                "commonMistake": "Flat limp fingers with no active braking capacity."
              },
              {
                "stepNumber": 2,
                "title": "Hollow Body Line",
                "instruction": "Tuck tailbone, squeeze glutes, pull ribs in. Zero arch in lower back.",
                "diagramType": "posture",
                "keyTip": "Push the floor away: active elevated shoulders covering ears.",
                "commonMistake": "Banana back arching to compensate for tight shoulders."
              }
            ]
          },
          {
            "id": "drill-04-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Wrist camber fingertip micro-adjustments & shoulder elevation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Gym mat or firm flat ground",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Hold freestanding balance off wall for >=15s on 6 of 8 attempts.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Camber Grip",
                "instruction": "Spread fingers wide. First knuckle joints bent like claws digging into the floor.",
                "diagramType": "posture",
                "keyTip": "Weight rests on the base of palm and first knuckles.",
                "commonMistake": "Flat limp fingers with no active braking capacity."
              },
              {
                "stepNumber": 2,
                "title": "Hollow Body Line",
                "instruction": "Tuck tailbone, squeeze glutes, pull ribs in. Zero arch in lower back.",
                "diagramType": "posture",
                "keyTip": "Push the floor away: active elevated shoulders covering ears.",
                "commonMistake": "Banana back arching to compensate for tight shoulders."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-04-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Gym mat or firm flat ground",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Camber Grip",
                "instruction": "Spread fingers wide. First knuckle joints bent like claws digging into the floor.",
                "diagramType": "posture",
                "keyTip": "Weight rests on the base of palm and first knuckles.",
                "commonMistake": "Flat limp fingers with no active braking capacity."
              },
              {
                "stepNumber": 2,
                "title": "Hollow Body Line",
                "instruction": "Tuck tailbone, squeeze glutes, pull ribs in. Zero arch in lower back.",
                "diagramType": "posture",
                "keyTip": "Push the floor away: active elevated shoulders covering ears.",
                "commonMistake": "Banana back arching to compensate for tight shoulders."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
        "drills": [
          {
            "id": "drill-04-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Gym mat or firm flat ground, Clear wall space",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Camber Grip",
                "instruction": "Spread fingers wide. First knuckle joints bent like claws digging into the floor.",
                "diagramType": "posture",
                "keyTip": "Weight rests on the base of palm and first knuckles.",
                "commonMistake": "Flat limp fingers with no active braking capacity."
              },
              {
                "stepNumber": 2,
                "title": "Hollow Body Line",
                "instruction": "Tuck tailbone, squeeze glutes, pull ribs in. Zero arch in lower back.",
                "diagramType": "posture",
                "keyTip": "Push the floor away: active elevated shoulders covering ears.",
                "commonMistake": "Banana back arching to compensate for tight shoulders."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
      "sampleVerification": "Proof submission will be evaluated against: Hold freestanding balance off wall for >=15s on 6 of 8 attempts."
    }
  },
  {
    "id": "skill-05",
    "number": 5,
    "title": "Handstand push-up (strict freestanding)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "deep-mastery",
    "masteryDefinition": "Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
    "prerequisites": [
      "60s freestanding handstand",
      "15 strict wall HSPUs"
    ],
    "equipmentNeeded": [
      "Gym mat",
      "Parallettes or flat floor"
    ],
    "currentLevel": 1,
    "totalLevels": 7,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 5/5 descents strictly controlled for >=4 seconds.",
        "unlockCondition": "Achieve 5/5 descents strictly controlled for >=4 seconds. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-05-01",
            "number": 1,
            "title": "Drill 01 \u2014 Slow Tripod Eccentrics",
            "objective": "Isolate and master Tripod head descent & pressing elbow tracking.",
            "whyExists": "Develops eccentric anterior deltoid control along the curved pressing trajectory.",
            "equipment": "Gym mat",
            "setup": "Ensure Gym mat is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Kick up to freestanding handstand.",
              "Lower head forward to form equilateral triangle with hands over 4 full seconds.",
              "Kiss mat with top of head under control.",
              "Bail or press back up. Repeat 5 singles with 2-minute rest."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "5/5 descents strictly controlled for >=4 seconds.",
            "failureCriteria": "Head drops straight between hands instead of forward into tripod. Reset.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tripod Geometry",
                "instruction": "Hands and head must form an equilateral triangle at bottom, never a straight line.",
                "diagramType": "posture",
                "keyTip": "Forearms stay vertical like pillars.",
                "commonMistake": "Flaring elbows 90 degrees out which impinges shoulders."
              }
            ]
          },
          {
            "id": "drill-05-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Tripod head descent & pressing elbow tracking consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Gym mat",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 5/5 descents strictly controlled for >=4 seconds.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tripod Geometry",
                "instruction": "Hands and head must form an equilateral triangle at bottom, never a straight line.",
                "diagramType": "posture",
                "keyTip": "Forearms stay vertical like pillars.",
                "commonMistake": "Flaring elbows 90 degrees out which impinges shoulders."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-05-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Gym mat",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tripod Geometry",
                "instruction": "Hands and head must form an equilateral triangle at bottom, never a straight line.",
                "diagramType": "posture",
                "keyTip": "Forearms stay vertical like pillars.",
                "commonMistake": "Flaring elbows 90 degrees out which impinges shoulders."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 7,
        "title": "Level 07 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
        "drills": [
          {
            "id": "drill-05-mastery",
            "number": 7,
            "title": "Drill 07 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Gym mat, Parallettes or flat floor",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tripod Geometry",
                "instruction": "Hands and head must form an equilateral triangle at bottom, never a straight line.",
                "diagramType": "posture",
                "keyTip": "Forearms stay vertical like pillars.",
                "commonMistake": "Flaring elbows 90 degrees out which impinges shoulders."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
      "sampleVerification": "Proof submission will be evaluated against: 5/5 descents strictly controlled for >=4 seconds."
    }
  },
  {
    "id": "skill-06",
    "number": 6,
    "title": "20 Strict Dead-Hang Pull-ups",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
    "prerequisites": [
      "8 basic pull-ups"
    ],
    "equipmentNeeded": [
      "Sturdy pull-up bar",
      "Chalk"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with All reps completed with full ROM and zero leg kick.",
        "unlockCondition": "Achieve All reps completed with full ROM and zero leg kick. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-06-01",
            "number": 1,
            "title": "Drill 01 \u2014 Armstrong High-Volume Density Ladders",
            "objective": "Isolate and master Scapular depression & hollow-body lat engagement.",
            "whyExists": "Conditions the nervous system to fire lats with zero momentum.",
            "equipment": "Sturdy pull-up bar",
            "setup": "Ensure Sturdy pull-up bar is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Perform ladder: 1 rep, rest 10s; 2 reps, rest 20s; 3 reps, rest 30s up to 6 reps.",
              "Every rep must initiate with scapular pull down before elbows bend.",
              "Pause for 0.5s at full dead hang between every single rep.",
              "Perform 3 cycles with 3 minutes rest between ladders."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "All reps completed with full ROM and zero leg kick.",
            "failureCriteria": "Chin reaches bar but does not clear horizontal plane. That rep is VOID.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dead Hang to Active Hang",
                "instruction": "Before bending elbows, pull shoulder blades down and back into your back pockets.",
                "diagramType": "posture",
                "keyTip": "Keep legs pinned together with toes pointed forward (hollow body).",
                "commonMistake": "Bending knees backwards and kipping with hips."
              }
            ]
          },
          {
            "id": "drill-06-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Scapular depression & hollow-body lat engagement consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Sturdy pull-up bar",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: All reps completed with full ROM and zero leg kick.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dead Hang to Active Hang",
                "instruction": "Before bending elbows, pull shoulder blades down and back into your back pockets.",
                "diagramType": "posture",
                "keyTip": "Keep legs pinned together with toes pointed forward (hollow body).",
                "commonMistake": "Bending knees backwards and kipping with hips."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-06-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Sturdy pull-up bar",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dead Hang to Active Hang",
                "instruction": "Before bending elbows, pull shoulder blades down and back into your back pockets.",
                "diagramType": "posture",
                "keyTip": "Keep legs pinned together with toes pointed forward (hollow body).",
                "commonMistake": "Bending knees backwards and kipping with hips."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
        "drills": [
          {
            "id": "drill-06-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Sturdy pull-up bar, Chalk",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dead Hang to Active Hang",
                "instruction": "Before bending elbows, pull shoulder blades down and back into your back pockets.",
                "diagramType": "posture",
                "keyTip": "Keep legs pinned together with toes pointed forward (hollow body).",
                "commonMistake": "Bending knees backwards and kipping with hips."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
      "sampleVerification": "Proof submission will be evaluated against: All reps completed with full ROM and zero leg kick."
    }
  },
  {
    "id": "skill-07",
    "number": 7,
    "title": "One-Arm Push-up (both sides)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
    "prerequisites": [
      "30 strict standard push-ups",
      "60s hollow plank"
    ],
    "equipmentNeeded": [
      "Flat non-slip surface"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 5 sets completed per arm with hips staying parallel to floor.",
        "unlockCondition": "Achieve 5 sets completed per arm with hips staying parallel to floor. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-07-01",
            "number": 1,
            "title": "Drill 01 \u2014 Archer Push-ups & Incline Unilateral Press",
            "objective": "Isolate and master Anti-rotational core torque & unilateral chest power.",
            "whyExists": "Gradually shifts 85% of bodyweight load onto single pressing limb.",
            "equipment": "Flat non-slip surface",
            "setup": "Ensure Flat non-slip surface is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Assume push-up stance on 30cm raised box with single hand centered under sternum.",
              "Place opposite hand firmly on lower back.",
              "Lower chest to touch box surface without allowing hip to rotate >15 degrees.",
              "Explode to full elbow lockout. 5 sets of 4 reps per arm."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "5 sets completed per arm with hips staying parallel to floor.",
            "failureCriteria": "Hip dips or rolls sideways to cheat weight distribution. Reduce elevation.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Centering Hand Alignment",
                "instruction": "Plant working hand directly under midline of chest, fingers turned slightly out.",
                "diagramType": "posture",
                "keyTip": "Squeeze glutes and press through toes of opposite foot to counteract torque.",
                "commonMistake": "Flaring hand too high under neck."
              }
            ]
          },
          {
            "id": "drill-07-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Anti-rotational core torque & unilateral chest power consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Flat non-slip surface",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 5 sets completed per arm with hips staying parallel to floor.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Centering Hand Alignment",
                "instruction": "Plant working hand directly under midline of chest, fingers turned slightly out.",
                "diagramType": "posture",
                "keyTip": "Squeeze glutes and press through toes of opposite foot to counteract torque.",
                "commonMistake": "Flaring hand too high under neck."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-07-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Flat non-slip surface",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Centering Hand Alignment",
                "instruction": "Plant working hand directly under midline of chest, fingers turned slightly out.",
                "diagramType": "posture",
                "keyTip": "Squeeze glutes and press through toes of opposite foot to counteract torque.",
                "commonMistake": "Flaring hand too high under neck."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
        "drills": [
          {
            "id": "drill-07-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Flat non-slip surface",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Centering Hand Alignment",
                "instruction": "Plant working hand directly under midline of chest, fingers turned slightly out.",
                "diagramType": "posture",
                "keyTip": "Squeeze glutes and press through toes of opposite foot to counteract torque.",
                "commonMistake": "Flaring hand too high under neck."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
      "sampleVerification": "Proof submission will be evaluated against: 5 sets completed per arm with hips staying parallel to floor."
    }
  },
  {
    "id": "skill-08",
    "number": 8,
    "title": "Pistol Squat (10 consecutive per leg)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
    "prerequisites": [
      "Solid two-leg deep squat (30 reps)"
    ],
    "equipmentNeeded": [
      "Firm flat floor",
      "10cm block for regression"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Controlled descent on all reps with zero knee collapse inwards (valgus).",
        "unlockCondition": "Achieve Controlled descent on all reps with zero knee collapse inwards (valgus). in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-08-01",
            "number": 1,
            "title": "Drill 01 \u2014 Box Step-Downs with Controlled 4-Second Negative",
            "objective": "Isolate and master Ankle dorsiflexion & hip flexor compression.",
            "whyExists": "Isolates the single-leg eccentric strength without requiring extreme hip compression.",
            "equipment": "Firm flat floor",
            "setup": "Ensure Firm flat floor is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Stand on 30cm box on right leg, left leg suspended in air in front.",
              "Hinge hip back and lower right knee over 4 slow seconds until left heel taps floor.",
              "Drive through midfoot to stand back up without bouncing.",
              "Perform 4 sets of 6 reps per leg."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Controlled descent on all reps with zero knee collapse inwards (valgus).",
            "failureCriteria": "Working heel lifts off box surface. Elevate heel slightly and mobilize ankle.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Ankle Knee Alignment",
                "instruction": "Knee tracks directly over second toe. Working heel stays glued to floor.",
                "diagramType": "posture",
                "keyTip": "Reach both arms straight ahead to counter-balance your torso.",
                "commonMistake": "Heel lifting off ground due to restricted dorsiflexion."
              }
            ]
          },
          {
            "id": "drill-08-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Ankle dorsiflexion & hip flexor compression consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Firm flat floor",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Controlled descent on all reps with zero knee collapse inwards (valgus).",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Ankle Knee Alignment",
                "instruction": "Knee tracks directly over second toe. Working heel stays glued to floor.",
                "diagramType": "posture",
                "keyTip": "Reach both arms straight ahead to counter-balance your torso.",
                "commonMistake": "Heel lifting off ground due to restricted dorsiflexion."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-08-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Firm flat floor",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Ankle Knee Alignment",
                "instruction": "Knee tracks directly over second toe. Working heel stays glued to floor.",
                "diagramType": "posture",
                "keyTip": "Reach both arms straight ahead to counter-balance your torso.",
                "commonMistake": "Heel lifting off ground due to restricted dorsiflexion."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
        "drills": [
          {
            "id": "drill-08-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Firm flat floor, 10cm block for regression",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Ankle Knee Alignment",
                "instruction": "Knee tracks directly over second toe. Working heel stays glued to floor.",
                "diagramType": "posture",
                "keyTip": "Reach both arms straight ahead to counter-balance your torso.",
                "commonMistake": "Heel lifting off ground due to restricted dorsiflexion."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
      "sampleVerification": "Proof submission will be evaluated against: Controlled descent on all reps with zero knee collapse inwards (valgus)."
    }
  },
  {
    "id": "skill-09",
    "number": 9,
    "title": "Juggling 3 Balls (100 catches cascade)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "3 juggling beanbags or tennis balls"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 50 clean exchanges without dropping or chasing forward.",
        "unlockCondition": "Achieve 50 clean exchanges without dropping or chasing forward. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-09-01",
            "number": 1,
            "title": "Drill 01 \u2014 The 2-Ball Cross-Throw Exchange (Throw-Throw-Catch-Catch)",
            "objective": "Isolate and master Consistent eye-level apex & scooping hand motion.",
            "whyExists": "Removes the panic response of passing balls across instead of throwing high.",
            "equipment": "3 juggling beanbags or tennis balls",
            "setup": "Ensure 3 juggling beanbags or tennis balls is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Hold one ball in each hand with elbows bent 90 degrees at your waist.",
              "Throw Ball A across to opposite eye level in gentle arc.",
              "When Ball A reaches apex, throw Ball B underneath across to starting hand.",
              "Catch Ball A, then catch Ball B. Call out: 'Throw, throw, catch, catch.'",
              "Perform 30 reps starting with right hand, then 30 starting with left hand."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "50 clean exchanges without dropping or chasing forward.",
            "failureCriteria": "Passing ball directly hand-to-hand instead of throwing arc. Reset to 1 ball.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Scooping Arc",
                "instruction": "Hands scoop down from outside to inside, releasing at navel height towards opposite eye.",
                "diagramType": "path",
                "keyTip": "Peak of ball trajectory should match your forehead height.",
                "commonMistake": "Throwing forward, forcing you to run across the room."
              }
            ]
          },
          {
            "id": "drill-09-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Consistent eye-level apex & scooping hand motion consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "3 juggling beanbags or tennis balls",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 50 clean exchanges without dropping or chasing forward.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Scooping Arc",
                "instruction": "Hands scoop down from outside to inside, releasing at navel height towards opposite eye.",
                "diagramType": "path",
                "keyTip": "Peak of ball trajectory should match your forehead height.",
                "commonMistake": "Throwing forward, forcing you to run across the room."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-09-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "3 juggling beanbags or tennis balls",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Scooping Arc",
                "instruction": "Hands scoop down from outside to inside, releasing at navel height towards opposite eye.",
                "diagramType": "path",
                "keyTip": "Peak of ball trajectory should match your forehead height.",
                "commonMistake": "Throwing forward, forcing you to run across the room."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
        "drills": [
          {
            "id": "drill-09-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "3 juggling beanbags or tennis balls",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Scooping Arc",
                "instruction": "Hands scoop down from outside to inside, releasing at navel height towards opposite eye.",
                "diagramType": "path",
                "keyTip": "Peak of ball trajectory should match your forehead height.",
                "commonMistake": "Throwing forward, forcing you to run across the room."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
      "sampleVerification": "Proof submission will be evaluated against: 50 clean exchanges without dropping or chasing forward."
    }
  },
  {
    "id": "skill-10",
    "number": 10,
    "title": "Juggling 4 Balls (Fountain 50 catches)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
    "prerequisites": [
      "Consistent 3-ball cascade (100 catches)"
    ],
    "equipmentNeeded": [
      "4 juggling beanbags"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Both hands achieve 30 consecutive catches isolated.",
        "unlockCondition": "Achieve Both hands achieve 30 consecutive catches isolated. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-10-01",
            "number": 1,
            "title": "Drill 01 \u2014 2 Balls in 1 Hand Isolation (Both Hands)",
            "objective": "Isolate and master Hand independence (2 balls in 1 hand without crossing).",
            "whyExists": "4-ball juggling is simply two independent hands juggling 2 balls simultaneously.",
            "equipment": "4 juggling beanbags",
            "setup": "Ensure 4 juggling beanbags is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Hold 2 balls in right hand only. Juggling them in circular outside-to-inside column.",
              "Execute 30 continuous catches with right hand alone.",
              "Switch to left (weak) hand. Execute 30 continuous catches.",
              "Balls must NEVER cross center line of body."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Both hands achieve 30 consecutive catches isolated.",
            "failureCriteria": "Balls collide or hand drifts across body centerline. Repeat 10 reps.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Independent Fountains",
                "instruction": "Right hand throws outside-in on right side; left hand throws outside-in on left side.",
                "diagramType": "path",
                "keyTip": "Never cross center line: 4 balls never change hands in standard fountain.",
                "commonMistake": "Attempting cascade cross throws with 4 balls."
              }
            ]
          },
          {
            "id": "drill-10-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Hand independence (2 balls in 1 hand without crossing) consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "4 juggling beanbags",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Both hands achieve 30 consecutive catches isolated.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Independent Fountains",
                "instruction": "Right hand throws outside-in on right side; left hand throws outside-in on left side.",
                "diagramType": "path",
                "keyTip": "Never cross center line: 4 balls never change hands in standard fountain.",
                "commonMistake": "Attempting cascade cross throws with 4 balls."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-10-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "4 juggling beanbags",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Independent Fountains",
                "instruction": "Right hand throws outside-in on right side; left hand throws outside-in on left side.",
                "diagramType": "path",
                "keyTip": "Never cross center line: 4 balls never change hands in standard fountain.",
                "commonMistake": "Attempting cascade cross throws with 4 balls."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
        "drills": [
          {
            "id": "drill-10-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "4 juggling beanbags",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Independent Fountains",
                "instruction": "Right hand throws outside-in on right side; left hand throws outside-in on left side.",
                "diagramType": "path",
                "keyTip": "Never cross center line: 4 balls never change hands in standard fountain.",
                "commonMistake": "Attempting cascade cross throws with 4 balls."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
      "sampleVerification": "Proof submission will be evaluated against: Both hands achieve 30 consecutive catches isolated."
    }
  },
  {
    "id": "skill-11",
    "number": 11,
    "title": "Rubik's Cube \u2014 sub-60 seconds",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "3x3 speedcube",
      "Speedcubing timer"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Cross solved on bottom in <=6.0s on 8/10 attempts.",
        "unlockCondition": "Achieve Cross solved on bottom in <=6.0s on 8/10 attempts. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-11-01",
            "number": 1,
            "title": "Drill 01 \u2014 White Cross on Bottom in Under 6 Seconds",
            "objective": "Isolate and master White cross on bottom & fingertrick execution.",
            "whyExists": "Eliminates cube rotations before first layer insertion.",
            "equipment": "3x3 speedcube",
            "setup": "Ensure 3x3 speedcube is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Generate random WCA scramble.",
              "Inspect cube for 15 seconds. Plan all 4 cross edges.",
              "Hold white center on BOTTOM (yellow on top).",
              "Execute cross blind or with eyes closed. Target: <=6.00s."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Cross solved on bottom in <=6.0s on 8/10 attempts.",
            "failureCriteria": "Solving cross on top and flipping cube. Instant restart.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "White Cross on Bottom",
                "instruction": "White face must stay on bottom throughout the entire solve. Yellow stays top.",
                "diagramType": "cube",
                "keyTip": "Match edge to side center, then insert into bottom with F2 or R2.",
                "commonMistake": "Building daisy on top and taking 25 seconds just for cross."
              }
            ]
          },
          {
            "id": "drill-11-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting White cross on bottom & fingertrick execution consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "3x3 speedcube",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Cross solved on bottom in <=6.0s on 8/10 attempts.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "White Cross on Bottom",
                "instruction": "White face must stay on bottom throughout the entire solve. Yellow stays top.",
                "diagramType": "cube",
                "keyTip": "Match edge to side center, then insert into bottom with F2 or R2.",
                "commonMistake": "Building daisy on top and taking 25 seconds just for cross."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-11-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "3x3 speedcube",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "White Cross on Bottom",
                "instruction": "White face must stay on bottom throughout the entire solve. Yellow stays top.",
                "diagramType": "cube",
                "keyTip": "Match edge to side center, then insert into bottom with F2 or R2.",
                "commonMistake": "Building daisy on top and taking 25 seconds just for cross."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
        "drills": [
          {
            "id": "drill-11-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "3x3 speedcube, Speedcubing timer",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "White Cross on Bottom",
                "instruction": "White face must stay on bottom throughout the entire solve. Yellow stays top.",
                "diagramType": "cube",
                "keyTip": "Match edge to side center, then insert into bottom with F2 or R2.",
                "commonMistake": "Building daisy on top and taking 25 seconds just for cross."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "timer-log",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
      "sampleVerification": "Proof submission will be evaluated against: Cross solved on bottom in <=6.0s on 8/10 attempts."
    }
  },
  {
    "id": "skill-12",
    "number": 12,
    "title": "Rubik's Cube \u2014 sub-30 seconds",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
    "prerequisites": [
      "Sub-60 consistent solve"
    ],
    "equipmentNeeded": [
      "Magnetic 3x3 speedcube",
      "Timer"
    ],
    "currentLevel": 1,
    "totalLevels": 7,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with F2L completed with zero pauses longer than 0.5s.",
        "unlockCondition": "Achieve F2L completed with zero pauses longer than 0.5s. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-12-01",
            "number": 1,
            "title": "Drill 01 \u2014 Slow-Turning Uninterrupted F2L",
            "objective": "Isolate and master Intuitive F2L pairing & 2-look last layer algorithms.",
            "whyExists": "Removes pauses between F2L pairs; continuous turning is faster than burst-and-pause.",
            "equipment": "Magnetic 3x3 speedcube",
            "setup": "Ensure Magnetic 3x3 speedcube is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Scramble cube and solve cross.",
              "Turn at steady 1.5 TPS (turns per second) with ZERO pausing.",
              "While inserting pair 1, eyes track corner/edge for pair 2.",
              "Complete all 4 F2L pairs in <=18 seconds total."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "F2L completed with zero pauses longer than 0.5s.",
            "failureCriteria": "Stopping turns to hunt for pieces. Penalty: 5 blindfolded cross solves.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Look-Ahead Tracking",
                "instruction": "Once fingers execute algorithm for current pair, eyes must leave that slot and scan top layer.",
                "diagramType": "cube",
                "keyTip": "Never look at what your hands are already solving.",
                "commonMistake": "Staring at the slot being inserted while clock runs."
              }
            ]
          },
          {
            "id": "drill-12-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Intuitive F2L pairing & 2-look last layer algorithms consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Magnetic 3x3 speedcube",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: F2L completed with zero pauses longer than 0.5s.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Look-Ahead Tracking",
                "instruction": "Once fingers execute algorithm for current pair, eyes must leave that slot and scan top layer.",
                "diagramType": "cube",
                "keyTip": "Never look at what your hands are already solving.",
                "commonMistake": "Staring at the slot being inserted while clock runs."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-12-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Magnetic 3x3 speedcube",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Look-Ahead Tracking",
                "instruction": "Once fingers execute algorithm for current pair, eyes must leave that slot and scan top layer.",
                "diagramType": "cube",
                "keyTip": "Never look at what your hands are already solving.",
                "commonMistake": "Staring at the slot being inserted while clock runs."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 7,
        "title": "Level 07 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
        "drills": [
          {
            "id": "drill-12-mastery",
            "number": 7,
            "title": "Drill 07 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Magnetic 3x3 speedcube, Timer",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Look-Ahead Tracking",
                "instruction": "Once fingers execute algorithm for current pair, eyes must leave that slot and scan top layer.",
                "diagramType": "cube",
                "keyTip": "Never look at what your hands are already solving.",
                "commonMistake": "Staring at the slot being inserted while clock runs."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "timer-log",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
      "sampleVerification": "Proof submission will be evaluated against: F2L completed with zero pauses longer than 0.5s."
    }
  },
  {
    "id": "skill-13",
    "number": 13,
    "title": "Rubik's Cube \u2014 sub-20 seconds",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "deep-mastery",
    "masteryDefinition": "Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
    "prerequisites": [
      "Sub-30 consistent solve"
    ],
    "equipmentNeeded": [
      "Lubricated magnetic 3x3 speedcube",
      "Timer"
    ],
    "currentLevel": 1,
    "totalLevels": 12,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 18/20 pairs recognized and named in <=1.2 seconds.",
        "unlockCondition": "Achieve 18/20 pairs recognized and named in <=1.2 seconds. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-13-01",
            "number": 1,
            "title": "Drill 01 \u2014 F2L Recognition Flashcard Drill",
            "objective": "Isolate and master F2L recognition under 1.2s & full 21 PLL algorithms.",
            "whyExists": "Isolates visual recognition from physical turning speed.",
            "equipment": "Lubricated magnetic 3x3 speedcube",
            "setup": "Ensure Lubricated magnetic 3x3 speedcube is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Present scrambled F2L pair on top layer.",
              "Timer starts: identify pair configuration (separated, attached, hidden).",
              "Call out exact 3-move or 4-move insertion trigger within 1.2 seconds.",
              "Do NOT solve the entire cube. Test 20 random pair configurations."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "18/20 pairs recognized and named in <=1.2 seconds.",
            "failureCriteria": "Recognition time > 1.5s. Repeat 20 reps on that specific case.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "F2L Case 1: Corner White on Top",
                "instruction": "Align edge with side color. Rotate U to position away from corner, then execute R U2 R'.",
                "diagramType": "cube",
                "keyTip": "Notice sticker orientation before turning any face.",
                "commonMistake": "Random rotations (cube y y') hunting for angles."
              },
              {
                "stepNumber": 2,
                "title": "T-Perm Alg Execution",
                "instruction": "R U R' U' R' F R2 U' R' U' R U R' F' in < 1.3 seconds with index finger pinch.",
                "diagramType": "cube",
                "keyTip": "Flick F' with right thumb, not full wrist roll.",
                "commonMistake": "Regripping cube between R2 and U'."
              }
            ]
          },
          {
            "id": "drill-13-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting F2L recognition under 1.2s & full 21 PLL algorithms consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Lubricated magnetic 3x3 speedcube",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 18/20 pairs recognized and named in <=1.2 seconds.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "F2L Case 1: Corner White on Top",
                "instruction": "Align edge with side color. Rotate U to position away from corner, then execute R U2 R'.",
                "diagramType": "cube",
                "keyTip": "Notice sticker orientation before turning any face.",
                "commonMistake": "Random rotations (cube y y') hunting for angles."
              },
              {
                "stepNumber": 2,
                "title": "T-Perm Alg Execution",
                "instruction": "R U R' U' R' F R2 U' R' U' R U R' F' in < 1.3 seconds with index finger pinch.",
                "diagramType": "cube",
                "keyTip": "Flick F' with right thumb, not full wrist roll.",
                "commonMistake": "Regripping cube between R2 and U'."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-13-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Lubricated magnetic 3x3 speedcube",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "F2L Case 1: Corner White on Top",
                "instruction": "Align edge with side color. Rotate U to position away from corner, then execute R U2 R'.",
                "diagramType": "cube",
                "keyTip": "Notice sticker orientation before turning any face.",
                "commonMistake": "Random rotations (cube y y') hunting for angles."
              },
              {
                "stepNumber": 2,
                "title": "T-Perm Alg Execution",
                "instruction": "R U R' U' R' F R2 U' R' U' R U R' F' in < 1.3 seconds with index finger pinch.",
                "diagramType": "cube",
                "keyTip": "Flick F' with right thumb, not full wrist roll.",
                "commonMistake": "Regripping cube between R2 and U'."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 12,
        "title": "Level 12 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
        "drills": [
          {
            "id": "drill-13-mastery",
            "number": 12,
            "title": "Drill 12 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Lubricated magnetic 3x3 speedcube, Timer",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "F2L Case 1: Corner White on Top",
                "instruction": "Align edge with side color. Rotate U to position away from corner, then execute R U2 R'.",
                "diagramType": "cube",
                "keyTip": "Notice sticker orientation before turning any face.",
                "commonMistake": "Random rotations (cube y y') hunting for angles."
              },
              {
                "stepNumber": 2,
                "title": "T-Perm Alg Execution",
                "instruction": "R U R' U' R' F R2 U' R' U' R U R' F' in < 1.3 seconds with index finger pinch.",
                "diagramType": "cube",
                "keyTip": "Flick F' with right thumb, not full wrist roll.",
                "commonMistake": "Regripping cube between R2 and U'."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "timer-log",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
      "sampleVerification": "Proof submission will be evaluated against: 18/20 pairs recognized and named in <=1.2 seconds."
    }
  },
  {
    "id": "skill-14",
    "number": 14,
    "title": "Rubik's Cube Blindfolded (3BLD)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
    "prerequisites": [
      "Sub-60 sighted solve",
      "Card or digit mnemonics familiarity"
    ],
    "equipmentNeeded": [
      "3x3 cube",
      "Blindfold",
      "Memo pad"
    ],
    "currentLevel": 1,
    "totalLevels": 8,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Corners solved correctly with zero setup-undo errors.",
        "unlockCondition": "Achieve Corners solved correctly with zero setup-undo errors. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-14-01",
            "number": 1,
            "title": "Drill 01 \u2014 4-Corner OP Buffer Swap Execution",
            "objective": "Isolate and master Cycle memo lettering & T-Perm/Y-Perm buffer swaps.",
            "whyExists": "Guarantees zero piece displacement outside the target swap slot.",
            "equipment": "3x3 cube",
            "setup": "Ensure 3x3 cube is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Scramble cube corners only.",
              "Identify letter memo for corner cycle: ULB -> RDF -> LBD.",
              "Setup target piece to RDF with setup moves (e.g., F, D, F').",
              "Execute Y-Perm buffer swap algorithm, then undo setup moves.",
              "Verify all 4 corners are placed correctly sighted."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Corners solved correctly with zero setup-undo errors.",
            "failureCriteria": "Wrong setup move or missed undo move. Scramble and redo.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Lettering Scheme Speffz",
                "instruction": "Assign letters A through X to all 24 corner and edge stickers starting from top face clockwise.",
                "diagramType": "cube",
                "keyTip": "Build letter pairs into visual images (e.g. AB = Anchor Bolt).",
                "commonMistake": "Forgetting parity algorithm when odd number of swaps."
              }
            ]
          },
          {
            "id": "drill-14-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Cycle memo lettering & T-Perm/Y-Perm buffer swaps consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "3x3 cube",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Corners solved correctly with zero setup-undo errors.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Lettering Scheme Speffz",
                "instruction": "Assign letters A through X to all 24 corner and edge stickers starting from top face clockwise.",
                "diagramType": "cube",
                "keyTip": "Build letter pairs into visual images (e.g. AB = Anchor Bolt).",
                "commonMistake": "Forgetting parity algorithm when odd number of swaps."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-14-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "3x3 cube",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Lettering Scheme Speffz",
                "instruction": "Assign letters A through X to all 24 corner and edge stickers starting from top face clockwise.",
                "diagramType": "cube",
                "keyTip": "Build letter pairs into visual images (e.g. AB = Anchor Bolt).",
                "commonMistake": "Forgetting parity algorithm when odd number of swaps."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 8,
        "title": "Level 08 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
        "drills": [
          {
            "id": "drill-14-mastery",
            "number": 8,
            "title": "Drill 08 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "3x3 cube, Blindfold, Memo pad",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "rubik-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Lettering Scheme Speffz",
                "instruction": "Assign letters A through X to all 24 corner and edge stickers starting from top face clockwise.",
                "diagramType": "cube",
                "keyTip": "Build letter pairs into visual images (e.g. AB = Anchor Bolt).",
                "commonMistake": "Forgetting parity algorithm when odd number of swaps."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
      "sampleVerification": "Proof submission will be evaluated against: Corners solved correctly with zero setup-undo errors."
    }
  },
  {
    "id": "skill-15",
    "number": 15,
    "title": "Speed Typing \u2014 100 WPM",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
    "prerequisites": [
      "Basic touch typing at 40 WPM without looking at keys"
    ],
    "equipmentNeeded": [
      "Mechanical or standard keyboard"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Average speed > 100 WPM across 5 consecutive tests.",
        "unlockCondition": "Achieve Average speed > 100 WPM across 5 consecutive tests. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-15-01",
            "number": 1,
            "title": "Drill 01 \u2014 Top 200 English Word Bursts",
            "objective": "Isolate and master N-gram chunking & rolling keystrokes.",
            "whyExists": "Transitions the brain from typing individual letters to firing whole word muscle memory.",
            "equipment": "Mechanical or standard keyboard",
            "setup": "Ensure Mechanical or standard keyboard is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Load top 200 common words (the, that, with, have, this).",
              "Type each word as a single explosive chord.",
              "Maintain >=98% accuracy. Any typo requires restarting the word.",
              "Complete 10 sets of 50 words with target > 105 WPM."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Average speed > 100 WPM across 5 consecutive tests.",
            "failureCriteria": "Accuracy falls below 97%. Reduce speed by 15 WPM until accuracy is 100%.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Home Row Anchor",
                "instruction": "Index fingers stay anchored over F and J bumps. Wrists floating, not dragging on desk.",
                "diagramType": "posture",
                "keyTip": "Look 2 words ahead of your current keystroke.",
                "commonMistake": "Looking down at keyboard or backspacing furiously."
              }
            ]
          },
          {
            "id": "drill-15-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting N-gram chunking & rolling keystrokes consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Mechanical or standard keyboard",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Average speed > 100 WPM across 5 consecutive tests.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Home Row Anchor",
                "instruction": "Index fingers stay anchored over F and J bumps. Wrists floating, not dragging on desk.",
                "diagramType": "posture",
                "keyTip": "Look 2 words ahead of your current keystroke.",
                "commonMistake": "Looking down at keyboard or backspacing furiously."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-15-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Mechanical or standard keyboard",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Home Row Anchor",
                "instruction": "Index fingers stay anchored over F and J bumps. Wrists floating, not dragging on desk.",
                "diagramType": "posture",
                "keyTip": "Look 2 words ahead of your current keystroke.",
                "commonMistake": "Looking down at keyboard or backspacing furiously."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
        "drills": [
          {
            "id": "drill-15-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Mechanical or standard keyboard",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Home Row Anchor",
                "instruction": "Index fingers stay anchored over F and J bumps. Wrists floating, not dragging on desk.",
                "diagramType": "posture",
                "keyTip": "Look 2 words ahead of your current keystroke.",
                "commonMistake": "Looking down at keyboard or backspacing furiously."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
      "sampleVerification": "Proof submission will be evaluated against: Average speed > 100 WPM across 5 consecutive tests."
    }
  },
  {
    "id": "skill-16",
    "number": 16,
    "title": "Pen Spinning (Thumbaround + Sonic + Charge)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Balanced pen mod or heavy pencil"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 25/30 clean sonic transfers without pen wobbling out of plane.",
        "unlockCondition": "Achieve 25/30 clean sonic transfers without pen wobbling out of plane. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-16-01",
            "number": 1,
            "title": "Drill 01 \u2014 Isolated Sonic 23 to 12 Transfer",
            "objective": "Isolate and master Finger independence & momentum conservation.",
            "whyExists": "Develops the ring-middle finger charge pass behind the middle finger.",
            "equipment": "Balanced pen mod or heavy pencil",
            "setup": "Ensure Balanced pen mod or heavy pencil is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Hold pen between middle (2) and ring (3) fingers.",
              "Build conical charge momentum with fingers 2 and 3.",
              "Bend middle finger inward as index finger (1) clamps the pen.",
              "Catch pen between fingers 1 and 2 seamlessly. 30 reps per set."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "25/30 clean sonic transfers without pen wobbling out of plane.",
            "failureCriteria": "Pen flies out or stalls behind finger. Adjust grip closer to center of gravity.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Thumbaround Release",
                "instruction": "Middle finger pushes pen base forward against stationary thumb. Do NOT move thumb.",
                "diagramType": "path",
                "keyTip": "Catch pen with index finger as it completes 360 rotation around thumb.",
                "commonMistake": "Swinging entire arm or flicking wrist."
              }
            ]
          },
          {
            "id": "drill-16-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Finger independence & momentum conservation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Balanced pen mod or heavy pencil",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 25/30 clean sonic transfers without pen wobbling out of plane.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Thumbaround Release",
                "instruction": "Middle finger pushes pen base forward against stationary thumb. Do NOT move thumb.",
                "diagramType": "path",
                "keyTip": "Catch pen with index finger as it completes 360 rotation around thumb.",
                "commonMistake": "Swinging entire arm or flicking wrist."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-16-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Balanced pen mod or heavy pencil",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Thumbaround Release",
                "instruction": "Middle finger pushes pen base forward against stationary thumb. Do NOT move thumb.",
                "diagramType": "path",
                "keyTip": "Catch pen with index finger as it completes 360 rotation around thumb.",
                "commonMistake": "Swinging entire arm or flicking wrist."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
        "drills": [
          {
            "id": "drill-16-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Balanced pen mod or heavy pencil",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Thumbaround Release",
                "instruction": "Middle finger pushes pen base forward against stationary thumb. Do NOT move thumb.",
                "diagramType": "path",
                "keyTip": "Catch pen with index finger as it completes 360 rotation around thumb.",
                "commonMistake": "Swinging entire arm or flicking wrist."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
      "sampleVerification": "Proof submission will be evaluated against: 25/30 clean sonic transfers without pen wobbling out of plane."
    }
  },
  {
    "id": "skill-17",
    "number": 17,
    "title": "Coin Manipulation (Classic Palm & Roll)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Two half-dollar coins or heavy 10-rupee coins"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 10 consecutive cycles completed in <=45 seconds.",
        "unlockCondition": "Achieve 10 consecutive cycles completed in <=45 seconds. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-17-01",
            "number": 1,
            "title": "Drill 01 \u2014 Index-to-Pinky Knuckle Walk",
            "objective": "Isolate and master Thenar eminence grip & finger slope roll.",
            "whyExists": "Trains interdigital muscle articulation across fingers 1-4.",
            "equipment": "Two half-dollar coins or heavy 10-rupee coins",
            "setup": "Ensure Two half-dollar coins or heavy 10-rupee coins is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Balance coin flat on index finger knuckle.",
              "Tilt middle finger down to catch coin edge and flip it onto middle knuckle.",
              "Repeat sequentially across ring finger and pinky finger.",
              "Slide thumb underneath to catch coin at pinky and return to index finger.",
              "Execute 10 complete cycles without dropping coin."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "10 consecutive cycles completed in <=45 seconds.",
            "failureCriteria": "Coin falls to table or fingers convulse stiffly. Restart count from 0.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Knuckle Tilt Angle",
                "instruction": "Adjacent finger drops slightly lower to receive the falling coin by its milled edge.",
                "diagramType": "path",
                "keyTip": "Keep wrist relaxed; gravity does the work of the roll.",
                "commonMistake": "Trying to grab the coin with fingertips instead of letting it roll over knuckles."
              }
            ]
          },
          {
            "id": "drill-17-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Thenar eminence grip & finger slope roll consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Two half-dollar coins or heavy 10-rupee coins",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 10 consecutive cycles completed in <=45 seconds.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Knuckle Tilt Angle",
                "instruction": "Adjacent finger drops slightly lower to receive the falling coin by its milled edge.",
                "diagramType": "path",
                "keyTip": "Keep wrist relaxed; gravity does the work of the roll.",
                "commonMistake": "Trying to grab the coin with fingertips instead of letting it roll over knuckles."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-17-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Two half-dollar coins or heavy 10-rupee coins",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Knuckle Tilt Angle",
                "instruction": "Adjacent finger drops slightly lower to receive the falling coin by its milled edge.",
                "diagramType": "path",
                "keyTip": "Keep wrist relaxed; gravity does the work of the roll.",
                "commonMistake": "Trying to grab the coin with fingertips instead of letting it roll over knuckles."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
        "drills": [
          {
            "id": "drill-17-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Two half-dollar coins or heavy 10-rupee coins",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Knuckle Tilt Angle",
                "instruction": "Adjacent finger drops slightly lower to receive the falling coin by its milled edge.",
                "diagramType": "path",
                "keyTip": "Keep wrist relaxed; gravity does the work of the roll.",
                "commonMistake": "Trying to grab the coin with fingertips instead of letting it roll over knuckles."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
      "sampleVerification": "Proof submission will be evaluated against: 10 consecutive cycles completed in <=45 seconds."
    }
  },
  {
    "id": "skill-18",
    "number": 18,
    "title": "Card Shuffling & Flourishes (Riffle, Charlier, Spring)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Standard Bicycle Rider Back 52-card deck"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 5 clean Charlier cuts executed without dropping single card.",
        "unlockCondition": "Achieve 5 clean Charlier cuts executed without dropping single card. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-18-01",
            "number": 1,
            "title": "Drill 01 \u2014 One-Handed Charlier Cut Cadence",
            "objective": "Isolate and master Deck pressure control & bevel release.",
            "whyExists": "Builds intrinsic hand strength and single-hand packet clearance.",
            "equipment": "Standard Bicycle Rider Back 52-card deck",
            "setup": "Ensure Standard Bicycle Rider Back 52-card deck is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Hold deck in elevated mechanics grip in left hand.",
              "Release bottom half with thumb so it drops to palm.",
              "Index finger pushes bottom packet up against top packet.",
              "Top packet clears and drops underneath into palm.",
              "Square deck with fingers. Execute 5 clean cuts in <=15 seconds."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "5 clean Charlier cuts executed without dropping single card.",
            "failureCriteria": "Cards splay sideways or index finger catches. Reset deck.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Charlier Packet Clearance",
                "instruction": "Index finger pushes from bottom center until top edge of lower packet clears upper packet.",
                "diagramType": "cards",
                "keyTip": "Open your hand wide to give the packets room to pass.",
                "commonMistake": "Holding hand cramped, blocking the packet from folding over."
              }
            ]
          },
          {
            "id": "drill-18-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Deck pressure control & bevel release consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Standard Bicycle Rider Back 52-card deck",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 5 clean Charlier cuts executed without dropping single card.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Charlier Packet Clearance",
                "instruction": "Index finger pushes from bottom center until top edge of lower packet clears upper packet.",
                "diagramType": "cards",
                "keyTip": "Open your hand wide to give the packets room to pass.",
                "commonMistake": "Holding hand cramped, blocking the packet from folding over."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-18-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Standard Bicycle Rider Back 52-card deck",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Charlier Packet Clearance",
                "instruction": "Index finger pushes from bottom center until top edge of lower packet clears upper packet.",
                "diagramType": "cards",
                "keyTip": "Open your hand wide to give the packets room to pass.",
                "commonMistake": "Holding hand cramped, blocking the packet from folding over."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
        "drills": [
          {
            "id": "drill-18-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Standard Bicycle Rider Back 52-card deck",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Charlier Packet Clearance",
                "instruction": "Index finger pushes from bottom center until top edge of lower packet clears upper packet.",
                "diagramType": "cards",
                "keyTip": "Open your hand wide to give the packets room to pass.",
                "commonMistake": "Holding hand cramped, blocking the packet from folding over."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
      "sampleVerification": "Proof submission will be evaluated against: 5 clean Charlier cuts executed without dropping single card."
    }
  },
  {
    "id": "skill-19",
    "number": 19,
    "title": "Basic Card Magic (Key Card & Double Lift)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
    "prerequisites": [
      "Familiarity with card handling"
    ],
    "equipmentNeeded": [
      "Deck of playing cards"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Zero flash of the hidden card across 20 video reviews.",
        "unlockCondition": "Achieve Zero flash of the hidden card across 20 video reviews. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-19-01",
            "number": 1,
            "title": "Drill 01 \u2014 Strike Double Lift Turnover & Reset",
            "objective": "Isolate and master Pinky count & strike double lift naturalness.",
            "whyExists": "The core fundamental of 90% of card magic miracles.",
            "equipment": "Deck of playing cards",
            "setup": "Ensure Deck of playing cards is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Hold deck in relaxed dealer mechanics grip.",
              "Right thumb strikes top right corner of deck, catching exactly two cards as one.",
              "Turn two cards face up onto deck as single unit with zero card split.",
              "Turn face down again naturally and slide top card onto table.",
              "Perform 30 continuous double lift turnovers with zero visible separation."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Zero flash of the hidden card across 20 video reviews.",
            "failureCriteria": "Cards separate by >1mm during turnover. Repeat 10 reps.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Strike Alignment",
                "instruction": "Right thumb and middle finger grip right edge. The two cards must stay perfectly aligned like a single card.",
                "diagramType": "cards",
                "keyTip": "Do not squeeze tightly; tension makes cards buckle and flash.",
                "commonMistake": "Looking guilty or staring intensely at your own fingers."
              }
            ]
          },
          {
            "id": "drill-19-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Pinky count & strike double lift naturalness consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Deck of playing cards",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Zero flash of the hidden card across 20 video reviews.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Strike Alignment",
                "instruction": "Right thumb and middle finger grip right edge. The two cards must stay perfectly aligned like a single card.",
                "diagramType": "cards",
                "keyTip": "Do not squeeze tightly; tension makes cards buckle and flash.",
                "commonMistake": "Looking guilty or staring intensely at your own fingers."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-19-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Deck of playing cards",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Strike Alignment",
                "instruction": "Right thumb and middle finger grip right edge. The two cards must stay perfectly aligned like a single card.",
                "diagramType": "cards",
                "keyTip": "Do not squeeze tightly; tension makes cards buckle and flash.",
                "commonMistake": "Looking guilty or staring intensely at your own fingers."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
        "drills": [
          {
            "id": "drill-19-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Deck of playing cards",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Strike Alignment",
                "instruction": "Right thumb and middle finger grip right edge. The two cards must stay perfectly aligned like a single card.",
                "diagramType": "cards",
                "keyTip": "Do not squeeze tightly; tension makes cards buckle and flash.",
                "commonMistake": "Looking guilty or staring intensely at your own fingers."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
      "sampleVerification": "Proof submission will be evaluated against: Zero flash of the hidden card across 20 video reviews."
    }
  },
  {
    "id": "skill-20",
    "number": 20,
    "title": "Finger Dexterity & Hand Independence",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-hour",
    "masteryDefinition": "Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Flat desk",
      "Metronome or beat timer"
    ],
    "currentLevel": 1,
    "totalLevels": 4,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Independent 3cm lift without adjacent finger moving >2mm.",
        "unlockCondition": "Achieve Independent 3cm lift without adjacent finger moving >2mm. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-20-01",
            "number": 1,
            "title": "Drill 01 \u2014 Ring-Pinky Isolation Hammer-On",
            "objective": "Isolate and master Extensor digitorum communis neurological separation.",
            "whyExists": "Breaks the shared tendon limitation between ring finger and pinky.",
            "equipment": "Flat desk",
            "setup": "Ensure Flat desk is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Place palm flat on table. Keep thumb, index, and middle fingers pressed down.",
              "Lift ring finger 3cm while keeping pinky glued to table. Tap 10 times.",
              "Reverse: keep ring finger glued to table, lift pinky 3cm. Tap 10 times.",
              "Perform at 60 BPM -> 90 BPM -> 120 BPM."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Independent 3cm lift without adjacent finger moving >2mm.",
            "failureCriteria": "Adjacent finger involuntarily lifts. Press down firmly with other hand.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tendon Decoupling",
                "instruction": "Keep MCP knuckles flush to the table while isolating distal phalange lift.",
                "diagramType": "posture",
                "keyTip": "Think of lifting from the knuckle, not the finger joint.",
                "commonMistake": "Lifting wrist off table to cheat range of motion."
              }
            ]
          },
          {
            "id": "drill-20-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Extensor digitorum communis neurological separation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Flat desk",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Independent 3cm lift without adjacent finger moving >2mm.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tendon Decoupling",
                "instruction": "Keep MCP knuckles flush to the table while isolating distal phalange lift.",
                "diagramType": "posture",
                "keyTip": "Think of lifting from the knuckle, not the finger joint.",
                "commonMistake": "Lifting wrist off table to cheat range of motion."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-20-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Flat desk",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tendon Decoupling",
                "instruction": "Keep MCP knuckles flush to the table while isolating distal phalange lift.",
                "diagramType": "posture",
                "keyTip": "Think of lifting from the knuckle, not the finger joint.",
                "commonMistake": "Lifting wrist off table to cheat range of motion."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 4,
        "title": "Level 04 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
        "drills": [
          {
            "id": "drill-20-mastery",
            "number": 4,
            "title": "Drill 04 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Flat desk, Metronome or beat timer",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Tendon Decoupling",
                "instruction": "Keep MCP knuckles flush to the table while isolating distal phalange lift.",
                "diagramType": "posture",
                "keyTip": "Think of lifting from the knuckle, not the finger joint.",
                "commonMistake": "Lifting wrist off table to cheat range of motion."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
      "sampleVerification": "Proof submission will be evaluated against: Independent 3cm lift without adjacent finger moving >2mm."
    }
  },
  {
    "id": "skill-21",
    "number": 21,
    "title": "Memorize a Deck of Cards (52 cards)",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Memorize a randomly shuffled 52-card deck in <=5 minutes and recall every card in order with 100% accuracy.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "52-card deck",
      "Stopwatch"
    ],
    "currentLevel": 1,
    "totalLevels": 8,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 5/5 cards recalled in correct order in <=45 seconds.",
        "unlockCondition": "Achieve 5/5 cards recalled in correct order in <=45 seconds. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-21-01",
            "number": 1,
            "title": "Drill 01 \u2014 5-Card Rapid Locus Placement",
            "objective": "Isolate and master PAO (Person-Action-Object) conversion & loci indexing.",
            "whyExists": "Trains instant card-to-image encoding without hesitation.",
            "equipment": "52-card deck",
            "setup": "Ensure 52-card deck is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Draw 5 cards off top of shuffled deck.",
              "Convert each card into its predefined PAO image immediately.",
              "Deposit each image onto stations 1-5 of your childhood home memory palace.",
              "Stopwatch stops at card 5. Turn cards face down and recite aloud."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "5/5 cards recalled in correct order in <=45 seconds.",
            "failureCriteria": "Any hesitation > 3s on single card. Drill card flashcard flash.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Card to PAO Conversion",
                "instruction": "Every card has an immutable Person, Action, Object (e.g. Ace of Spades = Neil Armstrong walking on the Moon with an American Flag).",
                "diagramType": "cards",
                "keyTip": "Make the image absurd, sensory, and dynamic.",
                "commonMistake": "Trying to memorize the card names rather than vivid visual scenes."
              },
              {
                "stepNumber": 2,
                "title": "Deposit in Locus",
                "instruction": "Place the 3-card combination (Person A doing Action B to Object C) interacting violently with the locus furniture.",
                "diagramType": "flow",
                "keyTip": "Walk through your locus route in exact fixed direction.",
                "commonMistake": "Backtracking or skipping loci."
              }
            ]
          },
          {
            "id": "drill-21-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting PAO (Person-Action-Object) conversion & loci indexing consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "52-card deck",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 5/5 cards recalled in correct order in <=45 seconds.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Card to PAO Conversion",
                "instruction": "Every card has an immutable Person, Action, Object (e.g. Ace of Spades = Neil Armstrong walking on the Moon with an American Flag).",
                "diagramType": "cards",
                "keyTip": "Make the image absurd, sensory, and dynamic.",
                "commonMistake": "Trying to memorize the card names rather than vivid visual scenes."
              },
              {
                "stepNumber": 2,
                "title": "Deposit in Locus",
                "instruction": "Place the 3-card combination (Person A doing Action B to Object C) interacting violently with the locus furniture.",
                "diagramType": "flow",
                "keyTip": "Walk through your locus route in exact fixed direction.",
                "commonMistake": "Backtracking or skipping loci."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-21-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "52-card deck",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Card to PAO Conversion",
                "instruction": "Every card has an immutable Person, Action, Object (e.g. Ace of Spades = Neil Armstrong walking on the Moon with an American Flag).",
                "diagramType": "cards",
                "keyTip": "Make the image absurd, sensory, and dynamic.",
                "commonMistake": "Trying to memorize the card names rather than vivid visual scenes."
              },
              {
                "stepNumber": 2,
                "title": "Deposit in Locus",
                "instruction": "Place the 3-card combination (Person A doing Action B to Object C) interacting violently with the locus furniture.",
                "diagramType": "flow",
                "keyTip": "Walk through your locus route in exact fixed direction.",
                "commonMistake": "Backtracking or skipping loci."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 8,
        "title": "Level 08 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Memorize a randomly shuffled 52-card deck in <=5 minutes and recall every card in order with 100% accuracy.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Memorize a randomly shuffled 52-card deck in <=5 minutes and recall every card in order with 100% accuracy.",
        "drills": [
          {
            "id": "drill-21-mastery",
            "number": 8,
            "title": "Drill 08 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Memorize a randomly shuffled 52-card deck in <=5 minutes and recall every card in order with 100% accuracy.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "52-card deck, Stopwatch",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Memorize a randomly shuffled 52-card deck in <=5 minutes and recall every card in order with 100% accuracy.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Memorize a randomly shuffled 52-card deck in <=5 minutes and recall every card in order with 100% accuracy.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Card to PAO Conversion",
                "instruction": "Every card has an immutable Person, Action, Object (e.g. Ace of Spades = Neil Armstrong walking on the Moon with an American Flag).",
                "diagramType": "cards",
                "keyTip": "Make the image absurd, sensory, and dynamic.",
                "commonMistake": "Trying to memorize the card names rather than vivid visual scenes."
              },
              {
                "stepNumber": 2,
                "title": "Deposit in Locus",
                "instruction": "Place the 3-card combination (Person A doing Action B to Object C) interacting violently with the locus furniture.",
                "diagramType": "flow",
                "keyTip": "Walk through your locus route in exact fixed direction.",
                "commonMistake": "Backtracking or skipping loci."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "recall-score",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Memorize a randomly shuffled 52-card deck in <=5 minutes and recall every card in order with 100% accuracy.",
      "sampleVerification": "Proof submission will be evaluated against: 5/5 cards recalled in correct order in <=45 seconds."
    }
  },
  {
    "id": "skill-22",
    "number": 22,
    "title": "Memorize 100 Random Digits",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Memorize 100 random numeric digits in <=5 minutes and transcribe them in order with zero errors.",
    "prerequisites": [
      "Major System (0-9 phonetic consonants)"
    ],
    "equipmentNeeded": [
      "Random digit generator",
      "Notepad"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 20/20 digits recalled with 100% accuracy in <=60s memo.",
        "unlockCondition": "Achieve 20/20 digits recalled with 100% accuracy in <=60s memo. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-22-01",
            "number": 1,
            "title": "Drill 01 \u2014 20-Digit Sprint in Under 60 Seconds",
            "objective": "Isolate and master Major System 2-digit consonant encoding (00-99).",
            "whyExists": "Embeds 10 2-digit images onto 5 stations.",
            "equipment": "Random digit generator",
            "setup": "Ensure Random digit generator is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Generate 20 random digits: e.g. 74 92 15 38 60...",
              "Convert 2-digit chunks into phonetic words (74 = Car, 92 = Pen...).",
              "Pair two images per palace locus.",
              "Transcribe digits onto clean sheet."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "20/20 digits recalled with 100% accuracy in <=60s memo.",
            "failureCriteria": "Any single digit inverted. Review Major System phonetic table.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Major System Phonetic Code",
                "instruction": "0=s/z, 1=t/d, 2=n, 3=m, 4=r, 5=l, 6=j/ch/sh, 7=k/g, 8=f/v, 9=p/b.",
                "diagramType": "text",
                "keyTip": "Vowels are free wildcards: 14 = T+R = TaR or TiRe.",
                "commonMistake": "Confusing spelling with phonetic sound (e.g., knee has sound 'n' = 2, not 'k')."
              }
            ]
          },
          {
            "id": "drill-22-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Major System 2-digit consonant encoding (00-99) consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Random digit generator",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 20/20 digits recalled with 100% accuracy in <=60s memo.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Major System Phonetic Code",
                "instruction": "0=s/z, 1=t/d, 2=n, 3=m, 4=r, 5=l, 6=j/ch/sh, 7=k/g, 8=f/v, 9=p/b.",
                "diagramType": "text",
                "keyTip": "Vowels are free wildcards: 14 = T+R = TaR or TiRe.",
                "commonMistake": "Confusing spelling with phonetic sound (e.g., knee has sound 'n' = 2, not 'k')."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-22-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Random digit generator",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Major System Phonetic Code",
                "instruction": "0=s/z, 1=t/d, 2=n, 3=m, 4=r, 5=l, 6=j/ch/sh, 7=k/g, 8=f/v, 9=p/b.",
                "diagramType": "text",
                "keyTip": "Vowels are free wildcards: 14 = T+R = TaR or TiRe.",
                "commonMistake": "Confusing spelling with phonetic sound (e.g., knee has sound 'n' = 2, not 'k')."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Memorize 100 random numeric digits in <=5 minutes and transcribe them in order with zero errors.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Memorize 100 random numeric digits in <=5 minutes and transcribe them in order with zero errors.",
        "drills": [
          {
            "id": "drill-22-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Memorize 100 random numeric digits in <=5 minutes and transcribe them in order with zero errors.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Random digit generator, Notepad",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Memorize 100 random numeric digits in <=5 minutes and transcribe them in order with zero errors.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Memorize 100 random numeric digits in <=5 minutes and transcribe them in order with zero errors.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Major System Phonetic Code",
                "instruction": "0=s/z, 1=t/d, 2=n, 3=m, 4=r, 5=l, 6=j/ch/sh, 7=k/g, 8=f/v, 9=p/b.",
                "diagramType": "text",
                "keyTip": "Vowels are free wildcards: 14 = T+R = TaR or TiRe.",
                "commonMistake": "Confusing spelling with phonetic sound (e.g., knee has sound 'n' = 2, not 'k')."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "recall-score",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Memorize 100 random numeric digits in <=5 minutes and transcribe them in order with zero errors.",
      "sampleVerification": "Proof submission will be evaluated against: 20/20 digits recalled with 100% accuracy in <=60s memo."
    }
  },
  {
    "id": "skill-23",
    "number": 23,
    "title": "Memorize 50 Names & Faces",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Review 50 portrait photos with names for 10 minutes; achieve >=48/50 correct recall upon delayed test.",
    "prerequisites": [
      "Association mnemonics"
    ],
    "equipmentNeeded": [
      "50 face flashcards"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 10/10 names recalled immediately from feature anchor.",
        "unlockCondition": "Achieve 10/10 names recalled immediately from feature anchor. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-23-01",
            "number": 1,
            "title": "Drill 01 \u2014 Feature Anchoring Flash Drill",
            "objective": "Isolate and master Distinctive facial feature anchoring & name punning.",
            "whyExists": "Trains eye to lock onto single prominent feature within 2 seconds.",
            "equipment": "50 face flashcards",
            "setup": "Ensure 50 face flashcards is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Flash a portrait face for 3 seconds.",
              "Instantly identify the standout feature (e.g. hooked nose, bushy eyebrow, cleft chin).",
              "Convert person's name into physical object (e.g. Richard = Rich King's Crown).",
              "Mentally impale the object onto the standout facial feature."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "10/10 names recalled immediately from feature anchor.",
            "failureCriteria": "Anchor chosen is too generic. Choose the weirdest feature.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Anchor Hook",
                "instruction": "Find the one facial anomaly that stands out immediately upon first glance.",
                "diagramType": "posture",
                "keyTip": "Exaggerate the feature in your mind: if ears are big, make them elephant ears.",
                "commonMistake": "Trying to memorize the whole face at once."
              }
            ]
          },
          {
            "id": "drill-23-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Distinctive facial feature anchoring & name punning consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "50 face flashcards",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 10/10 names recalled immediately from feature anchor.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Anchor Hook",
                "instruction": "Find the one facial anomaly that stands out immediately upon first glance.",
                "diagramType": "posture",
                "keyTip": "Exaggerate the feature in your mind: if ears are big, make them elephant ears.",
                "commonMistake": "Trying to memorize the whole face at once."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-23-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "50 face flashcards",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Anchor Hook",
                "instruction": "Find the one facial anomaly that stands out immediately upon first glance.",
                "diagramType": "posture",
                "keyTip": "Exaggerate the feature in your mind: if ears are big, make them elephant ears.",
                "commonMistake": "Trying to memorize the whole face at once."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Review 50 portrait photos with names for 10 minutes; achieve >=48/50 correct recall upon delayed test.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Review 50 portrait photos with names for 10 minutes; achieve >=48/50 correct recall upon delayed test.",
        "drills": [
          {
            "id": "drill-23-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Review 50 portrait photos with names for 10 minutes; achieve >=48/50 correct recall upon delayed test.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "50 face flashcards",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Review 50 portrait photos with names for 10 minutes; achieve >=48/50 correct recall upon delayed test.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Review 50 portrait photos with names for 10 minutes; achieve >=48/50 correct recall upon delayed test.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Anchor Hook",
                "instruction": "Find the one facial anomaly that stands out immediately upon first glance.",
                "diagramType": "posture",
                "keyTip": "Exaggerate the feature in your mind: if ears are big, make them elephant ears.",
                "commonMistake": "Trying to memorize the whole face at once."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "recall-score",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Review 50 portrait photos with names for 10 minutes; achieve >=48/50 correct recall upon delayed test.",
      "sampleVerification": "Proof submission will be evaluated against: 10/10 names recalled immediately from feature anchor."
    }
  },
  {
    "id": "skill-24",
    "number": 24,
    "title": "Build a 100-Loci Memory Palace",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Construct and mentally walk a mapped 100-station architectural route with instant bidirectional retrieval.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Floor plan or familiar building map",
      "Notebook"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Walk 25 stations backwards from 25 to 1 in under 30 seconds.",
        "unlockCondition": "Achieve Walk 25 stations backwards from 25 to 1 in under 30 seconds. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-24-01",
            "number": 1,
            "title": "Drill 01 \u2014 25-Station Micro-Palace Blueprinting",
            "objective": "Isolate and master Spatial navigation & clockwise station sequencing.",
            "whyExists": "Establishes a bulletproof 25-station route through a known building.",
            "equipment": "Floor plan or familiar building map",
            "setup": "Ensure Floor plan or familiar building map is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Choose a building you know intimately (e.g. high school or gym).",
              "Map 5 distinct rooms in a fixed clockwise order.",
              "In each room, select exactly 5 stations moving left-to-right (door, closet, desk, lamp, window).",
              "Walk the route mentally forwards and backwards without pausing."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Walk 25 stations backwards from 25 to 1 in under 30 seconds.",
            "failureCriteria": "Skipping a station or hesitating > 2s. Re-anchor physical order.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Clockwise Rule",
                "instruction": "Always enter a room and move left-to-right clockwise. Never cross paths.",
                "diagramType": "flow",
                "keyTip": "Choose items with distinct tactile surfaces (rough brick vs polished glass).",
                "commonMistake": "Selecting two identical chairs in the same room."
              }
            ]
          },
          {
            "id": "drill-24-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Spatial navigation & clockwise station sequencing consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Floor plan or familiar building map",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Walk 25 stations backwards from 25 to 1 in under 30 seconds.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Clockwise Rule",
                "instruction": "Always enter a room and move left-to-right clockwise. Never cross paths.",
                "diagramType": "flow",
                "keyTip": "Choose items with distinct tactile surfaces (rough brick vs polished glass).",
                "commonMistake": "Selecting two identical chairs in the same room."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-24-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Floor plan or familiar building map",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Clockwise Rule",
                "instruction": "Always enter a room and move left-to-right clockwise. Never cross paths.",
                "diagramType": "flow",
                "keyTip": "Choose items with distinct tactile surfaces (rough brick vs polished glass).",
                "commonMistake": "Selecting two identical chairs in the same room."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Construct and mentally walk a mapped 100-station architectural route with instant bidirectional retrieval.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Construct and mentally walk a mapped 100-station architectural route with instant bidirectional retrieval.",
        "drills": [
          {
            "id": "drill-24-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Construct and mentally walk a mapped 100-station architectural route with instant bidirectional retrieval.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Floor plan or familiar building map, Notebook",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Construct and mentally walk a mapped 100-station architectural route with instant bidirectional retrieval.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Construct and mentally walk a mapped 100-station architectural route with instant bidirectional retrieval.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "card-memory",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Clockwise Rule",
                "instruction": "Always enter a room and move left-to-right clockwise. Never cross paths.",
                "diagramType": "flow",
                "keyTip": "Choose items with distinct tactile surfaces (rough brick vs polished glass).",
                "commonMistake": "Selecting two identical chairs in the same room."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "recall-score",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Construct and mentally walk a mapped 100-station architectural route with instant bidirectional retrieval.",
      "sampleVerification": "Proof submission will be evaluated against: Walk 25 stations backwards from 25 to 1 in under 30 seconds."
    }
  },
  {
    "id": "skill-25",
    "number": 25,
    "title": "Speed Reading \u2014 600 WPM with Comprehension",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Read non-fiction text at >=600 WPM with >=80% score on factual comprehension quiz.",
    "prerequisites": [
      "Standard reading at 200 WPM"
    ],
    "equipmentNeeded": [
      "Non-fiction book",
      "RSVP reader or pointer"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Speed >= 500 WPM with >=80% quiz recall.",
        "unlockCondition": "Achieve Speed >= 500 WPM with >=80% quiz recall. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-25-01",
            "number": 1,
            "title": "Drill 01 \u2014 Pacer-Driven Peripheral Fixation",
            "objective": "Isolate and master Sub-vocalization suppression & visual span expansion.",
            "whyExists": "Forces eyes to jump across text in 2 fixations per line instead of 8.",
            "equipment": "Non-fiction book",
            "setup": "Ensure Non-fiction book is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Place index finger or pen under first line, starting 2 words in from left margin.",
              "Sweep finger smoothly across line in 0.5 seconds, stopping 2 words before right margin.",
              "Do NOT say the words in your throat or mental voice. Absorb shapes visually.",
              "Read 10 full pages with stopwatch running."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Speed >= 500 WPM with >=80% quiz recall.",
            "failureCriteria": "Mentally pronouncing every syllable. Increase pointer speed to outrun inner speech.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Indentation Reading",
                "instruction": "Never look at the first or last word of a line. Peripheral vision catches them automatically.",
                "diagramType": "text",
                "keyTip": "Focus only on the middle 60% of the text column.",
                "commonMistake": "Eye regression (jumping back to re-read sentences)."
              }
            ]
          },
          {
            "id": "drill-25-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Sub-vocalization suppression & visual span expansion consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Non-fiction book",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Speed >= 500 WPM with >=80% quiz recall.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Indentation Reading",
                "instruction": "Never look at the first or last word of a line. Peripheral vision catches them automatically.",
                "diagramType": "text",
                "keyTip": "Focus only on the middle 60% of the text column.",
                "commonMistake": "Eye regression (jumping back to re-read sentences)."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-25-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Non-fiction book",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Indentation Reading",
                "instruction": "Never look at the first or last word of a line. Peripheral vision catches them automatically.",
                "diagramType": "text",
                "keyTip": "Focus only on the middle 60% of the text column.",
                "commonMistake": "Eye regression (jumping back to re-read sentences)."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Read non-fiction text at >=600 WPM with >=80% score on factual comprehension quiz.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Read non-fiction text at >=600 WPM with >=80% score on factual comprehension quiz.",
        "drills": [
          {
            "id": "drill-25-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Read non-fiction text at >=600 WPM with >=80% score on factual comprehension quiz.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Non-fiction book, RSVP reader or pointer",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Read non-fiction text at >=600 WPM with >=80% score on factual comprehension quiz.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Read non-fiction text at >=600 WPM with >=80% score on factual comprehension quiz.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Indentation Reading",
                "instruction": "Never look at the first or last word of a line. Peripheral vision catches them automatically.",
                "diagramType": "text",
                "keyTip": "Focus only on the middle 60% of the text column.",
                "commonMistake": "Eye regression (jumping back to re-read sentences)."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Read non-fiction text at >=600 WPM with >=80% score on factual comprehension quiz.",
      "sampleVerification": "Proof submission will be evaluated against: Speed >= 500 WPM with >=80% quiz recall."
    }
  },
  {
    "id": "skill-26",
    "number": 26,
    "title": "Read & Retain a 100-page Book in 90 Minutes",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Extract core thesis, 5 key arguments, and chapter mental models from 100-page monograph in <=90 min.",
    "prerequisites": [
      "Speed reading basics"
    ],
    "equipmentNeeded": [
      "Physical or digital book",
      "Notepad"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Accurate summary of book's central premise without reading chapter body.",
        "unlockCondition": "Achieve Accurate summary of book's central premise without reading chapter body. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-26-01",
            "number": 1,
            "title": "Drill 01 \u2014 15-Minute Structural Inspection Pass",
            "objective": "Isolate and master Syntopic reading & Mortimer Adler 3-pass inspection.",
            "whyExists": "Extracts the skeleton of the book before reading single body paragraph.",
            "equipment": "Physical or digital book",
            "setup": "Ensure Physical or digital book is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Read title page, preface, and table of contents carefully (3 min).",
              "Scan introduction and conclusion summaries of all chapters (8 min).",
              "Inspect bold headings, diagrams, and concluding pages (4 min).",
              "Write down author's core thesis in exactly 2 sentences."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Accurate summary of book's central premise without reading chapter body.",
            "failureCriteria": "Getting bogged down in chapter 1 details. Keep moving.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 3-Pass Method",
                "instruction": "Pass 1: Anatomy (15m). Pass 2: Speed skim arguments (50m). Pass 3: Deep dive core proof (25m).",
                "diagramType": "flow",
                "keyTip": "Most business and non-fiction books have only 1 big idea and 5 proofs.",
                "commonMistake": "Reading page 1 to 100 linearly like a novel."
              }
            ]
          },
          {
            "id": "drill-26-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Syntopic reading & Mortimer Adler 3-pass inspection consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Physical or digital book",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Accurate summary of book's central premise without reading chapter body.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 3-Pass Method",
                "instruction": "Pass 1: Anatomy (15m). Pass 2: Speed skim arguments (50m). Pass 3: Deep dive core proof (25m).",
                "diagramType": "flow",
                "keyTip": "Most business and non-fiction books have only 1 big idea and 5 proofs.",
                "commonMistake": "Reading page 1 to 100 linearly like a novel."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-26-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Physical or digital book",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 3-Pass Method",
                "instruction": "Pass 1: Anatomy (15m). Pass 2: Speed skim arguments (50m). Pass 3: Deep dive core proof (25m).",
                "diagramType": "flow",
                "keyTip": "Most business and non-fiction books have only 1 big idea and 5 proofs.",
                "commonMistake": "Reading page 1 to 100 linearly like a novel."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Extract core thesis, 5 key arguments, and chapter mental models from 100-page monograph in <=90 min.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Extract core thesis, 5 key arguments, and chapter mental models from 100-page monograph in <=90 min.",
        "drills": [
          {
            "id": "drill-26-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Extract core thesis, 5 key arguments, and chapter mental models from 100-page monograph in <=90 min.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Physical or digital book, Notepad",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Extract core thesis, 5 key arguments, and chapter mental models from 100-page monograph in <=90 min.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Extract core thesis, 5 key arguments, and chapter mental models from 100-page monograph in <=90 min.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "speed-reader",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 3-Pass Method",
                "instruction": "Pass 1: Anatomy (15m). Pass 2: Speed skim arguments (50m). Pass 3: Deep dive core proof (25m).",
                "diagramType": "flow",
                "keyTip": "Most business and non-fiction books have only 1 big idea and 5 proofs.",
                "commonMistake": "Reading page 1 to 100 linearly like a novel."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Extract core thesis, 5 key arguments, and chapter mental models from 100-page monograph in <=90 min.",
      "sampleVerification": "Proof submission will be evaluated against: Accurate summary of book's central premise without reading chapter body."
    }
  },
  {
    "id": "skill-27",
    "number": 27,
    "title": "Mental Arithmetic (2-digit x 2-digit lightning)",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Compute 10 consecutive two-digit multiplication problems (e.g. 74x68) mentally in <=8 seconds each.",
    "prerequisites": [
      "Basic 1-12 times tables"
    ],
    "equipmentNeeded": [
      "Flashcard generator",
      "Scratchpad"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 12/15 problems answered correctly in <=8 seconds.",
        "unlockCondition": "Achieve 12/15 problems answered correctly in <=8 seconds. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-27-01",
            "number": 1,
            "title": "Drill 01 \u2014 Left-to-Right Distributive Expansion",
            "objective": "Isolate and master Left-to-right cross-multiplication & complement rounding.",
            "whyExists": "Calculates highest place value first to keep running total in working memory.",
            "equipment": "Flashcard generator",
            "setup": "Ensure Flashcard generator is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Problem: 46 x 32.",
              "Multiply 40 x 30 = 1200.",
              "Add (40 x 2) + (6 x 30) = 80 + 180 = 260. Running total: 1460.",
              "Add 6 x 2 = 12. Final answer: 1472.",
              "Complete 15 mental calculations with timer."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "12/15 problems answered correctly in <=8 seconds.",
            "failureCriteria": "Carrying numbers in your head using paper-pencil right-to-left method.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Left to Right Processing",
                "instruction": "Always compute hundreds first, then tens, then units. Keep one running sum.",
                "diagramType": "text",
                "keyTip": "If number ends in 8 or 9, use rounding: 49 x 26 = (50 x 26) - 26.",
                "commonMistake": "Trying to visualize pencil scratches in your mind."
              }
            ]
          },
          {
            "id": "drill-27-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Left-to-right cross-multiplication & complement rounding consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Flashcard generator",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 12/15 problems answered correctly in <=8 seconds.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Left to Right Processing",
                "instruction": "Always compute hundreds first, then tens, then units. Keep one running sum.",
                "diagramType": "text",
                "keyTip": "If number ends in 8 or 9, use rounding: 49 x 26 = (50 x 26) - 26.",
                "commonMistake": "Trying to visualize pencil scratches in your mind."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-27-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Flashcard generator",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Left to Right Processing",
                "instruction": "Always compute hundreds first, then tens, then units. Keep one running sum.",
                "diagramType": "text",
                "keyTip": "If number ends in 8 or 9, use rounding: 49 x 26 = (50 x 26) - 26.",
                "commonMistake": "Trying to visualize pencil scratches in your mind."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Compute 10 consecutive two-digit multiplication problems (e.g. 74x68) mentally in <=8 seconds each.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Compute 10 consecutive two-digit multiplication problems (e.g. 74x68) mentally in <=8 seconds each.",
        "drills": [
          {
            "id": "drill-27-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Compute 10 consecutive two-digit multiplication problems (e.g. 74x68) mentally in <=8 seconds each.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Flashcard generator, Scratchpad",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Compute 10 consecutive two-digit multiplication problems (e.g. 74x68) mentally in <=8 seconds each.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Compute 10 consecutive two-digit multiplication problems (e.g. 74x68) mentally in <=8 seconds each.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Left to Right Processing",
                "instruction": "Always compute hundreds first, then tens, then units. Keep one running sum.",
                "diagramType": "text",
                "keyTip": "If number ends in 8 or 9, use rounding: 49 x 26 = (50 x 26) - 26.",
                "commonMistake": "Trying to visualize pencil scratches in your mind."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Compute 10 consecutive two-digit multiplication problems (e.g. 74x68) mentally in <=8 seconds each.",
      "sampleVerification": "Proof submission will be evaluated against: 12/15 problems answered correctly in <=8 seconds."
    }
  },
  {
    "id": "skill-28",
    "number": 28,
    "title": "Mental Calculation Speed (Trachtenberg System)",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Multiply 5-digit numbers by 11, 12, 6 mentally using Trachtenberg speed rules in <=20s per problem.",
    "prerequisites": [
      "Basic mental arithmetic"
    ],
    "equipmentNeeded": [
      "Practice worksheet"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 10/10 correct solutions with instant neighbor addition.",
        "unlockCondition": "Achieve 10/10 correct solutions with instant neighbor addition. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-28-01",
            "number": 1,
            "title": "Drill 01 \u2014 Trachtenberg Rule for 11 (Neighbor Sum)",
            "objective": "Isolate and master Neighbor addition & rule-based direct transcription.",
            "whyExists": "Write answer directly from right to left with zero intermediate calculation.",
            "equipment": "Practice worksheet",
            "setup": "Ensure Practice worksheet is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Problem: 63,425 x 11.",
              "First digit of answer is rightmost digit: 5.",
              "Add each digit to its neighbor on the right: 2+5=7, 4+2=6, 3+4=7, 6+3=9.",
              "Last digit is leftmost digit: 6. Answer: 697,675.",
              "Perform 10 problems in <=15s each."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "10/10 correct solutions with instant neighbor addition.",
            "failureCriteria": "Adding numbers on scratch paper. Calculate strictly in head.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Neighbor Rule",
                "instruction": "Each digit + neighbor to the right + any carry from previous step.",
                "diagramType": "text",
                "keyTip": "Carry is at most 1.",
                "commonMistake": "Adding the left neighbor instead of the right neighbor."
              }
            ]
          },
          {
            "id": "drill-28-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Neighbor addition & rule-based direct transcription consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Practice worksheet",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 10/10 correct solutions with instant neighbor addition.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Neighbor Rule",
                "instruction": "Each digit + neighbor to the right + any carry from previous step.",
                "diagramType": "text",
                "keyTip": "Carry is at most 1.",
                "commonMistake": "Adding the left neighbor instead of the right neighbor."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-28-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Practice worksheet",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Neighbor Rule",
                "instruction": "Each digit + neighbor to the right + any carry from previous step.",
                "diagramType": "text",
                "keyTip": "Carry is at most 1.",
                "commonMistake": "Adding the left neighbor instead of the right neighbor."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Multiply 5-digit numbers by 11, 12, 6 mentally using Trachtenberg speed rules in <=20s per problem.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Multiply 5-digit numbers by 11, 12, 6 mentally using Trachtenberg speed rules in <=20s per problem.",
        "drills": [
          {
            "id": "drill-28-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Multiply 5-digit numbers by 11, 12, 6 mentally using Trachtenberg speed rules in <=20s per problem.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Practice worksheet",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Multiply 5-digit numbers by 11, 12, 6 mentally using Trachtenberg speed rules in <=20s per problem.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Multiply 5-digit numbers by 11, 12, 6 mentally using Trachtenberg speed rules in <=20s per problem.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Neighbor Rule",
                "instruction": "Each digit + neighbor to the right + any carry from previous step.",
                "diagramType": "text",
                "keyTip": "Carry is at most 1.",
                "commonMistake": "Adding the left neighbor instead of the right neighbor."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Multiply 5-digit numbers by 11, 12, 6 mentally using Trachtenberg speed rules in <=20s per problem.",
      "sampleVerification": "Proof submission will be evaluated against: 10/10 correct solutions with instant neighbor addition."
    }
  },
  {
    "id": "skill-29",
    "number": 29,
    "title": "Pattern Recognition & Raven Matrix Reasoning",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Solve advanced 3x3 abstract matrix reasoning problems with >=90% accuracy in <=30s per puzzle.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Raven progressive matrix problem set"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 9/10 correct in <=30 seconds per matrix.",
        "unlockCondition": "Achieve 9/10 correct in <=30 seconds per matrix. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-29-01",
            "number": 1,
            "title": "Drill 01 \u2014 Systematic Matrix Rule Scan",
            "objective": "Isolate and master Row/column rule decomposition (XOR, rotation, distribution of 3).",
            "whyExists": "Scans the 5 core visual matrix transformation operators in sequence.",
            "equipment": "Raven progressive matrix problem set",
            "setup": "Ensure Raven progressive matrix problem set is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Check Rule 1: Number/Distribution of elements across row.",
              "Check Rule 2: 90/45 degree rotational symmetry.",
              "Check Rule 3: Boolean XOR/AND overlap (elements cancel or combine).",
              "Check Rule 4: Progressive size or shading progression.",
              "Select answer. Solve 10 matrices."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "9/10 correct in <=30 seconds per matrix.",
            "failureCriteria": "Guessing visually without isolating the algebraic transformation rule.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Matrix Rule Hierarchy",
                "instruction": "Deconstruct row-by-row then verify column-by-column. 80% are XOR or rotation.",
                "diagramType": "flow",
                "keyTip": "Look at what disappears between box 1 and box 2.",
                "commonMistake": "Looking at the options before identifying the missing rule."
              }
            ]
          },
          {
            "id": "drill-29-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Row/column rule decomposition (XOR, rotation, distribution of 3) consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Raven progressive matrix problem set",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 9/10 correct in <=30 seconds per matrix.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Matrix Rule Hierarchy",
                "instruction": "Deconstruct row-by-row then verify column-by-column. 80% are XOR or rotation.",
                "diagramType": "flow",
                "keyTip": "Look at what disappears between box 1 and box 2.",
                "commonMistake": "Looking at the options before identifying the missing rule."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-29-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Raven progressive matrix problem set",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Matrix Rule Hierarchy",
                "instruction": "Deconstruct row-by-row then verify column-by-column. 80% are XOR or rotation.",
                "diagramType": "flow",
                "keyTip": "Look at what disappears between box 1 and box 2.",
                "commonMistake": "Looking at the options before identifying the missing rule."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Solve advanced 3x3 abstract matrix reasoning problems with >=90% accuracy in <=30s per puzzle.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Solve advanced 3x3 abstract matrix reasoning problems with >=90% accuracy in <=30s per puzzle.",
        "drills": [
          {
            "id": "drill-29-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Solve advanced 3x3 abstract matrix reasoning problems with >=90% accuracy in <=30s per puzzle.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Raven progressive matrix problem set",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Solve advanced 3x3 abstract matrix reasoning problems with >=90% accuracy in <=30s per puzzle.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Solve advanced 3x3 abstract matrix reasoning problems with >=90% accuracy in <=30s per puzzle.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Matrix Rule Hierarchy",
                "instruction": "Deconstruct row-by-row then verify column-by-column. 80% are XOR or rotation.",
                "diagramType": "flow",
                "keyTip": "Look at what disappears between box 1 and box 2.",
                "commonMistake": "Looking at the options before identifying the missing rule."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Solve advanced 3x3 abstract matrix reasoning problems with >=90% accuracy in <=30s per puzzle.",
      "sampleVerification": "Proof submission will be evaluated against: 9/10 correct in <=30 seconds per matrix."
    }
  },
  {
    "id": "skill-30",
    "number": 30,
    "title": "Blindfold Chess (Play complete game)",
    "domainId": "memory",
    "domainCode": "C",
    "skillType": "cognitive",
    "timeCategory": "deep-mastery",
    "masteryDefinition": "Play a complete 30-move legal chess game without sight of board, tracking all piece coordinates accurately.",
    "prerequisites": [
      "Standard chess rating ~1200+",
      "Chess algebraic notation knowledge"
    ],
    "equipmentNeeded": [
      "Chess algebraic notation sheet"
    ],
    "currentLevel": 1,
    "totalLevels": 8,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 20/20 square colors and diagonals recalled with zero pause.",
        "unlockCondition": "Achieve 20/20 square colors and diagonals recalled with zero pause. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-30-01",
            "number": 1,
            "title": "Drill 01 \u2014 Instant Square Color & Diagonal Recall",
            "objective": "Isolate and master Algebraic square color indexing & piece trajectory vectors.",
            "whyExists": "Anchor the 64 squares in mind so you never lose diagonal lines.",
            "equipment": "Chess algebraic notation sheet",
            "setup": "Ensure Chess algebraic notation sheet is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Call out random square: e.g. 'c6'.",
              "Instantly state color (Dark or Light) in <=1.0s (Sum of file and rank: c=3, 3+6=9 odd -> Light).",
              "Name all squares along its diagonal rays in <=5 seconds.",
              "Repeat for 20 random squares."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "20/20 square colors and diagonals recalled with zero pause.",
            "failureCriteria": "Visualizing the whole wooden board. Use coordinate algebra.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Square Color Math",
                "instruction": "Files A,C,E,G = odd (1,3,5,7). Files B,D,F,H = even (2,4,6,8). Odd+Odd = Even (Dark). Odd+Even = Odd (Light).",
                "diagramType": "cube",
                "keyTip": "Anchor your vision around key central outposts: d4, d5, e4, e5.",
                "commonMistake": "Trying to keep a photo image of all 32 pieces simultaneously."
              }
            ]
          },
          {
            "id": "drill-30-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Algebraic square color indexing & piece trajectory vectors consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Chess algebraic notation sheet",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 20/20 square colors and diagonals recalled with zero pause.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Square Color Math",
                "instruction": "Files A,C,E,G = odd (1,3,5,7). Files B,D,F,H = even (2,4,6,8). Odd+Odd = Even (Dark). Odd+Even = Odd (Light).",
                "diagramType": "cube",
                "keyTip": "Anchor your vision around key central outposts: d4, d5, e4, e5.",
                "commonMistake": "Trying to keep a photo image of all 32 pieces simultaneously."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-30-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Chess algebraic notation sheet",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Square Color Math",
                "instruction": "Files A,C,E,G = odd (1,3,5,7). Files B,D,F,H = even (2,4,6,8). Odd+Odd = Even (Dark). Odd+Even = Odd (Light).",
                "diagramType": "cube",
                "keyTip": "Anchor your vision around key central outposts: d4, d5, e4, e5.",
                "commonMistake": "Trying to keep a photo image of all 32 pieces simultaneously."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 8,
        "title": "Level 08 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Play a complete 30-move legal chess game without sight of board, tracking all piece coordinates accurately.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Play a complete 30-move legal chess game without sight of board, tracking all piece coordinates accurately.",
        "drills": [
          {
            "id": "drill-30-mastery",
            "number": 8,
            "title": "Drill 08 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Play a complete 30-move legal chess game without sight of board, tracking all piece coordinates accurately.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Chess algebraic notation sheet",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Play a complete 30-move legal chess game without sight of board, tracking all piece coordinates accurately.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Play a complete 30-move legal chess game without sight of board, tracking all piece coordinates accurately.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Square Color Math",
                "instruction": "Files A,C,E,G = odd (1,3,5,7). Files B,D,F,H = even (2,4,6,8). Odd+Odd = Even (Dark). Odd+Even = Odd (Light).",
                "diagramType": "cube",
                "keyTip": "Anchor your vision around key central outposts: d4, d5, e4, e5.",
                "commonMistake": "Trying to keep a photo image of all 32 pieces simultaneously."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Play a complete 30-move legal chess game without sight of board, tracking all piece coordinates accurately.",
      "sampleVerification": "Proof submission will be evaluated against: 20/20 square colors and diagonals recalled with zero pause."
    }
  },
  {
    "id": "skill-31",
    "number": 31,
    "title": "Compose a Complete Song using AI",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Create and export one complete 2:30 original song with intro, verse, chorus, bridge, mixed audio and cover art.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Suno / Udio access",
      "DAW or audio editor",
      "Headphones"
    ],
    "currentLevel": 1,
    "totalLevels": 8,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Complete coherent 2:30 track with defined verse-chorus dynamic contrast.",
        "unlockCondition": "Achieve Complete coherent 2:30 track with defined verse-chorus dynamic contrast. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-31-01",
            "number": 1,
            "title": "Drill 01 \u2014 Genre Descriptor Prompt Engineering & Stem Generation",
            "objective": "Isolate and master Metatag structuring, seed prompting, and stem arrangement.",
            "whyExists": "Produces commercially viable musical foundations.",
            "equipment": "Suno / Udio access",
            "setup": "Ensure Suno / Udio access is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Define musical DNA: BPM (e.g. 124 BPM), subgenre (e.g. Melodic Synthwave), instruments (Analog Arp, 808 sub, gated reverb snare).",
              "Format Suno/Udio prompt with exact structural metatags: [Intro], [Verse 1], [Chorus], [Drop].",
              "Generate 4 variations; select best hook.",
              "Extend track with [Bridge] and [Outro] to reach 2:30 runtime."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Complete coherent 2:30 track with defined verse-chorus dynamic contrast.",
            "failureCriteria": "Muddled vocals or generic song without dynamic climax.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Metatag Architecture",
                "instruction": "Use bracketed tags [Verse], [Pre-Chorus], [Chorus: Explosive hook], [Guitar Solo], [Outro: Fade out].",
                "diagramType": "ui",
                "keyTip": "Style prompt: specify production quality (e.g. 'high production value, analog warmth, 128 bpm').",
                "commonMistake": "Writing paragraphs of description instead of crisp musical tags."
              },
              {
                "stepNumber": 2,
                "title": "Stem Separation & DAW Polish",
                "instruction": "Export stems (Vocals, Drums, Bass, Instruments) into Audacity/FL Studio for final EQ and limiter.",
                "diagramType": "split",
                "keyTip": "Cut low mud below 100Hz on vocals.",
                "commonMistake": "Accepting muddy raw AI master without loudness normalization."
              }
            ]
          },
          {
            "id": "drill-31-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Metatag structuring, seed prompting, and stem arrangement consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Suno / Udio access",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Complete coherent 2:30 track with defined verse-chorus dynamic contrast.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Metatag Architecture",
                "instruction": "Use bracketed tags [Verse], [Pre-Chorus], [Chorus: Explosive hook], [Guitar Solo], [Outro: Fade out].",
                "diagramType": "ui",
                "keyTip": "Style prompt: specify production quality (e.g. 'high production value, analog warmth, 128 bpm').",
                "commonMistake": "Writing paragraphs of description instead of crisp musical tags."
              },
              {
                "stepNumber": 2,
                "title": "Stem Separation & DAW Polish",
                "instruction": "Export stems (Vocals, Drums, Bass, Instruments) into Audacity/FL Studio for final EQ and limiter.",
                "diagramType": "split",
                "keyTip": "Cut low mud below 100Hz on vocals.",
                "commonMistake": "Accepting muddy raw AI master without loudness normalization."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-31-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Suno / Udio access",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Metatag Architecture",
                "instruction": "Use bracketed tags [Verse], [Pre-Chorus], [Chorus: Explosive hook], [Guitar Solo], [Outro: Fade out].",
                "diagramType": "ui",
                "keyTip": "Style prompt: specify production quality (e.g. 'high production value, analog warmth, 128 bpm').",
                "commonMistake": "Writing paragraphs of description instead of crisp musical tags."
              },
              {
                "stepNumber": 2,
                "title": "Stem Separation & DAW Polish",
                "instruction": "Export stems (Vocals, Drums, Bass, Instruments) into Audacity/FL Studio for final EQ and limiter.",
                "diagramType": "split",
                "keyTip": "Cut low mud below 100Hz on vocals.",
                "commonMistake": "Accepting muddy raw AI master without loudness normalization."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 8,
        "title": "Level 08 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Create and export one complete 2:30 original song with intro, verse, chorus, bridge, mixed audio and cover art.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Create and export one complete 2:30 original song with intro, verse, chorus, bridge, mixed audio and cover art.",
        "drills": [
          {
            "id": "drill-31-mastery",
            "number": 8,
            "title": "Drill 08 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Create and export one complete 2:30 original song with intro, verse, chorus, bridge, mixed audio and cover art.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Suno / Udio access, DAW or audio editor, Headphones",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Create and export one complete 2:30 original song with intro, verse, chorus, bridge, mixed audio and cover art.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Create and export one complete 2:30 original song with intro, verse, chorus, bridge, mixed audio and cover art.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Metatag Architecture",
                "instruction": "Use bracketed tags [Verse], [Pre-Chorus], [Chorus: Explosive hook], [Guitar Solo], [Outro: Fade out].",
                "diagramType": "ui",
                "keyTip": "Style prompt: specify production quality (e.g. 'high production value, analog warmth, 128 bpm').",
                "commonMistake": "Writing paragraphs of description instead of crisp musical tags."
              },
              {
                "stepNumber": 2,
                "title": "Stem Separation & DAW Polish",
                "instruction": "Export stems (Vocals, Drums, Bass, Instruments) into Audacity/FL Studio for final EQ and limiter.",
                "diagramType": "split",
                "keyTip": "Cut low mud below 100Hz on vocals.",
                "commonMistake": "Accepting muddy raw AI master without loudness normalization."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "audio-recording",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Create and export one complete 2:30 original song with intro, verse, chorus, bridge, mixed audio and cover art.",
      "sampleVerification": "Proof submission will be evaluated against: Complete coherent 2:30 track with defined verse-chorus dynamic contrast."
    }
  },
  {
    "id": "skill-32",
    "number": 32,
    "title": "Write Song Lyrics (AABB / ABAB with rhyme meter)",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Write complete 3-verse, 2-chorus, 1-bridge lyric sheet adhering to consistent poetic meter and internal rhymes.",
    "prerequisites": [
      "Basic English vocabulary"
    ],
    "equipmentNeeded": [
      "Text editor",
      "Rhymezone access"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Chorus rhythm flows on beat without clumsy crammed syllables.",
        "unlockCondition": "Achieve Chorus rhythm flows on beat without clumsy crammed syllables. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-32-01",
            "number": 1,
            "title": "Drill 01 \u2014 8-Bar Chorus Meter & Hook Construction",
            "objective": "Isolate and master Trochaic/Iambic stress counting & sensory hook anchoring.",
            "whyExists": "Locks the syllable stress of the main hook so it sings effortlessly.",
            "equipment": "Text editor",
            "setup": "Ensure Text editor is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Choose central song theme (e.g. 'Midnight in Tokyo').",
              "Draft 4-line chorus in ABAB scheme.",
              "Tap rhythm on desk: every line must have exact 8 or 10 stressed beats.",
              "Incorporate at least 2 sensory concrete nouns (neon rain, subway train)."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Chorus rhythm flows on beat without clumsy crammed syllables.",
            "failureCriteria": "Lines have unequal syllable counts that stumble over the downbeat.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Stress Counting",
                "instruction": "Do not count total syllables; count stressed rhythmic accents (da-DUM da-DUM).",
                "diagramType": "text",
                "keyTip": "Use slant rhymes (time/mind, shape/late) to avoid nursery-rhyme cliches.",
                "commonMistake": "Using abstract philosophical words instead of physical imagery."
              }
            ]
          },
          {
            "id": "drill-32-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Trochaic/Iambic stress counting & sensory hook anchoring consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Text editor",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Chorus rhythm flows on beat without clumsy crammed syllables.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Stress Counting",
                "instruction": "Do not count total syllables; count stressed rhythmic accents (da-DUM da-DUM).",
                "diagramType": "text",
                "keyTip": "Use slant rhymes (time/mind, shape/late) to avoid nursery-rhyme cliches.",
                "commonMistake": "Using abstract philosophical words instead of physical imagery."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-32-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Text editor",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Stress Counting",
                "instruction": "Do not count total syllables; count stressed rhythmic accents (da-DUM da-DUM).",
                "diagramType": "text",
                "keyTip": "Use slant rhymes (time/mind, shape/late) to avoid nursery-rhyme cliches.",
                "commonMistake": "Using abstract philosophical words instead of physical imagery."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Write complete 3-verse, 2-chorus, 1-bridge lyric sheet adhering to consistent poetic meter and internal rhymes.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Write complete 3-verse, 2-chorus, 1-bridge lyric sheet adhering to consistent poetic meter and internal rhymes.",
        "drills": [
          {
            "id": "drill-32-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Write complete 3-verse, 2-chorus, 1-bridge lyric sheet adhering to consistent poetic meter and internal rhymes.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Text editor, Rhymezone access",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Write complete 3-verse, 2-chorus, 1-bridge lyric sheet adhering to consistent poetic meter and internal rhymes.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Write complete 3-verse, 2-chorus, 1-bridge lyric sheet adhering to consistent poetic meter and internal rhymes.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Stress Counting",
                "instruction": "Do not count total syllables; count stressed rhythmic accents (da-DUM da-DUM).",
                "diagramType": "text",
                "keyTip": "Use slant rhymes (time/mind, shape/late) to avoid nursery-rhyme cliches.",
                "commonMistake": "Using abstract philosophical words instead of physical imagery."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Write complete 3-verse, 2-chorus, 1-bridge lyric sheet adhering to consistent poetic meter and internal rhymes.",
      "sampleVerification": "Proof submission will be evaluated against: Chorus rhythm flows on beat without clumsy crammed syllables."
    }
  },
  {
    "id": "skill-33",
    "number": 33,
    "title": "Produce an AI Music Video",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Produce a synchronized 90-second cinematic video clip using AI generation tools and timeline video editing.",
    "prerequisites": [
      "Song audio file"
    ],
    "equipmentNeeded": [
      "Runway / Luma / Pika access",
      "CapCut or DaVinci"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with All video cuts snap precisely to drum transients with zero visual drift.",
        "unlockCondition": "Achieve All video cuts snap precisely to drum transients with zero visual drift. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-33-01",
            "number": 1,
            "title": "Drill 01 \u2014 Audio Waveform Beat-Marker Mapping",
            "objective": "Isolate and master Beat-synced cut pacing & character visual consistency.",
            "whyExists": "Sets up video editor cuts locked strictly to musical transients.",
            "equipment": "Runway / Luma / Pika access",
            "setup": "Ensure Runway / Luma / Pika access is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Import song into editor timeline.",
              "Generate beat markers on every snare and kick downbeat.",
              "Generate 12 cinematic AI video clips matching story moodboard.",
              "Trim and snap clips to markers: cut on the snare hit."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "All video cuts snap precisely to drum transients with zero visual drift.",
            "failureCriteria": "Random cut lengths that fight the musical tempo.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cut on Beat Transient",
                "instruction": "Visual impact should strike on beat 1 or beat 3 of the bar.",
                "diagramType": "ui",
                "keyTip": "Alternate wide shots with extreme closeups every 2 bars.",
                "commonMistake": "Letting single AI video clip run for 10 seconds without cut."
              }
            ]
          },
          {
            "id": "drill-33-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Beat-synced cut pacing & character visual consistency consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Runway / Luma / Pika access",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: All video cuts snap precisely to drum transients with zero visual drift.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cut on Beat Transient",
                "instruction": "Visual impact should strike on beat 1 or beat 3 of the bar.",
                "diagramType": "ui",
                "keyTip": "Alternate wide shots with extreme closeups every 2 bars.",
                "commonMistake": "Letting single AI video clip run for 10 seconds without cut."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-33-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Runway / Luma / Pika access",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cut on Beat Transient",
                "instruction": "Visual impact should strike on beat 1 or beat 3 of the bar.",
                "diagramType": "ui",
                "keyTip": "Alternate wide shots with extreme closeups every 2 bars.",
                "commonMistake": "Letting single AI video clip run for 10 seconds without cut."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Produce a synchronized 90-second cinematic video clip using AI generation tools and timeline video editing.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Produce a synchronized 90-second cinematic video clip using AI generation tools and timeline video editing.",
        "drills": [
          {
            "id": "drill-33-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Produce a synchronized 90-second cinematic video clip using AI generation tools and timeline video editing.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Runway / Luma / Pika access, CapCut or DaVinci",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Produce a synchronized 90-second cinematic video clip using AI generation tools and timeline video editing.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Produce a synchronized 90-second cinematic video clip using AI generation tools and timeline video editing.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Cut on Beat Transient",
                "instruction": "Visual impact should strike on beat 1 or beat 3 of the bar.",
                "diagramType": "ui",
                "keyTip": "Alternate wide shots with extreme closeups every 2 bars.",
                "commonMistake": "Letting single AI video clip run for 10 seconds without cut."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Produce a synchronized 90-second cinematic video clip using AI generation tools and timeline video editing.",
      "sampleVerification": "Proof submission will be evaluated against: All video cuts snap precisely to drum transients with zero visual drift."
    }
  },
  {
    "id": "skill-34",
    "number": 34,
    "title": "Create Cinematic AI Images",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Generate 5 photorealistic filmic frames matching strict camera lens, lighting, color grading and prompt params.",
    "prerequisites": [
      "Basic prompt knowledge"
    ],
    "equipmentNeeded": [
      "Midjourney or Flux.1 access"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Image has authentic shallow depth of field, real skin texture, and zero plastic sheen.",
        "unlockCondition": "Achieve Image has authentic shallow depth of field, real skin texture, and zero plastic sheen. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-34-01",
            "number": 1,
            "title": "Drill 01 \u2014 3-Point Cinematic Lighting Prompt Formula",
            "objective": "Isolate and master Focal length, lighting ratio, and film stock prompt syntax.",
            "whyExists": "Constructs production-grade visual prompts with predictable realism.",
            "equipment": "Midjourney or Flux.1 access",
            "setup": "Ensure Midjourney or Flux.1 access is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Formula: [Subject] + [Environment] + [Lighting: rim light, volumetric fog, tungsten] + [Shot type: 35mm anamorphic lens, f/1.8] + [Color palette: Kodak Vision3 500T] + [--ar 16:9 --style raw].",
              "Generate 4 variations.",
              "Iterate seed parameter to refine micro-details."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Image has authentic shallow depth of field, real skin texture, and zero plastic sheen.",
            "failureCriteria": "Using generic buzzwords like 'hyperrealistic, 8k, trending on artstation'.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Prompt Parameter Stack",
                "instruction": "Subject -> Setting -> Lighting Ratio -> Camera & Lens -> Film Stock -> Aspect Ratio.",
                "diagramType": "text",
                "keyTip": "Specify real camera lenses (e.g. Cooke Anamorphic 50mm).",
                "commonMistake": "Overloading prompt with conflicting lighting directions."
              }
            ]
          },
          {
            "id": "drill-34-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Focal length, lighting ratio, and film stock prompt syntax consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Midjourney or Flux.1 access",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Image has authentic shallow depth of field, real skin texture, and zero plastic sheen.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Prompt Parameter Stack",
                "instruction": "Subject -> Setting -> Lighting Ratio -> Camera & Lens -> Film Stock -> Aspect Ratio.",
                "diagramType": "text",
                "keyTip": "Specify real camera lenses (e.g. Cooke Anamorphic 50mm).",
                "commonMistake": "Overloading prompt with conflicting lighting directions."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-34-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Midjourney or Flux.1 access",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Prompt Parameter Stack",
                "instruction": "Subject -> Setting -> Lighting Ratio -> Camera & Lens -> Film Stock -> Aspect Ratio.",
                "diagramType": "text",
                "keyTip": "Specify real camera lenses (e.g. Cooke Anamorphic 50mm).",
                "commonMistake": "Overloading prompt with conflicting lighting directions."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Generate 5 photorealistic filmic frames matching strict camera lens, lighting, color grading and prompt params.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Generate 5 photorealistic filmic frames matching strict camera lens, lighting, color grading and prompt params.",
        "drills": [
          {
            "id": "drill-34-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Generate 5 photorealistic filmic frames matching strict camera lens, lighting, color grading and prompt params.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Midjourney or Flux.1 access",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Generate 5 photorealistic filmic frames matching strict camera lens, lighting, color grading and prompt params.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Generate 5 photorealistic filmic frames matching strict camera lens, lighting, color grading and prompt params.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Prompt Parameter Stack",
                "instruction": "Subject -> Setting -> Lighting Ratio -> Camera & Lens -> Film Stock -> Aspect Ratio.",
                "diagramType": "text",
                "keyTip": "Specify real camera lenses (e.g. Cooke Anamorphic 50mm).",
                "commonMistake": "Overloading prompt with conflicting lighting directions."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "photo-proof",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Generate 5 photorealistic filmic frames matching strict camera lens, lighting, color grading and prompt params.",
      "sampleVerification": "Proof submission will be evaluated against: Image has authentic shallow depth of field, real skin texture, and zero plastic sheen."
    }
  },
  {
    "id": "skill-35",
    "number": 35,
    "title": "Create Cinematic AI Video Clips",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Direct and generate 4 cohesive video shots with camera motion controls, consistent subject, and 4k upscaling.",
    "prerequisites": [
      "Image generation familiarity"
    ],
    "equipmentNeeded": [
      "Kling / Runway Gen-3 / Luma"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Smooth camera glide with zero body-part morphing or artifacts.",
        "unlockCondition": "Achieve Smooth camera glide with zero body-part morphing or artifacts. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-35-01",
            "number": 1,
            "title": "Drill 01 \u2014 Precision Camera Motion Prompting",
            "objective": "Isolate and master Camera movement vectors & text-to-video motion brushes.",
            "whyExists": "Eliminates unwanted morphing and directs controlled camera parallax.",
            "equipment": "Kling / Runway Gen-3 / Luma",
            "setup": "Ensure Kling / Runway Gen-3 / Luma is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Start with high-res keyframe image.",
              "Set camera motion parameter: Pan Right + Zoom In 2.0.",
              "Prompt motion explicitly: 'Slow tracking dolly shot, character turns head towards lens, background parallax blur'.",
              "Render 5-second clip."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Smooth camera glide with zero body-part morphing or artifacts.",
            "failureCriteria": "Unprompted wild camera spins or character turning into liquid.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Parallax Movement",
                "instruction": "Keep background moving at different speed than foreground subject.",
                "diagramType": "flow",
                "keyTip": "Use motion intensity setting 3-4 (never max 10).",
                "commonMistake": "Moving camera and subject in opposite chaotic vectors."
              }
            ]
          },
          {
            "id": "drill-35-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Camera movement vectors & text-to-video motion brushes consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Kling / Runway Gen-3 / Luma",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Smooth camera glide with zero body-part morphing or artifacts.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Parallax Movement",
                "instruction": "Keep background moving at different speed than foreground subject.",
                "diagramType": "flow",
                "keyTip": "Use motion intensity setting 3-4 (never max 10).",
                "commonMistake": "Moving camera and subject in opposite chaotic vectors."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-35-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Kling / Runway Gen-3 / Luma",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Parallax Movement",
                "instruction": "Keep background moving at different speed than foreground subject.",
                "diagramType": "flow",
                "keyTip": "Use motion intensity setting 3-4 (never max 10).",
                "commonMistake": "Moving camera and subject in opposite chaotic vectors."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Direct and generate 4 cohesive video shots with camera motion controls, consistent subject, and 4k upscaling.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Direct and generate 4 cohesive video shots with camera motion controls, consistent subject, and 4k upscaling.",
        "drills": [
          {
            "id": "drill-35-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Direct and generate 4 cohesive video shots with camera motion controls, consistent subject, and 4k upscaling.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Kling / Runway Gen-3 / Luma",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Direct and generate 4 cohesive video shots with camera motion controls, consistent subject, and 4k upscaling.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Direct and generate 4 cohesive video shots with camera motion controls, consistent subject, and 4k upscaling.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Parallax Movement",
                "instruction": "Keep background moving at different speed than foreground subject.",
                "diagramType": "flow",
                "keyTip": "Use motion intensity setting 3-4 (never max 10).",
                "commonMistake": "Moving camera and subject in opposite chaotic vectors."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Direct and generate 4 cohesive video shots with camera motion controls, consistent subject, and 4k upscaling.",
      "sampleVerification": "Proof submission will be evaluated against: Smooth camera glide with zero body-part morphing or artifacts."
    }
  },
  {
    "id": "skill-36",
    "number": 36,
    "title": "Storytelling (3-Act Narrative Architecture)",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Deliver a compelling 3-minute story with hook, inciting incident, rising stakes, climax, and emotional payout.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Voice recorder or video camera"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Listener is visibly hooked and asks 'what happened next?'.",
        "unlockCondition": "Achieve Listener is visibly hooked and asks 'what happened next?'. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-36-01",
            "number": 1,
            "title": "Drill 01 \u2014 The 60-Second Hook & Inciting Incident Sprint",
            "objective": "Isolate and master Status change & stakes escalation.",
            "whyExists": "Hooks the listener in the first 8 seconds before attention wanders.",
            "equipment": "Voice recorder or video camera",
            "setup": "Ensure Voice recorder or video camera is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Line 1: Drop listener into action (in media res) with immediate danger or contradiction.",
              "Line 2: Establish the protagonist's high-stakes desire.",
              "Line 3: Inciting incident that renders returning impossible.",
              "Deliver into camera in <=60 seconds."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Listener is visibly hooked and asks 'what happened next?'.",
            "failureCriteria": "Starting with boring backstory: 'So back in 2018 I was living in...'.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "In Media Res Hook",
                "instruction": "Start at the moment of crisis, not the breakfast before.",
                "diagramType": "text",
                "keyTip": "Show, don't tell: 'My hands were shaking on the steering wheel' vs 'I was scared'.",
                "commonMistake": "Giving 2 minutes of context before anything happens."
              }
            ]
          },
          {
            "id": "drill-36-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Status change & stakes escalation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Voice recorder or video camera",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Listener is visibly hooked and asks 'what happened next?'.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "In Media Res Hook",
                "instruction": "Start at the moment of crisis, not the breakfast before.",
                "diagramType": "text",
                "keyTip": "Show, don't tell: 'My hands were shaking on the steering wheel' vs 'I was scared'.",
                "commonMistake": "Giving 2 minutes of context before anything happens."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-36-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Voice recorder or video camera",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "In Media Res Hook",
                "instruction": "Start at the moment of crisis, not the breakfast before.",
                "diagramType": "text",
                "keyTip": "Show, don't tell: 'My hands were shaking on the steering wheel' vs 'I was scared'.",
                "commonMistake": "Giving 2 minutes of context before anything happens."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Deliver a compelling 3-minute story with hook, inciting incident, rising stakes, climax, and emotional payout.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Deliver a compelling 3-minute story with hook, inciting incident, rising stakes, climax, and emotional payout.",
        "drills": [
          {
            "id": "drill-36-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Deliver a compelling 3-minute story with hook, inciting incident, rising stakes, climax, and emotional payout.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Voice recorder or video camera",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Deliver a compelling 3-minute story with hook, inciting incident, rising stakes, climax, and emotional payout.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Deliver a compelling 3-minute story with hook, inciting incident, rising stakes, climax, and emotional payout.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "In Media Res Hook",
                "instruction": "Start at the moment of crisis, not the breakfast before.",
                "diagramType": "text",
                "keyTip": "Show, don't tell: 'My hands were shaking on the steering wheel' vs 'I was scared'.",
                "commonMistake": "Giving 2 minutes of context before anything happens."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Deliver a compelling 3-minute story with hook, inciting incident, rising stakes, climax, and emotional payout.",
      "sampleVerification": "Proof submission will be evaluated against: Listener is visibly hooked and asks 'what happened next?'."
    }
  },
  {
    "id": "skill-37",
    "number": 37,
    "title": "Creative Writing (Flash Fiction in 500 words)",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Write a 500-word story with sensory grounding, subtext dialogue, and decisive twist ending.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Text editor"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Reader accurately deduces underlying relationship crisis through subtext alone.",
        "unlockCondition": "Achieve Reader accurately deduces underlying relationship crisis through subtext alone. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-37-01",
            "number": 1,
            "title": "Drill 01 \u2014 Subtext Dialogue Only Scene",
            "objective": "Isolate and master Subtextual dialogue & Chekhov's gun economy.",
            "whyExists": "Writes 2 characters arguing about one thing while actually talking about something else.",
            "equipment": "Text editor",
            "setup": "Ensure Text editor is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Set scene: Two characters washing dishes.",
              "Rule: Neither character is allowed to state their actual feeling directly.",
              "Convey impending divorce entirely through how they handle a cracked plate.",
              "Target: 250 words."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Reader accurately deduces underlying relationship crisis through subtext alone.",
            "failureCriteria": "Characters giving exposition or explaining their feelings out loud.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Subtext Layering",
                "instruction": "Text is what they say. Subtext is what they mean. Action is what they do.",
                "diagramType": "split",
                "keyTip": "Cut all adverbs (quietly, angrily). Use strong verbs.",
                "commonMistake": "Over-explaining internal motivations to the reader."
              }
            ]
          },
          {
            "id": "drill-37-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Subtextual dialogue & Chekhov's gun economy consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Text editor",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Reader accurately deduces underlying relationship crisis through subtext alone.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Subtext Layering",
                "instruction": "Text is what they say. Subtext is what they mean. Action is what they do.",
                "diagramType": "split",
                "keyTip": "Cut all adverbs (quietly, angrily). Use strong verbs.",
                "commonMistake": "Over-explaining internal motivations to the reader."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-37-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Text editor",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Subtext Layering",
                "instruction": "Text is what they say. Subtext is what they mean. Action is what they do.",
                "diagramType": "split",
                "keyTip": "Cut all adverbs (quietly, angrily). Use strong verbs.",
                "commonMistake": "Over-explaining internal motivations to the reader."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Write a 500-word story with sensory grounding, subtext dialogue, and decisive twist ending.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Write a 500-word story with sensory grounding, subtext dialogue, and decisive twist ending.",
        "drills": [
          {
            "id": "drill-37-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Write a 500-word story with sensory grounding, subtext dialogue, and decisive twist ending.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Text editor",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Write a 500-word story with sensory grounding, subtext dialogue, and decisive twist ending.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Write a 500-word story with sensory grounding, subtext dialogue, and decisive twist ending.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Subtext Layering",
                "instruction": "Text is what they say. Subtext is what they mean. Action is what they do.",
                "diagramType": "split",
                "keyTip": "Cut all adverbs (quietly, angrily). Use strong verbs.",
                "commonMistake": "Over-explaining internal motivations to the reader."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Write a 500-word story with sensory grounding, subtext dialogue, and decisive twist ending.",
      "sampleVerification": "Proof submission will be evaluated against: Reader accurately deduces underlying relationship crisis through subtext alone."
    }
  },
  {
    "id": "skill-38",
    "number": 38,
    "title": "Stand-up Comedy Fundamentals (Write 3-min tight set)",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Write and deliver 3 minutes of original stand-up comedy containing >=6 laugh points with setup-punchline craft.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Mic or smartphone recorder"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Delivered set produces audible laughs within 15 seconds of setup.",
        "unlockCondition": "Achieve Delivered set produces audible laughs within 15 seconds of setup. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-38-01",
            "number": 1,
            "title": "Drill 01 \u2014 Setup-Punchline Misdirection Drill",
            "objective": "Isolate and master Assumption misdirection & tag economy.",
            "whyExists": "Constructs a premise that forces the audience's brain down Track A, then reveals Track B.",
            "equipment": "Mic or smartphone recorder",
            "setup": "Ensure Mic or smartphone recorder is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Write premise: State a universally recognized truth or frustration.",
              "Identify the audience's unstated assumption.",
              "Write punchline: The sharpest, shortest sentence that shatters the assumption.",
              "Add 2 rapid tags (second and third punchlines on the same premise)."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Delivered set produces audible laughs within 15 seconds of setup.",
            "failureCriteria": "Punchline is an explanation rather than a surprise.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Misdirection Angle",
                "instruction": "Setup creates assumption. Punchline reveals alternative reality that also fits the facts.",
                "diagramType": "path",
                "keyTip": "Put the funny word at the very end of the punchline sentence.",
                "commonMistake": "Continuing to talk after the punchline has landed."
              }
            ]
          },
          {
            "id": "drill-38-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Assumption misdirection & tag economy consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Mic or smartphone recorder",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Delivered set produces audible laughs within 15 seconds of setup.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Misdirection Angle",
                "instruction": "Setup creates assumption. Punchline reveals alternative reality that also fits the facts.",
                "diagramType": "path",
                "keyTip": "Put the funny word at the very end of the punchline sentence.",
                "commonMistake": "Continuing to talk after the punchline has landed."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-38-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Mic or smartphone recorder",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Misdirection Angle",
                "instruction": "Setup creates assumption. Punchline reveals alternative reality that also fits the facts.",
                "diagramType": "path",
                "keyTip": "Put the funny word at the very end of the punchline sentence.",
                "commonMistake": "Continuing to talk after the punchline has landed."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Write and deliver 3 minutes of original stand-up comedy containing >=6 laugh points with setup-punchline craft.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Write and deliver 3 minutes of original stand-up comedy containing >=6 laugh points with setup-punchline craft.",
        "drills": [
          {
            "id": "drill-38-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Write and deliver 3 minutes of original stand-up comedy containing >=6 laugh points with setup-punchline craft.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Mic or smartphone recorder",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Write and deliver 3 minutes of original stand-up comedy containing >=6 laugh points with setup-punchline craft.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Write and deliver 3 minutes of original stand-up comedy containing >=6 laugh points with setup-punchline craft.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Misdirection Angle",
                "instruction": "Setup creates assumption. Punchline reveals alternative reality that also fits the facts.",
                "diagramType": "path",
                "keyTip": "Put the funny word at the very end of the punchline sentence.",
                "commonMistake": "Continuing to talk after the punchline has landed."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Write and deliver 3 minutes of original stand-up comedy containing >=6 laugh points with setup-punchline craft.",
      "sampleVerification": "Proof submission will be evaluated against: Delivered set produces audible laughs within 15 seconds of setup."
    }
  },
  {
    "id": "skill-39",
    "number": 39,
    "title": "Drawing Fundamentals (Perspective & Shading)",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Draw a realistic 2-point perspective streetscape with accurate horizon, vanishing lines, and cast shadows.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Drawing pad",
      "2B/4B pencils",
      "Ruler"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with All horizontal lines converge accurately to designated VPs with zero warped angles.",
        "unlockCondition": "Achieve All horizontal lines converge accurately to designated VPs with zero warped angles. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-39-01",
            "number": 1,
            "title": "Drill 01 \u2014 2-Point Box Grid & Drop Shadow Construction",
            "objective": "Isolate and master Horizon line, vanishing points, and 5-value core shadow rendering.",
            "whyExists": "Establishes clean spatial depth without converging distortion.",
            "equipment": "Drawing pad",
            "setup": "Ensure Drawing pad is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Draw horizon line across sheet. Place Left VP and Right VP at opposite page edges.",
              "Draw vertical corner edge of front building.",
              "Connect top and bottom corners back to both vanishing points with light construction lines.",
              "Construct 3 blocks receding into depth.",
              "Render cast shadow using single light source vector."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "All horizontal lines converge accurately to designated VPs with zero warped angles.",
            "failureCriteria": "Parallel horizontal lines that violate perspective convergence.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "2-Point Vanishing Lines",
                "instruction": "All vertical lines are 90 degrees plumb. All horizontal lines aim at Left or Right VP.",
                "diagramType": "path",
                "keyTip": "Keep vanishing points far apart to avoid fish-eye distortion.",
                "commonMistake": "Placing vanishing points too close inside the page."
              }
            ]
          },
          {
            "id": "drill-39-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Horizon line, vanishing points, and 5-value core shadow rendering consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Drawing pad",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: All horizontal lines converge accurately to designated VPs with zero warped angles.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "2-Point Vanishing Lines",
                "instruction": "All vertical lines are 90 degrees plumb. All horizontal lines aim at Left or Right VP.",
                "diagramType": "path",
                "keyTip": "Keep vanishing points far apart to avoid fish-eye distortion.",
                "commonMistake": "Placing vanishing points too close inside the page."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-39-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Drawing pad",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "2-Point Vanishing Lines",
                "instruction": "All vertical lines are 90 degrees plumb. All horizontal lines aim at Left or Right VP.",
                "diagramType": "path",
                "keyTip": "Keep vanishing points far apart to avoid fish-eye distortion.",
                "commonMistake": "Placing vanishing points too close inside the page."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Draw a realistic 2-point perspective streetscape with accurate horizon, vanishing lines, and cast shadows.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Draw a realistic 2-point perspective streetscape with accurate horizon, vanishing lines, and cast shadows.",
        "drills": [
          {
            "id": "drill-39-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Draw a realistic 2-point perspective streetscape with accurate horizon, vanishing lines, and cast shadows.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Drawing pad, 2B/4B pencils, Ruler",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Draw a realistic 2-point perspective streetscape with accurate horizon, vanishing lines, and cast shadows.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Draw a realistic 2-point perspective streetscape with accurate horizon, vanishing lines, and cast shadows.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "2-Point Vanishing Lines",
                "instruction": "All vertical lines are 90 degrees plumb. All horizontal lines aim at Left or Right VP.",
                "diagramType": "path",
                "keyTip": "Keep vanishing points far apart to avoid fish-eye distortion.",
                "commonMistake": "Placing vanishing points too close inside the page."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "photo-proof",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Draw a realistic 2-point perspective streetscape with accurate horizon, vanishing lines, and cast shadows.",
      "sampleVerification": "Proof submission will be evaluated against: All horizontal lines converge accurately to designated VPs with zero warped angles."
    }
  },
  {
    "id": "skill-40",
    "number": 40,
    "title": "Digital Art & Vector Illustration",
    "domainId": "creative",
    "domainCode": "D",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Illustrate a scalable isometric vector character/scene using bezier curves, gradients, and flat lighting.",
    "prerequisites": [
      "Basic computer skills"
    ],
    "equipmentNeeded": [
      "Figma, Illustrator or Inkscape"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Vector graphic scales to 400% with perfectly smooth curve tangents.",
        "unlockCondition": "Achieve Vector graphic scales to 400% with perfectly smooth curve tangents. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-40-01",
            "number": 1,
            "title": "Drill 01 \u2014 3-Anchor Bezier Curve Mastery",
            "objective": "Isolate and master Bezier handle economy & isometric 30-degree grid snapping.",
            "whyExists": "Draws smooth organic shapes using minimum anchor points.",
            "equipment": "Figma, Illustrator or Inkscape",
            "setup": "Ensure Figma, Illustrator or Inkscape is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Set up 30-degree isometric grid.",
              "Draw isometric cube with 3 distinct value shades (Top 90% light, Left 60%, Right 30%).",
              "Trace an organic curve using only 3 anchor points with smooth directional handles.",
              "Apply subtle linear gradient matching lighting direction."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Vector graphic scales to 400% with perfectly smooth curve tangents.",
            "failureCriteria": "Adding 20 jagged anchor points instead of pulling smooth handles.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Bezier Handle Tension",
                "instruction": "Handles should follow the curve tangent and extend 1/3 of the distance to the next point.",
                "diagramType": "ui",
                "keyTip": "Always place anchor points at the extrema (highest, lowest, leftmost, rightmost points).",
                "commonMistake": "Placing points in the middle of a curve."
              }
            ]
          },
          {
            "id": "drill-40-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Bezier handle economy & isometric 30-degree grid snapping consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Figma, Illustrator or Inkscape",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Vector graphic scales to 400% with perfectly smooth curve tangents.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Bezier Handle Tension",
                "instruction": "Handles should follow the curve tangent and extend 1/3 of the distance to the next point.",
                "diagramType": "ui",
                "keyTip": "Always place anchor points at the extrema (highest, lowest, leftmost, rightmost points).",
                "commonMistake": "Placing points in the middle of a curve."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-40-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Figma, Illustrator or Inkscape",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Bezier Handle Tension",
                "instruction": "Handles should follow the curve tangent and extend 1/3 of the distance to the next point.",
                "diagramType": "ui",
                "keyTip": "Always place anchor points at the extrema (highest, lowest, leftmost, rightmost points).",
                "commonMistake": "Placing points in the middle of a curve."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Illustrate a scalable isometric vector character/scene using bezier curves, gradients, and flat lighting.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Illustrate a scalable isometric vector character/scene using bezier curves, gradients, and flat lighting.",
        "drills": [
          {
            "id": "drill-40-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Illustrate a scalable isometric vector character/scene using bezier curves, gradients, and flat lighting.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Figma, Illustrator or Inkscape",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Illustrate a scalable isometric vector character/scene using bezier curves, gradients, and flat lighting.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Illustrate a scalable isometric vector character/scene using bezier curves, gradients, and flat lighting.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Bezier Handle Tension",
                "instruction": "Handles should follow the curve tangent and extend 1/3 of the distance to the next point.",
                "diagramType": "ui",
                "keyTip": "Always place anchor points at the extrema (highest, lowest, leftmost, rightmost points).",
                "commonMistake": "Placing points in the middle of a curve."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "photo-proof",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Illustrate a scalable isometric vector character/scene using bezier curves, gradients, and flat lighting.",
      "sampleVerification": "Proof submission will be evaluated against: Vector graphic scales to 400% with perfectly smooth curve tangents."
    }
  },
  {
    "id": "skill-41",
    "number": 41,
    "title": "Build Autonomous AI Agents",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "20-hours",
    "masteryDefinition": "Build and deploy an autonomous AI agent capable of multi-step web research, tool calling, and report export.",
    "prerequisites": [
      "Basic Python or JavaScript"
    ],
    "equipmentNeeded": [
      "Node/Python environment",
      "LLM API Key"
    ],
    "currentLevel": 1,
    "totalLevels": 10,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Agent correctly triggers tool call, consumes result, and terminates in <=2 turns.",
        "unlockCondition": "Achieve Agent correctly triggers tool call, consumes result, and terminates in <=2 turns. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-41-01",
            "number": 1,
            "title": "Drill 01 \u2014 Single-Tool ReAct Decision Loop",
            "objective": "Isolate and master ReAct loop (Thought-Action-Observation) & JSON schema tool calling.",
            "whyExists": "Implements the core engine that turns an LLM into an acting agent.",
            "equipment": "Node/Python environment",
            "setup": "Ensure Node/Python environment is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Define tool schema in JSON: search_web(query: string).",
              "Send prompt to LLM with tool definitions.",
              "Parse LLM tool call response, execute mock web search function.",
              "Feed function observation back to LLM with role: tool.",
              "Verify LLM synthesizes answer from observation without looping."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Agent correctly triggers tool call, consumes result, and terminates in <=2 turns.",
            "failureCriteria": "Agent hallucinates tool results instead of waiting for execution.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The ReAct Loop Cycle",
                "instruction": "Thought -> Action (tool call) -> Observation (tool result) -> Thought -> Final Answer.",
                "diagramType": "flow",
                "keyTip": "Always provide strict typed JSON schema for arguments.",
                "commonMistake": "Allowing infinite tool calling loops without max_iterations guard."
              }
            ]
          },
          {
            "id": "drill-41-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting ReAct loop (Thought-Action-Observation) & JSON schema tool calling consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Node/Python environment",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Agent correctly triggers tool call, consumes result, and terminates in <=2 turns.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The ReAct Loop Cycle",
                "instruction": "Thought -> Action (tool call) -> Observation (tool result) -> Thought -> Final Answer.",
                "diagramType": "flow",
                "keyTip": "Always provide strict typed JSON schema for arguments.",
                "commonMistake": "Allowing infinite tool calling loops without max_iterations guard."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-41-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Node/Python environment",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The ReAct Loop Cycle",
                "instruction": "Thought -> Action (tool call) -> Observation (tool result) -> Thought -> Final Answer.",
                "diagramType": "flow",
                "keyTip": "Always provide strict typed JSON schema for arguments.",
                "commonMistake": "Allowing infinite tool calling loops without max_iterations guard."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 10,
        "title": "Level 10 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Build and deploy an autonomous AI agent capable of multi-step web research, tool calling, and report export.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Build and deploy an autonomous AI agent capable of multi-step web research, tool calling, and report export.",
        "drills": [
          {
            "id": "drill-41-mastery",
            "number": 10,
            "title": "Drill 10 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Build and deploy an autonomous AI agent capable of multi-step web research, tool calling, and report export.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Node/Python environment, LLM API Key",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Build and deploy an autonomous AI agent capable of multi-step web research, tool calling, and report export.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Build and deploy an autonomous AI agent capable of multi-step web research, tool calling, and report export.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The ReAct Loop Cycle",
                "instruction": "Thought -> Action (tool call) -> Observation (tool result) -> Thought -> Final Answer.",
                "diagramType": "flow",
                "keyTip": "Always provide strict typed JSON schema for arguments.",
                "commonMistake": "Allowing infinite tool calling loops without max_iterations guard."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Build and deploy an autonomous AI agent capable of multi-step web research, tool calling, and report export.",
      "sampleVerification": "Proof submission will be evaluated against: Agent correctly triggers tool call, consumes result, and terminates in <=2 turns."
    }
  },
  {
    "id": "skill-42",
    "number": 42,
    "title": "Build Multi-Agent Systems",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "20-hours",
    "masteryDefinition": "Build a collaborative 3-agent orchestration (Researcher -> Writer -> Critic) that self-corrects until verified.",
    "prerequisites": [
      "Single agent knowledge"
    ],
    "equipmentNeeded": [
      "LangGraph / CrewAI / Python"
    ],
    "currentLevel": 1,
    "totalLevels": 8,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with System automatically executes self-correction loop when initial score is low.",
        "unlockCondition": "Achieve System automatically executes self-correction loop when initial score is low. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-42-01",
            "number": 1,
            "title": "Drill 01 \u2014 Conditional Edge Routing & Critique Gate",
            "objective": "Isolate and master State graph routing, agent communication protocols, and critique gates.",
            "whyExists": "Builds a state graph where the critic agent rejects output until quality score > 8.",
            "equipment": "LangGraph / CrewAI / Python",
            "setup": "Ensure LangGraph / CrewAI / Python is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Define Shared State: { topic, research_notes, draft, critique_score, iteration_count }.",
              "Node 1: Researcher extracts 3 facts.",
              "Node 2: Writer drafts summary.",
              "Node 3: Critic scores accuracy 1-10.",
              "Conditional Edge: If score < 8 and iteration < 3 -> route back to Writer. Else -> End."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "System automatically executes self-correction loop when initial score is low.",
            "failureCriteria": "Infinite ping-pong between writer and critic without state termination.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "State Graph Orchestration",
                "instruction": "Agents do not talk directly; they read and update a shared state dictionary.",
                "diagramType": "flow",
                "keyTip": "Put hard cap on loop counter (max 3 loops).",
                "commonMistake": "Letting agents overwrite each other's data."
              }
            ]
          },
          {
            "id": "drill-42-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting State graph routing, agent communication protocols, and critique gates consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "LangGraph / CrewAI / Python",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: System automatically executes self-correction loop when initial score is low.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "State Graph Orchestration",
                "instruction": "Agents do not talk directly; they read and update a shared state dictionary.",
                "diagramType": "flow",
                "keyTip": "Put hard cap on loop counter (max 3 loops).",
                "commonMistake": "Letting agents overwrite each other's data."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-42-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "LangGraph / CrewAI / Python",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "State Graph Orchestration",
                "instruction": "Agents do not talk directly; they read and update a shared state dictionary.",
                "diagramType": "flow",
                "keyTip": "Put hard cap on loop counter (max 3 loops).",
                "commonMistake": "Letting agents overwrite each other's data."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 8,
        "title": "Level 08 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Build a collaborative 3-agent orchestration (Researcher -> Writer -> Critic) that self-corrects until verified.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Build a collaborative 3-agent orchestration (Researcher -> Writer -> Critic) that self-corrects until verified.",
        "drills": [
          {
            "id": "drill-42-mastery",
            "number": 8,
            "title": "Drill 08 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Build a collaborative 3-agent orchestration (Researcher -> Writer -> Critic) that self-corrects until verified.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "LangGraph / CrewAI / Python",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Build a collaborative 3-agent orchestration (Researcher -> Writer -> Critic) that self-corrects until verified.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Build a collaborative 3-agent orchestration (Researcher -> Writer -> Critic) that self-corrects until verified.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "State Graph Orchestration",
                "instruction": "Agents do not talk directly; they read and update a shared state dictionary.",
                "diagramType": "flow",
                "keyTip": "Put hard cap on loop counter (max 3 loops).",
                "commonMistake": "Letting agents overwrite each other's data."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Build a collaborative 3-agent orchestration (Researcher -> Writer -> Critic) that self-corrects until verified.",
      "sampleVerification": "Proof submission will be evaluated against: System automatically executes self-correction loop when initial score is low."
    }
  },
  {
    "id": "skill-43",
    "number": 43,
    "title": "Build an AI Chatbot with Custom Knowledge",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Deploy a RAG chatbot answering domain questions strictly grounded in user PDF docs with zero hallucinations.",
    "prerequisites": [
      "Basic programming"
    ],
    "equipmentNeeded": [
      "Vector DB or simple embeddings",
      "Python / TypeScript"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Chatbot answers factual question with exact citation and refuses unmentioned question.",
        "unlockCondition": "Achieve Chatbot answers factual question with exact citation and refuses unmentioned question. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-43-01",
            "number": 1,
            "title": "Drill 01 \u2014 Chunking & Cosine Retrieval Pipeline",
            "objective": "Isolate and master Text chunking, embedding generation, vector similarity, and citation grounding.",
            "whyExists": "Builds clean vector retrieval that pulls exact relevant paragraph.",
            "equipment": "Vector DB or simple embeddings",
            "setup": "Ensure Vector DB or simple embeddings is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Chunk 20-page document into 500-token chunks with 50-token overlap.",
              "Generate vector embeddings using text-embedding-3-small.",
              "Perform cosine similarity query with user question.",
              "Inject top 3 chunks into system prompt under <context> tag.",
              "Instruction: 'Answer strictly using <context>. If missing, state I DO NOT KNOW.'"
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Chatbot answers factual question with exact citation and refuses unmentioned question.",
            "failureCriteria": "Model hallucinates plausible answer when context is absent.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "RAG Architecture Flow",
                "instruction": "Document -> Chunks -> Embeddings -> Vector Search -> Context Injection -> LLM Answer.",
                "diagramType": "flow",
                "keyTip": "50-token overlap prevents splitting sentences in half.",
                "commonMistake": "Chunking by arbitrary character count without sentence boundaries."
              }
            ]
          },
          {
            "id": "drill-43-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Text chunking, embedding generation, vector similarity, and citation grounding consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Vector DB or simple embeddings",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Chatbot answers factual question with exact citation and refuses unmentioned question.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "RAG Architecture Flow",
                "instruction": "Document -> Chunks -> Embeddings -> Vector Search -> Context Injection -> LLM Answer.",
                "diagramType": "flow",
                "keyTip": "50-token overlap prevents splitting sentences in half.",
                "commonMistake": "Chunking by arbitrary character count without sentence boundaries."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-43-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Vector DB or simple embeddings",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "RAG Architecture Flow",
                "instruction": "Document -> Chunks -> Embeddings -> Vector Search -> Context Injection -> LLM Answer.",
                "diagramType": "flow",
                "keyTip": "50-token overlap prevents splitting sentences in half.",
                "commonMistake": "Chunking by arbitrary character count without sentence boundaries."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Deploy a RAG chatbot answering domain questions strictly grounded in user PDF docs with zero hallucinations.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Deploy a RAG chatbot answering domain questions strictly grounded in user PDF docs with zero hallucinations.",
        "drills": [
          {
            "id": "drill-43-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Deploy a RAG chatbot answering domain questions strictly grounded in user PDF docs with zero hallucinations.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Vector DB or simple embeddings, Python / TypeScript",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Deploy a RAG chatbot answering domain questions strictly grounded in user PDF docs with zero hallucinations.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Deploy a RAG chatbot answering domain questions strictly grounded in user PDF docs with zero hallucinations.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "RAG Architecture Flow",
                "instruction": "Document -> Chunks -> Embeddings -> Vector Search -> Context Injection -> LLM Answer.",
                "diagramType": "flow",
                "keyTip": "50-token overlap prevents splitting sentences in half.",
                "commonMistake": "Chunking by arbitrary character count without sentence boundaries."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Deploy a RAG chatbot answering domain questions strictly grounded in user PDF docs with zero hallucinations.",
      "sampleVerification": "Proof submission will be evaluated against: Chatbot answers factual question with exact citation and refuses unmentioned question."
    }
  },
  {
    "id": "skill-44",
    "number": 44,
    "title": "Build an AI Automation Workflow (Make/n8n)",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Build an automated webhook trigger that ingests incoming emails, classifies intent with LLM, and updates CRM.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "n8n or Make.com account"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with End-to-end payload processes and routes to correct branch in < 3 seconds.",
        "unlockCondition": "Achieve End-to-end payload processes and routes to correct branch in < 3 seconds. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-44-01",
            "number": 1,
            "title": "Drill 01 \u2014 Webhook to LLM Intent Classifier Node",
            "objective": "Isolate and master Webhook ingestion, JSON parsing, prompt routing, and error branches.",
            "whyExists": "Builds zero-code pipeline routing leads to Support or Sales.",
            "equipment": "n8n or Make.com account",
            "setup": "Ensure n8n or Make.com account is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Create webhook trigger node receiving mock email JSON.",
              "Pass email body to OpenAI node with schema { intent: 'sales' | 'support', urgency: 1-5 }.",
              "Add Switch Router: If sales -> create CRM lead; if support -> create Zendesk ticket.",
              "Add Slack notification node for high urgency."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "End-to-end payload processes and routes to correct branch in < 3 seconds.",
            "failureCriteria": "Workflow crashes on missing fields. Add fallback error handling.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Branch Routing Logic",
                "instruction": "Trigger -> Structured Extraction -> Conditional Router -> Action A or B.",
                "diagramType": "flow",
                "keyTip": "Always test with edge cases (empty body, foreign language).",
                "commonMistake": "Hardcoding credentials inside workflow nodes."
              }
            ]
          },
          {
            "id": "drill-44-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Webhook ingestion, JSON parsing, prompt routing, and error branches consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "n8n or Make.com account",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: End-to-end payload processes and routes to correct branch in < 3 seconds.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Branch Routing Logic",
                "instruction": "Trigger -> Structured Extraction -> Conditional Router -> Action A or B.",
                "diagramType": "flow",
                "keyTip": "Always test with edge cases (empty body, foreign language).",
                "commonMistake": "Hardcoding credentials inside workflow nodes."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-44-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "n8n or Make.com account",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Branch Routing Logic",
                "instruction": "Trigger -> Structured Extraction -> Conditional Router -> Action A or B.",
                "diagramType": "flow",
                "keyTip": "Always test with edge cases (empty body, foreign language).",
                "commonMistake": "Hardcoding credentials inside workflow nodes."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Build an automated webhook trigger that ingests incoming emails, classifies intent with LLM, and updates CRM.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Build an automated webhook trigger that ingests incoming emails, classifies intent with LLM, and updates CRM.",
        "drills": [
          {
            "id": "drill-44-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Build an automated webhook trigger that ingests incoming emails, classifies intent with LLM, and updates CRM.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "n8n or Make.com account",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Build an automated webhook trigger that ingests incoming emails, classifies intent with LLM, and updates CRM.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Build an automated webhook trigger that ingests incoming emails, classifies intent with LLM, and updates CRM.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Branch Routing Logic",
                "instruction": "Trigger -> Structured Extraction -> Conditional Router -> Action A or B.",
                "diagramType": "flow",
                "keyTip": "Always test with edge cases (empty body, foreign language).",
                "commonMistake": "Hardcoding credentials inside workflow nodes."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Build an automated webhook trigger that ingests incoming emails, classifies intent with LLM, and updates CRM.",
      "sampleVerification": "Proof submission will be evaluated against: End-to-end payload processes and routes to correct branch in < 3 seconds."
    }
  },
  {
    "id": "skill-45",
    "number": 45,
    "title": "Build a SaaS MVP in 24 Hours",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Ship a live functional SaaS MVP with authentication, database storage, core AI value prop, and payment button.",
    "prerequisites": [
      "Web dev fundamentals"
    ],
    "equipmentNeeded": [
      "Next.js / Vite",
      "Supabase",
      "Vercel"
    ],
    "currentLevel": 1,
    "totalLevels": 8,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Live URL allows signup, generates value, and persists record across reloads.",
        "unlockCondition": "Achieve Live URL allows signup, generates value, and persists record across reloads. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-45-01",
            "number": 1,
            "title": "Drill 01 \u2014 End-to-End Auth & Protected Database Record",
            "objective": "Isolate and master Full-stack scaffolding, auth tokens, database RLS, and Stripe checkout.",
            "whyExists": "Deploys user login and authenticated DB mutation in 45 minutes.",
            "equipment": "Next.js / Vite",
            "setup": "Ensure Next.js / Vite is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Scaffold React app with Supabase Auth (Email / Google OAuth).",
              "Create 'projects' table with Row Level Security (RLS) restricting reads to auth.uid().",
              "Implement single core feature: User submits prompt -> saves generated result in DB.",
              "Deploy to Vercel production URL with custom domain."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Live URL allows signup, generates value, and persists record across reloads.",
            "failureCriteria": "Spending 8 hours designing a landing page before building the core loop.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Single Core Loop",
                "instruction": "User Input -> Server Process -> Saved Output -> Value Delivered.",
                "diagramType": "flow",
                "keyTip": "Use pre-built UI components (Tailwind / Shadcn). Do not invent design system.",
                "commonMistake": "Building complex team billing before verifying single user value."
              }
            ]
          },
          {
            "id": "drill-45-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Full-stack scaffolding, auth tokens, database RLS, and Stripe checkout consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Next.js / Vite",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Live URL allows signup, generates value, and persists record across reloads.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Single Core Loop",
                "instruction": "User Input -> Server Process -> Saved Output -> Value Delivered.",
                "diagramType": "flow",
                "keyTip": "Use pre-built UI components (Tailwind / Shadcn). Do not invent design system.",
                "commonMistake": "Building complex team billing before verifying single user value."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-45-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Next.js / Vite",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Single Core Loop",
                "instruction": "User Input -> Server Process -> Saved Output -> Value Delivered.",
                "diagramType": "flow",
                "keyTip": "Use pre-built UI components (Tailwind / Shadcn). Do not invent design system.",
                "commonMistake": "Building complex team billing before verifying single user value."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 8,
        "title": "Level 08 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Ship a live functional SaaS MVP with authentication, database storage, core AI value prop, and payment button.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Ship a live functional SaaS MVP with authentication, database storage, core AI value prop, and payment button.",
        "drills": [
          {
            "id": "drill-45-mastery",
            "number": 8,
            "title": "Drill 08 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Ship a live functional SaaS MVP with authentication, database storage, core AI value prop, and payment button.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Next.js / Vite, Supabase, Vercel",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Ship a live functional SaaS MVP with authentication, database storage, core AI value prop, and payment button.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Ship a live functional SaaS MVP with authentication, database storage, core AI value prop, and payment button.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Single Core Loop",
                "instruction": "User Input -> Server Process -> Saved Output -> Value Delivered.",
                "diagramType": "flow",
                "keyTip": "Use pre-built UI components (Tailwind / Shadcn). Do not invent design system.",
                "commonMistake": "Building complex team billing before verifying single user value."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Ship a live functional SaaS MVP with authentication, database storage, core AI value prop, and payment button.",
      "sampleVerification": "Proof submission will be evaluated against: Live URL allows signup, generates value, and persists record across reloads."
    }
  },
  {
    "id": "skill-46",
    "number": 46,
    "title": "Build a Mobile App (React Native / Flutter)",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "20-hours",
    "masteryDefinition": "Build and run a native mobile app on physical phone with local storage, push notifications, and camera API.",
    "prerequisites": [
      "JS or Dart basics"
    ],
    "equipmentNeeded": [
      "Expo React Native or Flutter CLI"
    ],
    "currentLevel": 1,
    "totalLevels": 7,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Camera captures, renders, and persists photo on physical hardware without crash.",
        "unlockCondition": "Achieve Camera captures, renders, and persists photo on physical hardware without crash. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-46-01",
            "number": 1,
            "title": "Drill 01 \u2014 Expo Camera Capture & Local Photo Gallery",
            "objective": "Isolate and master Native bridge APIs, AsyncStorage, touch gestures, and responsive layouts.",
            "whyExists": "Runs native hardware API access on physical iOS/Android phone.",
            "equipment": "Expo React Native or Flutter CLI",
            "setup": "Ensure Expo React Native or Flutter CLI is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Initialize Expo blank template.",
              "Implement expo-camera with permissions check.",
              "Capture photo on button press, save URI to AsyncStorage.",
              "Display captured photos in responsive 3-column FlatList.",
              "Test live on physical phone via Expo Go QR scan."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Camera captures, renders, and persists photo on physical hardware without crash.",
            "failureCriteria": "Hardcoding screen pixel dimensions causing broken layout on different devices.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Expo Native Bridge",
                "instruction": "JavaScript Thread <-> Native Bridge <-> Hardware Camera / Sensors.",
                "diagramType": "ui",
                "keyTip": "Always wrap camera calls in try-catch with permission alerts.",
                "commonMistake": "Testing only on web browser instead of real device."
              }
            ]
          },
          {
            "id": "drill-46-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Native bridge APIs, AsyncStorage, touch gestures, and responsive layouts consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Expo React Native or Flutter CLI",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Camera captures, renders, and persists photo on physical hardware without crash.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Expo Native Bridge",
                "instruction": "JavaScript Thread <-> Native Bridge <-> Hardware Camera / Sensors.",
                "diagramType": "ui",
                "keyTip": "Always wrap camera calls in try-catch with permission alerts.",
                "commonMistake": "Testing only on web browser instead of real device."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-46-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Expo React Native or Flutter CLI",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Expo Native Bridge",
                "instruction": "JavaScript Thread <-> Native Bridge <-> Hardware Camera / Sensors.",
                "diagramType": "ui",
                "keyTip": "Always wrap camera calls in try-catch with permission alerts.",
                "commonMistake": "Testing only on web browser instead of real device."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 7,
        "title": "Level 07 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Build and run a native mobile app on physical phone with local storage, push notifications, and camera API.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Build and run a native mobile app on physical phone with local storage, push notifications, and camera API.",
        "drills": [
          {
            "id": "drill-46-mastery",
            "number": 7,
            "title": "Drill 07 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Build and run a native mobile app on physical phone with local storage, push notifications, and camera API.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Expo React Native or Flutter CLI",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Build and run a native mobile app on physical phone with local storage, push notifications, and camera API.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Build and run a native mobile app on physical phone with local storage, push notifications, and camera API.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Expo Native Bridge",
                "instruction": "JavaScript Thread <-> Native Bridge <-> Hardware Camera / Sensors.",
                "diagramType": "ui",
                "keyTip": "Always wrap camera calls in try-catch with permission alerts.",
                "commonMistake": "Testing only on web browser instead of real device."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Build and run a native mobile app on physical phone with local storage, push notifications, and camera API.",
      "sampleVerification": "Proof submission will be evaluated against: Camera captures, renders, and persists photo on physical hardware without crash."
    }
  },
  {
    "id": "skill-47",
    "number": 47,
    "title": "API Integration & Webhook Engineering",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Implement authenticated REST/GraphQL API consumption with retry backoff, ratelimiting, and webhook signing.",
    "prerequisites": [
      "Basic coding"
    ],
    "equipmentNeeded": [
      "Terminal, curl, Postman or Node"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Endpoint accepts valid signed requests and rejects tampered payloads with 401.",
        "unlockCondition": "Achieve Endpoint accepts valid signed requests and rejects tampered payloads with 401. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-47-01",
            "number": 1,
            "title": "Drill 01 \u2014 Secure Webhook Signature Verification Endpoint",
            "objective": "Isolate and master Exponential backoff, HMAC SHA256 signature verification, and idempotency keys.",
            "whyExists": "Prevents replay attacks and unauthorized payload injection.",
            "equipment": "Terminal, curl, Postman or Node",
            "setup": "Ensure Terminal, curl, Postman or Node is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Create HTTP POST endpoint '/api/webhooks'.",
              "Extract raw request body buffer and 'x-signature' header.",
              "Compute HMAC-SHA256 hash of raw body using shared secret.",
              "Compare computed hash with header using constant-time timingSafeEqual.",
              "Return HTTP 200 immediately, then process payload asynchronously."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Endpoint accepts valid signed requests and rejects tampered payloads with 401.",
            "failureCriteria": "Verifying signature after body parser has altered JSON formatting.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "HMAC Verification Flow",
                "instruction": "Raw Buffer + Secret -> Crypto HMAC -> Compare with Header Signature.",
                "diagramType": "flow",
                "keyTip": "Use crypto.timingSafeEqual to prevent timing attacks.",
                "commonMistake": "Parsing body as JSON before calculating hash."
              }
            ]
          },
          {
            "id": "drill-47-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Exponential backoff, HMAC SHA256 signature verification, and idempotency keys consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Terminal, curl, Postman or Node",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Endpoint accepts valid signed requests and rejects tampered payloads with 401.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "HMAC Verification Flow",
                "instruction": "Raw Buffer + Secret -> Crypto HMAC -> Compare with Header Signature.",
                "diagramType": "flow",
                "keyTip": "Use crypto.timingSafeEqual to prevent timing attacks.",
                "commonMistake": "Parsing body as JSON before calculating hash."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-47-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Terminal, curl, Postman or Node",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "HMAC Verification Flow",
                "instruction": "Raw Buffer + Secret -> Crypto HMAC -> Compare with Header Signature.",
                "diagramType": "flow",
                "keyTip": "Use crypto.timingSafeEqual to prevent timing attacks.",
                "commonMistake": "Parsing body as JSON before calculating hash."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Implement authenticated REST/GraphQL API consumption with retry backoff, ratelimiting, and webhook signing.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Implement authenticated REST/GraphQL API consumption with retry backoff, ratelimiting, and webhook signing.",
        "drills": [
          {
            "id": "drill-47-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Implement authenticated REST/GraphQL API consumption with retry backoff, ratelimiting, and webhook signing.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Terminal, curl, Postman or Node",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Implement authenticated REST/GraphQL API consumption with retry backoff, ratelimiting, and webhook signing.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Implement authenticated REST/GraphQL API consumption with retry backoff, ratelimiting, and webhook signing.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "HMAC Verification Flow",
                "instruction": "Raw Buffer + Secret -> Crypto HMAC -> Compare with Header Signature.",
                "diagramType": "flow",
                "keyTip": "Use crypto.timingSafeEqual to prevent timing attacks.",
                "commonMistake": "Parsing body as JSON before calculating hash."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Implement authenticated REST/GraphQL API consumption with retry backoff, ratelimiting, and webhook signing.",
      "sampleVerification": "Proof submission will be evaluated against: Endpoint accepts valid signed requests and rejects tampered payloads with 401."
    }
  },
  {
    "id": "skill-48",
    "number": 48,
    "title": "Web Scraping & Data Extraction Pipeline",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Build a resilient scraper that extracts structured product data from dynamic JS pages into clean JSON/CSV.",
    "prerequisites": [
      "Python basics"
    ],
    "equipmentNeeded": [
      "Playwright / Beautiful Soup"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 50/50 items extracted with zero missing fields.",
        "unlockCondition": "Achieve 50/50 items extracted with zero missing fields. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-48-01",
            "number": 1,
            "title": "Drill 01 \u2014 Playwright Infinite Scroll Scraper",
            "objective": "Isolate and master Headless browser automation, CSS selector paths, and pagination loops.",
            "whyExists": "Extracts items from pages that load data dynamically on scroll.",
            "equipment": "Playwright / Beautiful Soup",
            "setup": "Ensure Playwright / Beautiful Soup is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Launch headless Chromium browser via Playwright.",
              "Navigate to target e-commerce catalogue.",
              "Execute evaluate script scrolling page bottom until height stops changing.",
              "Extract title, price, and image URL using robust CSS selectors.",
              "Export 50 clean records to products.json."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "50/50 items extracted with zero missing fields.",
            "failureCriteria": "Scraper crashes when single selector is missing. Use defensive fallback .get().",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Headless DOM Execution",
                "instruction": "Wait for networkidle -> Scroll -> Wait for selector -> Map elements -> Extract.",
                "diagramType": "flow",
                "keyTip": "Set realistic user-agent header to avoid instant 403 blocks.",
                "commonMistake": "Hardcoding brittle absolute XPath selectors."
              }
            ]
          },
          {
            "id": "drill-48-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Headless browser automation, CSS selector paths, and pagination loops consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Playwright / Beautiful Soup",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 50/50 items extracted with zero missing fields.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Headless DOM Execution",
                "instruction": "Wait for networkidle -> Scroll -> Wait for selector -> Map elements -> Extract.",
                "diagramType": "flow",
                "keyTip": "Set realistic user-agent header to avoid instant 403 blocks.",
                "commonMistake": "Hardcoding brittle absolute XPath selectors."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-48-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Playwright / Beautiful Soup",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Headless DOM Execution",
                "instruction": "Wait for networkidle -> Scroll -> Wait for selector -> Map elements -> Extract.",
                "diagramType": "flow",
                "keyTip": "Set realistic user-agent header to avoid instant 403 blocks.",
                "commonMistake": "Hardcoding brittle absolute XPath selectors."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Build a resilient scraper that extracts structured product data from dynamic JS pages into clean JSON/CSV.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Build a resilient scraper that extracts structured product data from dynamic JS pages into clean JSON/CSV.",
        "drills": [
          {
            "id": "drill-48-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Build a resilient scraper that extracts structured product data from dynamic JS pages into clean JSON/CSV.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Playwright / Beautiful Soup",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Build a resilient scraper that extracts structured product data from dynamic JS pages into clean JSON/CSV.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Build a resilient scraper that extracts structured product data from dynamic JS pages into clean JSON/CSV.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Headless DOM Execution",
                "instruction": "Wait for networkidle -> Scroll -> Wait for selector -> Map elements -> Extract.",
                "diagramType": "flow",
                "keyTip": "Set realistic user-agent header to avoid instant 403 blocks.",
                "commonMistake": "Hardcoding brittle absolute XPath selectors."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Build a resilient scraper that extracts structured product data from dynamic JS pages into clean JSON/CSV.",
      "sampleVerification": "Proof submission will be evaluated against: 50/50 items extracted with zero missing fields."
    }
  },
  {
    "id": "skill-49",
    "number": 49,
    "title": "Prompt Engineering (Few-Shot, CoT, System Prompts)",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "1-hour",
    "masteryDefinition": "Craft production system prompts yielding structured JSON schemas with <=0.5% failure rate on edge cases.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "LLM Playground / Terminal"
    ],
    "currentLevel": 1,
    "totalLevels": 4,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 20/20 test inputs return valid parseable JSON matching target schema.",
        "unlockCondition": "Achieve 20/20 test inputs return valid parseable JSON matching target schema. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-49-01",
            "number": 1,
            "title": "Drill 01 \u2014 Edge-Case Hardened Few-Shot JSON Prompt",
            "objective": "Isolate and master XML tag structuring, negative constraints, and few-shot calibration.",
            "whyExists": "Forces LLM to handle conflicting instructions and return valid schema.",
            "equipment": "LLM Playground / Terminal",
            "setup": "Ensure LLM Playground / Terminal is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Define task: Extract sentiment and key entities from messy customer reviews.",
              "Wrap instructions in semantic XML tags: <rules>, <schema>, <examples>.",
              "Include 3 few-shot examples covering edge cases (sarcasm, multiple languages, missing data).",
              "Test across 20 adversarial test inputs."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "20/20 test inputs return valid parseable JSON matching target schema.",
            "failureCriteria": "Model outputs markdown backticks ```json or conversational preamble.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Semantic XML Tag Prompting",
                "instruction": "Structure prompts into <context>, <rules>, <output_format>, and <examples>.",
                "diagramType": "text",
                "keyTip": "Show, don't just tell: 3 few-shot examples beat 500 words of instructions.",
                "commonMistake": "Using vague adjectives like 'be accurate' instead of negative rules."
              }
            ]
          },
          {
            "id": "drill-49-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting XML tag structuring, negative constraints, and few-shot calibration consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "LLM Playground / Terminal",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 20/20 test inputs return valid parseable JSON matching target schema.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Semantic XML Tag Prompting",
                "instruction": "Structure prompts into <context>, <rules>, <output_format>, and <examples>.",
                "diagramType": "text",
                "keyTip": "Show, don't just tell: 3 few-shot examples beat 500 words of instructions.",
                "commonMistake": "Using vague adjectives like 'be accurate' instead of negative rules."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-49-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "LLM Playground / Terminal",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Semantic XML Tag Prompting",
                "instruction": "Structure prompts into <context>, <rules>, <output_format>, and <examples>.",
                "diagramType": "text",
                "keyTip": "Show, don't just tell: 3 few-shot examples beat 500 words of instructions.",
                "commonMistake": "Using vague adjectives like 'be accurate' instead of negative rules."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 4,
        "title": "Level 04 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Craft production system prompts yielding structured JSON schemas with <=0.5% failure rate on edge cases.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Craft production system prompts yielding structured JSON schemas with <=0.5% failure rate on edge cases.",
        "drills": [
          {
            "id": "drill-49-mastery",
            "number": 4,
            "title": "Drill 04 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Craft production system prompts yielding structured JSON schemas with <=0.5% failure rate on edge cases.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "LLM Playground / Terminal",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Craft production system prompts yielding structured JSON schemas with <=0.5% failure rate on edge cases.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Craft production system prompts yielding structured JSON schemas with <=0.5% failure rate on edge cases.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Semantic XML Tag Prompting",
                "instruction": "Structure prompts into <context>, <rules>, <output_format>, and <examples>.",
                "diagramType": "text",
                "keyTip": "Show, don't just tell: 3 few-shot examples beat 500 words of instructions.",
                "commonMistake": "Using vague adjectives like 'be accurate' instead of negative rules."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Craft production system prompts yielding structured JSON schemas with <=0.5% failure rate on edge cases.",
      "sampleVerification": "Proof submission will be evaluated against: 20/20 test inputs return valid parseable JSON matching target schema."
    }
  },
  {
    "id": "skill-50",
    "number": 50,
    "title": "AI-Assisted Coding (10x Developer Velocity)",
    "domainId": "technology",
    "domainCode": "E",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Refactor a 500-line codebase and implement 3 full-stack features using AI coding agents with zero syntax errors.",
    "prerequisites": [
      "Basic programming"
    ],
    "equipmentNeeded": [
      "Cursor / VSCode / CLI agent"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 100% test pass rate with clean modular code architecture.",
        "unlockCondition": "Achieve 100% test pass rate with clean modular code architecture. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-50-01",
            "number": 1,
            "title": "Drill 01 \u2014 Test-Driven Agent Refactor Sprint",
            "objective": "Isolate and master Context curation (@file, @diff), prompt decomposition, and verification tests.",
            "whyExists": "Directs coding agent to rewrite messy code without breaking contracts.",
            "equipment": "Cursor / VSCode / CLI agent",
            "setup": "Ensure Cursor / VSCode / CLI agent is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Write strict unit tests for existing functionality.",
              "Feed test suite and target module into agent context.",
              "Prompt: 'Refactor module for modularity and performance without modifying test assertions'.",
              "Run test suite. Agent must fix any failing test autonomously."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "100% test pass rate with clean modular code architecture.",
            "failureCriteria": "Accepting AI code without running unit tests or inspecting git diff.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The AI Coding Loop",
                "instruction": "Write Test -> Prompt Agent with Context -> Review Git Diff -> Run Tests -> Commit.",
                "diagramType": "flow",
                "keyTip": "Keep prompts atomic: one function or component at a time.",
                "commonMistake": "Asking agent to 'build entire app' in one giant prompt."
              }
            ]
          },
          {
            "id": "drill-50-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Context curation (@file, @diff), prompt decomposition, and verification tests consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Cursor / VSCode / CLI agent",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 100% test pass rate with clean modular code architecture.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The AI Coding Loop",
                "instruction": "Write Test -> Prompt Agent with Context -> Review Git Diff -> Run Tests -> Commit.",
                "diagramType": "flow",
                "keyTip": "Keep prompts atomic: one function or component at a time.",
                "commonMistake": "Asking agent to 'build entire app' in one giant prompt."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-50-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Cursor / VSCode / CLI agent",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The AI Coding Loop",
                "instruction": "Write Test -> Prompt Agent with Context -> Review Git Diff -> Run Tests -> Commit.",
                "diagramType": "flow",
                "keyTip": "Keep prompts atomic: one function or component at a time.",
                "commonMistake": "Asking agent to 'build entire app' in one giant prompt."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Refactor a 500-line codebase and implement 3 full-stack features using AI coding agents with zero syntax errors.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Refactor a 500-line codebase and implement 3 full-stack features using AI coding agents with zero syntax errors.",
        "drills": [
          {
            "id": "drill-50-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Refactor a 500-line codebase and implement 3 full-stack features using AI coding agents with zero syntax errors.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Cursor / VSCode / CLI agent",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Refactor a 500-line codebase and implement 3 full-stack features using AI coding agents with zero syntax errors.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Refactor a 500-line codebase and implement 3 full-stack features using AI coding agents with zero syntax errors.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The AI Coding Loop",
                "instruction": "Write Test -> Prompt Agent with Context -> Review Git Diff -> Run Tests -> Commit.",
                "diagramType": "flow",
                "keyTip": "Keep prompts atomic: one function or component at a time.",
                "commonMistake": "Asking agent to 'build entire app' in one giant prompt."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "github-repo",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Refactor a 500-line codebase and implement 3 full-stack features using AI coding agents with zero syntax errors.",
      "sampleVerification": "Proof submission will be evaluated against: 100% test pass rate with clean modular code architecture."
    }
  },
  {
    "id": "skill-51",
    "number": 51,
    "title": "Public Speaking (5-minute Keynote without notes)",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Deliver a 5-minute keynote on camera without notes, pacing at 140 WPM with commanding eye contact.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Smartphone camera",
      "Timer"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Movement occurs strictly on transition moments; zero aimless wandering.",
        "unlockCondition": "Achieve Movement occurs strictly on transition moments; zero aimless wandering. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-51-01",
            "number": 1,
            "title": "Drill 01 \u2014 Spatial Anchoring 3-Point Stage Walk",
            "objective": "Isolate and master Spatial anchoring, vocal cadence, and 3-point audience gaze.",
            "whyExists": "Eliminates nervous pacing and ties physical movements to speech structure.",
            "equipment": "Smartphone camera",
            "setup": "Ensure Smartphone camera is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Stage center = Present (Home base).",
              "Stage left = Past / The Problem.",
              "Stage right = Future / The Solution.",
              "Practice shifting position only when transitioning between major conceptual points.",
              "Record 3-minute delivery."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Movement occurs strictly on transition moments; zero aimless wandering.",
            "failureCriteria": "Pacing back and forth like a caged animal or standing frozen stiff.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Spatial Anchoring",
                "instruction": "Stand still while delivering an idea. Walk only during the transition pause.",
                "diagramType": "posture",
                "keyTip": "Plant feet shoulder-width apart, weight balanced on both heels.",
                "commonMistake": "Swaying from foot to foot."
              }
            ]
          },
          {
            "id": "drill-51-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Spatial anchoring, vocal cadence, and 3-point audience gaze consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Smartphone camera",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Movement occurs strictly on transition moments; zero aimless wandering.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Spatial Anchoring",
                "instruction": "Stand still while delivering an idea. Walk only during the transition pause.",
                "diagramType": "posture",
                "keyTip": "Plant feet shoulder-width apart, weight balanced on both heels.",
                "commonMistake": "Swaying from foot to foot."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-51-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Smartphone camera",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Spatial Anchoring",
                "instruction": "Stand still while delivering an idea. Walk only during the transition pause.",
                "diagramType": "posture",
                "keyTip": "Plant feet shoulder-width apart, weight balanced on both heels.",
                "commonMistake": "Swaying from foot to foot."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Deliver a 5-minute keynote on camera without notes, pacing at 140 WPM with commanding eye contact.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Deliver a 5-minute keynote on camera without notes, pacing at 140 WPM with commanding eye contact.",
        "drills": [
          {
            "id": "drill-51-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Deliver a 5-minute keynote on camera without notes, pacing at 140 WPM with commanding eye contact.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Smartphone camera, Timer",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Deliver a 5-minute keynote on camera without notes, pacing at 140 WPM with commanding eye contact.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Deliver a 5-minute keynote on camera without notes, pacing at 140 WPM with commanding eye contact.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Spatial Anchoring",
                "instruction": "Stand still while delivering an idea. Walk only during the transition pause.",
                "diagramType": "posture",
                "keyTip": "Plant feet shoulder-width apart, weight balanced on both heels.",
                "commonMistake": "Swaying from foot to foot."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Deliver a 5-minute keynote on camera without notes, pacing at 140 WPM with commanding eye contact.",
      "sampleVerification": "Proof submission will be evaluated against: Movement occurs strictly on transition moments; zero aimless wandering."
    }
  },
  {
    "id": "skill-52",
    "number": 52,
    "title": "Verbal Storytelling & Pitching",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Pitch an idea in 60 seconds using Problem -> Solution -> Proof -> Call to Action with undeniable clarity.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Audio recorder"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Pitch completes in 55-60s with crystal clear proposition.",
        "unlockCondition": "Achieve Pitch completes in 55-60s with crystal clear proposition. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-52-01",
            "number": 1,
            "title": "Drill 01 \u2014 60-Second Elevator Pitch Timer",
            "objective": "Isolate and master Value proposition compression & punchy CTA.",
            "whyExists": "Forces ruthless elimination of unnecessary fluff.",
            "equipment": "Audio recorder",
            "setup": "Ensure Audio recorder is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "00-15s: Name the painful bleeding problem.",
              "15-30s: Present unique mechanism of solution.",
              "30-45s: Deliver single undeniable data proof point.",
              "45-60s: Issue clear, friction-free Call to Action."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Pitch completes in 55-60s with crystal clear proposition.",
            "failureCriteria": "Running out of time during problem explanation. Cut backstory.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 4-Quarter Pitch",
                "instruction": "Problem (15s) -> Solution (15s) -> Proof (15s) -> Action (15s).",
                "diagramType": "split",
                "keyTip": "Use the word 'Because' to link problem and proof.",
                "commonMistake": "Talking about product features instead of customer outcome."
              }
            ]
          },
          {
            "id": "drill-52-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Value proposition compression & punchy CTA consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Audio recorder",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Pitch completes in 55-60s with crystal clear proposition.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 4-Quarter Pitch",
                "instruction": "Problem (15s) -> Solution (15s) -> Proof (15s) -> Action (15s).",
                "diagramType": "split",
                "keyTip": "Use the word 'Because' to link problem and proof.",
                "commonMistake": "Talking about product features instead of customer outcome."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-52-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Audio recorder",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 4-Quarter Pitch",
                "instruction": "Problem (15s) -> Solution (15s) -> Proof (15s) -> Action (15s).",
                "diagramType": "split",
                "keyTip": "Use the word 'Because' to link problem and proof.",
                "commonMistake": "Talking about product features instead of customer outcome."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Pitch an idea in 60 seconds using Problem -> Solution -> Proof -> Call to Action with undeniable clarity.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Pitch an idea in 60 seconds using Problem -> Solution -> Proof -> Call to Action with undeniable clarity.",
        "drills": [
          {
            "id": "drill-52-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Pitch an idea in 60 seconds using Problem -> Solution -> Proof -> Call to Action with undeniable clarity.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Audio recorder",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Pitch an idea in 60 seconds using Problem -> Solution -> Proof -> Call to Action with undeniable clarity.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Pitch an idea in 60 seconds using Problem -> Solution -> Proof -> Call to Action with undeniable clarity.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 4-Quarter Pitch",
                "instruction": "Problem (15s) -> Solution (15s) -> Proof (15s) -> Action (15s).",
                "diagramType": "split",
                "keyTip": "Use the word 'Because' to link problem and proof.",
                "commonMistake": "Talking about product features instead of customer outcome."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Pitch an idea in 60 seconds using Problem -> Solution -> Proof -> Call to Action with undeniable clarity.",
      "sampleVerification": "Proof submission will be evaluated against: Pitch completes in 55-60s with crystal clear proposition."
    }
  },
  {
    "id": "skill-53",
    "number": 53,
    "title": "Speaking without Filler Words (Zero 'Um' / 'Like')",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Speak continuously for 3 minutes on impromptu topic with zero filler words ('um', 'uh', 'like', 'you know').",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Audio recording app",
      "Buzzer or metronome"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 2-minute speech completed with exactly ZERO filler words.",
        "unlockCondition": "Achieve 2-minute speech completed with exactly ZERO filler words. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-53-01",
            "number": 1,
            "title": "Drill 01 \u2014 The 2-Second Deliberate Silence Swap",
            "objective": "Isolate and master The deliberate silence pause replacement.",
            "whyExists": "Rewires the brain to close mouth when thinking rather than emitting filler sound.",
            "equipment": "Audio recording app",
            "setup": "Ensure Audio recording app is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Pick random noun: e.g. 'Submarines'.",
              "Speak for 2 minutes on the topic.",
              "Rule: Whenever you search for the next word, lock lips together and breathe in silence for 1-2 seconds.",
              "Zero 'um', 'uh', 'so', 'like' allowed."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "2-minute speech completed with exactly ZERO filler words.",
            "failureCriteria": "Letting single 'um' slip out. Immediate restart of the 2-minute timer.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Locked Lip Pause",
                "instruction": "When your brain searches for a thought, press lips together. Silence sounds powerful to an audience.",
                "diagramType": "posture",
                "keyTip": "An audience experiences silence as confidence, not hesitation.",
                "commonMistake": "Fearing silence and filling air with verbal garbage."
              }
            ]
          },
          {
            "id": "drill-53-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting The deliberate silence pause replacement consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Audio recording app",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 2-minute speech completed with exactly ZERO filler words.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Locked Lip Pause",
                "instruction": "When your brain searches for a thought, press lips together. Silence sounds powerful to an audience.",
                "diagramType": "posture",
                "keyTip": "An audience experiences silence as confidence, not hesitation.",
                "commonMistake": "Fearing silence and filling air with verbal garbage."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-53-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Audio recording app",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Locked Lip Pause",
                "instruction": "When your brain searches for a thought, press lips together. Silence sounds powerful to an audience.",
                "diagramType": "posture",
                "keyTip": "An audience experiences silence as confidence, not hesitation.",
                "commonMistake": "Fearing silence and filling air with verbal garbage."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Speak continuously for 3 minutes on impromptu topic with zero filler words ('um', 'uh', 'like', 'you know').",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Speak continuously for 3 minutes on impromptu topic with zero filler words ('um', 'uh', 'like', 'you know').",
        "drills": [
          {
            "id": "drill-53-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Speak continuously for 3 minutes on impromptu topic with zero filler words ('um', 'uh', 'like', 'you know').",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Audio recording app, Buzzer or metronome",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Speak continuously for 3 minutes on impromptu topic with zero filler words ('um', 'uh', 'like', 'you know').",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Speak continuously for 3 minutes on impromptu topic with zero filler words ('um', 'uh', 'like', 'you know').",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Locked Lip Pause",
                "instruction": "When your brain searches for a thought, press lips together. Silence sounds powerful to an audience.",
                "diagramType": "posture",
                "keyTip": "An audience experiences silence as confidence, not hesitation.",
                "commonMistake": "Fearing silence and filling air with verbal garbage."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Speak continuously for 3 minutes on impromptu topic with zero filler words ('um', 'uh', 'like', 'you know').",
      "sampleVerification": "Proof submission will be evaluated against: 2-minute speech completed with exactly ZERO filler words."
    }
  },
  {
    "id": "skill-54",
    "number": 54,
    "title": "Voice Control (Resonance, Pace, Projection)",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Modulate diaphragmatic chest resonance, pitch variance, and dynamic pauses through a 2-minute monologue.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Microphone or smartphone"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Audio waveform shows rich lower-mid harmonics (100-250 Hz).",
        "unlockCondition": "Achieve Audio waveform shows rich lower-mid harmonics (100-250 Hz). in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-54-01",
            "number": 1,
            "title": "Drill 01 \u2014 'Um-Hum' Chest Resonance Placement",
            "objective": "Isolate and master Diaphragmatic support & chest cavity resonance.",
            "whyExists": "Drops pitch from throat into rich chest cavity.",
            "equipment": "Microphone or smartphone",
            "setup": "Ensure Microphone or smartphone is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Place palm flat on upper sternum.",
              "Say 'Um-Hum' like agreeing warmly with someone.",
              "Feel the physical vibration buzzing under your palm in chest bone.",
              "Speak monologue maintaining that exact buzzing chest vibration."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Audio waveform shows rich lower-mid harmonics (100-250 Hz).",
            "failureCriteria": "Voice thins out into nasal head register when stressed.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Diaphragm vs Throat Breathing",
                "instruction": "Breathe into belly and lower ribs, not upper shoulders. Belly expands on inhale.",
                "diagramType": "posture",
                "keyTip": "Drop jaw down to create acoustic resonating space in mouth.",
                "commonMistake": "Lifting shoulders when taking a deep breath."
              }
            ]
          },
          {
            "id": "drill-54-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Diaphragmatic support & chest cavity resonance consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Microphone or smartphone",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Audio waveform shows rich lower-mid harmonics (100-250 Hz).",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Diaphragm vs Throat Breathing",
                "instruction": "Breathe into belly and lower ribs, not upper shoulders. Belly expands on inhale.",
                "diagramType": "posture",
                "keyTip": "Drop jaw down to create acoustic resonating space in mouth.",
                "commonMistake": "Lifting shoulders when taking a deep breath."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-54-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Microphone or smartphone",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Diaphragm vs Throat Breathing",
                "instruction": "Breathe into belly and lower ribs, not upper shoulders. Belly expands on inhale.",
                "diagramType": "posture",
                "keyTip": "Drop jaw down to create acoustic resonating space in mouth.",
                "commonMistake": "Lifting shoulders when taking a deep breath."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Modulate diaphragmatic chest resonance, pitch variance, and dynamic pauses through a 2-minute monologue.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Modulate diaphragmatic chest resonance, pitch variance, and dynamic pauses through a 2-minute monologue.",
        "drills": [
          {
            "id": "drill-54-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Modulate diaphragmatic chest resonance, pitch variance, and dynamic pauses through a 2-minute monologue.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Microphone or smartphone",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Modulate diaphragmatic chest resonance, pitch variance, and dynamic pauses through a 2-minute monologue.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Modulate diaphragmatic chest resonance, pitch variance, and dynamic pauses through a 2-minute monologue.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Diaphragm vs Throat Breathing",
                "instruction": "Breathe into belly and lower ribs, not upper shoulders. Belly expands on inhale.",
                "diagramType": "posture",
                "keyTip": "Drop jaw down to create acoustic resonating space in mouth.",
                "commonMistake": "Lifting shoulders when taking a deep breath."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "audio-recording",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Modulate diaphragmatic chest resonance, pitch variance, and dynamic pauses through a 2-minute monologue.",
      "sampleVerification": "Proof submission will be evaluated against: Audio waveform shows rich lower-mid harmonics (100-250 Hz)."
    }
  },
  {
    "id": "skill-55",
    "number": 55,
    "title": "Negotiation (Chris Voss Tactical Empathy)",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Conduct a simulated salary/price negotiation using mirroring, labeling, and calibrated 'How' questions.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Roleplay partner or AI Coach"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Counterpart responds with 'That's right' (not 'You're right') and reveals concession.",
        "unlockCondition": "Achieve Counterpart responds with 'That's right' (not 'You're right') and reveals concession. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-55-01",
            "number": 1,
            "title": "Drill 01 \u2014 3-Step Mirror and Label Sequence",
            "objective": "Isolate and master Mirroring last 3 words, emotion labeling, and 'No'-oriented questions.",
            "whyExists": "Disarms counterpart resistance and draws out hidden constraints.",
            "equipment": "Roleplay partner or AI Coach",
            "setup": "Ensure Roleplay partner or AI Coach is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Step 1: Repeat the last 1 to 3 critical words counterpart said with upward inflection.",
              "Step 2: Silence (let them fill the void).",
              "Step 3: Label their emotion: 'It sounds like you feel under unreasonable pressure from leadership.'",
              "Execute in 5 negotiation scenarios."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Counterpart responds with 'That's right' (not 'You're right') and reveals concession.",
            "failureCriteria": "Arguing logic or saying 'I understand how you feel'.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Mirror & Label Flow",
                "instruction": "Mirror last 3 words -> 4s Pause -> Label emotion ('It seems like...') -> 4s Pause.",
                "diagramType": "flow",
                "keyTip": "Use the late-night FM DJ voice: calm, slow, downward inflection.",
                "commonMistake": "Trying to convince with logical arguments instead of uncovering emotions."
              }
            ]
          },
          {
            "id": "drill-55-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Mirroring last 3 words, emotion labeling, and 'No'-oriented questions consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Roleplay partner or AI Coach",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Counterpart responds with 'That's right' (not 'You're right') and reveals concession.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Mirror & Label Flow",
                "instruction": "Mirror last 3 words -> 4s Pause -> Label emotion ('It seems like...') -> 4s Pause.",
                "diagramType": "flow",
                "keyTip": "Use the late-night FM DJ voice: calm, slow, downward inflection.",
                "commonMistake": "Trying to convince with logical arguments instead of uncovering emotions."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-55-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Roleplay partner or AI Coach",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Mirror & Label Flow",
                "instruction": "Mirror last 3 words -> 4s Pause -> Label emotion ('It seems like...') -> 4s Pause.",
                "diagramType": "flow",
                "keyTip": "Use the late-night FM DJ voice: calm, slow, downward inflection.",
                "commonMistake": "Trying to convince with logical arguments instead of uncovering emotions."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Conduct a simulated salary/price negotiation using mirroring, labeling, and calibrated 'How' questions.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Conduct a simulated salary/price negotiation using mirroring, labeling, and calibrated 'How' questions.",
        "drills": [
          {
            "id": "drill-55-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Conduct a simulated salary/price negotiation using mirroring, labeling, and calibrated 'How' questions.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Roleplay partner or AI Coach",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Conduct a simulated salary/price negotiation using mirroring, labeling, and calibrated 'How' questions.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Conduct a simulated salary/price negotiation using mirroring, labeling, and calibrated 'How' questions.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Mirror & Label Flow",
                "instruction": "Mirror last 3 words -> 4s Pause -> Label emotion ('It seems like...') -> 4s Pause.",
                "diagramType": "flow",
                "keyTip": "Use the late-night FM DJ voice: calm, slow, downward inflection.",
                "commonMistake": "Trying to convince with logical arguments instead of uncovering emotions."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Conduct a simulated salary/price negotiation using mirroring, labeling, and calibrated 'How' questions.",
      "sampleVerification": "Proof submission will be evaluated against: Counterpart responds with 'That's right' (not 'You're right') and reveals concession."
    }
  },
  {
    "id": "skill-56",
    "number": 56,
    "title": "Sales Discovery Call Execution",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Lead a 15-minute discovery call uncovering budget, authority, need, and timeline (BANT) without hard selling.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Call script / recorder"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Prospect speaks for >70% of call duration and states financial urgency.",
        "unlockCondition": "Achieve Prospect speaks for >70% of call duration and states financial urgency. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-56-01",
            "number": 1,
            "title": "Drill 01 \u2014 SPUR Implication Questioning Drill",
            "objective": "Isolate and master Problem implication questions & prospect talk ratio (70/30).",
            "whyExists": "Takes a surface symptom and quantifies the financial bleed.",
            "equipment": "Call script / recorder",
            "setup": "Ensure Call script / recorder is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Ask: 'What happens if this isn't solved in the next 6 months?'",
              "Prospect answers with operational difficulty.",
              "Follow up: 'What does that delay cost the business in lost revenue or developer hours?'",
              "Prospect calculates the financial loss themselves."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Prospect speaks for >70% of call duration and states financial urgency.",
            "failureCriteria": "Sales rep pitching product features before problem cost is quantified.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "70/30 Rule",
                "instruction": "You speak 30% of the time (asking questions); prospect speaks 70% of the time.",
                "diagramType": "split",
                "keyTip": "Never accept surface answers: ask 'Can you walk me through an example of that?'.",
                "commonMistake": "Rushing into a product demo in the first 10 minutes."
              }
            ]
          },
          {
            "id": "drill-56-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Problem implication questions & prospect talk ratio (70/30) consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Call script / recorder",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Prospect speaks for >70% of call duration and states financial urgency.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "70/30 Rule",
                "instruction": "You speak 30% of the time (asking questions); prospect speaks 70% of the time.",
                "diagramType": "split",
                "keyTip": "Never accept surface answers: ask 'Can you walk me through an example of that?'.",
                "commonMistake": "Rushing into a product demo in the first 10 minutes."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-56-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Call script / recorder",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "70/30 Rule",
                "instruction": "You speak 30% of the time (asking questions); prospect speaks 70% of the time.",
                "diagramType": "split",
                "keyTip": "Never accept surface answers: ask 'Can you walk me through an example of that?'.",
                "commonMistake": "Rushing into a product demo in the first 10 minutes."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Lead a 15-minute discovery call uncovering budget, authority, need, and timeline (BANT) without hard selling.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Lead a 15-minute discovery call uncovering budget, authority, need, and timeline (BANT) without hard selling.",
        "drills": [
          {
            "id": "drill-56-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Lead a 15-minute discovery call uncovering budget, authority, need, and timeline (BANT) without hard selling.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Call script / recorder",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Lead a 15-minute discovery call uncovering budget, authority, need, and timeline (BANT) without hard selling.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Lead a 15-minute discovery call uncovering budget, authority, need, and timeline (BANT) without hard selling.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "70/30 Rule",
                "instruction": "You speak 30% of the time (asking questions); prospect speaks 70% of the time.",
                "diagramType": "split",
                "keyTip": "Never accept surface answers: ask 'Can you walk me through an example of that?'.",
                "commonMistake": "Rushing into a product demo in the first 10 minutes."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Lead a 15-minute discovery call uncovering budget, authority, need, and timeline (BANT) without hard selling.",
      "sampleVerification": "Proof submission will be evaluated against: Prospect speaks for >70% of call duration and states financial urgency."
    }
  },
  {
    "id": "skill-57",
    "number": 57,
    "title": "Cold Outreach (Email & LinkedIn that Converts)",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "cognitive",
    "timeCategory": "1-hour",
    "masteryDefinition": "Write 5 personalized 3-sentence cold emails with tailored value triggers achieving >=40% open and 15% reply rate.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Email client",
      "LinkedIn"
    ],
    "currentLevel": 1,
    "totalLevels": 4,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with All 5 emails under 65 words total with zero generic praise.",
        "unlockCondition": "Achieve All 5 emails under 65 words total with zero generic praise. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-57-01",
            "number": 1,
            "title": "Drill 01 \u2014 The 3-Sentence Cold Email Formula",
            "objective": "Isolate and master Relevant observation, low-friction offer, and zero-ask CTA.",
            "whyExists": "Builds emails that fit entirely on mobile screen without scrolling.",
            "equipment": "Email client",
            "setup": "Ensure Email client is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Sentence 1 (Trigger): Specific observation about their company/podcast/post.",
              "Sentence 2 (Pain & Asset): 'Noticed X bottleneck; built a quick loom/teardown showing how Y solved it.'",
              "Sentence 3 (Low Friction CTA): 'Open to seeing the 2-minute video, or bad timing?'",
              "Draft 5 emails in 30 minutes."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "All 5 emails under 65 words total with zero generic praise.",
            "failureCriteria": "Writing long introductory bio: 'My name is X and my agency does Y...'.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "3-Sentence Architecture",
                "instruction": "Sentence 1: Context/Trigger. Sentence 2: Value/Asset. Sentence 3: Friction-free CTA.",
                "diagramType": "text",
                "keyTip": "Ask 'Is it bad timing?' (people love saying No).",
                "commonMistake": "Asking for a 30-minute phone call in the first email."
              }
            ]
          },
          {
            "id": "drill-57-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Relevant observation, low-friction offer, and zero-ask CTA consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Email client",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: All 5 emails under 65 words total with zero generic praise.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "3-Sentence Architecture",
                "instruction": "Sentence 1: Context/Trigger. Sentence 2: Value/Asset. Sentence 3: Friction-free CTA.",
                "diagramType": "text",
                "keyTip": "Ask 'Is it bad timing?' (people love saying No).",
                "commonMistake": "Asking for a 30-minute phone call in the first email."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-57-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Email client",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "3-Sentence Architecture",
                "instruction": "Sentence 1: Context/Trigger. Sentence 2: Value/Asset. Sentence 3: Friction-free CTA.",
                "diagramType": "text",
                "keyTip": "Ask 'Is it bad timing?' (people love saying No).",
                "commonMistake": "Asking for a 30-minute phone call in the first email."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 4,
        "title": "Level 04 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Write 5 personalized 3-sentence cold emails with tailored value triggers achieving >=40% open and 15% reply rate.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Write 5 personalized 3-sentence cold emails with tailored value triggers achieving >=40% open and 15% reply rate.",
        "drills": [
          {
            "id": "drill-57-mastery",
            "number": 4,
            "title": "Drill 04 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Write 5 personalized 3-sentence cold emails with tailored value triggers achieving >=40% open and 15% reply rate.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Email client, LinkedIn",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Write 5 personalized 3-sentence cold emails with tailored value triggers achieving >=40% open and 15% reply rate.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Write 5 personalized 3-sentence cold emails with tailored value triggers achieving >=40% open and 15% reply rate.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "3-Sentence Architecture",
                "instruction": "Sentence 1: Context/Trigger. Sentence 2: Value/Asset. Sentence 3: Friction-free CTA.",
                "diagramType": "text",
                "keyTip": "Ask 'Is it bad timing?' (people love saying No).",
                "commonMistake": "Asking for a 30-minute phone call in the first email."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Write 5 personalized 3-sentence cold emails with tailored value triggers achieving >=40% open and 15% reply rate.",
      "sampleVerification": "Proof submission will be evaluated against: All 5 emails under 65 words total with zero generic praise."
    }
  },
  {
    "id": "skill-58",
    "number": 58,
    "title": "Job & Interview Behavioral Storytelling (STAR Method)",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Deliver 5 crisp STAR stories (Situation, Task, Action, Result) answering top behavioral questions in <=90s.",
    "prerequisites": [
      "Resume experience"
    ],
    "equipmentNeeded": [
      "Webcam or mirror"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Story delivered in 80-90 seconds with clear metric payout.",
        "unlockCondition": "Achieve Story delivered in 80-90 seconds with clear metric payout. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-58-01",
            "number": 1,
            "title": "Drill 01 \u2014 90-Second STAR Compression Drill",
            "objective": "Isolate and master STAR framework balance (Situation 15s, Action 50s, Result 25s).",
            "whyExists": "Keeps answers punchy and emphasizes personal action over team generality.",
            "equipment": "Webcam or mirror",
            "setup": "Ensure Webcam or mirror is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Situation (15s): Set context and immediate conflict.",
              "Task (10s): Your specific ownership.",
              "Action (45s): 3 specific technical decisions YOU made (use 'I', not 'We').",
              "Result (20s): Quantifiable metric change (e.g. reduced latency by 34%)."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Story delivered in 80-90 seconds with clear metric payout.",
            "failureCriteria": "Spending 60 seconds describing the company background.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "STAR Timing Distribution",
                "instruction": "Situation (15%) -> Task (10%) -> Action (50%) -> Result (25%).",
                "diagramType": "split",
                "keyTip": "Always state quantifiable numbers in Result (dollars, %, time saved).",
                "commonMistake": "Saying 'We did this' instead of 'I personally decided to...'."
              }
            ]
          },
          {
            "id": "drill-58-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting STAR framework balance (Situation 15s, Action 50s, Result 25s) consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Webcam or mirror",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Story delivered in 80-90 seconds with clear metric payout.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "STAR Timing Distribution",
                "instruction": "Situation (15%) -> Task (10%) -> Action (50%) -> Result (25%).",
                "diagramType": "split",
                "keyTip": "Always state quantifiable numbers in Result (dollars, %, time saved).",
                "commonMistake": "Saying 'We did this' instead of 'I personally decided to...'."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-58-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Webcam or mirror",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "STAR Timing Distribution",
                "instruction": "Situation (15%) -> Task (10%) -> Action (50%) -> Result (25%).",
                "diagramType": "split",
                "keyTip": "Always state quantifiable numbers in Result (dollars, %, time saved).",
                "commonMistake": "Saying 'We did this' instead of 'I personally decided to...'."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Deliver 5 crisp STAR stories (Situation, Task, Action, Result) answering top behavioral questions in <=90s.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Deliver 5 crisp STAR stories (Situation, Task, Action, Result) answering top behavioral questions in <=90s.",
        "drills": [
          {
            "id": "drill-58-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Deliver 5 crisp STAR stories (Situation, Task, Action, Result) answering top behavioral questions in <=90s.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Webcam or mirror",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Deliver 5 crisp STAR stories (Situation, Task, Action, Result) answering top behavioral questions in <=90s.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Deliver 5 crisp STAR stories (Situation, Task, Action, Result) answering top behavioral questions in <=90s.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "STAR Timing Distribution",
                "instruction": "Situation (15%) -> Task (10%) -> Action (50%) -> Result (25%).",
                "diagramType": "split",
                "keyTip": "Always state quantifiable numbers in Result (dollars, %, time saved).",
                "commonMistake": "Saying 'We did this' instead of 'I personally decided to...'."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Deliver 5 crisp STAR stories (Situation, Task, Action, Result) answering top behavioral questions in <=90s.",
      "sampleVerification": "Proof submission will be evaluated against: Story delivered in 80-90 seconds with clear metric payout."
    }
  },
  {
    "id": "skill-59",
    "number": 59,
    "title": "Persuasion Architecture (Cialdini Principles)",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Audit and rewrite a product landing page integrating Reciprocity, Scarcity, Authority, and Social Proof.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Document editor"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Landing page conversion rate increases on A/B test split.",
        "unlockCondition": "Achieve Landing page conversion rate increases on A/B test split. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-59-01",
            "number": 1,
            "title": "Drill 01 \u2014 4-Lever Copy Teardown & Rewrite",
            "objective": "Isolate and master Ethical persuasion levers & loss aversion framing.",
            "whyExists": "Injects the 4 primary psychological triggers into hero section.",
            "equipment": "Document editor",
            "setup": "Ensure Document editor is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Reciprocity: Offer immediate high-value free diagnostic tool upfront.",
              "Authority: Feature logos of publications or rigorous benchmark stats.",
              "Social Proof: Specific quote with client photo and quantified outcome.",
              "Scarcity: Transparent enrollment cohort cap."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Landing page conversion rate increases on A/B test split.",
            "failureCriteria": "Using fake countdown timers or fabricated scarcity.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Persuasion Stack",
                "instruction": "Authority creates trust. Social proof validates safety. Scarcity drives action now.",
                "diagramType": "flow",
                "keyTip": "Loss aversion is 2x stronger than gain aspiration.",
                "commonMistake": "Burying social proof at the bottom of the page."
              }
            ]
          },
          {
            "id": "drill-59-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Ethical persuasion levers & loss aversion framing consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Document editor",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Landing page conversion rate increases on A/B test split.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Persuasion Stack",
                "instruction": "Authority creates trust. Social proof validates safety. Scarcity drives action now.",
                "diagramType": "flow",
                "keyTip": "Loss aversion is 2x stronger than gain aspiration.",
                "commonMistake": "Burying social proof at the bottom of the page."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-59-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Document editor",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Persuasion Stack",
                "instruction": "Authority creates trust. Social proof validates safety. Scarcity drives action now.",
                "diagramType": "flow",
                "keyTip": "Loss aversion is 2x stronger than gain aspiration.",
                "commonMistake": "Burying social proof at the bottom of the page."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Audit and rewrite a product landing page integrating Reciprocity, Scarcity, Authority, and Social Proof.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Audit and rewrite a product landing page integrating Reciprocity, Scarcity, Authority, and Social Proof.",
        "drills": [
          {
            "id": "drill-59-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Audit and rewrite a product landing page integrating Reciprocity, Scarcity, Authority, and Social Proof.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Document editor",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Audit and rewrite a product landing page integrating Reciprocity, Scarcity, Authority, and Social Proof.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Audit and rewrite a product landing page integrating Reciprocity, Scarcity, Authority, and Social Proof.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Persuasion Stack",
                "instruction": "Authority creates trust. Social proof validates safety. Scarcity drives action now.",
                "diagramType": "flow",
                "keyTip": "Loss aversion is 2x stronger than gain aspiration.",
                "commonMistake": "Burying social proof at the bottom of the page."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Audit and rewrite a product landing page integrating Reciprocity, Scarcity, Authority, and Social Proof.",
      "sampleVerification": "Proof submission will be evaluated against: Landing page conversion rate increases on A/B test split."
    }
  },
  {
    "id": "skill-60",
    "number": 60,
    "title": "Explain Complex Topics Simply (Feynman Technique)",
    "domainId": "communication",
    "domainCode": "F",
    "skillType": "cognitive",
    "timeCategory": "1-hour",
    "masteryDefinition": "Explain quantum superposition or neural network backpropagation to a 10-year-old with zero technical jargon.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Recorder / notepad"
    ],
    "currentLevel": 1,
    "totalLevels": 4,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with A non-technical person correctly explains back the core concept.",
        "unlockCondition": "Achieve A non-technical person correctly explains back the core concept. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-60-01",
            "number": 1,
            "title": "Drill 01 \u2014 The 10-Year-Old Metaphor Challenge",
            "objective": "Isolate and master Analogical mapping, jargon elimination, and physical metaphors.",
            "whyExists": "Forces identification of the fundamental physical intuition.",
            "equipment": "Recorder / notepad",
            "setup": "Ensure Recorder / notepad is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Target concept: Backpropagation in Neural Networks.",
              "Rule 1: Forbidden words: gradient, derivative, matrix, weights, loss.",
              "Create physical analogy: e.g. A team of archers adjusting aim in the fog based on how far left the bell rings.",
              "Deliver 2-minute explanation."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "A non-technical person correctly explains back the core concept.",
            "failureCriteria": "Using a technical synonym to explain technical term.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Analogy Bridge",
                "instruction": "Unknown Concept <-> Physical Analogy from everyday life (water, balls, bells).",
                "diagramType": "flow",
                "keyTip": "If you cannot explain it with a physical prop, you do not understand it.",
                "commonMistake": "Hiding behind acronyms when intuition is weak."
              }
            ]
          },
          {
            "id": "drill-60-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Analogical mapping, jargon elimination, and physical metaphors consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Recorder / notepad",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: A non-technical person correctly explains back the core concept.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Analogy Bridge",
                "instruction": "Unknown Concept <-> Physical Analogy from everyday life (water, balls, bells).",
                "diagramType": "flow",
                "keyTip": "If you cannot explain it with a physical prop, you do not understand it.",
                "commonMistake": "Hiding behind acronyms when intuition is weak."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-60-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Recorder / notepad",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Analogy Bridge",
                "instruction": "Unknown Concept <-> Physical Analogy from everyday life (water, balls, bells).",
                "diagramType": "flow",
                "keyTip": "If you cannot explain it with a physical prop, you do not understand it.",
                "commonMistake": "Hiding behind acronyms when intuition is weak."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 4,
        "title": "Level 04 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Explain quantum superposition or neural network backpropagation to a 10-year-old with zero technical jargon.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Explain quantum superposition or neural network backpropagation to a 10-year-old with zero technical jargon.",
        "drills": [
          {
            "id": "drill-60-mastery",
            "number": 4,
            "title": "Drill 04 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Explain quantum superposition or neural network backpropagation to a 10-year-old with zero technical jargon.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Recorder / notepad",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Explain quantum superposition or neural network backpropagation to a 10-year-old with zero technical jargon.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Explain quantum superposition or neural network backpropagation to a 10-year-old with zero technical jargon.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Analogy Bridge",
                "instruction": "Unknown Concept <-> Physical Analogy from everyday life (water, balls, bells).",
                "diagramType": "flow",
                "keyTip": "If you cannot explain it with a physical prop, you do not understand it.",
                "commonMistake": "Hiding behind acronyms when intuition is weak."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Explain quantum superposition or neural network backpropagation to a 10-year-old with zero technical jargon.",
      "sampleVerification": "Proof submission will be evaluated against: A non-technical person correctly explains back the core concept."
    }
  },
  {
    "id": "skill-61",
    "number": 61,
    "title": "Learn Basic Photography in 1 Day (Manual Exposure)",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Shoot 5 manual exposure photos balancing ISO, Aperture (f-stop), and Shutter Speed with correct histogram.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "DSLR/Mirrorless camera or manual phone app"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with 5 photos captured with zero blown highlights or crushed shadows.",
        "unlockCondition": "Achieve 5 photos captured with zero blown highlights or crushed shadows. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-61-01",
            "number": 1,
            "title": "Drill 01 \u2014 The Manual Exposure Triangle Balancing Drill",
            "objective": "Isolate and master The exposure triangle & histogram clipping evaluation.",
            "whyExists": "Eliminates reliance on Auto mode in high-contrast light.",
            "equipment": "DSLR/Mirrorless camera or manual phone app",
            "setup": "Ensure DSLR/Mirrorless camera or manual phone app is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Set camera to full Manual (M) mode.",
              "Set Aperture for depth of field: f/2.8 for portraits (blurry bg) or f/8 for landscape.",
              "Set Shutter Speed to prevent motion blur: minimum 1/125s for hand-held.",
              "Adjust ISO to balance light meter to exact center 0.",
              "Verify histogram has zero clipped highlights on right edge."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "5 photos captured with zero blown highlights or crushed shadows.",
            "failureCriteria": "Relying on LCD screen brightness rather than checking histogram.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Exposure Triangle",
                "instruction": "Aperture (depth of field) <-> Shutter Speed (motion blur) <-> ISO (sensor noise).",
                "diagramType": "split",
                "keyTip": "Keep ISO as low as possible (100-400) for clean image quality.",
                "commonMistake": "Shooting with shutter speed below 1/60s and getting blurry photos."
              }
            ]
          },
          {
            "id": "drill-61-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting The exposure triangle & histogram clipping evaluation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "DSLR/Mirrorless camera or manual phone app",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: 5 photos captured with zero blown highlights or crushed shadows.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Exposure Triangle",
                "instruction": "Aperture (depth of field) <-> Shutter Speed (motion blur) <-> ISO (sensor noise).",
                "diagramType": "split",
                "keyTip": "Keep ISO as low as possible (100-400) for clean image quality.",
                "commonMistake": "Shooting with shutter speed below 1/60s and getting blurry photos."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-61-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "DSLR/Mirrorless camera or manual phone app",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Exposure Triangle",
                "instruction": "Aperture (depth of field) <-> Shutter Speed (motion blur) <-> ISO (sensor noise).",
                "diagramType": "split",
                "keyTip": "Keep ISO as low as possible (100-400) for clean image quality.",
                "commonMistake": "Shooting with shutter speed below 1/60s and getting blurry photos."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Shoot 5 manual exposure photos balancing ISO, Aperture (f-stop), and Shutter Speed with correct histogram.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Shoot 5 manual exposure photos balancing ISO, Aperture (f-stop), and Shutter Speed with correct histogram.",
        "drills": [
          {
            "id": "drill-61-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Shoot 5 manual exposure photos balancing ISO, Aperture (f-stop), and Shutter Speed with correct histogram.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "DSLR/Mirrorless camera or manual phone app",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Shoot 5 manual exposure photos balancing ISO, Aperture (f-stop), and Shutter Speed with correct histogram.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Shoot 5 manual exposure photos balancing ISO, Aperture (f-stop), and Shutter Speed with correct histogram.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Exposure Triangle",
                "instruction": "Aperture (depth of field) <-> Shutter Speed (motion blur) <-> ISO (sensor noise).",
                "diagramType": "split",
                "keyTip": "Keep ISO as low as possible (100-400) for clean image quality.",
                "commonMistake": "Shooting with shutter speed below 1/60s and getting blurry photos."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "photo-proof",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Shoot 5 manual exposure photos balancing ISO, Aperture (f-stop), and Shutter Speed with correct histogram.",
      "sampleVerification": "Proof submission will be evaluated against: 5 photos captured with zero blown highlights or crushed shadows."
    }
  },
  {
    "id": "skill-62",
    "number": 62,
    "title": "Learn Basic Video Editing in 1 Day",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Edit a 60-second video with J-cuts, L-cuts, color correction, normalized audio levels (-14 LUFS), and subtitles.",
    "prerequisites": [
      "Computer"
    ],
    "equipmentNeeded": [
      "CapCut, Premiere Pro or DaVinci Resolve"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Seamless cinematic audio-video transitions without audio popping.",
        "unlockCondition": "Achieve Seamless cinematic audio-video transitions without audio popping. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-62-01",
            "number": 1,
            "title": "Drill 01 \u2014 The J-Cut / L-Cut Continuity Trim",
            "objective": "Isolate and master J/L cuts audio split, B-roll rhythm, and loudness normalization.",
            "whyExists": "Eliminates robotic cuts where audio and video switch at the exact same instant.",
            "equipment": "CapCut, Premiere Pro or DaVinci Resolve",
            "setup": "Ensure CapCut, Premiere Pro or DaVinci Resolve is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Import A-roll talking head and B-roll cutaway.",
              "Create J-cut: Let B-roll audio precede the video cut by 1.0 second.",
              "Create L-cut: Let speaker's audio continue playing over the B-roll visual.",
              "Normalize audio to -14 LUFS integrated.",
              "Export 60s finished reel."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Seamless cinematic audio-video transitions without audio popping.",
            "failureCriteria": "Audio peaking into red 0dB distortion.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "J-Cut vs L-Cut",
                "instruction": "J-Cut: You hear it before you see it. L-Cut: You see it while previous audio continues.",
                "diagramType": "split",
                "keyTip": "Audio quality matters 2x more than 4k video resolution.",
                "commonMistake": "Hard cutting audio on every visual edit."
              }
            ]
          },
          {
            "id": "drill-62-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting J/L cuts audio split, B-roll rhythm, and loudness normalization consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "CapCut, Premiere Pro or DaVinci Resolve",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Seamless cinematic audio-video transitions without audio popping.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "J-Cut vs L-Cut",
                "instruction": "J-Cut: You hear it before you see it. L-Cut: You see it while previous audio continues.",
                "diagramType": "split",
                "keyTip": "Audio quality matters 2x more than 4k video resolution.",
                "commonMistake": "Hard cutting audio on every visual edit."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-62-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "CapCut, Premiere Pro or DaVinci Resolve",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "J-Cut vs L-Cut",
                "instruction": "J-Cut: You hear it before you see it. L-Cut: You see it while previous audio continues.",
                "diagramType": "split",
                "keyTip": "Audio quality matters 2x more than 4k video resolution.",
                "commonMistake": "Hard cutting audio on every visual edit."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Edit a 60-second video with J-cuts, L-cuts, color correction, normalized audio levels (-14 LUFS), and subtitles.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Edit a 60-second video with J-cuts, L-cuts, color correction, normalized audio levels (-14 LUFS), and subtitles.",
        "drills": [
          {
            "id": "drill-62-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Edit a 60-second video with J-cuts, L-cuts, color correction, normalized audio levels (-14 LUFS), and subtitles.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "CapCut, Premiere Pro or DaVinci Resolve",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Edit a 60-second video with J-cuts, L-cuts, color correction, normalized audio levels (-14 LUFS), and subtitles.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Edit a 60-second video with J-cuts, L-cuts, color correction, normalized audio levels (-14 LUFS), and subtitles.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "J-Cut vs L-Cut",
                "instruction": "J-Cut: You hear it before you see it. L-Cut: You see it while previous audio continues.",
                "diagramType": "split",
                "keyTip": "Audio quality matters 2x more than 4k video resolution.",
                "commonMistake": "Hard cutting audio on every visual edit."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Edit a 60-second video with J-cuts, L-cuts, color correction, normalized audio levels (-14 LUFS), and subtitles.",
      "sampleVerification": "Proof submission will be evaluated against: Seamless cinematic audio-video transitions without audio popping."
    }
  },
  {
    "id": "skill-63",
    "number": 63,
    "title": "Learn Basic Figma in 1 Day (Auto Layout & Components)",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "technical",
    "timeCategory": "1-day",
    "masteryDefinition": "Design a responsive mobile dashboard screen utilizing Figma Auto Layout, nested components, and styles.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Figma free account"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Card component adapts smoothly from 320px to 480px width.",
        "unlockCondition": "Achieve Card component adapts smoothly from 320px to 480px width. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-63-01",
            "number": 1,
            "title": "Drill 01 \u2014 Auto Layout Card with Responsive Fill Container",
            "objective": "Isolate and master Auto Layout padding/gap constraints, component variants, and 8pt grid.",
            "whyExists": "Builds a UI card that expands and wraps naturally like real CSS flexbox.",
            "equipment": "Figma free account",
            "setup": "Ensure Figma free account is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Create card container with Auto Layout (Shift+A).",
              "Set 16px padding and 12px item gap.",
              "Add Image (Fill container), Title text (Fill container), Button (Hug contents).",
              "Resize card width: elements must resize responsively without breaking."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Card component adapts smoothly from 320px to 480px width.",
            "failureCriteria": "Using absolute positioning instead of Auto Layout.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Auto Layout Flex Rules",
                "instruction": "Frame -> Auto Layout -> Direction (Vertical) -> Spacing (16px) -> Alignment.",
                "diagramType": "ui",
                "keyTip": "Use 8px spacing increments (8, 16, 24, 32, 48).",
                "commonMistake": "Manually nudging layers with arrow keys without Auto Layout."
              }
            ]
          },
          {
            "id": "drill-63-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Auto Layout padding/gap constraints, component variants, and 8pt grid consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Figma free account",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Card component adapts smoothly from 320px to 480px width.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Auto Layout Flex Rules",
                "instruction": "Frame -> Auto Layout -> Direction (Vertical) -> Spacing (16px) -> Alignment.",
                "diagramType": "ui",
                "keyTip": "Use 8px spacing increments (8, 16, 24, 32, 48).",
                "commonMistake": "Manually nudging layers with arrow keys without Auto Layout."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-63-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Figma free account",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Auto Layout Flex Rules",
                "instruction": "Frame -> Auto Layout -> Direction (Vertical) -> Spacing (16px) -> Alignment.",
                "diagramType": "ui",
                "keyTip": "Use 8px spacing increments (8, 16, 24, 32, 48).",
                "commonMistake": "Manually nudging layers with arrow keys without Auto Layout."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Design a responsive mobile dashboard screen utilizing Figma Auto Layout, nested components, and styles.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Design a responsive mobile dashboard screen utilizing Figma Auto Layout, nested components, and styles.",
        "drills": [
          {
            "id": "drill-63-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Design a responsive mobile dashboard screen utilizing Figma Auto Layout, nested components, and styles.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Figma free account",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Design a responsive mobile dashboard screen utilizing Figma Auto Layout, nested components, and styles.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Design a responsive mobile dashboard screen utilizing Figma Auto Layout, nested components, and styles.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Auto Layout Flex Rules",
                "instruction": "Frame -> Auto Layout -> Direction (Vertical) -> Spacing (16px) -> Alignment.",
                "diagramType": "ui",
                "keyTip": "Use 8px spacing increments (8, 16, 24, 32, 48).",
                "commonMistake": "Manually nudging layers with arrow keys without Auto Layout."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "photo-proof",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Design a responsive mobile dashboard screen utilizing Figma Auto Layout, nested components, and styles.",
      "sampleVerification": "Proof submission will be evaluated against: Card component adapts smoothly from 320px to 480px width."
    }
  },
  {
    "id": "skill-64",
    "number": 64,
    "title": "Learn Basic Music Production in 1 Day",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "creative",
    "timeCategory": "1-day",
    "masteryDefinition": "Program a 4-bar drum beat, 8-bar bassline, and lead synth progression in a DAW with proper gain staging.",
    "prerequisites": [
      "Computer + Headphones"
    ],
    "equipmentNeeded": [
      "Ableton, FL Studio, BandLab or GarageBand"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Kick and bass hit with punch without muddying or clipping the master channel.",
        "unlockCondition": "Achieve Kick and bass hit with punch without muddying or clipping the master channel. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-64-01",
            "number": 1,
            "title": "Drill 01 \u2014 4-on-the-Floor Groove & Kick-Bass Sidechain",
            "objective": "Isolate and master Drum groove micro-timing, root note bass anchoring, and EQ frequency carving.",
            "whyExists": "Builds the punchy rhythmic engine of electronic music.",
            "equipment": "Ableton, FL Studio, BandLab or GarageBand",
            "setup": "Ensure Ableton, FL Studio, BandLab or GarageBand is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Program Kick on beats 1, 2, 3, 4 at 124 BPM.",
              "Place Snare/Clap on beats 2 and 4.",
              "Place open hi-hat on the off-beats ('and' of 1 & 2 & 3 & 4).",
              "Add rolling bassline playing root notes of chord progression.",
              "Apply high-pass EQ filter to remove sub-bass rumble from all non-bass tracks."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Kick and bass hit with punch without muddying or clipping the master channel.",
            "failureCriteria": "Master output meter goes into the red (> 0 dBFS).",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Drum Grid Pacing",
                "instruction": "Kick (1, 2, 3, 4) | Clap (2, 4) | Hat (Offbeats). Keep levels at -6dB headroom.",
                "diagramType": "ui",
                "keyTip": "Never boost EQ when you can cut competing frequencies.",
                "commonMistake": "Cranking volume faders instead of properly gain staging."
              }
            ]
          },
          {
            "id": "drill-64-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Drum groove micro-timing, root note bass anchoring, and EQ frequency carving consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Ableton, FL Studio, BandLab or GarageBand",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Kick and bass hit with punch without muddying or clipping the master channel.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Drum Grid Pacing",
                "instruction": "Kick (1, 2, 3, 4) | Clap (2, 4) | Hat (Offbeats). Keep levels at -6dB headroom.",
                "diagramType": "ui",
                "keyTip": "Never boost EQ when you can cut competing frequencies.",
                "commonMistake": "Cranking volume faders instead of properly gain staging."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-64-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Ableton, FL Studio, BandLab or GarageBand",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Drum Grid Pacing",
                "instruction": "Kick (1, 2, 3, 4) | Clap (2, 4) | Hat (Offbeats). Keep levels at -6dB headroom.",
                "diagramType": "ui",
                "keyTip": "Never boost EQ when you can cut competing frequencies.",
                "commonMistake": "Cranking volume faders instead of properly gain staging."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Program a 4-bar drum beat, 8-bar bassline, and lead synth progression in a DAW with proper gain staging.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Program a 4-bar drum beat, 8-bar bassline, and lead synth progression in a DAW with proper gain staging.",
        "drills": [
          {
            "id": "drill-64-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Program a 4-bar drum beat, 8-bar bassline, and lead synth progression in a DAW with proper gain staging.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Ableton, FL Studio, BandLab or GarageBand",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Program a 4-bar drum beat, 8-bar bassline, and lead synth progression in a DAW with proper gain staging.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Program a 4-bar drum beat, 8-bar bassline, and lead synth progression in a DAW with proper gain staging.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Drum Grid Pacing",
                "instruction": "Kick (1, 2, 3, 4) | Clap (2, 4) | Hat (Offbeats). Keep levels at -6dB headroom.",
                "diagramType": "ui",
                "keyTip": "Never boost EQ when you can cut competing frequencies.",
                "commonMistake": "Cranking volume faders instead of properly gain staging."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "audio-recording",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Program a 4-bar drum beat, 8-bar bassline, and lead synth progression in a DAW with proper gain staging.",
      "sampleVerification": "Proof submission will be evaluated against: Kick and bass hit with punch without muddying or clipping the master channel."
    }
  },
  {
    "id": "skill-65",
    "number": 65,
    "title": "Learn Basic Cooking Technique in 1 Day (Knife & Pan)",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Execute proper claw-grip julienne & brunoise onion cuts, and sear a protein with fond deglaze pan sauce.",
    "prerequisites": [
      "Kitchen access"
    ],
    "equipmentNeeded": [
      "Chef knife, cutting board, stainless pan"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Uniform 3mm cubes that cook evenly at the exact same rate.",
        "unlockCondition": "Achieve Uniform 3mm cubes that cook evenly at the exact same rate. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-65-01",
            "number": 1,
            "title": "Drill 01 \u2014 The Safe Claw Grip & Rapid Onion Brunoise",
            "objective": "Isolate and master The claw grip, Maillard reaction, and pan fond deglazing.",
            "whyExists": "Cuts food with chef-level speed without endangering fingers.",
            "equipment": "Chef knife, cutting board, stainless pan",
            "setup": "Ensure Chef knife, cutting board, stainless pan is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Curl non-knife fingertips inward like a claw: knuckles rest flat against knife blade.",
              "Keep knife tip on board, rocking blade forward and down.",
              "Dice onion into uniform 3mm brunoise cubes in under 60 seconds.",
              "Zero cuts or nicks on guiding hand."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Uniform 3mm cubes that cook evenly at the exact same rate.",
            "failureCriteria": "Fingers splayed flat on cutting board. Curl fingertips into claw.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Guiding Claw Grip",
                "instruction": "Fingertips curled back, thumb tucked behind. Flat face of knife slides along knuckles.",
                "diagramType": "posture",
                "keyTip": "A sharp knife is 10x safer than a dull knife.",
                "commonMistake": "Sawing back and forth instead of rocking the blade forward."
              }
            ]
          },
          {
            "id": "drill-65-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting The claw grip, Maillard reaction, and pan fond deglazing consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Chef knife, cutting board, stainless pan",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Uniform 3mm cubes that cook evenly at the exact same rate.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Guiding Claw Grip",
                "instruction": "Fingertips curled back, thumb tucked behind. Flat face of knife slides along knuckles.",
                "diagramType": "posture",
                "keyTip": "A sharp knife is 10x safer than a dull knife.",
                "commonMistake": "Sawing back and forth instead of rocking the blade forward."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-65-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Chef knife, cutting board, stainless pan",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Guiding Claw Grip",
                "instruction": "Fingertips curled back, thumb tucked behind. Flat face of knife slides along knuckles.",
                "diagramType": "posture",
                "keyTip": "A sharp knife is 10x safer than a dull knife.",
                "commonMistake": "Sawing back and forth instead of rocking the blade forward."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Execute proper claw-grip julienne & brunoise onion cuts, and sear a protein with fond deglaze pan sauce.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Execute proper claw-grip julienne & brunoise onion cuts, and sear a protein with fond deglaze pan sauce.",
        "drills": [
          {
            "id": "drill-65-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Execute proper claw-grip julienne & brunoise onion cuts, and sear a protein with fond deglaze pan sauce.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Chef knife, cutting board, stainless pan",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Execute proper claw-grip julienne & brunoise onion cuts, and sear a protein with fond deglaze pan sauce.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Execute proper claw-grip julienne & brunoise onion cuts, and sear a protein with fond deglaze pan sauce.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Guiding Claw Grip",
                "instruction": "Fingertips curled back, thumb tucked behind. Flat face of knife slides along knuckles.",
                "diagramType": "posture",
                "keyTip": "A sharp knife is 10x safer than a dull knife.",
                "commonMistake": "Sawing back and forth instead of rocking the blade forward."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "photo-proof",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Execute proper claw-grip julienne & brunoise onion cuts, and sear a protein with fond deglaze pan sauce.",
      "sampleVerification": "Proof submission will be evaluated against: Uniform 3mm cubes that cook evenly at the exact same rate."
    }
  },
  {
    "id": "skill-66",
    "number": 66,
    "title": "First-Aid Fundamentals (CPR & Bleeding Control)",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Demonstrate 100-120 BPM CPR chest compressions, recovery position, and high-pressure tourniquet application.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "First aid kit or training dummy/cushion"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Consistent 5cm depth maintained across 2 full minutes without elbow bend.",
        "unlockCondition": "Achieve Consistent 5cm depth maintained across 2 full minutes without elbow bend. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-66-01",
            "number": 1,
            "title": "Drill 01 \u2014 110 BPM Continuous CPR Compression Cadence",
            "objective": "Isolate and master Sternum compression depth (5cm), recoil, and windlass tourniquet lock.",
            "whyExists": "Sustains blood perfusion to brain during cardiac arrest.",
            "equipment": "First aid kit or training dummy/cushion",
            "setup": "Ensure First aid kit or training dummy/cushion is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Interlock fingers, position heel of hand on lower half of sternum.",
              "Lock elbows straight, shoulders directly over patient's chest.",
              "Compress chest 5-6 cm deep at 110 BPM (tempo of 'Stayin Alive').",
              "Allow full chest recoil between every single compression. 2 minutes nonstop."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Consistent 5cm depth maintained across 2 full minutes without elbow bend.",
            "failureCriteria": "Compressing too slowly or failing to allow chest to fully recoil.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "CPR Body Mechanics",
                "instruction": "Elbows locked straight. Use your entire upper body weight, not arm muscles.",
                "diagramType": "posture",
                "keyTip": "Push hard and fast: 100-120 compressions per minute.",
                "commonMistake": "Bending elbows, which fatigues arms in under 30 seconds."
              }
            ]
          },
          {
            "id": "drill-66-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Sternum compression depth (5cm), recoil, and windlass tourniquet lock consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "First aid kit or training dummy/cushion",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Consistent 5cm depth maintained across 2 full minutes without elbow bend.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "CPR Body Mechanics",
                "instruction": "Elbows locked straight. Use your entire upper body weight, not arm muscles.",
                "diagramType": "posture",
                "keyTip": "Push hard and fast: 100-120 compressions per minute.",
                "commonMistake": "Bending elbows, which fatigues arms in under 30 seconds."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-66-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "First aid kit or training dummy/cushion",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "CPR Body Mechanics",
                "instruction": "Elbows locked straight. Use your entire upper body weight, not arm muscles.",
                "diagramType": "posture",
                "keyTip": "Push hard and fast: 100-120 compressions per minute.",
                "commonMistake": "Bending elbows, which fatigues arms in under 30 seconds."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Demonstrate 100-120 BPM CPR chest compressions, recovery position, and high-pressure tourniquet application.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Demonstrate 100-120 BPM CPR chest compressions, recovery position, and high-pressure tourniquet application.",
        "drills": [
          {
            "id": "drill-66-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Demonstrate 100-120 BPM CPR chest compressions, recovery position, and high-pressure tourniquet application.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "First aid kit or training dummy/cushion",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Demonstrate 100-120 BPM CPR chest compressions, recovery position, and high-pressure tourniquet application.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Demonstrate 100-120 BPM CPR chest compressions, recovery position, and high-pressure tourniquet application.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "CPR Body Mechanics",
                "instruction": "Elbows locked straight. Use your entire upper body weight, not arm muscles.",
                "diagramType": "posture",
                "keyTip": "Push hard and fast: 100-120 compressions per minute.",
                "commonMistake": "Bending elbows, which fatigues arms in under 30 seconds."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Demonstrate 100-120 BPM CPR chest compressions, recovery position, and high-pressure tourniquet application.",
      "sampleVerification": "Proof submission will be evaluated against: Consistent 5cm depth maintained across 2 full minutes without elbow bend."
    }
  },
  {
    "id": "skill-67",
    "number": 67,
    "title": "Essential Knot Tying (Bowline, Clove Hitch, Square)",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "motor",
    "timeCategory": "1-hour",
    "masteryDefinition": "Tie 6 essential knots blindfolded in <=45 seconds: Bowline, Clove Hitch, Figure-8, Square, Sheet Bend, Taut-line.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "1 meter piece of paracord or rope"
    ],
    "currentLevel": 1,
    "totalLevels": 4,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Perfect non-slip loop tied blindfolded with correct working tail length.",
        "unlockCondition": "Achieve Perfect non-slip loop tied blindfolded with correct working tail length. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-67-01",
            "number": 1,
            "title": "Drill 01 \u2014 10-Second Blindfolded Bowline Knot",
            "objective": "Isolate and master Bight dressing, standing part tension, and blind tactile muscle memory.",
            "whyExists": "The 'King of Knots' that never slips and never jams under load.",
            "equipment": "1 meter piece of paracord or rope",
            "setup": "Ensure 1 meter piece of paracord or rope is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Hold standing part in left hand, working end in right hand.",
              "Form loop (the rabbit hole).",
              "Pass rabbit up through the hole, around the standing tree, and back down through the hole.",
              "Dress knot and pull tight. Execute blindfolded in <=10 seconds."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Perfect non-slip loop tied blindfolded with correct working tail length.",
            "failureCriteria": "Tying slip knot or granny knot that fails under tension.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Bowline Story",
                "instruction": "Up through the hole, around the back of the tree, back down through the hole, pull snug.",
                "diagramType": "path",
                "keyTip": "Always dress the knot (straighten strands) before applying load.",
                "commonMistake": "Passing working end around the wrong side of the tree."
              }
            ]
          },
          {
            "id": "drill-67-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Bight dressing, standing part tension, and blind tactile muscle memory consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "1 meter piece of paracord or rope",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Perfect non-slip loop tied blindfolded with correct working tail length.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Bowline Story",
                "instruction": "Up through the hole, around the back of the tree, back down through the hole, pull snug.",
                "diagramType": "path",
                "keyTip": "Always dress the knot (straighten strands) before applying load.",
                "commonMistake": "Passing working end around the wrong side of the tree."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-67-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "1 meter piece of paracord or rope",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Bowline Story",
                "instruction": "Up through the hole, around the back of the tree, back down through the hole, pull snug.",
                "diagramType": "path",
                "keyTip": "Always dress the knot (straighten strands) before applying load.",
                "commonMistake": "Passing working end around the wrong side of the tree."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 4,
        "title": "Level 04 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Tie 6 essential knots blindfolded in <=45 seconds: Bowline, Clove Hitch, Figure-8, Square, Sheet Bend, Taut-line.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Tie 6 essential knots blindfolded in <=45 seconds: Bowline, Clove Hitch, Figure-8, Square, Sheet Bend, Taut-line.",
        "drills": [
          {
            "id": "drill-67-mastery",
            "number": 4,
            "title": "Drill 04 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Tie 6 essential knots blindfolded in <=45 seconds: Bowline, Clove Hitch, Figure-8, Square, Sheet Bend, Taut-line.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "1 meter piece of paracord or rope",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Tie 6 essential knots blindfolded in <=45 seconds: Bowline, Clove Hitch, Figure-8, Square, Sheet Bend, Taut-line.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Tie 6 essential knots blindfolded in <=45 seconds: Bowline, Clove Hitch, Figure-8, Square, Sheet Bend, Taut-line.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Bowline Story",
                "instruction": "Up through the hole, around the back of the tree, back down through the hole, pull snug.",
                "diagramType": "path",
                "keyTip": "Always dress the knot (straighten strands) before applying load.",
                "commonMistake": "Passing working end around the wrong side of the tree."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Tie 6 essential knots blindfolded in <=45 seconds: Bowline, Clove Hitch, Figure-8, Square, Sheet Bend, Taut-line.",
      "sampleVerification": "Proof submission will be evaluated against: Perfect non-slip loop tied blindfolded with correct working tail length."
    }
  },
  {
    "id": "skill-68",
    "number": 68,
    "title": "Topographic Navigation & Compass Reading",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Plot a 3-point orienteering azimuth route on a topographic map and orient north taking declination into account.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Baseplate compass, topo map printout"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Arrive within 5 meters of target point across 500m leg.",
        "unlockCondition": "Achieve Arrive within 5 meters of target point across 500m leg. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-68-01",
            "number": 1,
            "title": "Drill 01 \u2014 Map-to-Field Azimuth Transfer",
            "objective": "Isolate and master Magnetic declination adjustment, index contour reading, and triangulation.",
            "whyExists": "Extracts a bearing from paper map and walks exact directional heading.",
            "equipment": "Baseplate compass, topo map printout",
            "setup": "Ensure Baseplate compass, topo map printout is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Align compass edge between current map position and destination landmark.",
              "Rotate compass housing until orienting lines match map grid north.",
              "Adjust for local magnetic declination (e.g. +5 degrees West).",
              "Hold compass flat against sternum; rotate body until 'Red is in the Shed'. Walk bearing."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Arrive within 5 meters of target point across 500m leg.",
            "failureCriteria": "Walking in reverse direction by confusing red needle with white needle.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Red in the Shed",
                "instruction": "Orienting arrow is the 'shed'. Magnetic red needle goes in the shed.",
                "diagramType": "path",
                "keyTip": "Keep compass away from metal belt buckles, phones, and knives.",
                "commonMistake": "Ignoring magnetic declination over long distances."
              }
            ]
          },
          {
            "id": "drill-68-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Magnetic declination adjustment, index contour reading, and triangulation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Baseplate compass, topo map printout",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Arrive within 5 meters of target point across 500m leg.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Red in the Shed",
                "instruction": "Orienting arrow is the 'shed'. Magnetic red needle goes in the shed.",
                "diagramType": "path",
                "keyTip": "Keep compass away from metal belt buckles, phones, and knives.",
                "commonMistake": "Ignoring magnetic declination over long distances."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-68-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Baseplate compass, topo map printout",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Red in the Shed",
                "instruction": "Orienting arrow is the 'shed'. Magnetic red needle goes in the shed.",
                "diagramType": "path",
                "keyTip": "Keep compass away from metal belt buckles, phones, and knives.",
                "commonMistake": "Ignoring magnetic declination over long distances."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Plot a 3-point orienteering azimuth route on a topographic map and orient north taking declination into account.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Plot a 3-point orienteering azimuth route on a topographic map and orient north taking declination into account.",
        "drills": [
          {
            "id": "drill-68-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Plot a 3-point orienteering azimuth route on a topographic map and orient north taking declination into account.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Baseplate compass, topo map printout",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Plot a 3-point orienteering azimuth route on a topographic map and orient north taking declination into account.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Plot a 3-point orienteering azimuth route on a topographic map and orient north taking declination into account.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Red in the Shed",
                "instruction": "Orienting arrow is the 'shed'. Magnetic red needle goes in the shed.",
                "diagramType": "path",
                "keyTip": "Keep compass away from metal belt buckles, phones, and knives.",
                "commonMistake": "Ignoring magnetic declination over long distances."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "photo-proof",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Plot a 3-point orienteering azimuth route on a topographic map and orient north taking declination into account.",
      "sampleVerification": "Proof submission will be evaluated against: Arrive within 5 meters of target point across 500m leg."
    }
  },
  {
    "id": "skill-69",
    "number": 69,
    "title": "Financial Spreadsheeting & Cashflow Modeling",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "cognitive",
    "timeCategory": "1-day",
    "masteryDefinition": "Build a dynamic 3-statement personal cashflow model with XLOOKUP, INDEX/MATCH, sensitivity tables.",
    "prerequisites": [
      "None"
    ],
    "equipmentNeeded": [
      "Excel or Google Sheets"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Model recalculates cleanly with zero #REF or circular reference errors.",
        "unlockCondition": "Achieve Model recalculates cleanly with zero #REF or circular reference errors. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-69-01",
            "number": 1,
            "title": "Drill 01 \u2014 Dynamic 12-Month Cash Runway Projection Engine",
            "objective": "Isolate and master Dynamic financial modeling, scenario toggles, and cash runway projections.",
            "whyExists": "Models personal or business burn rate under varying revenue scenarios.",
            "equipment": "Excel or Google Sheets",
            "setup": "Ensure Excel or Google Sheets is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Setup Columns: Month 1-12. Rows: Revenue, COGS, OpEx, Net Cash Flow.",
              "Build dropdown Scenario toggle: 'Bear (0% growth)', 'Base (5%)', 'Bull (15%)'.",
              "Use XLOOKUP to dynamically pull expense assumptions.",
              "Calculate cumulative bank balance and exact runway exhaustion date."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Model recalculates cleanly with zero #REF or circular reference errors.",
            "failureCriteria": "Hardcoding numbers inside formulas instead of referencing dynamic cells.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dynamic Assumptions Table",
                "instruction": "All variables (tax rate, growth %, churn) live in dedicated inputs block.",
                "diagramType": "ui",
                "keyTip": "Color code cells: Blue for hardcoded inputs, Black for formulas.",
                "commonMistake": "Mixing inputs and calculations in the same row."
              }
            ]
          },
          {
            "id": "drill-69-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Dynamic financial modeling, scenario toggles, and cash runway projections consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Excel or Google Sheets",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Model recalculates cleanly with zero #REF or circular reference errors.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dynamic Assumptions Table",
                "instruction": "All variables (tax rate, growth %, churn) live in dedicated inputs block.",
                "diagramType": "ui",
                "keyTip": "Color code cells: Blue for hardcoded inputs, Black for formulas.",
                "commonMistake": "Mixing inputs and calculations in the same row."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-69-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Excel or Google Sheets",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dynamic Assumptions Table",
                "instruction": "All variables (tax rate, growth %, churn) live in dedicated inputs block.",
                "diagramType": "ui",
                "keyTip": "Color code cells: Blue for hardcoded inputs, Black for formulas.",
                "commonMistake": "Mixing inputs and calculations in the same row."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Build a dynamic 3-statement personal cashflow model with XLOOKUP, INDEX/MATCH, sensitivity tables.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Build a dynamic 3-statement personal cashflow model with XLOOKUP, INDEX/MATCH, sensitivity tables.",
        "drills": [
          {
            "id": "drill-69-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Build a dynamic 3-statement personal cashflow model with XLOOKUP, INDEX/MATCH, sensitivity tables.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Excel or Google Sheets",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Build a dynamic 3-statement personal cashflow model with XLOOKUP, INDEX/MATCH, sensitivity tables.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Build a dynamic 3-statement personal cashflow model with XLOOKUP, INDEX/MATCH, sensitivity tables.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "Dynamic Assumptions Table",
                "instruction": "All variables (tax rate, growth %, churn) live in dedicated inputs block.",
                "diagramType": "ui",
                "keyTip": "Color code cells: Blue for hardcoded inputs, Black for formulas.",
                "commonMistake": "Mixing inputs and calculations in the same row."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Build a dynamic 3-statement personal cashflow model with XLOOKUP, INDEX/MATCH, sensitivity tables.",
      "sampleVerification": "Proof submission will be evaluated against: Model recalculates cleanly with zero #REF or circular reference errors."
    }
  },
  {
    "id": "skill-70",
    "number": 70,
    "title": "Cybersecurity Hygiene & Threat Hardening",
    "domainId": "practical",
    "domainCode": "G",
    "skillType": "technical",
    "timeCategory": "1-hour",
    "masteryDefinition": "Harden your digital perimeter: audit credential leaks, configure YubiKey/FIDO2 MFA, and encrypt DNS lookups.",
    "prerequisites": [
      "Computer / Phone"
    ],
    "equipmentNeeded": [
      "Password manager, Authenticator app"
    ],
    "currentLevel": 1,
    "totalLevels": 4,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with All primary email and financial accounts secured with hardware MFA tokens.",
        "unlockCondition": "Achieve All primary email and financial accounts secured with hardware MFA tokens. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-70-01",
            "number": 1,
            "title": "Drill 01 \u2014 Zero-Trust Credential & MFA Lockdown",
            "objective": "Isolate and master Passkey FIDO2 protocols, password entropy, and DoH (DNS-over-HTTPS).",
            "whyExists": "Eliminates SMS-based SIM swap vulnerabilities across primary accounts.",
            "equipment": "Password manager, Authenticator app",
            "setup": "Ensure Password manager, Authenticator app is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Audit email address on HaveIBeenPwned.",
              "Migrate all passwords to dedicated password manager with 20+ character random entropy.",
              "Disable SMS 2FA on Google, GitHub, Bank; replace with hardware FIDO2 key or TOTP app.",
              "Configure Cloudflare 1.1.1.1 Encrypted DNS on router and mobile."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "All primary email and financial accounts secured with hardware MFA tokens.",
            "failureCriteria": "Reusing master password across personal devices.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The MFA Hierarchy",
                "instruction": "Hardware FIDO2 Key > TOTP Authenticator App >>> SMS Text (vulnerable to SIM swap).",
                "diagramType": "flow",
                "keyTip": "Always print and lock away offline emergency backup codes in safe place.",
                "commonMistake": "Keeping master recovery keys unencrypted on desktop."
              }
            ]
          },
          {
            "id": "drill-70-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Passkey FIDO2 protocols, password entropy, and DoH (DNS-over-HTTPS) consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Password manager, Authenticator app",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: All primary email and financial accounts secured with hardware MFA tokens.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The MFA Hierarchy",
                "instruction": "Hardware FIDO2 Key > TOTP Authenticator App >>> SMS Text (vulnerable to SIM swap).",
                "diagramType": "flow",
                "keyTip": "Always print and lock away offline emergency backup codes in safe place.",
                "commonMistake": "Keeping master recovery keys unencrypted on desktop."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-70-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Password manager, Authenticator app",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The MFA Hierarchy",
                "instruction": "Hardware FIDO2 Key > TOTP Authenticator App >>> SMS Text (vulnerable to SIM swap).",
                "diagramType": "flow",
                "keyTip": "Always print and lock away offline emergency backup codes in safe place.",
                "commonMistake": "Keeping master recovery keys unencrypted on desktop."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 4,
        "title": "Level 04 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Harden your digital perimeter: audit credential leaks, configure YubiKey/FIDO2 MFA, and encrypt DNS lookups.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Harden your digital perimeter: audit credential leaks, configure YubiKey/FIDO2 MFA, and encrypt DNS lookups.",
        "drills": [
          {
            "id": "drill-70-mastery",
            "number": 4,
            "title": "Drill 04 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Harden your digital perimeter: audit credential leaks, configure YubiKey/FIDO2 MFA, and encrypt DNS lookups.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Password manager, Authenticator app",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Harden your digital perimeter: audit credential leaks, configure YubiKey/FIDO2 MFA, and encrypt DNS lookups.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Harden your digital perimeter: audit credential leaks, configure YubiKey/FIDO2 MFA, and encrypt DNS lookups.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The MFA Hierarchy",
                "instruction": "Hardware FIDO2 Key > TOTP Authenticator App >>> SMS Text (vulnerable to SIM swap).",
                "diagramType": "flow",
                "keyTip": "Always print and lock away offline emergency backup codes in safe place.",
                "commonMistake": "Keeping master recovery keys unencrypted on desktop."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Harden your digital perimeter: audit credential leaks, configure YubiKey/FIDO2 MFA, and encrypt DNS lookups.",
      "sampleVerification": "Proof submission will be evaluated against: All primary email and financial accounts secured with hardware MFA tokens."
    }
  },
  {
    "id": "skill-71",
    "number": 71,
    "title": "Learn a Skill in 1 Hour (Ultra-Rapid Acquisition)",
    "domainId": "challenge",
    "domainCode": "H",
    "skillType": "one-hour",
    "timeCategory": "1-hour",
    "masteryDefinition": "Deconstruct any unfamiliar micro-skill, execute 40 minutes of deliberate isolation drills, and pass benchmark.",
    "prerequisites": [
      "Timer"
    ],
    "equipmentNeeded": [
      "Chosen equipment"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Passed measurable test criteria within exact 60-minute window.",
        "unlockCondition": "Achieve Passed measurable test criteria within exact 60-minute window. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-71-01",
            "number": 1,
            "title": "Drill 01 \u2014 The 60-Minute Protocol Execution",
            "objective": "Isolate and master The 60-Minute Rapid Skill Compression Protocol.",
            "whyExists": "Strict time-boxed progression from zero knowledge to observable execution.",
            "equipment": "Chosen equipment",
            "setup": "Ensure Chosen equipment is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "00:00-05:00: Deconstruct skill into the 1 single critical sub-action.",
              "05:00-15:00: Demonstration & form emulation.",
              "15:00-35:00: High-repetition isolation drill (20 attempts with immediate feedback).",
              "35:00-50:00: Pressure test with stopwatch.",
              "50:00-60:00: Final test against measurable benchmark."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 900,
            "successCriteria": "Passed measurable test criteria within exact 60-minute window.",
            "failureCriteria": "Spending 30 minutes reading articles instead of physically drilling.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 60-Minute Clock",
                "instruction": "5m Understand -> 10m Demo -> 20m Drills -> 15m Challenge -> 10m Final Test.",
                "diagramType": "split",
                "keyTip": "Pick a micro-skill with an observable pass/fail test.",
                "commonMistake": "Trying to learn an entire broad field in 1 hour."
              }
            ]
          },
          {
            "id": "drill-71-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting The 60-Minute Rapid Skill Compression Protocol consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Chosen equipment",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Passed measurable test criteria within exact 60-minute window.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 60-Minute Clock",
                "instruction": "5m Understand -> 10m Demo -> 20m Drills -> 15m Challenge -> 10m Final Test.",
                "diagramType": "split",
                "keyTip": "Pick a micro-skill with an observable pass/fail test.",
                "commonMistake": "Trying to learn an entire broad field in 1 hour."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-71-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Chosen equipment",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 60-Minute Clock",
                "instruction": "5m Understand -> 10m Demo -> 20m Drills -> 15m Challenge -> 10m Final Test.",
                "diagramType": "split",
                "keyTip": "Pick a micro-skill with an observable pass/fail test.",
                "commonMistake": "Trying to learn an entire broad field in 1 hour."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Deconstruct any unfamiliar micro-skill, execute 40 minutes of deliberate isolation drills, and pass benchmark.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Deconstruct any unfamiliar micro-skill, execute 40 minutes of deliberate isolation drills, and pass benchmark.",
        "drills": [
          {
            "id": "drill-71-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Deconstruct any unfamiliar micro-skill, execute 40 minutes of deliberate isolation drills, and pass benchmark.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Chosen equipment",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Deconstruct any unfamiliar micro-skill, execute 40 minutes of deliberate isolation drills, and pass benchmark.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Deconstruct any unfamiliar micro-skill, execute 40 minutes of deliberate isolation drills, and pass benchmark.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 60-Minute Clock",
                "instruction": "5m Understand -> 10m Demo -> 20m Drills -> 15m Challenge -> 10m Final Test.",
                "diagramType": "split",
                "keyTip": "Pick a micro-skill with an observable pass/fail test.",
                "commonMistake": "Trying to learn an entire broad field in 1 hour."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Deconstruct any unfamiliar micro-skill, execute 40 minutes of deliberate isolation drills, and pass benchmark.",
      "sampleVerification": "Proof submission will be evaluated against: Passed measurable test criteria within exact 60-minute window."
    }
  },
  {
    "id": "skill-72",
    "number": 72,
    "title": "Learn a Skill in 5 Hours (High-Velocity Sprint)",
    "domainId": "challenge",
    "domainCode": "H",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Execute five 50-minute focused blocks targeting the 20% core subskills to reach functional competence.",
    "prerequisites": [
      "Selected skill kit"
    ],
    "equipmentNeeded": [
      "Equipment for selected skill"
    ],
    "currentLevel": 1,
    "totalLevels": 5,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Benchmark score exceeds functional baseline by end of Block 5.",
        "unlockCondition": "Achieve Benchmark score exceeds functional baseline by end of Block 5. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-72-01",
            "number": 1,
            "title": "Drill 01 \u2014 5-Block High Intensity Deliberate Practice Sequence",
            "objective": "Isolate and master Pareto 80/20 extraction & inter-block consolidation.",
            "whyExists": "Distributes 5 hours into progressive isolation without cognitive exhaustion.",
            "equipment": "Equipment for selected skill",
            "setup": "Ensure Equipment for selected skill is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Block 1: Fundamentals & equipment setup.",
              "Block 2: Slow-motion execution and error elimination.",
              "Block 3: Speed & pressure drilling.",
              "Block 4: Complex context integration.",
              "Block 5: Official benchmark performance test."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Benchmark score exceeds functional baseline by end of Block 5.",
            "failureCriteria": "Attempting all 5 hours in one sitting without cognitive breaks.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "50/10 Block Structure",
                "instruction": "50 minutes intense deliberate drill + 10 minutes walking rest. Repeat 5 times.",
                "diagramType": "flow",
                "keyTip": "Log errors at the end of every 50-minute block.",
                "commonMistake": "Drifting into passive practice during Block 3."
              }
            ]
          },
          {
            "id": "drill-72-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Pareto 80/20 extraction & inter-block consolidation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Equipment for selected skill",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Benchmark score exceeds functional baseline by end of Block 5.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "50/10 Block Structure",
                "instruction": "50 minutes intense deliberate drill + 10 minutes walking rest. Repeat 5 times.",
                "diagramType": "flow",
                "keyTip": "Log errors at the end of every 50-minute block.",
                "commonMistake": "Drifting into passive practice during Block 3."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-72-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Equipment for selected skill",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "50/10 Block Structure",
                "instruction": "50 minutes intense deliberate drill + 10 minutes walking rest. Repeat 5 times.",
                "diagramType": "flow",
                "keyTip": "Log errors at the end of every 50-minute block.",
                "commonMistake": "Drifting into passive practice during Block 3."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 5,
        "title": "Level 05 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Execute five 50-minute focused blocks targeting the 20% core subskills to reach functional competence.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Execute five 50-minute focused blocks targeting the 20% core subskills to reach functional competence.",
        "drills": [
          {
            "id": "drill-72-mastery",
            "number": 5,
            "title": "Drill 05 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Execute five 50-minute focused blocks targeting the 20% core subskills to reach functional competence.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Equipment for selected skill",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Execute five 50-minute focused blocks targeting the 20% core subskills to reach functional competence.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Execute five 50-minute focused blocks targeting the 20% core subskills to reach functional competence.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "50/10 Block Structure",
                "instruction": "50 minutes intense deliberate drill + 10 minutes walking rest. Repeat 5 times.",
                "diagramType": "flow",
                "keyTip": "Log errors at the end of every 50-minute block.",
                "commonMistake": "Drifting into passive practice during Block 3."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Execute five 50-minute focused blocks targeting the 20% core subskills to reach functional competence.",
      "sampleVerification": "Proof submission will be evaluated against: Benchmark score exceeds functional baseline by end of Block 5."
    }
  },
  {
    "id": "skill-73",
    "number": 73,
    "title": "Learn a Skill in 20 Hours (Josh Kaufman Protocol)",
    "domainId": "challenge",
    "domainCode": "H",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Accumulate 20 hours of deliberate practice on a complex skill, surpassing 80% competency threshold.",
    "prerequisites": [
      "Practice log"
    ],
    "equipmentNeeded": [
      "Practice materials"
    ],
    "currentLevel": 1,
    "totalLevels": 6,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Complete 20 hours logged with recorded metric progression.",
        "unlockCondition": "Achieve Complete 20 hours logged with recorded metric progression. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-73-01",
            "number": 1,
            "title": "Drill 01 \u2014 Kaufman 4-Step Barrier Elimination & 20-Hour Log",
            "objective": "Isolate and master Deconstruct, self-correct, remove barriers, and practice 20 hours.",
            "whyExists": "Clears the emotional frustration barrier in the first 5 hours.",
            "equipment": "Practice materials",
            "setup": "Ensure Practice materials is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Step 1: Deconstruct skill into 3 essential subskills.",
              "Step 2: Learn just enough to self-correct (consult 3 resources max).",
              "Step 3: Remove physical and emotional practice barriers.",
              "Step 4: Commit to 20 clock-hours of focused practice before quitting."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Complete 20 hours logged with recorded metric progression.",
            "failureCriteria": "Giving up at hour 3 during the initial frustration dip.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 20-Hour Curve",
                "instruction": "Hours 0-5 are frustrating. Hours 5-15 are rapid progress. Hours 15-20 consolidate competence.",
                "diagramType": "path",
                "keyTip": "Pre-commit to the 20 hours before taking your first rep.",
                "commonMistake": "Researching for 15 hours and only practicing for 5 hours."
              }
            ]
          },
          {
            "id": "drill-73-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Deconstruct, self-correct, remove barriers, and practice 20 hours consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Practice materials",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Complete 20 hours logged with recorded metric progression.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 20-Hour Curve",
                "instruction": "Hours 0-5 are frustrating. Hours 5-15 are rapid progress. Hours 15-20 consolidate competence.",
                "diagramType": "path",
                "keyTip": "Pre-commit to the 20 hours before taking your first rep.",
                "commonMistake": "Researching for 15 hours and only practicing for 5 hours."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-73-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Practice materials",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 20-Hour Curve",
                "instruction": "Hours 0-5 are frustrating. Hours 5-15 are rapid progress. Hours 15-20 consolidate competence.",
                "diagramType": "path",
                "keyTip": "Pre-commit to the 20 hours before taking your first rep.",
                "commonMistake": "Researching for 15 hours and only practicing for 5 hours."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 6,
        "title": "Level 06 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Accumulate 20 hours of deliberate practice on a complex skill, surpassing 80% competency threshold.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Accumulate 20 hours of deliberate practice on a complex skill, surpassing 80% competency threshold.",
        "drills": [
          {
            "id": "drill-73-mastery",
            "number": 6,
            "title": "Drill 06 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Accumulate 20 hours of deliberate practice on a complex skill, surpassing 80% competency threshold.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Practice materials",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Accumulate 20 hours of deliberate practice on a complex skill, surpassing 80% competency threshold.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Accumulate 20 hours of deliberate practice on a complex skill, surpassing 80% competency threshold.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The 20-Hour Curve",
                "instruction": "Hours 0-5 are frustrating. Hours 5-15 are rapid progress. Hours 15-20 consolidate competence.",
                "diagramType": "path",
                "keyTip": "Pre-commit to the 20 hours before taking your first rep.",
                "commonMistake": "Researching for 15 hours and only practicing for 5 hours."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Accumulate 20 hours of deliberate practice on a complex skill, surpassing 80% competency threshold.",
      "sampleVerification": "Proof submission will be evaluated against: Complete 20 hours logged with recorded metric progression."
    }
  },
  {
    "id": "skill-74",
    "number": 74,
    "title": "Learn a Skill in 7 Days (Immersive Challenge)",
    "domainId": "challenge",
    "domainCode": "H",
    "skillType": "cognitive",
    "timeCategory": "7-days",
    "masteryDefinition": "Complete daily 2-hour progressive drill blocks across 7 consecutive days and pass strict unassisted final test.",
    "prerequisites": [
      "Commitment tracker"
    ],
    "equipmentNeeded": [
      "Full skill apparatus"
    ],
    "currentLevel": 1,
    "totalLevels": 7,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Official test passed on Day 7 with evidence proof submission.",
        "unlockCondition": "Achieve Official test passed on Day 7 with evidence proof submission. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-74-01",
            "number": 1,
            "title": "Drill 01 \u2014 Daily 2-Hour Mission Cadence",
            "objective": "Isolate and master Daily periodized overload & sleep-dependent memory consolidation.",
            "whyExists": "Transforms raw intention into daily non-negotiable deliberate execution.",
            "equipment": "Full skill apparatus",
            "setup": "Ensure Full skill apparatus is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Day 1: Baseline measurement & subskill deconstruction.",
              "Day 2-3: Isolated mechanics drills (100 repetitions daily).",
              "Day 4: Mid-week pressure benchmark.",
              "Day 5-6: Weakness elimination drills based on data.",
              "Day 7: Final strict proof recording."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Official test passed on Day 7 with evidence proof submission.",
            "failureCriteria": "Skipping a day. Missed days destroy memory consolidation.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "7-Day Overload Arc",
                "instruction": "Day 1 Baseline -> Days 2-3 Drills -> Day 4 Test -> Days 5-6 Correct -> Day 7 Proof.",
                "diagramType": "flow",
                "keyTip": "Sleep 8 hours: motor memory consolidates during REM sleep.",
                "commonMistake": "Overworking on Day 1 and burning out by Day 3."
              }
            ]
          },
          {
            "id": "drill-74-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Daily periodized overload & sleep-dependent memory consolidation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Full skill apparatus",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Official test passed on Day 7 with evidence proof submission.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "7-Day Overload Arc",
                "instruction": "Day 1 Baseline -> Days 2-3 Drills -> Day 4 Test -> Days 5-6 Correct -> Day 7 Proof.",
                "diagramType": "flow",
                "keyTip": "Sleep 8 hours: motor memory consolidates during REM sleep.",
                "commonMistake": "Overworking on Day 1 and burning out by Day 3."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-74-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Full skill apparatus",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "7-Day Overload Arc",
                "instruction": "Day 1 Baseline -> Days 2-3 Drills -> Day 4 Test -> Days 5-6 Correct -> Day 7 Proof.",
                "diagramType": "flow",
                "keyTip": "Sleep 8 hours: motor memory consolidates during REM sleep.",
                "commonMistake": "Overworking on Day 1 and burning out by Day 3."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 7,
        "title": "Level 07 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Complete daily 2-hour progressive drill blocks across 7 consecutive days and pass strict unassisted final test.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Complete daily 2-hour progressive drill blocks across 7 consecutive days and pass strict unassisted final test.",
        "drills": [
          {
            "id": "drill-74-mastery",
            "number": 7,
            "title": "Drill 07 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Complete daily 2-hour progressive drill blocks across 7 consecutive days and pass strict unassisted final test.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Full skill apparatus",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Complete daily 2-hour progressive drill blocks across 7 consecutive days and pass strict unassisted final test.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Complete daily 2-hour progressive drill blocks across 7 consecutive days and pass strict unassisted final test.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "interval-timer",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "7-Day Overload Arc",
                "instruction": "Day 1 Baseline -> Days 2-3 Drills -> Day 4 Test -> Days 5-6 Correct -> Day 7 Proof.",
                "diagramType": "flow",
                "keyTip": "Sleep 8 hours: motor memory consolidates during REM sleep.",
                "commonMistake": "Overworking on Day 1 and burning out by Day 3."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "video-url",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Complete daily 2-hour progressive drill blocks across 7 consecutive days and pass strict unassisted final test.",
      "sampleVerification": "Proof submission will be evaluated against: Official test passed on Day 7 with evidence proof submission."
    }
  },
  {
    "id": "skill-75",
    "number": 75,
    "title": "Build a Completely New Skill from Zero (Meta-Architect)",
    "domainId": "challenge",
    "domainCode": "H",
    "skillType": "technical",
    "timeCategory": "deep-mastery",
    "masteryDefinition": "Input any raw hobby or professional pursuit; generate mastery contract, level tree, bottleneck diagnostics & proof.",
    "prerequisites": [
      "SKILLFORGE Platform"
    ],
    "equipmentNeeded": [
      "Target pursuit parameters"
    ],
    "currentLevel": 1,
    "totalLevels": 8,
    "levels": [
      {
        "levelNumber": 1,
        "title": "Level 01 \u2014 Fundamental Mechanics & Baseline",
        "targetBenchmark": "Pass Drill 01 with Fully actionable skill curriculum created with 0% fluff and 100% measurable drills.",
        "unlockCondition": "Achieve Fully actionable skill curriculum created with 0% fluff and 100% measurable drills. in consecutive verified attempts",
        "testProtocol": "Strict 5-attempt evaluation. Must achieve pass criteria without assistance.",
        "drills": [
          {
            "id": "drill-75-01",
            "number": 1,
            "title": "Drill 01 \u2014 Skill Deconstruction & Mastery Contract Generation",
            "objective": "Isolate and master Skill deconstruction, mastery contract definition, and drill generation.",
            "whyExists": "The meta-skill that allows learning anything on demand.",
            "equipment": "Target pursuit parameters",
            "setup": "Ensure Target pursuit parameters is calibrated and ready. Eliminate all distractions.",
            "actions": [
              "Input desired pursuit into Skill Architect AI.",
              "Define non-negotiable measurable Mastery Definition (Numbers, constraints, proof).",
              "Classify into Motor / Cognitive / Creative / Technical domain.",
              "Generate 5 progressive levels and drill blueprints with measurable success criteria.",
              "Log attempt #1 within 15 minutes of creation."
            ],
            "repetitions": "15-20 focused attempts",
            "timeLimitSeconds": 1200,
            "successCriteria": "Fully actionable skill curriculum created with 0% fluff and 100% measurable drills.",
            "failureCriteria": "Allowing vague goals like 'get better at guitar'.",
            "difficultyAdjustment": "If pass rate >= 90%, decrease time limit by 15% or increase reps. If fail, regress to single movement isolation.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Deconstruction Matrix",
                "instruction": "Desired Outcome -> Measurable Mastery Contract -> 5 Levels -> 10 Drills -> Proof Protocol.",
                "diagramType": "flow",
                "keyTip": "Always ask: 'What does failure look like on an official stopwatch or metric?'.",
                "commonMistake": "Confusing reading articles with performing drills."
              }
            ]
          },
          {
            "id": "drill-75-02",
            "number": 2,
            "title": "Drill 02 \u2014 High-Pressure Benchmark Stress Test",
            "objective": "Execute under simulated test conditions targeting Skill deconstruction, mastery contract definition, and drill generation consistency.",
            "whyExists": "Tests whether motor/cognitive mechanics hold up when fatigued or pressured.",
            "equipment": "Target pursuit parameters",
            "setup": "Start official timer. No warm-ups allowed.",
            "actions": [
              "Initiate attempt immediately upon timer signal.",
              "Focus strictly on primary movement vector or key retrieval step.",
              "Record exact split time and errors on every attempt.",
              "Calculate consistency variance across 5 trials."
            ],
            "repetitions": "5 official benchmark trials",
            "timeLimitSeconds": 600,
            "successCriteria": "Average score meets benchmark: Fully actionable skill curriculum created with 0% fluff and 100% measurable drills.",
            "failureCriteria": "Variance > 20% across attempts. Fails pressure criteria.",
            "difficultyAdjustment": "Maintain pace until 5 consecutive trials pass.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Deconstruction Matrix",
                "instruction": "Desired Outcome -> Measurable Mastery Contract -> 5 Levels -> 10 Drills -> Proof Protocol.",
                "diagramType": "flow",
                "keyTip": "Always ask: 'What does failure look like on an official stopwatch or metric?'.",
                "commonMistake": "Confusing reading articles with performing drills."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 2,
        "title": "Level 02 \u2014 Speed & Fatigue Threshold",
        "targetBenchmark": "Increase cadence by 20% while maintaining form.",
        "unlockCondition": "Level 1 test protocol passed with evidence.",
        "testProtocol": "Continuous high-density test protocol.",
        "drills": [
          {
            "id": "drill-75-03",
            "number": 3,
            "title": "Drill 03 \u2014 Cadence & Velocity Overload",
            "objective": "Push execution speed beyond comfortable baseline.",
            "whyExists": "Disrupts complacency and exposes hidden bottlenecks.",
            "equipment": "Target pursuit parameters",
            "setup": "Set timer 10% faster than standard pace.",
            "actions": [
              "Execute movement with explosive turnover.",
              "Do not pause between repetitions.",
              "Maintain technical discipline under oxygen/cognitive debt."
            ],
            "repetitions": "10 rounds",
            "timeLimitSeconds": 900,
            "successCriteria": "Pass rate >= 80% at accelerated cadence.",
            "failureCriteria": "Breakdown in primary technique. Regress to Level 1.",
            "difficultyAdjustment": "Adjust speed based on error rate.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Deconstruction Matrix",
                "instruction": "Desired Outcome -> Measurable Mastery Contract -> 5 Levels -> 10 Drills -> Proof Protocol.",
                "diagramType": "flow",
                "keyTip": "Always ask: 'What does failure look like on an official stopwatch or metric?'.",
                "commonMistake": "Confusing reading articles with performing drills."
              }
            ]
          }
        ]
      },
      {
        "levelNumber": 8,
        "title": "Level 08 \u2014 Mastery Execution & Final Proof",
        "targetBenchmark": "Input any raw hobby or professional pursuit; generate mastery contract, level tree, bottleneck diagnostics & proof.",
        "unlockCondition": "Pass all prerequisite levels and submit official verification.",
        "testProtocol": "Strict official examination meeting Mastery Contract: Input any raw hobby or professional pursuit; generate mastery contract, level tree, bottleneck diagnostics & proof.",
        "drills": [
          {
            "id": "drill-75-mastery",
            "number": 8,
            "title": "Drill 08 \u2014 The Mastery Contract Proof",
            "objective": "Achieve official mastery: Input any raw hobby or professional pursuit; generate mastery contract, level tree, bottleneck diagnostics & proof.",
            "whyExists": "The definitive verification of competency. No hints, no coaching.",
            "equipment": "Target pursuit parameters",
            "setup": "Official test setup. Recording or logging tool active.",
            "actions": [
              "Review the Mastery Contract: Input any raw hobby or professional pursuit; generate mastery contract, level tree, bottleneck diagnostics & proof.",
              "Execute unassisted trial under official conditions.",
              "Record output, timer, video, or repository evidence.",
              "Submit evidence to Proof Verification Engine."
            ],
            "repetitions": "Official test session",
            "timeLimitSeconds": 1800,
            "successCriteria": "Input any raw hobby or professional pursuit; generate mastery contract, level tree, bottleneck diagnostics & proof.",
            "failureCriteria": "Any deviation from mastery contract conditions. Result: FAIL.",
            "difficultyAdjustment": "Full mastery standard.",
            "interactiveTool": "agent-studio",
            "visualSteps": [
              {
                "stepNumber": 1,
                "title": "The Deconstruction Matrix",
                "instruction": "Desired Outcome -> Measurable Mastery Contract -> 5 Levels -> 10 Drills -> Proof Protocol.",
                "diagramType": "flow",
                "keyTip": "Always ask: 'What does failure look like on an official stopwatch or metric?'.",
                "commonMistake": "Confusing reading articles with performing drills."
              }
            ]
          }
        ]
      }
    ],
    "proofRequirements": {
      "type": "metrics",
      "requiredFormat": "Video link / Timer CSV log / GitHub repo / Audio file",
      "description": "Provide verifiable proof meeting: Input any raw hobby or professional pursuit; generate mastery contract, level tree, bottleneck diagnostics & proof.",
      "sampleVerification": "Proof submission will be evaluated against: Fully actionable skill curriculum created with 0% fluff and 100% measurable drills."
    }
  },
];
