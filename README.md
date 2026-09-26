# The Impossible Room

*A walkable M.C. Escher atrium. Bend gravity. Fall sideways and upward. Escape.*

**The Impossible Room** is a fully self-contained, browser-based 3D puzzle game delivered as a
**single `index.html` file**. It runs on [Three.js](https://threejs.org/) loaded from a CDN and
synthesizes **every sound at runtime** with the Web Audio API — zero external assets.

> **Desktop:** open `index.html` and click **ENTER THE ROOM**.
> **Mobile:** open it on your phone or tablet, tap **ENTER THE ROOM** — full touch controls
> load automatically (virtual stick, drag-look, JUMP / USE / pause buttons).
> Landscape is recommended; the game asks for fullscreen on entry (optional).
> **Cheat console:** press **`** (Backquote) — or the **⌁** button on touch — and type `help`.

---

![Banner](banner.png)

## Ten Worlds, One Room

Every chamber now lives inside its own environment — a themed sky visible through
skylight ceilings and clerestory glass, with matching sun, weather and light:

| # | Chamber | Environment |
|---|---------|-------------|
| I | The Initiation | **Dawn Atrium** — sunrise gold, drifting dust, god-rays through the hatch |
| II | The Looping Escape | **Emerald Twilight** — dusk green, fireflies |
| III | Weight & Gravity | **Sandstone Noon** — bright desert temple, hot sun |
| IV | The Switchboard | **Polar Lab** — clinical white-blue daylight |
| V | The Chrono-Void | **Solar Storm** — burnt-orange sky, rising embers |
| VI | The Silent Inversion | **Midnight Orchid** — moonlit violet night with stars |
| VII | The Reversed Chasm | **Glacial Depths** — pale ice sky, falling snow, aurora |
| VIII | The Monument of Escher | **Golden Summit** — golden-hour clouds below the spire |
| ✦ IX | The Fractal Well | **Biolume Lagoon** — teal grotto glow, caustic shimmer |
| ✦ X | The Escher Machine | **Nebula Rose** — magenta nebula and drifting sparks |

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

## The Campaign — 8 Chambers + 2 Bonus

| # | Chamber | Objective |
|---|---------|-----------|
| I | **The Initiation** | Collect 3 orb fragments; the ceiling hatch awakens |
| II | **The Looping Escape** | Break the looping corridor — read the paint that only makes sense upside-down |
| III | **Weight & Gravity** | Carry gravity cubes across planes; seat one on each pressure anchor |
| IV | **The Switchboard** | Rotate mirror pillars on floor, wall and ceiling; hold the beam on the sensor for 2 s |
| V | **The Chrono-Void** | Climb the spire in 90 s while gravity rotates every 20 s — green zones anchor you |
| VI | **The Silent Inversion** | Take 3 energy cores without touching the sweeping sentinel lasers |
| VII | **The Reversed Chasm** | Cross a bridge that is only solid on the *right* plane; ride the void elevator |
| VIII | **The Monument of Escher** | Sequence lock → laser lock → resonance pad → carry the Core Matrix to the upside-down socket |
| ✦ IX–X | **The Fractal Well / The Escher Machine** | Seeded procedurally generated bonus vaults (collect 4 sigils) |

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

| Chamber X — nebula rose |
|---|
| ![](l10.png) |

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
| `level <n>` | warp to chamber 1–10 |
| `win` | complete the current chamber |
| `frags` | collect all fragments / cores here |
| `tp x y z` | teleport |
| `timescale <n>` | slow-motion / fast-forward (0.2–3) |
| `bright <n>` | exposure boost (−0.5–1) |
| `reset` | clear all cheats |

Cheats never persist to your save, and a `⌁ CHEATS ACTIVE` tag marks the run.
There is also a **Konami code** (↑ ↑ ↓ ↓ ← → ← → B A)…

**Exploits that shipped as "features":** pausing (`ESC`) freezes Chamber V's 90-second
timer; in Chamber VI you keep your cores when a sentinel catches you (only time is lost).

**Mobile / touch** (auto-detected; force with `?touch=1` or `?touch=0`)

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
- **Built-in QA harness** — open the game with `?qa=1` to run 31 self-tests, including scripted
  playthroughs of every level, synthetic-touch tests of the mobile controls (`?qa=1&touch=1`),
  UI-chain checks (victory dismiss), sequence-neutrality of green arches, beam persistence
  across levels and cheat-system tests. The release build passed **31/31** in both modes.

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

**v3 — Worlds & Light (this release)**
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
