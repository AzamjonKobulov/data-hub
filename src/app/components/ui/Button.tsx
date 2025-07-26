// components/ui/Button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center space-x-2 lg:font-medium transition-colors cursor-pointer rounded-lg lg:rounded-xl",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-500 text-white hover:bg-brand-500/85 disabled:bg-neutral-500/10 disabled:text-neutral-500/60",
        secondary:
          "bg-neutral-500/10 hover:bg-neutral-500/15 disabled:text-neutral-500/60",
        outline:
          "bg-neutral-800 text-white/90 border border-brand-500 hover:bg-brand-500/15 disabled:border-neutral-500/15 disabled:text-neutral-500/60",
        ghost:
          "bg-neutral-800 hover:bg-neutral-500/10 disabled:text-neutral-500/60",
      },

      size: {
        xs: "h-8 leading-5 rounded-lg py-1.5 px-4",
        sm: "h-9 leading-5 rounded-lg py-2 px-4",
        md: "h-10 leading-5 rounded-lg py-2.5 px-5",
        lg: "h-12 font-medium text-lg/6 rounded-xl py-3 px-6",
        xl: "h-14 font-medium text-lg/6 rounded-xl py-4 px-8",
        responsive:
          "h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 leading-5 lg:text-lg/6 lg:font-medium py-1.5 px-4 sm:py-2 sm:px-4 md:py-2.5 md:px-5 lg:py-3 lg:px-6 xl:py-4 xl:px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "responsive",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
