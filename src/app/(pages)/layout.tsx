import "~/styles/globals.css";

import { Manrope } from "next/font/google";
import { cn } from "~/lib/utils";
import { BaseLayout } from "~/components/layout/base-layout";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-manrope antialiased",
          manrope.variable,
        )}
      >
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
