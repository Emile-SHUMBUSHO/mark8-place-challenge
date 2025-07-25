import RegisterForm from '@/components/auth/RegisterForm';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col gap-4 items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-2xl w-full h-auto flex items-center justify-between bg-gray-100 opacity-100 rounded-lg z-10">
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
          <RegisterForm />
        </div>
        <div className="max-w-2xl w-full h-20 flex items-center justify-between bg-gray-100 opacity-100 rounded-lg z-10">
          <div className="flex flex-col p-6">
            <h2 className="font-sans font-medium text-sm sm:text-base leading-[100%] tracking-normal text-gray-900">
              Already have an account?
            </h2>
            <p className="font-sans font-light text-sm sm:text-base leading-6 tracking-normal text-gray-700">
              Sign in to continue
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
                  Login Here
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
