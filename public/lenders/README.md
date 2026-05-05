# Lender Logos

Drop logo files here using the lender's `id` from `lib/constants.ts` as the filename.

## How to add a logo

1. Save the logo file in this folder using the lender's id, e.g.:
   - `hdfc.svg` (preferred — scales cleanly)
   - `icici.png` (also fine)
2. Open `lib/constants.ts`, find the matching `ALL_LENDERS` entry, and add:
   ```ts
   { id: 'hdfc', name: 'HDFC Bank', /* ...existing fields..., */ logoUrl: '/lenders/hdfc.svg' },
   ```
3. The card will automatically swap the initials placeholder for the real logo.

## Filename conventions

Use the exact `id` value from constants.ts. Current ids:

**Banks (5):** `hdfc`, `icici`, `axis`, `indusind`, `idfc`
**NBFCs (9):** `tata`, `lnt`, `bajaj`, `piramal`, `incred`, `finnable`, `poonawalla`, `flexiloans`, `lendingkart`

## Recommended specs

- Format: SVG (preferred) or transparent PNG
- Size: ~200×200px or any aspect ratio that fits 44×44 within the 64×64 logo box
- Background: transparent
- Fit: the card displays logos in a 64×64 rounded-square with `object-contain`, so any aspect ratio works
