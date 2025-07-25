import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface EmailInputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ label, error, leftIcon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <span className="font-sans font-semibold text-xs leading-tight tracking-normal capitalize block mb-0.5">
            {label}
          </span>
        )}
        <div className="relative w-full flex-1">
          {leftIcon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            type="email"
            className={cn(
              'bg-gray-200 w-full h-12 px-10 py-4 pr-8 rounded-sm border-0 text-gray-900 text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none',
              error &&
                'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              leftIcon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

EmailInput.displayName = 'EmailInput';

export { EmailInput };
