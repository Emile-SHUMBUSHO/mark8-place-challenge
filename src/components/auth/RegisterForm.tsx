'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { validateEmail, validateRequired } from '@/lib/validations';
import { EmailInput } from '../ui/EmailInput';
import { PasswordInput } from '../ui/PasswordInput';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { cn } from '@/lib/utils';
import EnvelopeIcon from '../icons/EnvelopeIcon';
import SquareLockIcon from '../icons/squareLockIcon';
import UserAvatarIcon from '../icons/UserAvatarIcon';
import PhoneIcon from '../icons/PhoneIcon';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register, loading } = useAuth();
  const router = useRouter();
  const [isDissolving, setIsDissolving] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate first name
    const firstNameValidation = validateRequired(
      formData.firstName,
      'First name'
    );
    if (!firstNameValidation.isValid) {
      newErrors.firstName = firstNameValidation.errors[0];
    }

    // Validate last name
    const lastNameValidation = validateRequired(formData.lastName, 'Last name');
    if (!lastNameValidation.isValid) {
      newErrors.lastName = lastNameValidation.errors[0];
    }

    // Validate email
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.errors[0];
    }

    // Validate phone (optional but if provided, should be valid)
    if (formData.phone && formData.phone.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    // Validate password
    const passwordValidation = validateRequired(formData.password, 'Password');
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.errors[0];
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Validate terms agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      setIsDissolving(true);
      setTimeout(() => {
        router.push('/');
      }, 300);
    } catch (err) {
      console.error('Registration failed:', err);
      setErrors({
        submit: err instanceof Error ? err.message : 'Registration failed',
      });
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
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <span className="font-dm-sans font-semibold text-[10px] sm:text-xs leading-[100%] tracking-normal capitalize text-gray-700 mb-1">
              First Name
            </span>
            <div className="relative">
              <UserAvatarIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
                width={16}
                height={16}
              />
              <Input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                className={cn(
                  'pl-10 h-10 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none',
                  errors.firstName ? 'border-red-500' : ''
                )}
                required
              />
            </div>
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <span className="font-dm-sans font-semibold text-[10px] sm:text-xs leading-[100%] tracking-normal capitalize text-gray-700 mb-1">
              Last Name
            </span>
            <div className="relative">
              <UserAvatarIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
                width={16}
                height={16}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                className={cn(
                  'pl-10 h-10 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none',
                  errors.lastName ? 'border-red-500' : ''
                )}
                required
              />
            </div>
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <EmailInput
          label="Email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          leftIcon={<EnvelopeIcon color="#C1CF16" width={16} height={16} />}
          error={errors.email}
        />

        {/* Phone Field */}
        <div className="flex flex-col">
          <span className="font-dm-sans font-semibold text-[10px] sm:text-xs leading-[100%] tracking-normal capitalize text-gray-700 mb-1">
            Phone (Optional)
          </span>
          <div className="relative">
            <PhoneIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
              color="#C1CF16"
              width={16}
              height={16}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className={cn(
                'pl-10 h-10 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none',
                errors.phone ? 'border-red-500' : ''
              )}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Password Fields */}
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          leftIcon={<SquareLockIcon color="#C1CF16" width={16} height={16} />}
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          leftIcon={<SquareLockIcon color="#C1CF16" width={16} height={16} />}
          error={errors.confirmPassword}
        />

        {/* Terms Checkbox */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mt-1 rounded"
          />
          <label htmlFor="agreeToTerms" className="text-xs text-gray-700">
            I agree to the{' '}
            <a href="/terms" className="text-primary hover:underline">
              Terms and Conditions
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-xs text-red-500">{errors.agreeToTerms}</p>
        )}

        {errors.submit && (
          <p className="text-xs text-red-500">{errors.submit}</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto h-12 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none gap-2 opacity-100 px-4 sm:px-8 py-2 bg-primary hover:bg-primary/90 whitespace-nowrap flex items-center justify-center"
          >
            <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-black">
              {loading ? 'Creating Account...' : 'Register'}
            </span>
            <UserAvatarIcon width={16} height={16} />
          </Button>
        </div>
      </form>
    </div>
  );
}
