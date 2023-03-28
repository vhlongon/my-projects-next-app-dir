'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactPage = () => {
  const router = useRouter();

  return (
    <>
      <div>ContactPage</div>
      <Link href="/">home</Link>
      <Link href="/blog/123">blog 123</Link>
      <div>
        <button onClick={() => router.push('/')}>
          got to home button with push
        </button>
      </div>
    </>
  );
};

export default ContactPage;
