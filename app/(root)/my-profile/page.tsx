import React from 'react';
import { Button } from '@/components/ui/button';
import BookList from '@/components/BookList';
import { signOut } from '@/auth';
import { books } from '@/database/schema';
import { desc } from 'drizzle-orm';
import { db } from '@/database/drizzle';

const Page = async () => {
  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];

  return (
    <>
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
        className="mb-10">
        <Button>Logout</Button>
      </form>

      <BookList title="Borrowed Books" books={latestBooks} />
    </>
  );
};
export default Page;
