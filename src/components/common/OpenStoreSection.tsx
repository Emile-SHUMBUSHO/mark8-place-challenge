'use client';
import React, { useState } from 'react';
import EnvelopeIcon from '../icons/EnvelopeIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface OpenStoreSectionProps {
  heading?: React.ReactNode;
  placeholder?: string;
  buttonText?: string;
}

const OpenStoreSection: React.FC<OpenStoreSectionProps> = ({
  heading = (
    <h2 className="text-xl md:text-2xl font-dm-sans font-black text-2xl leading-none tracking-normal text-gray-900 mb-2">
      <span className="text-primary font-dm-sans font-black text-2xl leading-none tracking-normal">
        Open
      </span>{' '}
      <span className="font-dm-sans font-black text-2xl leading-none tracking-normal">
        your Store
      </span>
    </h2>
  ),
}) => {
  const [email, setEmail] = useState('');
  return (
    <section className="bg-gray-100 w-full mx-auto flex items-center justify-between rounded-2xl border border-gray-200 p-10 md:p-12 lg:p-16 xl:p-20 mt-8 relative opacity-100">
      <div
        className="absolute inset-0 rounded-xl opacity-10"
        style={{
          backgroundImage: 'url(/images/bg_lines.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
          <div className="text-center lg:text-left">{heading}</div>
          <form
            className="flex flex-col sm:flex-row items-center w-full max-w-lg gap-2.5 opacity-100"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="relative w-full flex-1">
              <EnvelopeIcon
                color="#C1CF16"
                className="absolute left-4 top-1/2 -translate-y-1/2"
                width={16}
                height={16}
              />
              <Input
                type="text"
                placeholder={'Enter your Email'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-gray-200 w-full h-12 px-10 py-4 pr-8 rounded-sm border-0 text-gray-900 text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full sm:w-[138px] h-12 bg-primary hover:bg-primary/90 px-8 py-2 gap-2 rounded-lg opacity-100 whitespace-nowrap flex items-center justify-center mt-2 sm:mt-0"
            >
              <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-black">
                Submit
              </span>
              <ArrowRightIcon width={16} height={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OpenStoreSection;
