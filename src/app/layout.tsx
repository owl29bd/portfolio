// root layout is required.
// Only the root layout can contain <html> and <body> tags.

import { NavLinks } from "../ui/nav-links";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <NavLinks />
        <main>{children}</main>
      </body>
    </html>
  );
}
