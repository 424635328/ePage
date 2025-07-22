// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css"; // 你的全局样式
import Header from "@/components/layout/Header"; // 导入我们刚刚创建的 Header 组件
import AuroraBackground from "@/components/layout/AuroraBackground";
import StyledComponentsRegistry from "@/lib/registry"; // 导入 Styled Components 的注册组件
import { Orbitron } from "next/font/google"; // 导入 Google 字体

export const metadata: Metadata = {
  title: "我的个人网站",
  description: "一个使用 Next.js 创建的网站",
};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700'], // 代码中用到了 font-weight: 700
  variable: '--font-neon', // 将字体赋值给 CSS 变量 --font-neon
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={orbitron.variable}>
      <body>
        {/* 在这里放置 Header 组件，它将出现在所有页面 */}
        <Header />
        {/* 
          AuroraBackground 组件用于创建背景效果
          你可以根据需要调整它的位置和样式
        */}
        <AuroraBackground />
        
        {/* 
          主体内容区域
          我们给 main 标签添加一个 paddingTop，以防止页面内容被固定的 Header 遮挡。
          这个值应该约等于 Header 的高度。
        */}
        <main style={{ paddingTop: '80px' }}>
          {/* 
            使用 StyledComponentsRegistry 包裹 children，
            这样可以确保在服务器端渲染时正确处理 styled-components 的样式。
          */}
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </main>
        
      </body>
    </html>
  );
}