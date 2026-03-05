<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


Axon – Growth Marketing Designer Assessment

This repository contains my submission for the Axon Growth Marketing Designer assessment.

The project implements three landing page variants built with Next.js + TypeScript, designed to test different persuasion frameworks for a paid acquisition landing page.

The implementation focuses on:

deterministic experiment structure

centralized variant configuration

reusable UI components

analytics instrumentation

minimal duplication (DRY architecture)

Project Goals

The objective of the exercise is to demonstrate the ability to combine:

conversion-focused design thinking

growth experimentation strategy

clean frontend architecture

The project simulates a typical growth experiment where multiple landing page variants are deployed and measured using analytics.

Variants

Three variants are implemented as independent routes.

Route	Variant	Strategy
/control	Control	Baseline messaging
/variant-1	Variant 1	Social proof emphasis
/variant-2	Variant 2	Scarcity / urgency

Each route renders the same component system while pulling its content and behavior from a centralized configuration.

Architecture

The project is structured as a single Next.js application with route-based variants.

Key design principles:

DRY component architecture

variant-driven configuration

deterministic routing

analytics instrumentation at interaction level

src
 ├── app
 │   ├── control
 │   ├── variant-1
 │   └── variant-2
 │
 ├── components
 │   ├── Hero
 │   ├── FeatureGrid
 │   ├── Proof
 │   ├── Testimonial
 │   ├── MidCTA
 │   └── FinalCTA
 │
 ├── lib
 │   ├── variants.ts
 │   └── tracking.ts
Variant Configuration

All variant content is defined in a centralized configuration file:

src/lib/variants.ts

This file defines:

messaging

CTA text

testimonials

feature content

referral codes

Example structure:

export type VariantKey = "control" | "variant-1" | "variant-2"

export type VariantConfig = {
  key: VariantKey
  method: "USP" | "Social Proof" | "Scarcity/FOMO"
  referralCode: string
  hero: {...}
  proof: {...}
  features: {...}
  testimonial: {...}
  finalCta: {...}
}

Using a centralized configuration ensures:

consistent rendering across variants

easier experimentation

minimal duplication

Routing

Each variant is mapped to its own route:

/control
/variant-1
/variant-2

Routes resolve the correct configuration from variants.ts and pass the content to shared UI components.

This pattern keeps the layout and UI system consistent while allowing messaging differences.

CTA Routing

All CTAs redirect to the Axon signup endpoint:

https://ads.axon.ai/auth/signup

A deterministic referral code is appended per variant.

Example:

https://ads.axon.ai/auth/signup?referralCode=VARIANT_1

Referral codes are defined in the variant configuration.

Analytics Tracking

CTA clicks trigger a PostHog event before redirecting.

Event name:

signed_up

Captured properties:

variant

CTA label

placement (hero, mid, final)

target URL

Tracking is handled in a small helper utility:

trackSignupIntentAndRedirect()

This function:

fires the PostHog event

waits briefly

performs the redirect

The short delay ensures the event is transmitted before navigation occurs.

Preventing Duplicate Events

Each CTA click triggers a single analytics event.

Duplicate firing is prevented by:

centralizing the tracking function

attaching it directly to the CTA interaction

avoiding multiple listeners

Running Locally

Install dependencies:

npm install

Start the dev server:

npm run dev

Open:

http://localhost:3000/control
http://localhost:3000/variant-1
http://localhost:3000/variant-2
Experiment Measurement

The experiment can be evaluated using PostHog by tracking the signed_up event across variants.

Example experiment configuration:

Experiment: landing-page-variants
Variants: control, variant-1, variant-2
Metric: signed_up

This allows conversion comparison across the three approaches.

Notes

This project prioritizes:

clean separation between experiment configuration and UI

reusable components

deterministic variant behavior

lightweight analytics instrumentation

In a production environment, this architecture could be extended with:

feature flags

automatic traffic allocation

experiment analysis pipelines

server-side experiment assignment

Author

Michele Born
Frontend developer – WordPress / React / experimentation systems