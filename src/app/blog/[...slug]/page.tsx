interface BlogPageProps {
  params: {
    slug: string;
  };
}
const BlogPage = ({ params }: BlogPageProps) => {
  return <div>BlogPage: {params.slug}</div>;
};

export default BlogPage;
