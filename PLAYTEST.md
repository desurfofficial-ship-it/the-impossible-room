# The Impossible Room — Playtest Report

*Chief 3D engineer / technical director playthrough, v3 "Worlds & Light" build.*
*Method: real input events (WASD keydown/keyup, mouse-look with movementX/Y, E/Space),
an in-page "player bot" that walks the game exactly like human hands would, plus the
built-in QA harness (`?qa=1`) which drives every chamber through the real game loop.*

---

## 1. How I played it — and won

**Chamber I — The Initiation (won honestly, by hand):**
spawn → walk south-west to the **red arch** (−10, −6) → fall onto **Wall B** → walk
along the wall to the ledge under fragment 3 → collect it (its glow sits at the ledge
edge; a floor-walker passing under it also reaches it) → walk into the **green arch**
on Wall B (x≈5) back to the floor → walk north through the **blue arch** (0, −12) →
Wall A → walk west to fragment 1 (−8, 9.5) → walk east along Wall A into the
**wall-mounted blue arch** (8, 3, −16.9) → fall **up** onto the ceiling → walk to
fragment 2 (−4, 11.35) → all 3 fragments collected, the ceiling hatch opens → walk
across the ceiling into the hatch → fall "up" through the iris into the exit volume.
**Time ≈ 3 minutes. Verdict: winnable, but in the old build it was a squint-fest —
fixed in v3 (see lighting).**

