// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import AuroraBackground from "@/components/layout/AuroraBackground";
import StyledComponentsRegistry from "@/lib/registry";
import { Orbitron } from "next/font/google";

export const metadata: Metadata = {
  title: "我的个人网站",
  description: "一个使用 Next.js 创建的网站",
};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-neon',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={orbitron.variable}>
      <body>
        <AuroraBackground />
        
        <main className="scroll-container">
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}