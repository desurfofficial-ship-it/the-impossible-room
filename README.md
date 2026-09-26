# The Impossible Room

*A walkable M.C. Escher atrium. Bend gravity. Fall sideways and upward. Escape.*

**The Impossible Room** is a fully self-contained, browser-based 3D puzzle game delivered as a
**single `index.html` file**. It runs on [Three.js](https://threejs.org/) loaded from a CDN and
synthesizes **every sound at runtime** with the Web Audio API — zero external assets.

> **Desktop:** open `index.html` and click **ENTER THE ROOM**.
> **Mobile:** open it on your phone or tablet, tap **ENTER THE ROOM** — full touch controls
> load automatically (virtual stick, drag-look, JUMP / USE / pause buttons).
> Landscape is recommended; the game asks for fullscreen on entry (optional).
> **Full player's guide:** open **`HOW-TO-PLAY.html`** (or the HOW TO PLAY → FULL GUIDE button).
> **Cheat console:** press **`** (Backquote) — or the **⌁** button on touch — and type `help`.

---

![Banner](banner.png)

## Ten Worlds, One Room

Every chamber now lives inside its own environment — a themed sky visible through
skylight ceilings and clerestory glass, with matching sun, weather and light:

| # | Chamber | Environment |
|---|---------|-------------|
| I | The Initiation | **Dawn Meadow** — sunrise gold, birds, butterflies, god-rays through the hatch |
| II | The Looping Escape | **Emerald Forest** — dusk-green pines, fireflies, crickets |
| III | Weight & Gravity | **Sandstone Desert** — mesas, sparse trees, hot sun |
| IV | The Switchboard | **Snowfield Lab** — clinical daylight over a snowy plain |
| V | The Chrono-Void | **Volcanic Storm** — jagged peaks, embers, rolling thunder |
| VI | The Silent Inversion | **Midnight Garden** — glowing flora, moths, night crickets |
| VII | The Reversed Chasm | **Arctic Ice** — icebergs on water, snow, aurora |
| VIII | The Monument of Escher | **Alpine Summit** — golden peaks and pine forests below |
| ✦ IX | The Fractal Well | **Ocean Lagoon** — teal water, gulls, caustic shimmer |
| ✦ X | The Escher Machine | **Cosmic Void** — floating crystals, nebula sparks |

## The Gravity Arches

Pass through the color-coded arches to rotate your world:

| Arch | Effect | Destination |
|------|--------|-------------|
| 🔵 **Blue** | rotates gravity +90° around X | **Wall A** |
| 🔴 **Red** | rotates gravity −90° around X | **Wall B** |
| 🟡 **Yellow** | inverts gravity 180° (a full barrel roll around your view axis) | **Ceiling** |
| 🟢 **Green** | resets to global down | **Floor** |

Arches **stack**: standing on Wall A and passing a blue arch drops you onto the ceiling.
Every wall and the ceiling are walkable surfaces — the room is the puzzle.

## The Campaign — The Academy, The Escape, then Endless

**v6 restructures the campaign into two acts.** The Academy (Lessons I–V) teaches the
game one skill per chamber with a live on-screen checklist that ticks off each skill as
the player performs it; The Escape (VI–XV) is the campaign proper — ten unique machines
that escalate all the way to the Monument.

| # | Difficulty | Chamber | Objective | Par (G/S/B) |
|---|---|---|---|---|
| I | ★ | **First Steps** *(lesson)* | Walk, sprint and jump the causeway; gather 3 shards | 1:00 / 1:35 / 2:30 |
| II | ★ | **The Sideways Lesson** *(lesson)* | The blue arch — walk the wall, green brings you home | 0:55 / 1:30 / 2:20 |
| III | ★ | **Up Is A Matter Of Opinion** *(lesson)* | Yellow flips the room over; red leans it the other way | 1:00 / 1:35 / 2:30 |
| IV | ★★ | **The Anchor** *(lesson)* | Tall green gates, void-hopping stones, wall-to-wall arches | 1:10 / 1:50 / 2:50 |
| V | ★★ | **The Examination** | The graduation exam: all four arches, fragments on three planes | 1:15 / 1:55 / 3:00 |
| VI | ★★ | **The Looping Escape** | Break the looping corridor — read the paint that only makes sense upside-down | 1:15 / 1:55 / 3:10 |
| VII | ★★ | **Weight & Gravity** | Carry gravity cubes across planes; seat one on each pressure anchor | 1:30 / 2:20 / 3:50 |
| VIII | ★★★ | **The Switchboard** | Rotate mirror pillars on floor, wall and ceiling; hold the beam on the sensor for 2 s | 1:50 / 2:50 / 4:40 |
| IX | ★★★★ | **The Chrono-Void** | Climb the spire in 90 s while gravity rotates every **16 s** — green zones anchor you | 1:10 / 1:20 / 1:27 |
| X | ★★★★ | **The Silent Inversion** | Take 3 energy cores without touching the sweeping sentinel lasers (**+32% speed per core**) | 1:30 / 2:15 / 3:40 |
| XI | ★★★★ | **The Reversed Chasm** | Cross a bridge that is only solid on the *right* plane; ride the void elevator | 2:00 / 3:05 / 5:10 |
| XII | ★★★★ | **The Clockwork Court** | Ride elevators between the planes; time the vertical sentinel; raid the high perches | 2:10 / 3:10 / 5:00 |
| XIII | ★★★★★ | **The Hundred-Step Garden** | The floor ends — four plane-locked mazes share one room; tour three planes to cross | 2:30 / 3:40 / 5:40 |
| XIV | ★★★★★ | **The Escher Trials** | Four trials (sequence · light · weight · sentinels) break the tower's seals | 2:50 / 4:10 / 6:40 |
| XV | ★★★★★ | **The Monument of Escher** | Sequence lock → laser lock → resonance pad → carry the Core Matrix to the upside-down socket | 2:30 / 3:50 / 6:20 |
| ✦ XVI–XVII | ★★–★★★ | **The Fractal Well / The Escher Machine** | Seeded procedural vaults (collect 4 sigils) | 1:30 / 2:20 / 3:50 |
| ✦ XVIII+ | ★★★–★★★★★ | **The endless vaults** | Generated on demand — sparser platforms, rarer arches, sentinels from depth 3, faster every depth | scales with depth |

## Flow — the Paradox Chain (v5)

The scoring heart of the game: **every arch you pass chains** (×2…×12) and multiplies
everything you collect — but the chain **decays in 12 seconds** and **shatters on death**.
Tiers: WALKER ×2 → INVERTED ×3 → IMPOSSIBLE ×5 → PARADOX ×8 → **ESCHER ×12** (rainbow meter).
Each chained flip plays the next note of a rising pentatonic melody — a kept chain literally
sounds like climbing. Escapes are graded with **medals** (GOLD/SILVER/BRONZE vs par time) and
**ranks** — **S** flawless (gold + 0 deaths) · **A** clean · **B** survivor · **C** escaped —
which only ever improve, shown as badges on the chamber grid alongside a lifetime score that
only goes up. Cheated runs are flagged **⌁ TAINTED** and never touch records, scores or ranks.

## Screenshots

| Chamber I — dawn atrium | Chamber II — emerald twilight |
|---|---|
| ![](l1.png) | ![](l2.png) |

| Chamber IV — polar lab | Chamber V — solar storm |
|---|---|
| ![](l4.png) | ![](l5.png) |

| Chamber VII — glacial depths | Chamber VIII — golden summit |
|---|---|
| ![](l7.png) | ![](l8.png) |

| v4: Chamber I alive with grass & birds | v4: the room in its landscape |
|---|---|
| ![](l1-v4.png) | ![](outside-v4.png) |

| Chamber X — nebula rose |
|---|
| ![](l10.png) |

### v8 — The Release Candidate (first-hour polish)

| Lesson I — the checklist tick pops (ring + chime) | Victory: signed vs-par delta + the rank's own reason |
|---|---|
| ![](v8-tut-tick.png) | ![](v8-victory.png) |

| Lesson I — jump chevrons & step-block recovery | Chamber select: medal chips at a glance |
|---|---|
| ![](v8-l1-causeway.png) | ![](v8-levels-chips.png) |

### v7 — The Polish Pass (previous release)

| The Daily Vault — seed of the day | Chain SHIELDED — shards pause the decay |
|---|---|
| ![](v7-daily-vault.png) | ![](v7-chain-shield.png) |

| Victory: peak tier + FLAWLESS row + the S formula printed | The paint is BACK — floor manuals render (invisible since v2!) |
|---|---|
| ![](v7-victory-hint.png) | ![](v7-l1-paint.png) |

### v6 — The Academy

| The new menu (live world shows through) | Chamber select: Academy / Escape / Vaults |
|---|---|
| ![](v6-menu.png) | ![](v6-levels.png) |

| Lesson I — the live checklist coaches you | Lesson II — walking the wall |
|---|---|
| ![](v6-academy.png) | ![](v6-l2-wall.png) |

| XII The Clockwork Court — brass dusk | XIII The Hundred-Step Garden — dusk |
|---|---|
| ![](v6-clockwork.png) | ![](v6-garden.png) |

| XIV The Escher Trials — aurora midnight | The Academy on a phone |
|---|---|
| ![](v6-trials.png) | ![](v6-mobile.png) |

| On a phone — virtual stick + touch buttons |
|---|
| ![](mobile.png) |

## Controls

**Desktop**

| Key | Action |
|-----|--------|
| `W A S D` | Move on your current plane (relative to view) |
| `SPACE` | Jump away from your current surface |
| `SHIFT` | Sprint |
| `E` | Interact — carry/drop gravity cubes, rotate mirrors, insert the core matrix |
| `R` | Restart chamber |
| `ESC` | Pause (releases the mouse) |
| `` ` `` | Cheat console (also `help`, see below) |

**Cheat console** — press `` ` `` (on touch: the **⌁** button) and type:

| Command | Effect |
|---------|--------|
| `god` | invulnerable — sentinels, lasers, the void |
| `noclip` | free flight through walls (Space up, C down, Shift boost) |
| `speed <n>` | movement multiplier (0.5–6) |
| `jump <n>` | jump power multiplier (0.5–5) |
| `gravity floor\|ceil\|wallA\|wallB` | snap gravity |
| `level <n>` | warp to chamber 1–∞ (deep vaults generate on demand) |
| `win` | complete the current chamber |
| `frags` | collect all fragments / cores here |
| `tp x y z` | teleport |
| `timescale <n>` | slow-motion / fast-forward (0.2–3) |
| `bright <n>` | exposure boost (−0.5–1) |
| `stats` | lifetime score / rank tally / depth report |
| `resetbest` | wipe all best times, scores and ranks |
| `reset` | clear all cheats |

Cheats never persist to your save, and a `⌁ CHEATS ACTIVE` tag marks the run.
There is also a **Konami code** (↑ ↑ ↓ ↓ ← → ← → B A)…

**Exploits that shipped as "features":** pausing (`ESC`) freezes Chamber V's 90-second
timer; in Chamber VI you keep your cores when a sentinel catches you (only time is lost).

**Mobile / touch** (auto-detected; force with `?touch=1` or `?touch=0`)
- **Install it:** tap **INSTALL APP** on the menu (or your browser's Add-to-Home-Screen)
  — fullscreen launch and offline play via the service worker.
- Haptic feedback on jumps, landings, arch shifts and records (toggle in SETTINGS).
- Double-tap the look zone (right side) for an instant 180° turn.
- Speedrun clock, SFX/ambience volume sliders and a vibration toggle live in SETTINGS.

| Touch | Action |
|-------|--------|
| Left thumb | Floating virtual stick — drag to move, push to the rim to sprint |
| Right thumb | Drag anywhere to look around |
| **JUMP** button | Leap away from your current surface |
| **USE** button | Interact — its label mirrors the current target (PICK / DROP / ROTATE / INSERT) |
| **II** button | Pause |

Fall into the void and you awake at the green arch — nothing is lost but time.

## Technical Highlights

- **Full mobile support** — touch is auto-detected via pointer-coarseness / max-touch-points
  (overridable with `?touch=1`/`?touch=0`). The left half of the screen spawns a floating
  analog joystick (merged into the movement wish vector, rim = sprint); any other finger
  becomes a look-drag through the same yaw/pitch math as the mouse; JUMP / USE / II buttons
  stop propagation so they never grab the stick. Touch installs also get lighter defaults
  (bloom off, 1024 px shadow maps, 1.6 DPR cap, reduced star/mote/particle counts), the FOV
  widens on portrait viewports, safe-area insets keep HUD and buttons clear of notches, and
  the game rides the ENTER tap into fullscreen when the API allows it.
- **Quaternion gravity engine** — gravity lives in a rotated frame (`qUp · qYaw · qPitch`
  camera composition, slerped over 0.5 s across every shift). No Euler gimbal lock, ever.
- **WASD without inversion** — movement is computed from the camera basis *projected onto the
  current walking plane*, so controls stay intuitive on the ceiling and on walls.
- **Custom AABB physics** — axis-separated sweep resolution, step-up stair handling,
  gravity-relative raycast grounding, coyote time, jump buffering, 120 Hz fixed-step integration.
- **1.0 s global arch cooldown + trigger re-arm** — no double-fires while tumbling between planes.
- **Void safety net** — out-of-bounds check respawns you at the green arch with gravity reset.
- **Web Audio synthesizer** — ambient drone, arch risers, chimes, footsteps, alarms, heartbeat,
  victory fanfares: all generated from oscillators/noise at runtime, with a convolution reverb
  built from a synthesized impulse response.
- **Plane-conditional geometry** (Chamber VII) — platforms materialize only under the matching
  gravity, fading to ghosts otherwise.
- **Deterministic procedural levels** (IX–X) — mulberry32-seeded vaults that are winnable by
  construction.
- **Environment themes** — a per-chamber sky dome (gradient + sun glow shader), sun/moon
  sprites, drifting clouds, aurora ribbons, volumetric-style light shafts, themed weather
  particles (dust, embers, snow, fireflies, spores, caustics, sparks) and glazed architecture:
  skylight ceilings + clerestory windows that show the sky while every surface stays fully
  solid for plane-walkers.
- **Cheat console + Konami code** — see above; also exposed as `window.CHEATS` for tinkerers.
- **Built-in QA harness** — open the game with `?qa=1` to run 47 self-tests, including scripted
  playthroughs of every level, synthetic-touch tests of the mobile controls (`?qa=1&touch=1`),
  UI-chain checks (victory dismiss), sequence-neutrality of green arches, beam persistence
  across levels, cheat-system tests, and v5 flow tests (chain decay, death-break, score/rank
  persistence, taint isolation, endless-vault generation, popup caps, audio ladder).
  The release build passed **47/47** in both modes.

## Engineering Notes

- `PointerLockControls` manages the pointer-lock lifecycle only; its Euler-based look math is
  incompatible with a rolled gravity frame (it scrubs roll and inverts pitch when upside-down),
  so its look step is neutralized (`pointerSpeed = 0`) and camera orientation is driven by the
  quaternion pipeline described above. The mandated failure points — WASD inversion on inverted
  planes, slerp jitter, rapid portal double-triggers, and fall-through-floor — are all covered
  by tests in the QA harness.
- Level geometry, colliders, textures (canvas-generated checkers and panels) and text decals are
  built per level and fully disposed on transitions.
- Imports use a standard import map pinned to `three@0.170.0` on UNPKG. Requires a browser with
  native import-map support (Chrome 89+, Firefox 108+, Safari 16.4+).

## Play

- **Local:** open `index.html` (or serve the folder: `python3 -m http.server`)
- **Self-test:** `index.html?qa=1` (desktop) · `index.html?qa=1&touch=1` (mobile mode)
- Debug/automation handle: `window.__TIR__` exposes the game state for tinkering.

## Changelog

**v8 — The Release Candidate (first-hour polish)**
- **Lesson I is now almost impossible to fail.** The two causeway gaps were tightened
  (2.6m→2.1m and 2.2m→1.9m — still real jumps), and three **step-block recovery kerbs**
  were added at the gap edges: each is exactly the auto-step height (0.55m), so a fallen
  newcomer literally *walks* back onto the causeway (previously the 1.1m climb vs a
  1.17m jump apex was razor-thin). Golden jump chevrons are painted at both gaps, plus
  “FALLEN? — STEP BLOCKS LEAD UP” floor paint. QA proves the climb needs zero jumps.
- **Checklist ticks got a real celebration.** Dedicated `tutTick` sound (wood transient
  + bright attack + rising body, per-step pitch), a bigger box pop with an expanding
  glow ring, a label slide, double-pulse haptics — and on completion the panel glows
  gold and bows out (`complete` flourish) while a delayed five-note lesson fanfare
  plays on the victory screen (the final tick lands first, then the Academy approves).
- **The “your chain is growing” moment.** The first time the multiplier crosses ×3 in
  Lesson IV (the chamber that teaches the chain), a magenta callout spells it out:
  *YOUR CHAIN IS GROWING — SHARDS PAY ×3 NOW*, with matching floor paint near the blue
  arch and the chain lesson line already on the floor.
- **Victory report clarity.** The medal row now carries the **signed time-vs-par delta**
  (green under / red over; a new `fmtDelta` keeps it honest past the minute mark), and
  the rank hint states **the earned rank's own criteria first** (e.g. “A — SILVER PAR
  1:35 · AT MOST 1 DEATH”) before the S-requirements line with ✓/✗ marks.
- **Chamber select medal chips.** The cryptic medal dot became a bordered chip
  (GOLD / SILV / BRZ) — PB time, medal and rank now read at a glance on every tile.
- **Beacon for the first GREEN.** Lesson II's return-home green arch now gets the same
  holographic guide beacon as the first blue/yellow/red arches (dissolves after first use).
- **Juice, one notch up:** shard bursts 36→46 particles with a slightly deeper screen
  pulse; chain tier-ups add a small camera thump to the flash + power chord.
- **No formula changes:** rank/medal math, the 12s chain window, the 2.5s shield and
  the save format (`tir_save`) are all untouched. Cheats, mobile controls, and the
  single-file constraint intact.
- Docs: HOW-TO-PLAY v8 (recovery blocks, tick celebration, victory transparency,
  61-check QA note); service worker bumped `tir-v8`.
- QA: 58→61 tests — `academy.tick-juice` (tick sounds/classes/re-arm),
  `victory.par-delta` (delta row + reason lines), `academy.recovery` (fallen player
  walks back up with zero jumps). 61/61 desktop + touch, zero page errors.

**v7 — The Polish Pass (previous release)**
- **CRITICAL FIX — the paint was invisible.** `LText` painted floor/wall manuals onto
  6×0-pixel canvas textures (world sizes were being used as pixel sizes). An invalid
  WebGL texture samples as *undefined* — sometimes black (the decals never rendered,
  since v2), sometimes **white — causing nondeterministic full-frame bloom whiteouts**
  in vault views. Fixed: proper 1024px canvases with aspect-matched sizes — every
  painted hint in the game now actually renders, and the whiteouts are gone.
- **CRITICAL FIX — vault sentinels were toothless.** Deep vaults spawned sweeping
  sentinels but never wired `onHazard`, so they couldn't hurt you. Now a hit is a soft
  fail: respawn at the green arch, sigils kept.
- **Portal brightness recalibrated** (peak 1.85×→1.15, alpha halved) and the bloom
  threshold raised 0.82→0.9: portal-dense views no longer pulse into a white wash.
- **Scoring is transparent.** The victory report now shows **peak chain with its tier
  name** (×8 · PARADOX), a **FLAWLESS ✓/✗ row**, and — whenever you miss it — **exactly
  what Rank S demands**: gold time (how many seconds over) + the death count.
- **Paradox Chain feel:** decay warning (meter blinks + soft ticks under 3.4s),
  **chain shield** (every shard pauses the decay for 2.5s — the meter glows green),
  chain-shield sound, and a first-×2 hint toast. Lesson IV now teaches the chain
  (reach ×3 to complete the lesson).
- **Vault twists:** the **Pulsar** (depth 2+, a breathing sentinel whose glow warns
  before its danger), **drifting kerbs** (depth 2+, oscillating footholds that carry
  you), and the **Orbital** (depth 4+, a pillar circling the room's waist).
- **The Daily Vault:** a magenta menu button — one generated vault per calendar day,
  same seed for every player, its own best-time record, fresh tomorrow.
- **Juice:** shard pickups fire an expanding screen ring + HUD counter pulse; arch
  transitions get a color-tuned whoosh and a settle thud; Academy teaching arches get
  holographic guide beacons that dissolve after first use.
- **Meta:** chamber tiles show centisecond bests; the vaults header shows your best
  floor; endless victories show best depth; `daily` and `stats` cheats extended;
  `resetbest` wipes daily records too.
- Difficulty audit: Lesson III ★1→2, Weight & Gravity ★2→3.
- QA: 55→58 tests (flow.shield, sentinel.twists, daily.vault) — 58/58 desktop + touch.

**v6 — The Academy (previous release)**
- **15 hand-crafted chambers** (was 8): the campaign is now two acts —
  **The Academy (I–V)** and **The Escape (VI–XV)** — plus the endless vaults from XVI.
- **The Academy teaches the game.** The first five chambers are lessons: movement & jumping,
  the blue arch, yellow & red, the green anchor (and the void), then a no-coaching
  Examination. Each lesson coaches with a **live checklist** at the top of the screen that
  ticks off skills as you perform them — with sounds, score and haptics per tick.
- **Three new unique machines:** **XII The Clockwork Court** (ride elevators, time a
  vertical sentinel), **XIII The Hundred-Step Garden** (four plane-locked mazes in one
  room — blue/red/yellow fins solid only on their plane), and **XIV The Escher Trials**
  (a four-trial gauntlet: sequence, light, weight, sentinels — then the tower crown).
- **UI overhaul:** the menu lets the live 3D world show through, the title sheens, the
  chamber select is grouped into THE ACADEMY / THE ESCAPE / THE VAULTS with accent-colored
  cards (stars, best time, medal dot, rank badge, LESSON chips), level cards carry an
  Academy chip, and the HUD is cleaner with an accent-ruled objective.
- **Save migration:** veterans keep their records — old chambers I–VIII map to VI–XIII,
  and the Academy comes pre-unlocked.
- **New QA guarantee — "the gates all work":** a sweep test warps through **every arch in
  every chamber** (17 levels × all arches) and demands a gravity event from each.
- **17 themed worlds** (was 10): five new Academy worlds (spring noon, forest morning,
  sky garden, calm lagoon, highland dawn) + brass dusk, dusk garden, aurora midnight.
- QA harness extended to **55 self-tests** — 55/55 desktop and 55/55 touch.

**v5 — Flow & Fury**
- **The Paradox Chain:** arch passes chain a ×2…×12 multiplier that pays out on everything
  you collect, decays in 12 s, and shatters on death — with tier fanfares (WALKER →
  INVERTED → IMPOSSIBLE → PARADOX → ESCHER), a bottom-center heat meter, floating score
  popups, and a rising pentatonic melody that climbs with every flip.
- **Score, medals, ranks:** per-run and lifetime scores with milestone toasts
  (5k/10k/25k/50k/100k), GOLD/SILVER/BRONZE medals vs per-chamber par times, and
  S/A/B/C ranks (S = gold + flawless) with a victory-screen medallion reveal, chamber-grid
  badges, and a menu lifetime line. Ranks only improve; tainted runs pay nothing.
- **It gets hard as it goes:** par times for all 8 chambers, Chamber V now shifts gravity
  every **16 s** (was 20), Chamber VI sentinels start faster and quicken **+32% per core**
  (was +18%), difficulty stars on the intro cards.
- **Endless vaults:** beyond Chamber X the procedural vaults never stop — sparser/smaller
  footholds, rarer bonus arches, sentinel beams from depth 3, faster and longer every depth.
  Deepest chamber is saved and shown on the menu.
- **How to Play:** a full standalone companion guide — **`HOW-TO-PLAY.html`** — plus a
  rebuilt in-game help panel with a FULL GUIDE button.
- **Feel:** heavy landings now thump (camera shake), witty void-death lines, "SO CLOSE"
  near-medal toasts, chain-lost feedback, `stats` cheat, `resetbest` wipes the whole flow slate.
- **Fixed:** chain popups spawned at the player's own position projected outside the camera
  frustum and were silently discarded (now float ahead of the view with a center fallback).
- QA harness extended to **47 self-tests** — 47/47 desktop and 47/47 touch.

**v4 — Wild & Mobile**
- **Mobile-first:** installable PWA — manifest + service worker + app icons.
  Add to your home screen and it launches fullscreen and **plays offline**.
- **Natural worlds:** every chamber is now embedded in a procedural landscape —
  instanced forests, rolling terrain, hills/mesas/peaks, rocks, water planes,
  birds, butterflies, vines and grass through the glazing (meadow, emerald
  forest, desert, snowfield, volcanic, night garden, arctic, alpine, ocean,
  cosmic crystals). Zero gameplay colliders added — the puzzles are untouched.
- **Tuned audio:** master limiter (no clipping when layers stack), separate
  SFX / melodic / ambient buses with volume sliders, stereo-spatialized arch
  hums and fragment chimes, and a per-world ambience bed — wind, waves, birds,
  crickets, gulls, ice creaks, thunder.
- **Speedrun timer:** centisecond race clock on the HUD with your best time,
  per-chamber records + deltas + deaths/jumps on the victory report, campaign
  splits, record fanfare, and **taint detection** — cheated runs are flagged
  and never touch your records. `resetbest` cheat wipes the slate.
- **Touch feel:** haptics on jump/land/arch/collect/record, double-tap the look
  zone for an instant 180° turn, bigger action buttons on compact phones,
  adaptive quality (steps pixel ratio and bloom down if FPS drops).
- **Fixed:** level-card overlay stuck on screen when cheat-warping during the
  intro card; hide/show screen race could leave overlays hidden mid-flow.
- QA harness extended to **40 self-tests** — 40/40 desktop and 40/40 touch.

**v3 — Worlds & Light**
- Every chamber gets a distinct themed environment (sky dome, sun/moon, clouds, aurora,
  weather particles, light shafts) — natural moods for most, cosmic for the finale.
- Glazed architecture: skylight ceilings + clerestory windows; the sky is part of the room.
- Global brightness overhaul: ~2–5× brighter materials, stronger lights, lighter fog
  (measured mean scene luminance 14 → 25–70).
- **Fixed:** victory overlay never dismissed after finishing a level (the next chamber
  played invisibly behind a frozen screen).
- **Fixed:** green arches reset sequence locks — Chamber II and Chamber VIII's first gate
  were unwinnable in honest play.
- **Fixed:** Chamber II wall palette contained a corrupted color (`#1e2..`) → black walls.
- **Fixed:** laser beam meshes were orphaned on level change (invisible beams after the
  first laser chamber in a session).
- **Fixed:** laser hum audio leaked into following chambers.
- **Fixed:** bonus-chamber navigation after Chamber IX.
- Added the cheat console (`god`, `noclip`, `speed`, `jump`, `gravity`, `level`, `win`,
  `frags`, `tp`, `timescale`, `bright`, `reset`) + Konami code.
- Chamber I: arch legend now also painted on the north wall (visible at spawn).

**v2** — full mobile/touch support.
**v1** — initial release: 8 chambers + 2 procedural bonus vaults.

---
Single file · Three.js · Web Audio synth · no assets, no build step.
