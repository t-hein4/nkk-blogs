import { logo } from '@/lib/fonts';
import Link from 'next/link';

export function PostBanner() {
  return (
    <div className="px-4 md:px-0">
      <Link
        href="/"
        className="hover:underline decoration-4 underline-offset-4"
      >
        <span className={`${logo.className} text-4xl`}>Blog.</span>
      </Link>
    </div>
  );
}
