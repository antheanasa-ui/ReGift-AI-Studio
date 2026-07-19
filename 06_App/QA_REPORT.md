# ReGift AI Studio v7.5.0 QA Report

## Release scope

- 06_APP remains complete.
- 07-1 office-location interactions remain available.
- 07-2 frame-based character animation remains complete.
- 07-3 spatial navigation is complete.
- Excluded story, Team Chat expansion and task expansion features remain excluded.

## Navigation checks

- All five Agent IDs map to valid home and patrol nodes.
- Every navigation link is reciprocal and every public destination is reachable from every home node.
- Route targets are clamped inside the 1280 × 720 scene.
- Agents move one waypoint segment at a time and retain the walk animation until arrival.
- Route-node reservations reduce simultaneous Agent overlap.
- Facing direction changes from horizontal travel direction.
- Inline depth is calculated from vertical foot position.
- Public-area visits return to the correct department home node.
- Pause, Take a Break, Team Meeting and Reset Positions cancel or replace active routes safely.
- Save-data schema 8 accepts and migrates existing versions 3–7.

## Asset and integration checks

- Five full-body character PNGs and five 4 × 4 runtime Sprite Sheets remain present.
- Idle, walk, work and rest rows remain wired through CSS.
- Team Chat references five dedicated previous-version half-body portraits.
- Safari continues using exact 108 px background offsets.
- Service Worker v7.5.0 caches the application shell, all runtime sheets and all chat portraits.

## Regression checks

- JavaScript and JSON syntax checks pass.
- The document contains no duplicate IDs.
- The main office remains a single-screen layout without body scrolling.
- Liquid-glass panels, Team Chat, task lists, local save/import/export and offline support remain present.
- Hidden-tab timer handling stops new patrol and emotion work until the page becomes visible again.
