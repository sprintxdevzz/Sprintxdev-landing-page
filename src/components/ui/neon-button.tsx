import React from 'react'
import { cn } from '../../lib/utils'

type Variant = 'default' | 'solid' | 'ghost' | 'glass' | 'aurora'
type Size = 'sm' | 'default' | 'lg' | 'xl'

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  neon?: boolean
}

const variantClasses: Record<Variant, string> = {
  default:
    'bg-brand-primary/5 hover:bg-brand-primary/0 border border-brand-secondary/25 text-brand-dark',

  solid:
    'bg-brand-primary hover:bg-[#1c1c80] text-white border border-transparent ' +
    'hover:border-brand-secondary/30 transition-colors duration-200',

  ghost:
    'border border-transparent bg-transparent hover:border-white/20 hover:bg-white/10 text-white',

  // ─── Glass pill ───────────────────────────────────────────────────────────
  // Works on light backgrounds: brand-tinted frosted glass, teal border on hover.
  glass:
    'bg-brand-primary/[0.07] backdrop-blur-md ' +
    'border border-brand-primary/22 text-brand-primary ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_2px_10px_rgba(21,21,107,0.08)] ' +
    'hover:bg-brand-primary/[0.13] hover:border-brand-secondary/50 ' +
    'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_4px_22px_rgba(5,216,156,0.22)] ' +
    'transition-all duration-300',

  // ─── Aurora — solid brand-secondary (teal) CTA ───────────────────────────
  aurora:
    'bg-brand-secondary hover:bg-[#04c48d] text-brand-dark border border-transparent ' +
    'shadow-[0_8px_28px_rgba(5,216,156,0.30)] ' +
    'hover:shadow-[0_12px_40px_rgba(5,216,156,0.45)] ' +
    'transition-all duration-300',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-6 py-2.5 text-xs',
  default: 'px-7 py-2 text-sm',
  lg: 'px-10 py-3 text-base',
  xl: 'px-12 py-5 text-lg',
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = 'default', size = 'default', neon = true, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative group rounded-full font-bold text-center ' +
          'transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {/* top neon edge */}
        <span
          className={cn(
            'absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out ' +
            'inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-brand-secondary to-transparent',
            !neon && 'hidden'
          )}
        />

        <span className="relative flex items-center justify-center gap-2.5">
          {children}
        </span>

        {/* bottom neon edge */}
        <span
          className={cn(
            'absolute group-hover:opacity-30 transition-all duration-500 ease-in-out ' +
            'inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-brand-secondary to-transparent',
            !neon && 'hidden'
          )}
        />
      </button>
    )
  }
)

NeonButton.displayName = 'NeonButton'
