'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { cn, getInitials } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Session } from 'next-auth';

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          {/* <form
            action={async () => {
              'use server';

              await signOut();
            }}
            className="mb-10">
            <Button>Logout</Button>
          </form> */}
          <Link
            className={cn(
              'text-base cursor-pointer capitalize',
              pathname === '/library' ? 'text-light-200' : 'text-light-100'
            )}
            href="/library">
            Library
          </Link>
        </li>
        <li className="shrink-0">
          <Link href="/my-profile">
            <Avatar color="white">
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || 'XX')}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
