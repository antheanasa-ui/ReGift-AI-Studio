# 07 World Expansion — Active Scope

Status: **07-3 complete · v7.5.0 spatial navigation delivered**

## Completed milestones

### 07-1 World interaction

- Coffee Bar, Sofa Lounge and Product Showcase interactions
- Office Controls, motion speed, lighting and activity toggles
- Reset Positions, Coffee Break and local setting persistence

### 07-2 Character animation

- Five transparent 4 × 4 character Sprite Sheets
- Idle, walk, work and rest animation rows
- Safari-safe integer-pixel frame sampling
- Full-body safe padding and transparent-edge cleanup
- Dedicated previous-version half-body Team Chat portraits

### 07-3 Spatial navigation

- Connected safe-waypoint graph following visible office aisles
- Multi-segment travel between departments and public areas
- Route-node reservation for basic Agent collision avoidance
- Directional left/right Sprite mirroring
- Dynamic foreground/background depth from Agent foot position
- Workstation patrols and quiet public-area visits
- Integrated meeting, pause, rest, reset and location interactions
- Navigation-node persistence and state-version 8 migration
- Safari background-tab timer pause

## Explicitly excluded from expansion

1. Office event/story system
2. Team Chat expansion
3. Task-management expansion

Existing 06_APP Team Chat and task functions remain supported.

## Next permitted milestone

07-4 may focus on motion polish, route tuning and final cross-browser visual QA without adding the excluded story, chat or task systems.
