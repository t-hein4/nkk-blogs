import Link from 'next/link';
import { heading } from '@/lib/fonts';

export function Notification() {
  return (
    <div className={`${heading.className} py-2 bg-neutral-200 relative`}>
      <Link href="/api/exit-preview" className="text-sm right-0 absolute block">
        <strong className="hover:underline decoration-2">Click here</strong> to
        exit Preview mode.
      </Link>
      <div className="font-medium text-base block text-center">
        You are currently in Preview mode.
      </div>
    </div>
  );
}
