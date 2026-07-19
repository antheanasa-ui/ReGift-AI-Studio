# ReGift Modular Tile System

The office background is rendered from reusable assets instead of one fixed illustration.

## Map grid

- Logical map: 20 × 10 tiles
- Tile size: 32 × 32 px
- Browser render scale: 2× with nearest-neighbour pixel rendering
- Map definition: `assets/tile-system/office-map.json`
- Base atlas: `assets/tile-system/tiles/tiles-atlas-96x32.png`

## Furniture sizes

| Asset | Pixel size |
| --- | ---: |
| Plant | 32 × 32 |
| Chair | 32 × 32 |
| L-shaped desk | 128 × 96 |
| Sofa | 160 × 96 |
| Bookshelf | 64 × 96 |
| Window | 128 × 96 |
| Circular coffee bar | 128 × 96 |
| Wine rack | 64 × 96 |

All furniture uses transparent PNG files in `assets/tile-system/furniture/`. The source spritesheet is retained for future editing. Placement values in `office-map.json` are integer tile coordinates, so the same asset set can be read by HTML, Canvas or a Phaser scene loader.

Version 7.5.1 uses natural furniture proportions: desks occupy 4 × 3 tiles and the sofa occupies 5 × 3 tiles. The walnut floor remains a 32 × 32 tile but contains four finer plank rows to prevent oversized floor texture at 2× rendering.
