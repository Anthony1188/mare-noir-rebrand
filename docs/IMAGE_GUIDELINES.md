# MARÉ NOIR — Product Image Guidelines

A single source of truth for which approved image assets are used where across the site. Any new product imagery must follow this structure before being merged.

---

## 1. Principles

1. **Brand purity** — No third-party logos, stray tags, or stock-image branding may appear on any garment. All images must be reviewed and retouched before approval.
2. **Consistency** — Every product uses the same set of image *roles* (primary, hover, detail) so layouts remain predictable.
3. **Editorial restraint** — Clean backgrounds, natural light, minimal styling. No lifestyle clutter on card or hover images.
4. **Versioning** — Never overwrite an approved file in place. Use suffixes (`_v2`, `_v3`) and update the manifest below.

---

## 2. Image Roles

Each product (e.g. *The Noir*, *The Oceano*, *The Sabbia*) must ship with the following approved assets:

| Role | Filename pattern | Aspect | Usage | Notes |
|---|---|---|---|---|
| **Primary (Card)** | `product-{slug}.jpg` | 4:5 | `ProductCard` grid on the home/collection page | Front-facing flat or model shot. Garment fully visible, centered. No overlays baked in. |
| **Hover (Card)** | `product-{slug}-hover.jpg` | 4:5 | `ProductCard` on hover/focus | Alternate angle (back, detail, or on-figure). Same crop and lighting as primary. |
| **Detail Gallery** | `product-{slug}-detail-{n}.jpg` | 4:5 or 3:4 | Product Detail Page (PDP) gallery | 3–5 images per product: front, back, fabric macro, waistband detail, on-model. |
| **PDP Hero** | `product-{slug}-hero.jpg` | 3:2 | Top of PDP, editorial framing | Wider crop, mood-driven. May include environment (sand, water, stone). |
| **OG / Social** | `product-{slug}-og.jpg` | 16:9 | Meta share previews | Cropped from hero with safe text margins. |

`{slug}` matches the kebab-case English name: `noir`, `oceano`, `sabbia`.

---

## 3. Approved Asset Manifest

The following files are the **only** approved versions currently in use. Do not swap without updating this table.

| Product | Role | File | Approved |
|---|---|---|---|
| The Noir | Primary | `src/assets/product-noir.jpg` | ✅ (logo + interior tag removed) |
| The Oceano | Primary | `src/assets/product-oceano.jpg` | ✅ |
| The Sabbia | Primary | `src/assets/product-sabbia.jpg` | ✅ |

Hover, detail, hero, and OG variants are **pending** and must be produced before the PDP ships.

---

## 4. Retouching Checklist (before approval)

Every candidate image must pass all of these before being added to the manifest:

- [ ] No third-party brand marks, logos, or woven labels visible (legs, hem, waistband, interior)
- [ ] No stock-photo watermarks or model-release badges
- [ ] Background is neutral (ivory, sand, or seamless white) unless it is a hero/editorial shot
- [ ] Color matches the named colorway (Noir = true black, Oceano = deep ocean blue, Sabbia = warm sand)
- [ ] Garment is wrinkle-free and symmetrical
- [ ] Exported as JPG, sRGB, ≤ 400 KB at delivery resolution (max 1600px on long edge)
- [ ] Alt text written and added to the component (`alt={name}` minimum; descriptive preferred)

---

## 5. Versioning & Replacement

When an approved image is revised:

1. Save the new file with a version suffix: `product-noir_v2.jpg`.
2. Update the import in the relevant component (`ProductSection.tsx` or PDP).
3. Update the manifest table in §3 with the new filename and a one-line note describing the change.
4. Keep the previous version in `src/assets/` for at least one release cycle in case of rollback.

Never silently overwrite `product-{slug}.jpg` — downstream caches, OG previews, and editorial references may still point at the old asset.

---

## 6. Where each role is consumed (code map)

- **Primary** → `src/components/ProductSection.tsx` → `ProductCard` `image` prop
- **Hover** → `src/components/ProductCard.tsx` (to be added as `imageHover` prop)
- **Detail / Hero / OG** → Product Detail Page (not yet built)

When adding the hover or PDP roles, extend `ProductCardProps` and the product data array in `ProductSection.tsx` rather than hardcoding paths inside the card.
