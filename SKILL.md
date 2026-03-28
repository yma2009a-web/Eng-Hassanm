# Skill: High-Converting Web Architecture Launch Protocol

## 1. Discovery & Architecture
- **Sitemap Definition:** Always define a clear, linear user journey (Home -> About -> Services -> Proof -> Contact).
- **Copywriting:** Utilize the AIDA framework (Attention, Interest, Desire, Action) to structure page content.
- **Visual Hierarchy:** Ensure the Hero section is above the fold with a clear value proposition and primary CTA.

## 2. Scaffolding & Design
- **Tech Stack:** React (Vite/Next.js), Tailwind CSS, Framer Motion, Lucide React.
- **Typography:** Use clean, modern sans-serif fonts (e.g., Inter, Space Grotesk).
- **Components:**
  - Sticky/transparent dynamic Navbar.
  - High-impact Hero with abstract/professional graphics.
  - Grid-based Services and Case Studies sections.
  - Dynamic, stateful Contact Form with success/error feedback.
- **Micro-interactions:** Add subtle entrance animations (`motion.div`) and hover states to interactive elements.

## 3. Autonomous Verification
- **Responsiveness:** Test on mobile (`sm`), tablet (`md`), and desktop (`lg`, `xl`) breakpoints.
- **Form States:** Verify 'idle', 'submitting', and 'success' states for lead capture forms.
- **Accessibility:** Ensure sufficient color contrast and semantic HTML tags.

## 4. Deployment Readiness
- Ensure all environment variables are documented in `.env.example`.
- Verify build process (`npm run build`) completes without errors.
- Check for console warnings or missing keys in React lists.
