# MAAN FASHION

Independent Next.js storefront starter for MAAN FASHION. This project is separate from SB Vintage.

## Included
- Responsive black-and-white storefront
- Men, Women and Unisex category filters
- Search and featured product cards
- Product size selection and client-side shopping bag
- COD checkout form in PKR
- Neon/Postgres order API starter

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add your Neon connection string as `DATABASE_URL`.
4. Run `npm run dev` and open http://localhost:3000.

## Deploy to Vercel
1. Upload this project folder's contents to the root of your GitHub repository.
2. Import the repository into Vercel and keep Framework Preset as Next.js.
3. Add `DATABASE_URL` in Vercel Project Settings → Environment Variables.
4. Deploy.

## Important before launch
This is an initial storefront foundation, not a finished production commerce system. Product data is currently sample data in `lib/products.ts`; the cart is browser-side and is not yet submitted with checkout. Customer authentication, secure admin access, product image storage, stock management, shipping rules, order notifications, legal pages and full order/cart persistence still need to be implemented and tested before accepting live orders. Never expose database credentials in client-side code.
