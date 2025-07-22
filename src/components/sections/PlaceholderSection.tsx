// components/sections/PlaceholderSection.tsx
import React from 'react';
import { cn } from '@/lib/utils'; // 确保你已安装 clsx 和 tailwind-merge 并设置了此工具函数

interface PlaceholderProps {
  id: string;
  title: string;
  children?: React.ReactNode;
  className?: string; // 添加 className prop
}

const PlaceholderSection: React.FC<PlaceholderProps> = ({ id, title, children, className }) => {
  return (
    // 使用 cn 函数合并类名
    <section
      id={id}
      className={cn(
        "h-screen w-full flex items-center justify-center p-4 snap-start",
        className // 将外部传入的类名附加到这里
      )}
    >
      <div className="w-full max-w-4xl text-center p-10">
        <h2 className="font-neon text-4xl font-bold mb-4">{title}</h2>
        <div className="text-lg text-foreground/80">
          {children}
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;
