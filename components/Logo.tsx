
import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'secondary' | 'logomark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'primary', className = "" }) => {
  if (variant === 'logomark') {
    return (
      <svg width="40" height="40" viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15C15 15 35 10 50 15C65 20 85 15 85 15V75C85 75 65 80 50 75C35 70 15 75 15 75V15Z" fill="#D3A70A" stroke="black" strokeWidth="3"/>
        <path d="M35 30H65M35 45H65M35 60H65M50 25V65" stroke="black" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15C15 15 35 10 50 15C65 20 85 15 85 15V75C85 75 65 80 50 75C35 70 15 75 15 75V15Z" fill="#D3A70A" stroke="black" strokeWidth="4"/>
        <path d="M35 30H65M35 45H65M35 60H65M50 25V65" stroke="black" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <span className={`font-serif text-2xl tracking-tight ${variant === 'secondary' ? 'flex flex-col leading-none' : ''}`}>
        <span className="font-bold">paper</span>
        <span className={variant === 'secondary' ? 'ml-4 italic' : 'font-light italic'}>jack</span>
        <span className="text-[10px] font-sans align-top ml-1 uppercase">inc.</span>
      </span>
    </div>
  );
};

export default Logo;
