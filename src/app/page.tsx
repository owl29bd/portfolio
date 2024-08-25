// `app/page.tsx` is the UI for the `/` URL
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Template",
};
export default function Page() {
  return (
    <body>
      <h1>Hello, Home page!</h1>
      <Link href="/dashboard">Dashboard</Link>
    </body>
  );
}
