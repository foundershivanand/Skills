import json
import os

skills_metadata = [
  # A. Physical / Movement (1-10)
  {
    "number": 1,
    "title": "Run 5 km under 20 minutes",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "physical-endurance",
    "timeCategory": "20-hours",
    "masteryDefinition": "Run 5,000 meters in <=19:59 on a flat track or verified outdoor course with recorded GPS split times under 4:00/km.",
    "prerequisites": ["Run 5 km continuously without walking under 26:00"],
    "equipmentNeeded": ["Running shoes", "GPS watch or phone tracker", "400m track access"],
    "totalLevels": 6,
    "tool": "interval-timer",
    "proofType": "timer-log",
    "proofDesc": "GPS activity link (Strava / Garmin / Nike Run Club) showing 5.00 km, elapsed time < 20:00, and per-km splits < 4:00.",
    "keyFocus": "Lactate threshold & cadence lock (180 SPM)",
    "primaryDrill": "Drill 01 — 400m VO2 Max Repeats",
    "primaryDrillWhy": "Trains leg turnover at 3:55/km pace and expands stroke volume.",
    "actions": [
      "Warm up with 10 min dynamic mobility & easy jog.",
      "Execute 8 x 400m intervals on track at exact 94-second target.",
      "Recover with 60 seconds walking rest between sets.",
      "Record all 8 splits. Zero splits allowed above 96 seconds."
    ],
    "success": "8/8 intervals completed in 93-95 seconds with <60s recovery.",
    "failure": "Any 400m lap exceeds 96 seconds. Repeat session with 75s rest.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Cadence Lock (180 SPM)", "instruction": "Land forefoot directly beneath hip center of mass. Do not overstride ahead of knees.", "diagramType": "posture", "keyTip": "Think of ground as hot coals: short ground contact time (<210ms).", "commonMistake": "Heel striking ahead of knee axis creating braking force."},
      {"stepNumber": 2, "title": "Chest & Torso Lean", "instruction": "Maintain a slight 4-6 degree forward lean from the ankles, not bending from the waist.", "diagramType": "posture", "keyTip": "Gaze 15 meters forward, shoulders down and loose.", "commonMistake": "Bending at hips which restricts hip flexor extension."},
      {"stepNumber": 3, "title": "Pacing Splits Check", "instruction": "Lock splits at 3:58/km (95s per 400m). Never sprint the first 400m faster than 92s.", "diagramType": "split", "keyTip": "Conserve glycogen in lap 1-6; kick on lap 11-12.", "commonMistake": "Starting at 3:30/km and blowing up at km 3."}
    ]
  },
  {
    "number": 2,
    "title": "Run 10 km in one go",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "physical-endurance",
    "timeCategory": "20-hours",
    "masteryDefinition": "Complete 10,000 meters continuously without walking breaks under 50:00 with heart rate in sustainable aerobic zone.",
    "prerequisites": ["Comfortable with 5 km continuous distance"],
    "equipmentNeeded": ["Running shoes", "Heart rate monitor or GPS tracker"],
    "totalLevels": 5,
    "tool": "interval-timer",
    "proofType": "timer-log",
    "proofDesc": "GPS activity log showing 10.00 km, elapsed time < 50:00 with zero pause intervals.",
    "keyFocus": "Aerobic base building & mitochondrial density",
    "primaryDrill": "Drill 01 — Zone 2 Aerobic Base Long Run",
    "primaryDrillWhy": "Maximizes fat oxidation and capillaries without accumulating lactate.",
    "actions": [
      "Set GPS monitor to alert if heart rate exceeds Zone 2 ceiling (140-150 BPM).",
      "Run 8 km continuously at steady conversation pace.",
      "Drink 150ml water at 4 km mark without stopping stride.",
      "Finish with 4 x 100m strides to maintain neuro-muscular sharpness."
    ],
    "success": "8 km run completed with >85% time in Zone 2 heart rate band.",
    "failure": "Heart rate spikes into Zone 4 for >3 minutes. Slow pace down by 20s/km.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Zone 2 Breathing Check", "instruction": "You must be able to speak 3 complete sentences without gasping for breath.", "diagramType": "posture", "keyTip": "Inhale for 3 strides, exhale for 3 strides.", "commonMistake": "Running too fast on easy days, creating chronic fatigue."}
    ]
  },
  {
    "number": 3,
    "title": "Sprint technique & acceleration mechanics",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Execute 60m dash with optimal triple extension, dorsiflexion, 45-degree drive angle, sub-8.0s benchmark.",
    "prerequisites": ["Basic sprint capability"],
    "equipmentNeeded": ["Sprint flats/spikes", "Cones", "High-speed phone camera"],
    "totalLevels": 5,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Slow-motion side video showing block/standing start, 45-degree torso drive, and 60m sprint time < 8.00s.",
    "keyFocus": "Ground reaction force & drive phase angle",
    "primaryDrill": "Drill 01 — Wall Acceleration Drives & Triple Extension",
    "primaryDrillWhy": "Ingrains the neural pathway for 45-degree forward force vector.",
    "actions": [
      "Place palms on wall at shoulder height, step back into 45-degree body angle.",
      "Drive right knee up to hip level, ankle dorsiflexed (toes up).",
      "Punch foot down and back directly under hip, alternating legs explosively.",
      "Perform 5 sets of 10 rapid switches with zero torso rotation."
    ],
    "success": "Perfect ankle-knee-hip alignment with zero lumbar arching.",
    "failure": "Heel drops or toes point down. Repeat set with slower cadence.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Triple Extension Vector", "instruction": "Ankle, knee, and hip form a straight 45-degree line from ground contact to shoulder.", "diagramType": "posture", "keyTip": "Drive down and back, not straight down.", "commonMistake": "Standing upright immediately after step 1."}
    ]
  },
  {
    "number": 4,
    "title": "Freestanding Handstand (60 seconds)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Hold a motionless freestanding handstand for 60 consecutive seconds with full shoulder flexion, hollow body, and finger balance control.",
    "prerequisites": ["60s chest-to-wall handstand hold"],
    "equipmentNeeded": ["Gym mat or firm flat ground", "Clear wall space"],
    "totalLevels": 6,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Uncut video recording holding freestanding handstand from kick-up to clean dismount for >=60s.",
    "keyFocus": "Wrist camber fingertip micro-adjustments & shoulder elevation",
    "primaryDrill": "Drill 01 — Camber Hand Grip & Heel Pulls",
    "primaryDrillWhy": "Teaches the fingers to brake forward falling and palms to push backward.",
    "actions": [
      "Kick up to wall with chest facing wall, hands 10cm from baseboard.",
      "Engage fingers like claws (camber grip: knuckles slightly raised).",
      "Gently pull toes away from wall using only fingertip pressure.",
      "Hold balance off the wall for 15 seconds. Repeat 8 rounds."
    ],
    "success": "Hold freestanding balance off wall for >=15s on 6 of 8 attempts.",
    "failure": "Shoulders close or back bananas. Drop immediately and rest 90s.",
    "visualSteps": [
      {"stepNumber": 1, "title": "The Camber Grip", "instruction": "Spread fingers wide. First knuckle joints bent like claws digging into the floor.", "diagramType": "posture", "keyTip": "Weight rests on the base of palm and first knuckles.", "commonMistake": "Flat limp fingers with no active braking capacity."},
      {"stepNumber": 2, "title": "Hollow Body Line", "instruction": "Tuck tailbone, squeeze glutes, pull ribs in. Zero arch in lower back.", "diagramType": "posture", "keyTip": "Push the floor away: active elevated shoulders covering ears.", "commonMistake": "Banana back arching to compensate for tight shoulders."}
    ]
  },
  {
    "number": 5,
    "title": "Handstand push-up (strict freestanding)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "deep-mastery",
    "masteryDefinition": "Perform 5 strict freestanding handstand pushups from full lockout down to head touching a 2cm mat and pressing back to lockout without falling.",
    "prerequisites": ["60s freestanding handstand", "15 strict wall HSPUs"],
    "equipmentNeeded": ["Gym mat", "Parallettes or flat floor"],
    "totalLevels": 7,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Video of 5 consecutive strict freestanding HSPUs without touching walls or kicking legs.",
    "keyFocus": "Tripod head descent & pressing elbow tracking",
    "primaryDrill": "Drill 01 — Slow Tripod Eccentrics",
    "primaryDrillWhy": "Develops eccentric anterior deltoid control along the curved pressing trajectory.",
    "actions": [
      "Kick up to freestanding handstand.",
      "Lower head forward to form equilateral triangle with hands over 4 full seconds.",
      "Kiss mat with top of head under control.",
      "Bail or press back up. Repeat 5 singles with 2-minute rest."
    ],
    "success": "5/5 descents strictly controlled for >=4 seconds.",
    "failure": "Head drops straight between hands instead of forward into tripod. Reset.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Tripod Geometry", "instruction": "Hands and head must form an equilateral triangle at bottom, never a straight line.", "diagramType": "posture", "keyTip": "Forearms stay vertical like pillars.", "commonMistake": "Flaring elbows 90 degrees out which impinges shoulders."}
    ]
  },
  {
    "number": 6,
    "title": "20 Strict Dead-Hang Pull-ups",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform 20 consecutive strict dead-hang pull-ups: chin fully over bar, zero kipping or swinging, elbows fully locked out at the bottom.",
    "prerequisites": ["8 basic pull-ups"],
    "equipmentNeeded": ["Sturdy pull-up bar", "Chalk"],
    "totalLevels": 6,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Continuous side-view video showing full dead hang lockout and chin clearly clearing bar on 20 reps.",
    "keyFocus": "Scapular depression & hollow-body lat engagement",
    "primaryDrill": "Drill 01 — Armstrong High-Volume Density Ladders",
    "primaryDrillWhy": "Conditions the nervous system to fire lats with zero momentum.",
    "actions": [
      "Perform ladder: 1 rep, rest 10s; 2 reps, rest 20s; 3 reps, rest 30s up to 6 reps.",
      "Every rep must initiate with scapular pull down before elbows bend.",
      "Pause for 0.5s at full dead hang between every single rep.",
      "Perform 3 cycles with 3 minutes rest between ladders."
    ],
    "success": "All reps completed with full ROM and zero leg kick.",
    "failure": "Chin reaches bar but does not clear horizontal plane. That rep is VOID.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Dead Hang to Active Hang", "instruction": "Before bending elbows, pull shoulder blades down and back into your back pockets.", "diagramType": "posture", "keyTip": "Keep legs pinned together with toes pointed forward (hollow body).", "commonMistake": "Bending knees backwards and kipping with hips."}
    ]
  },
  {
    "number": 7,
    "title": "One-Arm Push-up (both sides)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform 5 clean one-arm push-ups on both right and left arm with feet no wider than shoulder width and minimal torso twist.",
    "prerequisites": ["30 strict standard push-ups", "60s hollow plank"],
    "equipmentNeeded": ["Flat non-slip surface"],
    "totalLevels": 6,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Video showing 5 strict one-arm push-ups on right arm, followed by 5 on left arm.",
    "keyFocus": "Anti-rotational core torque & unilateral chest power",
    "primaryDrill": "Drill 01 — Archer Push-ups & Incline Unilateral Press",
    "primaryDrillWhy": "Gradually shifts 85% of bodyweight load onto single pressing limb.",
    "actions": [
      "Assume push-up stance on 30cm raised box with single hand centered under sternum.",
      "Place opposite hand firmly on lower back.",
      "Lower chest to touch box surface without allowing hip to rotate >15 degrees.",
      "Explode to full elbow lockout. 5 sets of 4 reps per arm."
    ],
    "success": "5 sets completed per arm with hips staying parallel to floor.",
    "failure": "Hip dips or rolls sideways to cheat weight distribution. Reduce elevation.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Centering Hand Alignment", "instruction": "Plant working hand directly under midline of chest, fingers turned slightly out.", "diagramType": "posture", "keyTip": "Squeeze glutes and press through toes of opposite foot to counteract torque.", "commonMistake": "Flaring hand too high under neck."}
    ]
  },
  {
    "number": 8,
    "title": "Pistol Squat (10 consecutive per leg)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform 10 consecutive full-depth single-leg squats per side without heel rise, bounce, or non-working foot touching ground.",
    "prerequisites": ["Solid two-leg deep squat (30 reps)"],
    "equipmentNeeded": ["Firm flat floor", "10cm block for regression"],
    "totalLevels": 6,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Video of 10 continuous pistol squats on right leg, followed by 10 on left leg with hamstring resting on calf.",
    "keyFocus": "Ankle dorsiflexion & hip flexor compression",
    "primaryDrill": "Drill 01 — Box Step-Downs with Controlled 4-Second Negative",
    "primaryDrillWhy": "Isolates the single-leg eccentric strength without requiring extreme hip compression.",
    "actions": [
      "Stand on 30cm box on right leg, left leg suspended in air in front.",
      "Hinge hip back and lower right knee over 4 slow seconds until left heel taps floor.",
      "Drive through midfoot to stand back up without bouncing.",
      "Perform 4 sets of 6 reps per leg."
    ],
    "success": "Controlled descent on all reps with zero knee collapse inwards (valgus).",
    "failure": "Working heel lifts off box surface. Elevate heel slightly and mobilize ankle.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Ankle Knee Alignment", "instruction": "Knee tracks directly over second toe. Working heel stays glued to floor.", "diagramType": "posture", "keyTip": "Reach both arms straight ahead to counter-balance your torso.", "commonMistake": "Heel lifting off ground due to restricted dorsiflexion."}
    ]
  },
  {
    "number": 9,
    "title": "Juggling 3 Balls (100 catches cascade)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Perform a clean 3-ball cascade pattern for >=100 catches continuously without drop, stepping forward, or collision.",
    "prerequisites": ["None"],
    "equipmentNeeded": ["3 juggling beanbags or tennis balls"],
    "totalLevels": 5,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Continuous uncut video showing start from standstill to 100 catches and clean catch-stop.",
    "keyFocus": "Consistent eye-level apex & scooping hand motion",
    "primaryDrill": "Drill 01 — The 2-Ball Cross-Throw Exchange (Throw-Throw-Catch-Catch)",
    "primaryDrillWhy": "Removes the panic response of passing balls across instead of throwing high.",
    "actions": [
      "Hold one ball in each hand with elbows bent 90 degrees at your waist.",
      "Throw Ball A across to opposite eye level in gentle arc.",
      "When Ball A reaches apex, throw Ball B underneath across to starting hand.",
      "Catch Ball A, then catch Ball B. Call out: 'Throw, throw, catch, catch.'",
      "Perform 30 reps starting with right hand, then 30 starting with left hand."
    ],
    "success": "50 clean exchanges without dropping or chasing forward.",
    "failure": "Passing ball directly hand-to-hand instead of throwing arc. Reset to 1 ball.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Scooping Arc", "instruction": "Hands scoop down from outside to inside, releasing at navel height towards opposite eye.", "diagramType": "path", "keyTip": "Peak of ball trajectory should match your forehead height.", "commonMistake": "Throwing forward, forcing you to run across the room."}
    ]
  },
  {
    "number": 10,
    "title": "Juggling 4 Balls (Fountain 50 catches)",
    "domainId": "physical",
    "domainCode": "A",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Perform synchronous and asynchronous 4-ball fountain pattern for >=50 continuous catches without ball collision.",
    "prerequisites": ["Consistent 3-ball cascade (100 catches)"],
    "equipmentNeeded": ["4 juggling beanbags"],
    "totalLevels": 6,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Video showing 50 continuous catches of 4-ball fountain (2 balls in each independent hand).",
    "keyFocus": "Hand independence (2 balls in 1 hand without crossing)",
    "primaryDrill": "Drill 01 — 2 Balls in 1 Hand Isolation (Both Hands)",
    "primaryDrillWhy": "4-ball juggling is simply two independent hands juggling 2 balls simultaneously.",
    "actions": [
      "Hold 2 balls in right hand only. Juggling them in circular outside-to-inside column.",
      "Execute 30 continuous catches with right hand alone.",
      "Switch to left (weak) hand. Execute 30 continuous catches.",
      "Balls must NEVER cross center line of body."
    ],
    "success": "Both hands achieve 30 consecutive catches isolated.",
    "failure": "Balls collide or hand drifts across body centerline. Repeat 10 reps.",
    "visualSteps": [
      {"stepNumber": 1, "title": "The Independent Fountains", "instruction": "Right hand throws outside-in on right side; left hand throws outside-in on left side.", "diagramType": "path", "keyTip": "Never cross center line: 4 balls never change hands in standard fountain.", "commonMistake": "Attempting cascade cross throws with 4 balls."}
    ]
  },

  # B. Speed / Dexterity (11-20)
  {
    "number": 11,
    "title": "Rubik's Cube — sub-60 seconds",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Solve a scrambled 3x3 cube in <=60 seconds for 5 consecutive official-style solves using beginner CFOP.",
    "prerequisites": ["None"],
    "equipmentNeeded": ["3x3 speedcube", "Speedcubing timer"],
    "totalLevels": 5,
    "tool": "rubik-timer",
    "proofType": "timer-log",
    "proofDesc": "Timer log showing 5 consecutive solves with individual times < 60.00s and Ao5 < 55.00s.",
    "keyFocus": "White cross on bottom & fingertrick execution",
    "primaryDrill": "Drill 01 — White Cross on Bottom in Under 6 Seconds",
    "primaryDrillWhy": "Eliminates cube rotations before first layer insertion.",
    "actions": [
      "Generate random WCA scramble.",
      "Inspect cube for 15 seconds. Plan all 4 cross edges.",
      "Hold white center on BOTTOM (yellow on top).",
      "Execute cross blind or with eyes closed. Target: <=6.00s."
    ],
    "success": "Cross solved on bottom in <=6.0s on 8/10 attempts.",
    "failure": "Solving cross on top and flipping cube. Instant restart.",
    "visualSteps": [
      {"stepNumber": 1, "title": "White Cross on Bottom", "instruction": "White face must stay on bottom throughout the entire solve. Yellow stays top.", "diagramType": "cube", "keyTip": "Match edge to side center, then insert into bottom with F2 or R2.", "commonMistake": "Building daisy on top and taking 25 seconds just for cross."}
    ]
  },
  {
    "number": 12,
    "title": "Rubik's Cube — sub-30 seconds",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Achieve an Ao5 (average of 5) <=30.00 seconds under WCA regulations using intuitive F2L and 2-look OLL/PLL.",
    "prerequisites": ["Sub-60 consistent solve"],
    "equipmentNeeded": ["Magnetic 3x3 speedcube", "Timer"],
    "totalLevels": 7,
    "tool": "rubik-timer",
    "proofType": "timer-log",
    "proofDesc": "WCA timer session export with Ao5 <= 30.00s and standard deviations < 3.0s.",
    "keyFocus": "Intuitive F2L pairing & 2-look last layer algorithms",
    "primaryDrill": "Drill 01 — Slow-Turning Uninterrupted F2L",
    "primaryDrillWhy": "Removes pauses between F2L pairs; continuous turning is faster than burst-and-pause.",
    "actions": [
      "Scramble cube and solve cross.",
      "Turn at steady 1.5 TPS (turns per second) with ZERO pausing.",
      "While inserting pair 1, eyes track corner/edge for pair 2.",
      "Complete all 4 F2L pairs in <=18 seconds total."
    ],
    "success": "F2L completed with zero pauses longer than 0.5s.",
    "failure": "Stopping turns to hunt for pieces. Penalty: 5 blindfolded cross solves.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Look-Ahead Tracking", "instruction": "Once fingers execute algorithm for current pair, eyes must leave that slot and scan top layer.", "diagramType": "cube", "keyTip": "Never look at what your hands are already solving.", "commonMistake": "Staring at the slot being inserted while clock runs."}
    ]
  },
  {
    "number": 13,
    "title": "Rubik's Cube — sub-20 seconds",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "deep-mastery",
    "masteryDefinition": "Achieve an official Ao5 <=20.00 seconds using full CFOP (cross <=2.5s, F2L <=10s, OLL+PLL <=7.5s).",
    "prerequisites": ["Sub-30 consistent solve"],
    "equipmentNeeded": ["Lubricated magnetic 3x3 speedcube", "Timer"],
    "totalLevels": 12,
    "tool": "rubik-timer",
    "proofType": "timer-log",
    "proofDesc": "Ao5 under 20.00 seconds with solve breakdown times and full PLL algorithm mastery.",
    "keyFocus": "F2L recognition under 1.2s & full 21 PLL algorithms",
    "primaryDrill": "Drill 01 — F2L Recognition Flashcard Drill",
    "primaryDrillWhy": "Isolates visual recognition from physical turning speed.",
    "actions": [
      "Present scrambled F2L pair on top layer.",
      "Timer starts: identify pair configuration (separated, attached, hidden).",
      "Call out exact 3-move or 4-move insertion trigger within 1.2 seconds.",
      "Do NOT solve the entire cube. Test 20 random pair configurations."
    ],
    "success": "18/20 pairs recognized and named in <=1.2 seconds.",
    "failure": "Recognition time > 1.5s. Repeat 20 reps on that specific case.",
    "visualSteps": [
      {"stepNumber": 1, "title": "F2L Case 1: Corner White on Top", "instruction": "Align edge with side color. Rotate U to position away from corner, then execute R U2 R'.", "diagramType": "cube", "keyTip": "Notice sticker orientation before turning any face.", "commonMistake": "Random rotations (cube y y') hunting for angles."},
      {"stepNumber": 2, "title": "T-Perm Alg Execution", "instruction": "R U R' U' R' F R2 U' R' U' R U R' F' in < 1.3 seconds with index finger pinch.", "diagramType": "cube", "keyTip": "Flick F' with right thumb, not full wrist roll.", "commonMistake": "Regripping cube between R2 and U'."}
    ]
  },
  {
    "number": 14,
    "title": "Rubik's Cube Blindfolded (3BLD)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "cognitive",
    "timeCategory": "20-hours",
    "masteryDefinition": "Memorize and solve a scrambled 3x3 blindfolded under 3 minutes total using Old Pochmann (OP) or M2/OP method.",
    "prerequisites": ["Sub-60 sighted solve", "Card or digit mnemonics familiarity"],
    "equipmentNeeded": ["3x3 cube", "Blindfold", "Memo pad"],
    "totalLevels": 8,
    "tool": "rubik-timer",
    "proofType": "video-url",
    "proofDesc": "Uncut video showing cube scramble, memo phase, blindfold down, execution, and solved cube inspection.",
    "keyFocus": "Cycle memo lettering & T-Perm/Y-Perm buffer swaps",
    "primaryDrill": "Drill 01 — 4-Corner OP Buffer Swap Execution",
    "primaryDrillWhy": "Guarantees zero piece displacement outside the target swap slot.",
    "actions": [
      "Scramble cube corners only.",
      "Identify letter memo for corner cycle: ULB -> RDF -> LBD.",
      "Setup target piece to RDF with setup moves (e.g., F, D, F').",
      "Execute Y-Perm buffer swap algorithm, then undo setup moves.",
      "Verify all 4 corners are placed correctly sighted."
    ],
    "success": "Corners solved correctly with zero setup-undo errors.",
    "failure": "Wrong setup move or missed undo move. Scramble and redo.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Lettering Scheme Speffz", "instruction": "Assign letters A through X to all 24 corner and edge stickers starting from top face clockwise.", "diagramType": "cube", "keyTip": "Build letter pairs into visual images (e.g. AB = Anchor Bolt).", "commonMistake": "Forgetting parity algorithm when odd number of swaps."}
    ]
  },
  {
    "number": 15,
    "title": "Speed Typing — 100 WPM",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "20-hours",
    "masteryDefinition": "Type 100 WPM on standard English quotes for 3 consecutive 60-second tests with >=98% accuracy.",
    "prerequisites": ["Basic touch typing at 40 WPM without looking at keys"],
    "equipmentNeeded": ["Mechanical or standard keyboard"],
    "totalLevels": 6,
    "tool": "speed-reader",
    "proofType": "metrics",
    "proofDesc": "Monkeytype / Typeracer verified test screenshot showing 3 consecutive runs >=100 WPM and >=98% acc.",
    "keyFocus": "N-gram chunking & rolling keystrokes",
    "primaryDrill": "Drill 01 — Top 200 English Word Bursts",
    "primaryDrillWhy": "Transitions the brain from typing individual letters to firing whole word muscle memory.",
    "actions": [
      "Load top 200 common words (the, that, with, have, this).",
      "Type each word as a single explosive chord.",
      "Maintain >=98% accuracy. Any typo requires restarting the word.",
      "Complete 10 sets of 50 words with target > 105 WPM."
    ],
    "success": "Average speed > 100 WPM across 5 consecutive tests.",
    "failure": "Accuracy falls below 97%. Reduce speed by 15 WPM until accuracy is 100%.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Home Row Anchor", "instruction": "Index fingers stay anchored over F and J bumps. Wrists floating, not dragging on desk.", "diagramType": "posture", "keyTip": "Look 2 words ahead of your current keystroke.", "commonMistake": "Looking down at keyboard or backspacing furiously."}
    ]
  },
  {
    "number": 16,
    "title": "Pen Spinning (Thumbaround + Sonic + Charge)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Chain Thumbaround -> Sonic -> Charge -> Infinity smoothly for 5 continuous repetitions without dropping pen.",
    "prerequisites": ["None"],
    "equipmentNeeded": ["Balanced pen mod or heavy pencil"],
    "totalLevels": 5,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Video showing 5 continuous clean combos without finger hesitation or drops.",
    "keyFocus": "Finger independence & momentum conservation",
    "primaryDrill": "Drill 01 — Isolated Sonic 23 to 12 Transfer",
    "primaryDrillWhy": "Develops the ring-middle finger charge pass behind the middle finger.",
    "actions": [
      "Hold pen between middle (2) and ring (3) fingers.",
      "Build conical charge momentum with fingers 2 and 3.",
      "Bend middle finger inward as index finger (1) clamps the pen.",
      "Catch pen between fingers 1 and 2 seamlessly. 30 reps per set."
    ],
    "success": "25/30 clean sonic transfers without pen wobbling out of plane.",
    "failure": "Pen flies out or stalls behind finger. Adjust grip closer to center of gravity.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Thumbaround Release", "instruction": "Middle finger pushes pen base forward against stationary thumb. Do NOT move thumb.", "diagramType": "path", "keyTip": "Catch pen with index finger as it completes 360 rotation around thumb.", "commonMistake": "Swinging entire arm or flicking wrist."}
    ]
  },
  {
    "number": 17,
    "title": "Coin Manipulation (Classic Palm & Roll)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Perform 10 continuous knuckle rolls back-and-forth across 4 fingers and maintain undetectable classic palm.",
    "prerequisites": ["None"],
    "equipmentNeeded": ["Two half-dollar coins or heavy 10-rupee coins"],
    "totalLevels": 5,
    "tool": "interval-timer",
    "proofType": "video-url",
    "proofDesc": "Front video showing clean 10-pass knuckle roll and undetectable classic palm with hand relaxed naturally.",
    "keyFocus": "Thenar eminence grip & finger slope roll",
    "primaryDrill": "Drill 01 — Index-to-Pinky Knuckle Walk",
    "primaryDrillWhy": "Trains interdigital muscle articulation across fingers 1-4.",
    "actions": [
      "Balance coin flat on index finger knuckle.",
      "Tilt middle finger down to catch coin edge and flip it onto middle knuckle.",
      "Repeat sequentially across ring finger and pinky finger.",
      "Slide thumb underneath to catch coin at pinky and return to index finger.",
      "Execute 10 complete cycles without dropping coin."
    ],
    "success": "10 consecutive cycles completed in <=45 seconds.",
    "failure": "Coin falls to table or fingers convulse stiffly. Restart count from 0.",
    "visualSteps": [
      {"stepNumber": 1, "title": "The Knuckle Tilt Angle", "instruction": "Adjacent finger drops slightly lower to receive the falling coin by its milled edge.", "diagramType": "path", "keyTip": "Keep wrist relaxed; gravity does the work of the roll.", "commonMistake": "Trying to grab the coin with fingertips instead of letting it roll over knuckles."}
    ]
  },
  {
    "number": 18,
    "title": "Card Shuffling & Flourishes (Riffle, Charlier, Spring)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Execute seamless table riffle shuffle with waterfall, 5 one-handed Charlier cuts in 15s, and 30cm cascade card spring.",
    "prerequisites": ["None"],
    "equipmentNeeded": ["Standard Bicycle Rider Back 52-card deck"],
    "totalLevels": 5,
    "tool": "card-memory",
    "proofType": "video-url",
    "proofDesc": "Video displaying table riffle + bridge waterfall, 5 Charlier cuts, and card spring smoothly.",
    "keyFocus": "Deck pressure control & bevel release",
    "primaryDrill": "Drill 01 — One-Handed Charlier Cut Cadence",
    "primaryDrillWhy": "Builds intrinsic hand strength and single-hand packet clearance.",
    "actions": [
      "Hold deck in elevated mechanics grip in left hand.",
      "Release bottom half with thumb so it drops to palm.",
      "Index finger pushes bottom packet up against top packet.",
      "Top packet clears and drops underneath into palm.",
      "Square deck with fingers. Execute 5 clean cuts in <=15 seconds."
    ],
    "success": "5 clean Charlier cuts executed without dropping single card.",
    "failure": "Cards splay sideways or index finger catches. Reset deck.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Charlier Packet Clearance", "instruction": "Index finger pushes from bottom center until top edge of lower packet clears upper packet.", "diagramType": "cards", "keyTip": "Open your hand wide to give the packets room to pass.", "commonMistake": "Holding hand cramped, blocking the packet from folding over."}
    ]
  },
  {
    "number": 19,
    "title": "Basic Card Magic (Key Card & Double Lift)",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-day",
    "masteryDefinition": "Execute invisible strike double lift and perform 3 impromptu card miracles cleanly before live spectator with zero suspicion.",
    "prerequisites": ["Familiarity with card handling"],
    "equipmentNeeded": ["Deck of playing cards"],
    "totalLevels": 5,
    "tool": "card-memory",
    "proofType": "video-url",
    "proofDesc": "Performance video of Double Lift turnover and 2 card reveals executed seamlessly.",
    "keyFocus": "Pinky count & strike double lift naturalness",
    "primaryDrill": "Drill 01 — Strike Double Lift Turnover & Reset",
    "primaryDrillWhy": "The core fundamental of 90% of card magic miracles.",
    "actions": [
      "Hold deck in relaxed dealer mechanics grip.",
      "Right thumb strikes top right corner of deck, catching exactly two cards as one.",
      "Turn two cards face up onto deck as single unit with zero card split.",
      "Turn face down again naturally and slide top card onto table.",
      "Perform 30 continuous double lift turnovers with zero visible separation."
    ],
    "success": "Zero flash of the hidden card across 20 video reviews.",
    "failure": "Cards separate by >1mm during turnover. Repeat 10 reps.",
    "visualSteps": [
      {"stepNumber": 1, "title": "The Strike Alignment", "instruction": "Right thumb and middle finger grip right edge. The two cards must stay perfectly aligned like a single card.", "diagramType": "cards", "keyTip": "Do not squeeze tightly; tension makes cards buckle and flash.", "commonMistake": "Looking guilty or staring intensely at your own fingers."}
    ]
  },
  {
    "number": 20,
    "title": "Finger Dexterity & Hand Independence",
    "domainId": "speed",
    "domainCode": "B",
    "skillType": "motor",
    "timeCategory": "1-hour",
    "masteryDefinition": "Perform polyrhythmic 3-against-4 finger taps and independent pinky-ring isolations at 120 BPM error-free for 60 seconds.",
    "prerequisites": ["None"],
    "equipmentNeeded": ["Flat desk", "Metronome or beat timer"],
    "totalLevels": 4,
    "tool": "interval-timer",
    "proofType": "metrics",
    "proofDesc": "Metronome audio and video showing independent finger isolations at 120 BPM without sympathetic finger twitch.",
    "keyFocus": "Extensor digitorum communis neurological separation",
    "primaryDrill": "Drill 01 — Ring-Pinky Isolation Hammer-On",
    "primaryDrillWhy": "Breaks the shared tendon limitation between ring finger and pinky.",
    "actions": [
      "Place palm flat on table. Keep thumb, index, and middle fingers pressed down.",
      "Lift ring finger 3cm while keeping pinky glued to table. Tap 10 times.",
      "Reverse: keep ring finger glued to table, lift pinky 3cm. Tap 10 times.",
      "Perform at 60 BPM -> 90 BPM -> 120 BPM."
    ],
    "success": "Independent 3cm lift without adjacent finger moving >2mm.",
    "failure": "Adjacent finger involuntarily lifts. Press down firmly with other hand.",
    "visualSteps": [
      {"stepNumber": 1, "title": "Tendon Decoupling", "instruction": "Keep MCP knuckles flush to the table while isolating distal phalange lift.", "diagramType": "posture", "keyTip": "Think of lifting from the knuckle, not the finger joint.", "commonMistake": "Lifting wrist off table to cheat range of motion."}
    ]
  }
]

print(f"Sample detailed skills defined: {len(skills_metadata)}")
with open("skills_sample.json", "w") as f:
    json.dump(skills_metadata, f, indent=2)
'