**Chamber II — The Looping Escape (won honestly after the fix):**
the clue is painted upside-down on the ceiling: **BLUE → YELLOW → RED**. The trap:
the colored arches only trigger for floor-walkers, and each pass knocks you onto a
wall/ceiling — you *must* return via the tall green gates. In the old build that reset
the sequence (see bug #2), making the level impossible; the fix makes green neutral.
Winning route: establish the south lane (z≈2.2) → blue (x26) → Wall A → walk west to
the green gate (x6) → floor → align with the yellow opening → yellow (x12) → ceiling
→ walk west to the green gate → floor → east along the lane to red (x40) → sequence
3/3, **the illusion shatters** (wraps disable, the end door becomes real) → green gate
(x48) → floor → walk east to the exit portal. **The wrap illusion works beautifully —
"LOOP 1" counter, seamless teleport.**

**Chamber III — Weight & Gravity (mechanics verified interactively):**
carry a cube through the blue arch to Wall A — the cube inherits your active gravity
plane exactly as designed; drop it near the wall anchor (the plate magnet snags it
within ~1.15 m). Same for the ceiling anchor via the yellow arch. Vault door slides
open on both anchors seated. QA completes the full loop.

**Chamber IV — The Switchboard (QA-verified solution):**
Mirror I idx 5, Mirror II idx 2, Mirror III idx 1 — beam walks floor→wall→ceiling into
the sensor; hold 2 s; the gate bars sink. Interactive mirror rotation (E) verified.
Beams now stay visible across level transitions (bug #5 fixed).

**Chamber V — The Chrono-Void (QA-verified):**
gravity auto-rotates every 20 s (fling + camera slerp); green corner landings anchor
you; the 90 s collapse + auto-restart works. *Cheat discovered: ESC pauses the timer.*

**Chamber VI — The Silent Inversion (QA-verified):**
cores retained on sentinel detection (soft respawn to the green arch) — you can tank
sentinels and still finish; sweepers speed up per core collected. *Cheat discovered:
body-tanking has no penalty but time.*

**Chamber VII — The Reversed Chasm (QA-verified):**
conditional bridge segments ghost in/out per plane; blue → Wall A fins → yellow →
Wall B fins → green back to floor, landing on the void elevator; the elevator carries
you 13 m up to the exit ledge.

**Chamber VIII — The Monument of Escher (QA-verified):**
sequence ring (clue upside-down on the ceiling: **RED → BLUE → YELLOW** — gate 1,
now fixed by the green-neutral change), laser lock (Mirror I idx 3, Mirror II idx 7 —
gate 2 + shield dissolve), resonance pad (stand 2 s — gate 3), carry the Core Matrix
to the ceiling socket → 5-second cinematic orbit → campaign victory screen with the
full time sheet.

**Bonus IX & X (QA-verified):** seeded procedural vaults, four sigils on four planes,
hatch exit — winnable by construction.

**Final tally: all 10 chambers completed. 31/31 self-tests pass in desktop AND touch mode.**

## 2. Cheats

**Shipped as the cheat console (press `` ` `` / touch ⌁):**
`god`, `noclip` (fly anywhere — Space up, C down, Shift boost), `speed <n>`, `jump <n>`,
`gravity <plane>`, `level <n>`, `win`, `frags`, `tp x y z`, `timescale <n>` (slow-mo!),
`bright <n>` (exposure boost), `reset`. Cheats never touch the save file; a
`⌁ CHEATS ACTIVE` tag marks the HUD. **Konami code** (↑↑↓↓←→←→BA) unseals all
chambers + god mode + speed ×1.6.

**Exploits found by play (left in, documented):**
- `ESC` pauses Chamber V's 90 s countdown — "hold to win" the timer.
- Chamber VI keeps collected cores when a sentinel catches you — detection is only a
  time penalty, never a setback.
- `window.__TIR__` (DevTools console) exposes the whole engine — `__TIR__.player.pos.set(...)`
  warps anywhere; that's how I originally proved L2 completable before fixing the bug.

## 3. Bugs found (the dig)

| # | Severity | Bug | Status |
|---|----------|-----|--------|
| 1 | **Critical (UX)** | Victory overlay never dismissed — after finishing ANY level, the next chamber ran invisibly behind a frozen victory screen. Every chained playthrough was soft-locked. | **Fixed** (all exit paths dismiss it; new QA test `ui.victory-dismiss`) |
| 2 | **Critical (design)** | Green arches reset sequence locks. Chamber II and Chamber VIII's gate 1 required a green pass between colored arches (only floor-walkers trigger the colored ones) → both were **unwinnable in honest play**. The old QA bypassed it by snapping gravity directly, so it never failed tests. | **Fixed** (green = neutral; QA test `sequence.green-neutral`; honest L2 win verified end-to-end) |
| 3 | Major (visual) | Chamber II wall palette contained a corrupted hex (`panel:'#1e2..'`) → canvas fill silently failed → near-black walls. | **Fixed** (valid moss-green palette) |
| 4 | Major (visual) | Laser beam meshes were added to the per-level world group → level disposal orphaned them; every laser level after the first in a session rendered **invisible beams**. | **Fixed** (beams live at scene level; QA test `laser.beam-persist`) |
| 5 | Minor (audio) | Laser hum loop gain leaked across levels (charged the L4 sensor, then L5 hums forever). | **Fixed** (reset on level start; QA test `laser.no-audio-leak`) |
| 6 | Minor (UX) | "BONUS CHAMBERS" after Chamber IX re-entered Chamber IX. | **Fixed** (advances IX → X) |
| 7 | Polish | Chamber I's arch legend painted only on the wall *behind* the spawn. | **Fixed** (mirrored on the north wall, in view at spawn) |
| 8 | — | Dead code: `GAME.timeScale` existed but was unwired. | Wired to the `timescale` cheat. |
| 9 | — | Bonus-level navigation, pause-during-transition edge cases, rapid arch re-entry. | Reviewed; guarded by existing cooldown/re-arm logic. |

## 4. The darkness problem — measured and fixed

Pixel-measured mean scene luminance (0–255) at spawn, before → after:

| Chamber | before | after | | Chamber | before | after |
|---|---|---|---|---|---|---|
| I dawn | 15 | 69 | | VI orchid | 18 | 44 |
| II twilight | 33 | 57 | | VII glacial | 14 | 70 |
| III noon | 13 | 60 | | VIII golden | 15 | 66 |
| IV polar | 13 | 65 | | IX lagoon | 15 | 38 |
| V storm | 14 | 52 | | X nebula | 14 | 36 |

What changed: every chamber now has a **themed environment** (sky dome with gradient +
sun-glow shader, sun/moon, clouds, aurora on VII, weather particles — dust, fireflies,
embers, snow, spores, caustics, sparks — and volumetric-style light shafts); the
architecture is **glazed** (skylight ceilings + clerestory windows — the sky is part
of the room, while all colliders stay fully solid for plane-walkers); materials are
~2.5× brighter; hemisphere + directional lights stronger; fog lighter and colored to
match each sky. VLM readability audit: geometry and arches clearly visible on all ten
levels (the two darkest are *intentional* cosmic moods and still read clean).

## 5. What I think of it

Honest verdict: **the core is genuinely excellent — the presentation betrayed it.**
The quaternion gravity engine is the best part of the game: not once in ten chambers
did WASD invert, the camera gimbal, or the player fall through geometry. The arch
vocabulary (blue/red/yellow/green) teaches itself in one chamber. The wrap illusion
in Chamber II and the conditional bridge in Chamber VII are real "aha" design.
The audio synth — arch risers, the heartbeat under the collapsing timer, the
victory fanfare — punches far above its zero-asset budget.

The problems were all around that core: it was presented in the dark (literally —
94 % of frame pixels were near-black at spawn), the first level's signposting faced
the wrong way, two levels were quietly impossible, and finishing any level froze the
UI. All of that is now fixed and regression-tested. What remains is taste, not
correctness — see the roadmap.

## 6. What still needs to be done (roadmap)

1. **A first-time "hands" tutorial moment** — Chamber I explains WASD/E in floor
   paint, but a 10-second guided first arch (slow-mo + arrow) would retain casual
   players who currently bounce off.
2. **Subtitles/colorblind support** — the game leans on color-coded arches; adding a
   shape glyph (◇ ▢ △ ○) on each arch would make it colorblind-safe.
3. **Accessibility** — FOV/comfort options for the gravity roll (a "reduced roll"
   mode that shortens slerp duration), and a photosensitive toggle for Chamber V's
   flashes.
4. **Performance on low-end mobile** — the theme system adds ~20 draw calls/level
   (cheap), but a quality auto-scaler (dynamic DPR from measured FPS) would help
   3–4-year-old phones.
5. **Leaderboards / ghosts** — per-chamber best times already persist locally;
   sharing them needs a backend.
6. **Content** — the procedural generator (IX–X) is seed-stable; an endless
   "daily chamber" mode is one menu entry away.
7. **Audio polish** — a per-theme ambient retune is in place; the next step is
   ducking the drone during cinematics.
