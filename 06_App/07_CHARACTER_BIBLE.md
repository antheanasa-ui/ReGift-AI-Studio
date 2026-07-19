# ReGift AI Studio — Underwater Agent Residents

The character direction was accepted during 07-2. The current v7.5.0 package keeps the same five identities and adds frame animation plus safe office navigation without redesigning them.

## Character direction

The five employees are original ReGift underwater-town residents. The visual language uses rounded fish silhouettes, expressive eyes, prominent lips, dark pixel outlines and warm muted colors. The supplied crowd images were used only as a broad mood and body-language reference; the resulting characters, palettes, clothing and work props are newly designed for ReGift.

## Agent lineup

| Agent | Visual identity | Work prop | Asset |
| --- | --- | --- | --- |
| Design Agent | Coral-orange fish, cream studio apron | Drawing tablet and stylus | `assets/agents/design-agent.png` |
| Copywriter Agent | Dusty-lavender tall fish, round glasses, brown vest | Notebook and pencil | `assets/agents/copywriter-agent.png` |
| Marketing Agent | Sage-green rounded fish, brass pin | Burgundy campaign planner | `assets/agents/marketing-agent.png` |
| Photography Agent | Deep-teal long fish, charcoal utility vest | Vintage camera | `assets/agents/photography-agent.png` |
| Shipping Agent | Mustard-yellow sturdy fish, forest cap | Gift parcel and scanner | `assets/agents/shipping-agent.png` |

## Technical asset rules

- Individual characters are transparent PNG files.
- Source artwork remains high resolution; CSS scales the characters inside the 1440 × 760 single-screen office stage.
- `image-rendering: pixelated` preserves the 16-bit pixel edge treatment.
- The existing Agent elements, IDs, keyboard focus, tooltips, task controls and movement logic remain unchanged.
- Character collision bounds are 68 × 108 pixels in `js/office-v2.js`.
- Team Chat uses dedicated previous-version half-body portraits from `assets/agents/chat-avatars` instead of the square office sprites or role initials.

## Current integration

- Five corrected full-body static PNG compatibility assets
- Five 4 × 4 idle, walk, work and rest Sprite Sheets
- Safe waypoint navigation, left/right facing and dynamic depth ordering
- Dedicated previous-version half-body Team Chat portraits
