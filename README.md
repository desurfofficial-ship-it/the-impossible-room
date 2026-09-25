# The Impossible Room

*A walkable M.C. Escher atrium. Bend gravity. Fall sideways and upward. Escape.*

**The Impossible Room** is a fully self-contained, browser-based 3D puzzle game delivered as a
**single `index.html` file**. It runs on [Three.js](https://threejs.org/) loaded from a CDN and
synthesizes **every sound at runtime** with the Web Audio API — zero external assets.

> Open `index.html` in any modern desktop browser and click **ENTER THE ROOM**.

---

![Banner](banner.png)

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

| Chamber I — the arches | Chamber II — the lying corridor |
|---|---|
| ![](l1.png) | ![](l2.png) |

| Chamber IV — the switchboard | Chamber V — the chrono-void |
|---|---|
| ![](l4.png) | ![](l5.png) |

| Chamber VIII — the monument |
|---|
| ![](l8.png) |

## Controls

| Key | Action |
|-----|--------|
| `W A S D` | Move on your current plane (relative to view) |
| `SPACE` | Jump away from your current surface |
| `SHIFT` | Sprint |
| `E` | Interact — carry/drop gravity cubes, rotate mirrors, insert the core matrix |
| `R` | Restart chamber |
| `ESC` | Pause (releases the mouse) |

Fall into the void and you awake at the green arch — nothing is lost but time.

## Technical Highlights

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
- **Built-in QA harness** — open the game with `?qa=1` to run 19 self-tests, including scripted
  playthroughs of every level. The release build passed **19/19**.

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
- **Self-test:** `index.html?qa=1`
- Debug/automation handle: `window.__TIR__` exposes the game state for tinkering.

---
Single file · Three.js · Web Audio synth · no assets, no build step.
