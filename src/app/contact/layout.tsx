interface LayoutProps {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: LayoutProps) {
  return (
    <>
      <div>extra content in contact layout layout</div>
      {children}
    </>
  );
}
