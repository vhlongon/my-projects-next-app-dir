interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async (metadata: BlogPageProps) => ({
  title: `Page: ${metadata.params.slug}`,
});

export const generateStaticParams = async () => {
  return [{ slug: ['test'] }, { slug: ['test2'] }, { slug: ['test3'] }];
};

const BlogPage = ({ params }: BlogPageProps) => {
  return <div>BlogPage: {params.slug}</div>;
};

export default BlogPage;
