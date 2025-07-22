// components/Header.tsx

import React from 'react';
import Link from 'next/link'; // 使用 Next.js 的 Link 组件进行客户端路由，避免页面刷新
import Image from 'next/image'; // 使用 Next.js 的 Image 组件自动优化图片
import styles from './Header.module.css'; // 导入 CSS Modules，实现样式隔离

// 定义导航链接的数据结构，这样做非常便于未来的扩展和维护
// 只需要修改这个数组，导航栏就会自动更新
const navItems = [
  { label: '首页', href: '/' },
  { label: '个人作品', href: '/works' }, // 这是你要求的“个人作品”链接
  { label: '博客文章', href: '/blog' },
  { label: '关于我', href: '/about' },
  { label: '联系方式', href: '/contact' },
];

const Header = () => {
  return (
    // 使用 <header> 语义化标签
    // styles.header 应用了主要的样式，包括毛玻璃效果和固定定位
    <header className={styles.header}>
      
      {/* 左上角的贴图 */}
      {/* 
        使用 Next/Image 组件加载 public 目录下的图片。
        它会自动处理图片优化、懒加载等。
        `priority` 属性建议用于首屏 LCP (Largest Contentful Paint) 元素，确保它被优先加载。
      */}
      <div className={styles.stickerContainer}>
        <Image
          src="/img.png" // 图片路径相对于 public 文件夹
          alt="装饰性贴图"
          width={100} // 设置图片的尺寸，Next/Image 需要
          height={100} // 设置图片的尺寸，Next/Image 需要
          priority 
        />
      </div>

      {/* 
        主内容容器，这个容器将向右偏移，为左上角的贴图留出空间。
        同时它也负责内容的居中和对齐。
      */}
      <div className={styles.container}>
        
        {/* 网站 Logo 或标题，点击后返回首页 */}
        <div className={styles.logo}>
          <Link href="/">
            ePage
          </Link>
        </div>

        {/* 导航链接区域 */}
        <nav className={styles.nav}>
          {/* 遍历 navItems 数组，动态生成导航链接 */}
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;