import type React from "react";

// Passthrough: html/body are provided by [locale]/layout.tsx so the
// lang attribute can be set dynamically per locale.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return children as React.ReactElement;
}
