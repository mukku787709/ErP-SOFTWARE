# Forge Manufacturing ERP / CRM

A working first version of a manufacturing workspace, with inventory, worker attendance, customer records, production orders and CSV reports.

## Included

- Overview: current inventory value, attendance, production stages and reorder alerts.
- Inventory: add materials and finished goods, receive or issue stock, view movement history and prevent negative stock.
- Attendance: add workers, check in/out, mark absence and leave, view attendance by date, calculate completed shift hours. Times use Asia/Kolkata.
- CRM: add company contacts and sales leads, view linked orders and their value.
- Production: create orders against existing customers and update production stages.
- Reports: export each section as CSV.
- Data: saved in SQLite locally and Cloudflare D1 when hosted through Sites.
- Sample records: optional. Load them in an empty workspace, then remove them with confirmation. Removal preserves separately added records.
- Access: local sign-in for development and platform sign-in for a private Sites deployment.

## Run locally

Requires Node.js 22.13 or newer.

1. Install the locked dependencies: `npm run install:ci`.
2. Build: `npm run build`.
3. Apply the local schema:

   `node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_wise_randall.sql`

4. Start: `npm run dev`.
5. Open the local address shown in the terminal. The development sign-in redirects back to the app.

Apply the migration only once for a given local database. Keep `.wrangler/state` to retain your local data. The downloadable source excludes local database contents.

## Attendance integration and company setup

Attendance is currently manual. Connecting a biometric machine, card reader or existing attendance service requires the device/provider name and its supported API or export format. No hardware connection has been configured.

Company branding, existing records, multi-user staff permissions, payroll, invoicing, purchasing and bill-of-materials consumption have not been configured. Production stage changes do not issue inventory automatically; record material issues and finished goods receipts in Inventory.

## Validation

TypeScript and the production build passed. API workflow checks passed for authentication, persistence/readback, negative-stock prevention, stock audit entries, duplicate attendance protection, check-out, order stages, cross-origin request rejection and removal of sample records while preserving an independently created inventory item.

Optional browser WebMCP navigation is feature-detected; a supported WebMCP test context was unavailable.

## GitHub and mobile access

Repository: https://github.com/mukku787709/ErP-SOFTWARE

GitHub stores this application's source. The repository contains no company database, credentials or local attendance records. A build check runs on pushes and pull requests.

The app includes responsive layouts, a web app manifest, Android home-screen icons and an Apple touch icon. It runs as a web app, rather than an APK or an App Store package.

To use it on your phone away from this computer, deploy it to an HTTPS address with its database and authenticated access. Once deployed, open that address in your phone's browser and choose **Add to Home Screen** or **Install app** where available. Mobile home-screen launch still needs a network connection.

This application's current production runtime uses Cloudflare Workers and D1, with Sites providing the sign-in and private-access boundary. GitHub Pages cannot run its database or protected API. A normal Vercel static deployment is insufficient. Direct deployment outside Sites additionally requires a supported authentication integration; do not remove the server authorization checks to make a deployment work.

## Current deployment status

The app has not yet been published to a live HTTPS address. The existing private Sites registration is retained locally, while the GitHub copy contains only logical database bindings so cloning it does not reuse the original Site's identity. Publication from the original workspace was previously blocked by its approval policy.

## App icon

The Forge icon uses a light factory symbol on the workspace's green background. Editable SVG and 180/192/512 px PNG variants are in `public/icons`. The same mark appears in the app sidebar, browser tab and home-screen metadata.
