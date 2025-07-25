'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { validateEmail, validateRequired } from '@/lib/validations';
import { EmailInput } from '../ui/EmailInput';
import { PasswordInput } from '../ui/PasswordInput';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import EnvelopeIcon from '../icons/EnvelopeIcon';
import LoginIcon from '../icons/loginIcon';
import SquareLockIcon from '../icons/squareLockIcon';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { login, loading } = useAuth();
  const router = useRouter();
  const [isDissolving, setIsDissolving] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.errors[0];
    }

    const passwordValidation = validateRequired(formData.password, 'Password');
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.errors[0];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await login({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
      setIsDissolving(true);
      setTimeout(() => {
        router.push('/');
      }, 300);
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div
      className={cn(
        'h-full w-1/2 bg-white p-6 rounded-tr-lg rounded-br-lg transition-opacity duration-300 ease-in-out',
        isDissolving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      <h2 className="font-sans mb-4 font-black text-[20px] sm:text-[24px] leading-[100%] tracking-normal">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <EmailInput
          label="Email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          leftIcon={<EnvelopeIcon color="#C1CF16" width={16} height={16} />}
          error={errors.email}
        />
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          leftIcon={<SquareLockIcon color="#C1CF16" width={16} height={16} />}
          error={errors.password}
        />
        <div className="flex items-center justify-between">
          <a
            href="/forgot-password"
            className="text-sm text-black underline hover:underline"
          >
            Forgot password?
          </a>
          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto h-12 rounded-lg gap-2 opacity-100 px-4 sm:px-8 py-2 bg-primary hover:bg-primary/90 whitespace-nowrap flex items-center justify-center mt-2 sm:mt-0"
          >
            <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-black">
              Login
            </span>
            <LoginIcon width={16} height={16} />
          </Button>
        </div>
      </form>
    </div>
  );
}
