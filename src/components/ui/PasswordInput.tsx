import { useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import EyeOnIcon from '../icons/eyeOnIcon';
import EyeOffIcon from '../icons/eyeOffIcon';

interface PasswordInputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, leftIcon, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
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
            type={showPassword ? 'text' : 'password'}
            className={cn(
              'bg-gray-200 w-full h-12 px-10 py-4 pr-8 rounded-sm border-0 text-gray-900 text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none',
              error &&
                'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              leftIcon && 'pl-10',
              className
            )}
            {...props}
          />
          <button
            type="button"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
            tabIndex={0}
          >
            {showPassword ? (
              <EyeOnIcon color="#C1CF16" width={16} height={16} />
            ) : (
              <EyeOffIcon color="#C1CF16" width={16} height={16} />
            )}
          </button>
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
