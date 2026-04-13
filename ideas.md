# Ethan Chung Portfolio — Design Brainstorm

## Approach 1: "Terminal Brutalism"
<response>
<text>
**Design Movement:** Brutalist + Terminal Aesthetic
**Core Principles:**
- Raw, unadorned surfaces with intentional harshness
- Monospace typography as the primary typeface
- Grid lines and borders as structural elements
- Content-first, decoration-last

**Color Philosophy:** Pure black (#000) backgrounds with white text and a single neon green (#00FF41) accent — evoking old-school terminal screens. The green is used sparingly only for interactive elements and highlights.

**Layout Paradigm:** Asymmetric, off-grid layout with deliberate misalignment. Sections bleed to edges. No rounded corners. Hard pixel borders.

**Signature Elements:**
- Blinking cursor animation on the hero
- Monospace code-block-style project cards
- ASCII-art style dividers between sections

**Interaction Philosophy:** Click and hover states feel like terminal commands executing — text flickers, borders flash.

**Animation:** Typewriter text on hero, glitch effect on hover for project cards.

**Typography System:** JetBrains Mono for everything — pure monospace hierarchy via size and weight only.
</text>
<probability>0.07</probability>
</response>

---

## Approach 2: "Obsidian Editorial" ← SELECTED
<response>
<text>
**Design Movement:** Swiss Modernism meets Dark Editorial
**Core Principles:**
- Strict typographic hierarchy with generous whitespace
- Asymmetric two-column layouts that break the center-aligned mold
- Thin hairline borders and precise grid geometry
- Controlled motion — nothing gratuitous

**Color Philosophy:** Near-black (#0A0A0A) base, pure white (#FFFFFF) for headlines, slate gray (#94A3B8, #64748B) for secondary text and UI chrome. A single accent — cool white with subtle blue tint (#E2E8F0) for hover states. No color noise.

**Layout Paradigm:** Left-anchored editorial layout. Navigation is a fixed left rail on desktop. Content flows in a wide right column. Section headers are oversized and rotated 90° as typographic landmarks.

**Signature Elements:**
- Oversized section numbers (01, 02, 03...) in a faint gray
- Thin 1px horizontal rules as section separators
- Staggered entrance animations — content slides in from the left

**Interaction Philosophy:** Hover states reveal hidden information — project cards expand, skill bars animate, links underline with a sliding rule.

**Animation:** Framer Motion stagger animations on scroll. Smooth page transitions. Skill bars fill on viewport entry.

**Typography System:** Space Grotesk (headings, bold, geometric) + Inter (body, 400/500). Headline sizes push large — 80px+ for hero name.
</text>
<probability>0.09</probability>
</response>

---

## Approach 3: "Void Minimalism"
<response>
<text>
**Design Movement:** Japanese Minimalism / Ma (negative space)
**Core Principles:**
- Extreme whitespace as the primary design element
- Typography as the only decoration
- Content appears to float in darkness
- Restraint in every decision

**Color Philosophy:** #080808 background, #F8F8F8 text. Absolutely no accent colors — all differentiation through size, weight, and opacity.

**Layout Paradigm:** Centered, narrow column (max 680px) with massive vertical padding between sections. Like reading a beautifully typeset book in the dark.

**Signature Elements:**
- Ultra-thin weight type for labels
- Fading opacity transitions between sections
- Minimal iconography — only essential glyphs

**Interaction Philosophy:** Hover states are whisper-quiet — slight opacity shifts, no color changes.

**Animation:** Fade in only. No slides, no bounces. Content materializes from the void.

**Typography System:** Playfair Display (headings, serif contrast) + IBM Plex Mono (code/skills). The serif/mono contrast creates visual tension.
</text>
<probability>0.06</probability>
</response>
