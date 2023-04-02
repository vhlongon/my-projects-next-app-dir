import { getAllPosts } from '@/lib/cms';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Blog pages',
};

const BlogEntryPage = async () => {
  const posts = await getAllPosts();
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogEntryPage;
