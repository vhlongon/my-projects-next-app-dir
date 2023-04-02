import { getAllPosts } from '@/lib/cms';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async (metadata: BlogPageProps) => ({
  title: `Page: ${metadata.params.slug}`,
});

export const generateStaticParams = async () => {
  const posts = await getAllPosts();

  const slugs = posts.map(post => ({
    slug: post.slug,
  }));
  return slugs;
};

const BlogPage = ({ params }: BlogPageProps) => {
  return <div>BlogPage: {params.slug}</div>;
};

export default BlogPage;
