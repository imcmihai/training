# Clerk Authentication Setup

This project has been integrated with Clerk for authentication using Next.js App Router.

## Setup Steps Completed

1. ✅ Installed `@clerk/nextjs` package
2. ✅ Created `middleware.ts` with `clerkMiddleware()`
3. ✅ Updated `app/layout.tsx` with `ClerkProvider`
4. ✅ Added authentication components (SignInButton, SignUpButton, UserButton)
5. ✅ Updated navbar to remove custom authentication
6. ✅ Created sign-in and sign-up pages using Clerk components

## Environment Variables Required

Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cHJvYmFibGUtcGlwZWZpc2gtNDAuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_FUREGRDgZsEY2WIrNdYWkEtLJbxwOZrCPjW4NAJPS8
```

## Features

- **Protected Routes**: Middleware automatically protects all routes
- **Authentication UI**: Built-in sign-in/sign-up forms
- **User Management**: UserButton component for account management
- **Conditional Rendering**: SignedIn/SignedOut components for UI state

## Usage

- Users can sign in/up using the buttons in the header
- Authentication state is automatically managed
- Protected routes will redirect unauthenticated users
- User profile management through the UserButton component

## Next Steps

1. Add the environment variables to `.env.local`
2. Test the authentication flow
3. Add route protection to specific pages if needed
4. Customize Clerk components styling if desired




