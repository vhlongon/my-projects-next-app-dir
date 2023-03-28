interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async (metadata: BlogPageProps) => ({
  title: `Page: ${metadata.params.slug}`,
});

const BlogPage = ({ params }: BlogPageProps) => {
  return <div>BlogPage: {params.slug}</div>;
};

export default BlogPage;
