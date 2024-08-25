/**
 * `app/page.tsx` is the UI for the `/` URL
 */

"use client";

import type { Metadata } from "next";
import Link from "next/link";
/**
 * If you need to redirect inside an event handler in a Client Component,
 * you can use the `push` method from the `useRouter` hook.
 */
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Next.js Template",
};
export default function Page() {
  const router = useRouter();

  return (
    <body>
      <h1>Hello, Home page!</h1>
      <Link href="/dashboard">Dashboard</Link>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </body>
  );
}
