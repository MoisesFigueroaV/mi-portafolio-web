import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { PlasmaBackground } from "../components/PlasmaBackground";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio minimalista monocromo",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-100 text-gray-700 dark:bg-[#000000] dark:text-[#cccccc] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <PlasmaBackground>
            <LanguageProvider>{children}</LanguageProvider>
          </PlasmaBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
