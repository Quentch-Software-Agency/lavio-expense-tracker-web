# LAVIO Money Tracker — Next.js landing page

A responsive marketing website starter for LAVIO, built with the Next.js App Router, React and plain CSS. The design is component-friendly and uses reusable `SectionLabel` and `StoreLink` components plus data-driven feature/benefit grids.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customise before publishing

- Replace the Google Play and App Store URLs in `app/page.tsx` with your real listing URLs.
- Add app screenshots to `public/images/`. The current screenshot section intentionally uses CSS demo placeholders; replace those panels with `next/image` when your assets are ready.
- Update the sample dashboard figures and sample name ("Alex") to match your app, or label them as illustrative.
- Add your privacy policy, terms, support/contact details, and any required store badges before launch.
- Confirm product claims such as "all currencies", "40 languages", "100% free" and multi-device sync match the released app.

## Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
public/
  images/
    README.txt
```

The landing page is front-end only. App authentication, transaction storage, notifications, sync, PDF report generation and financial-health calculations need to be implemented in the mobile app/backend; this site describes those app capabilities and does not itself process financial data.

## Visual assets and app preview

- Lucide icons are provided by `lucide-react`.
- The Google Play triangle and Apple mark are inline vector logos in the store buttons.
- Human lifestyle photography loads from Unsplash (`images.unsplash.com`); an internet connection is needed to display those images.
- Add screenshots to `public/screenshots/dashboard.png`, `public/screenshots/budget.png`, and `public/screenshots/insights.png`. They render inside the smartphone frames in the App Preview section.

## LAVIO app screenshots supplied for this design

The two supplied app screenshots are included in `public/screenshots/`:

- `dashboard.png` — home / financial overview screen
- `loans-savings.png` — loans, debts and savings screen

The App Preview section displays both screenshots inside responsive smartphone frames. The website palette has been updated to the app's teal, navy, white and cool-light-grey visual language.

## Brand and content updates

- `public/lavio-logo.png` is the LAVIO app icon cropped from the supplied app screenshot and is used alongside the LAVIO Money Tracker wordmark in the header and footer.
- The generic lifestyle CTA section has been replaced with a practical product-benefit section about seeing spending, income, debt and goals together.
- Privacy Policy and Contact navigation now point to `/privacy-policy` and `/contact` for pages you can add later.
- The app preview shows the two supplied real screenshots without repeating one in a third phone.
