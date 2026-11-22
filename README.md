# SmartUtilityTools

A responsive Next.js 15 + TypeScript + Tailwind website with three browser-based image utilities.

## Included tools (current source)
- Image Compressor
- Image Resizer
- Signature Resizer

The ZIP currently contains these three tools only. The other twelve tools must be specified and implemented before the website can accurately advertise fifteen tools.

## Local development
Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for Cloudflare Pages (static export)
The current utilities process files entirely in the browser and do not require server-side routes. The project is configured with Next.js `output: "export"` and `trailingSlash: true`.

1. Push this project to a GitHub repository.
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Set build command to `npx next build` and build output directory to `out`.
5. Set the environment variable `NEXT_PUBLIC_SITE_URL` to the exact public site URL Cloudflare assigns (for example, `https://smartutilitytools.pages.dev`).
6. Deploy, then test every route and download flow on desktop and mobile.

If you later add API routes, server actions, or other server-side Next.js features, this static-export deployment will need to be changed to a Cloudflare Workers deployment using the OpenNext Cloudflare adapter.

## Before public launch / AdSense application
- Replace the contact-page placeholder with a real, monitored contact email.
- Verify the deployed domain and update `NEXT_PUBLIC_SITE_URL` to that exact URL, then rebuild.
- Review the Privacy Policy against the actual analytics, cookies, ad providers, and consent tools enabled on the live site. The current policy is a starter draft, not legal advice.
- Add accurate, original explanatory content and FAQs for each tool; test the tools thoroughly.
- Add all intended tools before claiming that the site has fifteen tools.
- AdSense approval is not guaranteed by hosting choice or the presence of policy pages.

## Privacy behavior
The three current image tools use the browser Canvas API. Images are processed locally and are not uploaded to an application server by these tools.
