import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const font = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // preload weights you use
});

export const metadata: Metadata = {
  title: "ConvoTribe",
  description:
    "ConvoTribe is a free messaging and communication platform for creating and joining interest-based communities, built by Anand Singh.",
  openGraph: {
    title: "ConvoTribe",
    description:
      "Free messaging and communication platform for creating and joining interest-based communities.",
    type: "website",
    siteName: "ConvoTribe",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvoTribe",
    description:
      "Join ConvoTribe — your place to connect, chat, and share with like-minded people.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            font.className,
            "bg-background text-foreground antialiased min-h-screen"
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
