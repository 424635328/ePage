// app/page.tsx

import HeroSection from '@/components/sections/HeroSection';
import PlaceholderSection from '@/components/sections/PlaceholderSection';

export default function Home() {
  return (
    <>
      {/* HeroSection 保持透明，完全展示背景 */}
      <HeroSection />

      {/* 
        FIX: 为所有内容板块添加半透明背景和背景模糊效果。
        这能确保文字在复杂的动画背景下依然清晰可读，并产生漂亮的层次感。
      */}
      <PlaceholderSection 
        id="works" 
        title="个人作品"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「个人作品」板块，等待你的精彩内容填充。</p>
      </PlaceholderSection>
      
      <PlaceholderSection 
        id="blog" 
        title="博客文章"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「博客文章」板块，等待你的精彩内容填充。</p>
      </PlaceholderSection>

      <PlaceholderSection 
        id="about" 
        title="关于我"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「关于我」板块，等待你的精彩内容填充。</p>
      </PlaceholderSection>

      <PlaceholderSection 
        id="contact" 
        title="联系方式"
        className="bg-background/70 backdrop-blur-sm"
      >
        <p>这里是「联系方式」板块，等待你的精彩内容填充。</p>
      </PlaceholderSection>
    </>
  );
}
