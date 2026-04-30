'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'solid' | 'ghost' | 'glass' | 'aurora';
type Size = 'sm' | 'default' | 'lg' | 'xl';

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default:
    'bg-brand-primary/5 hover:bg-brand-primary/[0.08] border border-brand-secondary/25 text-brand-dark transition-colors duration-200',

  solid:
    'bg-brand-primary hover:bg-[#1c1c80] text-white border border-transparent ' +
    'hover:border-brand-secondary/30 transition-colors duration-200',

  ghost:
    'border border-white/20 bg-transparent hover:bg-white/10 text-white transition-colors duration-200',

  glass:
    'bg-brand-primary/[0.07] backdrop-blur-md ' +
    'border border-brand-primary/20 text-brand-primary ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_6px_rgba(21,21,107,0.07)] ' +
    'hover:bg-brand-primary/[0.12] hover:border-brand-primary/30 ' +
    'transition-all duration-200',

  aurora:
    'bg-brand-secondary hover:bg-[#04c48d] text-brand-dark border border-transparent ' +
    'shadow-[0_2px_10px_rgba(5,216,156,0.18)] ' +
    'hover:shadow-[0_4px_16px_rgba(5,216,156,0.28)] ' +
    'transition-all duration-200',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2 text-xs',
  default: 'px-6 py-2 text-sm',
  lg: 'px-8 py-2.5 text-base',
  xl: 'px-10 py-3 text-base',
};

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'rounded-full font-semibold text-center ' +
            'transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97]',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">{children}</span>
      </button>
    );
  }
);

NeonButton.displayName = 'NeonButton';
