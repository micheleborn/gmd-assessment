Growth Marketing Designer Assessment

This repository contains a Next.js + TypeScript landing page experiment implementing three variants designed to test different persuasion frameworks for paid acquisition.

The project demonstrates:

experiment-driven landing page design

centralized variant configuration

reusable UI components

DRY frontend architecture

Variants

Three routes represent three experiment variants:

Route	Method
/control	USP Baseline
/variant-1	Authority + Social Proof
/variant-2	Risk Mitigation

Each route renders the same UI component system while loading its content and messaging from a centralized configuration.
Project Structure

src
 ├── app
 │   ├── control/page.tsx
 │   ├── variant-1/page.tsx
 │   ├── variant-2/page.tsx
 │   ├── layout.tsx
 │   ├── page.tsx
 │   └── providers.tsx
 │
 ├── components
 │   ├── Landing.tsx
 │   │
 │   ├── icons
 │   │   └── RocketIcon.tsx
 │   │
 │   ├── layout
 │   │   ├── Header.tsx
 │   │   └── Footer.tsx
 │   │
 │   └── sections
 │       ├── Hero.tsx
 │       ├── Features.tsx
 │       ├── FeatureIcon.tsx
 │       ├── MidCTA.tsx
 │       └── FinalCTA.tsx
 │
 └── lib
     └── variants.ts

All variant content is defined in:

src/lib/variants.ts

Example structure:

export type VariantMethod =
  | "USP Baseline"
  | "Authority + Social Proof"
  | "Risk Mitigation"

export type VariantKey = "control" | "variant-1" | "variant-2"


Install dependencies:

npm install

Run the development server:

npm run dev

Visit:

http://localhost:3000/control
http://localhost:3000/variant-1
http://localhost:3000/variant-2
Author

Michele Born
Web Developer • Data Analyst • Architect