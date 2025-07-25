import Link from 'next/link';
import XIcon from '../icons/XIcon';
import InstagramIcon from '../icons/InstagramIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-100">
      <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Brand />
          <div className="text-center">
            <p className="text-center">
              <span className="text-black font-dm-sans font-medium text-sm leading-none tracking-normal">
                ©2024 Mark8
              </span>
              <span className="font-dm-sans font-light text-sm leading-6 tracking-normal ml-2">
                By Awesomity Ltd
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#">
              <XIcon width={16} height={16} />
            </Link>
            <Link href="#">
              <InstagramIcon width={16} height={16} />
            </Link>
            <Link href="#">
              <YoutubeIcon width={16} height={16} />
            </Link>
            <Link href="#">
              <LinkedinIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
