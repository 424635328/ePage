// components/sections/HeroSection.tsx

import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css'; // 导入该区块的专属样式

const HeroSection = () => {
  return (
    // 使用 <section> 语义化标签，并为其指定一个 id，方便页面内导航
    <section id="hero" className={styles.heroContainer} >
      {/* 
        内容包装器，用于垂直居中和文本对齐 
        动态渐变背景是在 heroContainer 上实现的
      */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          代码构建世界，<br />
          <span className={styles.highlight}>创意</span>点亮未来。
        </h1>
        <p className={styles.subtitle}>
          你好，我是 [你的名字或昵称]。一名热衷于将想法变为现实的开发者/设计师。
          欢迎来到我的数字空间。
        </p>
        <Link href="/works" className={styles.ctaButton}>
          探索我的作品
        </Link>
      </div>

      {/* 
        一个可选的向下滚动提示，引导用户继续浏览。
        它会指向下一个区块的id，例如 #about。
      */}
      <div className={styles.scrollDown}>
        <a href="#about"> {/* 假设下一个区块的 id 是 'about' */}
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;