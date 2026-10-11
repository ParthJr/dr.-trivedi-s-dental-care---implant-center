# Dr. Trivedi's Dental Care & Implant Center

A modern, responsive healthcare website for **Dr. Trivedi's Dental Care & Implant Center** in Kudasan, Gandhinagar, Gujarat. Built to the approved Google Stitch editorial design specification with warm ivory surfaces, deep forest charcoal contrasts, restrained bronze accents, and authentic clinical typography.

---

## 1. Central Business Configuration

All business information is stored in a single source of truth at [`src/config/clinicData.ts`](src/config/clinicData.ts):

- **Business Name:** Dr. Trivedi's Dental Care & Implant Center
- **Address:** B-106, Radhe Arcade, First Floor, above Vipul Dudhiya Sweets, near SBI Kudasan Branch, Kudasan Road, Kudasan, Gandhinagar, Gujarat 382419
- **Phone:** `075670 46564` (Clickable `tel:07567046564`)
- **Verified Google Rating:** 4.9 / 5.0 from 95 reviews
- **Operating Hours:**
  - **Monday:** Opens at 10:00 AM – 08:30 PM
  - **Tuesday – Saturday:** 09:30 AM – 08:30 PM
  - **Sunday:** By prior clinical appointment
- **Clinical Lead:** Dr. Trivedi, Principal Dental Surgeon & Implantologist

> **Ethical Notice:** No doctor first names, medical qualifications, experience years, clinical outcome stats, or implant guarantees have been fabricated.

---

## 2. Visual Identity & Design System

The application strictly preserves the Google Stitch aesthetic:

- **Warm Ivory (`#FCF9F3` / `#F7F4EE`):** Primary canvas surface replacing cold clinical white.
- **Deep Forest Charcoal (`#202A28` / `#0C1514`):** Primary ink and deep restorative implant section.
- **Champagne Bronze (`#B69A6B` / `#725B32` / `#FEDEAA`):** Refined metallic accents, checkmarks, and active indicators.
- **Soft Stone (`#E8E3DA` / `#F0EEE8`):** Section dividers and subtle secondary containers.
- **Typography:**
  - Headings: `EB Garamond` / `Cormorant Garamond` (Dignified serif)
  - Body & Labels: `DM Sans` (Clean legibility with tabular numerals)
- **Zero-Pill Discipline:** Clean unboxed typographic metadata with subtle dot/slash separators.
- **Zero-Broken-Image Policy:** All photography slots include `referrerPolicy="no-referrer"`, loading placeholders, and styled geometric CSS fallbacks.

---

## 3. Implemented Sections (in Order)

1. **Header & Navigation:** 3-zone contract, brand wordmark, active section tracking, telephone link, mobile off-canvas drawer with Escape key support.
2. **Hero:** *"Confidence Begins With a Healthy Smile."*, 4.9 rating with 95 Google reviews, Book Consultation & Explore Treatments CTAs, architectural clinical suite frame.
3. **Treatment Discovery Grid:** *"Thoughtful Care for Every Smile."*, 6 procedures (Dental Implants, Crowns & Restorative Care, Teeth Whitening, Dental Bonding, Comprehensive Check-ups, Cosmetic Smile Design) with interactive detailed clinical scope modal.
4. **Dental Implant Signature Feature:** Deep charcoal `#202A28` section, 3-stage clinical pathway (01, 02, 03), SVG fine-line Restoration Anatomy model (Crown, Abutment, Biocompatible Root), individual suitability disclaimer, direct enquiry CTA.
5. **Patient Experience:** *"Care That Starts With Listening."*, 4 communication pillars (Understanding Your Concerns, Explaining Available Options, Discussing Benefits and Limitations, Helping You Make Informed Decisions).
6. **Cosmetic & Smile Care:** *"Your Smile. Your Priorities."*, photographic frame with harmonious aesthetic tag, interactive expandable care pathways (Teeth Whitening, Dental Bonding, Crowns & Veneers).
7. **Dentist Profile:** *"Meet Your Dental Care Professional."*, verified credentials for Dr. Trivedi, clinical focus tags, Gandhinagar practice notice.
8. **Google Review Summary:** 4.9/5 banner with 95 reviews, link to Google Maps, authentic local patient testimonial highlights.
9. **Appointment Consultation Form:** *"Let's Discuss Your Dental Needs."*, full validation for Indian mobile numbers (`[6-9]\d{9}`), dates (no past dates), services, consent. Honest receipt notification without fake instant confirmations.
10. **Location & Contact:** *"Visit Us in Kudasan."*, Radhe Arcade landmark details, operating hours, Get Directions link, direct call link, architectural map visual.
11. **Footer:** Restorative treatment links, surgery hours, direct callout box, copyright, and accessible modals for Privacy Policy, Terms of Service, and Patient Concierge.

---

## 4. Vercel Deployment Instructions

The project is structured for 1-click deployment on Vercel:

1. **Push Code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: Dr. Trivedi's Dental Care & Implant Center"
   git push origin main
   ```

2. **Import into Vercel:**
   - Log in to [vercel.com](https://vercel.com).
   - Click **Add New > Project** and import the repository.
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables (Optional):**
   - `ENQUIRY_WEBHOOK_URL`: (Optional) Your clinic's webhook endpoint (Slack, Zapier, or WhatsApp API) to automatically receive submitted consultation requests.

4. **Verify Routing & Serverless API:**
   - `vercel.json` is pre-configured with rewrites for single-page routing and the `/api/consultation` serverless function.

---

## 5. QA Verification Checklist

| Checkpoint | Status | Details |
| :--- | :--- | :--- |
| **360px – 390px Mobile** | Verified | Tested layout, mobile drawer, touch targets $\ge 44\text{px}$, zero horizontal overflow |
| **768px Tablet** | Verified | Asymmetrical grid wraps cleanly, responsive navigation |
| **1024px – 1440px Desktop** | Verified | 12-column max 1360px container, full editorial presence |
| **Top Bar Contract** | Verified | Brand mark (1 line) — 6 Nav links — 1 Primary CTA + Phone |
| **Mobile Drawer** | Verified | Backdrop click, Close button, and Escape key close the menu |
| **Phone Link** | Verified | Clickable `tel:07567046564` on header, hero, form, location, and footer |
| **Google Maps Links** | Verified | Direction and search URLs open verified Radhe Arcade Kudasan destination |
| **Form Validation** | Verified | Enforces Indian mobile format, rejects past dates, requires privacy consent |
| **Form Feedback** | Verified | Honest confirmation state: *"Your consultation request has been received. The clinic team will contact you to confirm availability."* |
| **Offline Resilience** | Verified | Consultations persist to `localStorage` backup queue if offline |
| **Accessibility (WCAG AA)** | Verified | Visible focus rings (`focus-visible`), aria labels, semantic hierarchy |
| **TypeScript / Build** | Verified | Clean compile with `tsc --noEmit` and `vite build` |
