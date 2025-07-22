// src/app/page.tsx

import dynamic from 'next/dynamic'; // 1. 导入 dynamic 函数
import HeroSection from '@/components/sections/HeroSection';

// 2. 使用 dynamic 创建一个懒加载版本的 PlaceholderSection 组件
//    当这个组件即将进入视口时，相关的JS才会被加载
const LazyPlaceholderSection = dynamic(() => import('@/components/sections/PlaceholderSection'));

export default function Home() {
  return (
    <>
      {/* HeroSection 保持正常加载，因为它在首屏，需要立即显示 */}
      <HeroSection />

      {/* 
        FIX: 将所有后续的 PlaceholderSection 替换为懒加载版本。
        这会显著减少初始页面的JS大小，加快加载速度。
      */}
      <LazyPlaceholderSection 
        id="works" 
        title="个人作品"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「个人作品」板块，等待你的精彩内容填充。</p>
      </LazyPlaceholderSection>
      
      <LazyPlaceholderSection 
        id="blog" 
        title="博客文章"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「博客文章」板块，等待你的精彩内容填充。</p>
      </LazyPlaceholderSection>

      <LazyPlaceholderSection 
        id="about" 
        title="关于我"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「关于我」板块，等待你的精彩内容填充。</p>
      </LazyPlaceholderSection>

      <LazyPlaceholderSection 
        id="contact" 
        title="联系方式"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「联系方式」板块，等待你的精彩内容填充。</p>
      </LazyPlaceholderSection>
    </>
  );
}