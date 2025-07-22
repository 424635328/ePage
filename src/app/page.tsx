// app/page.tsx

import HeroSection from '@/components/sections/HeroSection';
// 未来你可以在这里导入更多区块组件
// import AboutSection from '@/components/sections/AboutSection';
// import ProjectsSection from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    // 使用 <main> 标签来包裹主要内容
    <main>
      {/* --- 首屏区块 --- */}
      <HeroSection />

      {/* 
        ============================================================
        ==  未来，你只需要在这里添加新的区块组件即可扩展页面内容  ==
        ============================================================
        
        例如，创建一个 "关于我" 的区块:
        1. 在 components/sections/ 中创建 AboutSection.tsx 和 AboutSection.module.css
        2. 在本文件中取消下面的注释:
      */}
      
      {/* --- 关于我区块 (示例) --- */}
      {/* <AboutSection /> */}

      {/* --- 项目展示区块 (示例) --- */}
      {/* <ProjectsSection /> */}

    </main>
  );
}