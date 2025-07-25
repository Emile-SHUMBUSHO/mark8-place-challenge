'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EmailInput } from '@/components/ui/EmailInput';
import { Button } from '@/components/ui/Button';
import { validateEmail } from '@/lib/validations';
import { cn } from '@/lib/utils';
import EnvelopeIcon from '@/components/icons/EnvelopeIcon';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isDissolving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      setError(emailValidation.errors[0]);
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (err) {
      setError(`${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col gap-4 items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-2xl w-full h-80 flex items-center justify-between bg-gray-100 opacity-100 rounded-lg z-10">
          <div className="h-full w-1/2 flex flex-col items-start p-6 justify-between">
            <Image
              src="/images/mark8_logo.svg"
              alt="Mark8 Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="flex flex-col gap-0">
              <span className="font-dm-sans font-bold text-base sm:text-lg leading-none tracking-normal capitalize text-gray-900">
                Mark8
              </span>
              <span className="font-dm-sans font-light text-xs leading-tight tracking-normal text-gray-500">
                By Awesomity Lab
              </span>
            </div>
            <span className="font-dm-sans font-light text-xs leading-tight tracking-normal text-gray-500">
              © 2024 Awesomity Lab
            </span>
          </div>

          {/* Form Section */}
          <div
            className={cn(
              'h-full w-1/2 bg-white p-6 rounded-tr-lg rounded-br-lg transition-opacity duration-300 ease-in-out',
              isDissolving ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
          >
            <h2 className="font-sans mb-4 font-black text-[20px] sm:text-[24px] leading-[100%] tracking-normal">
              Reset Password
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <p className="font-dm-sans font-light text-xs sm:text-sm leading-6 tracking-normal text-gray-600">
                    Enter your email address and we&apos;ll send you a link to
                    reset your password
                  </p>
                </div>

                <EmailInput
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleChange}
                  leftIcon={
                    <EnvelopeIcon color="#C1CF16" width={16} height={16} />
                  }
                  error={error}
                />

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto h-12 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none gap-2 opacity-100 px-4 sm:px-8 py-2 bg-primary hover:bg-primary/90 whitespace-nowrap flex items-center justify-center"
                  >
                    <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-black">
                      {loading ? 'Sending...' : 'Send Reset Link'}
                    </span>
                    <EnvelopeIcon width={16} height={16} />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="text-center space-y-4">
                  <div className="text-green-600 flex justify-center">
                    <svg
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-sans font-bold text-base sm:text-lg leading-[100%] tracking-normal text-gray-900">
                    Check your email
                  </h3>
                  <p className="font-dm-sans font-light text-xs sm:text-sm leading-6 tracking-normal text-gray-600">
                    We&apos;ve sent a password reset link to{' '}
                    <strong>{email}</strong>
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="w-full sm:w-auto h-12 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none gap-2 opacity-100 px-4 sm:px-8 py-2 whitespace-nowrap flex items-center justify-center"
                  >
                    <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-black">
                      Send Another Email
                    </span>
                    <EnvelopeIcon width={16} height={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-2xl w-full h-20 flex items-center justify-between bg-gray-100 opacity-100 rounded-lg z-10">
          <div className="flex flex-col p-6">
            <h2 className="font-sans font-medium text-sm sm:text-base leading-[100%] tracking-normal text-gray-900">
              Remember your password?
            </h2>
            <p className="font-sans font-light text-sm sm:text-base leading-6 tracking-normal text-gray-700">
              Go back to sign in
            </p>
          </div>
          <div className="p-6">
            <a href="/login">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 rounded-md gap-2 opacity-100 px-4 sm:px-8 py-2 whitespace-nowrap flex items-center justify-center"
              >
                <ArrowLeftIcon width={16} height={16} color="#C1CF16" />
                <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-black">
                  Back to Login
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/bg_lines.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
}
