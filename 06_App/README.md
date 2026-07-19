# ReGift AI Studio — Spatial Navigation v7.5.0

This complete `06_App` package keeps the accepted 06_APP, the 07-1 location interactions, the 07-2 frame animation and the restored Team Chat half-body portraits. Version 7.5.0 completes the approved 07-3 character navigation and spatial-awareness milestone.

## v7.5.0 spatial navigation

- Five Agents now travel through a connected safe-waypoint graph instead of crossing the office in one straight line.
- Routes follow the visible aisles between departments, Coffee Bar, Sofa Lounge and Product Showcase.
- Waypoint reservations prevent two moving Agents from occupying the same route node at once.
- Characters mirror left or right according to travel direction.
- Character depth updates from foot position so foreground and background ordering remains natural.
- Local department patrols use each Agent's own workstation route.
- Quiet public-area visits occur periodically and always return the Agent to their department.
- Coffee Bar, Sofa Lounge, Product Showcase, Take a Break, Reset Positions and Team Meeting remain integrated.
- The current safe node and facing direction persist in local save data using schema version 8.
- Hidden Safari tabs pause new patrol and emotion timers to reduce background work.

## Retained character and chat assets

- Main-office characters use five corrected transparent 4 × 4 Sprite Sheets.
- Idle, walk, role-specific work and rest states remain synchronized with motion speed.
- Safari continues to use exact integer-pixel Sprite Sheet sampling.
- Team Chat continues to use the previous dedicated half-body portraits from `assets/agents/chat-avatars`.
- Office full-body characters and Team Chat portraits remain independently replaceable.

## Scope decision

The following proposed expansions remain excluded:

- Office event/story system
- Team Chat expansion
- Task-management expansion

Existing Team Chat and task features from the completed 06_APP are retained without expansion.

## Start locally

1. Back up the current `06_App` folder.
2. Replace it with this complete folder.
3. Open `index.html` through VS Code Live Server.
4. Use `Command + Shift + R` once in Safari.

The app remains single-screen, local-first and free of paid API requirements.
