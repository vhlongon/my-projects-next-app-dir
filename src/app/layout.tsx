import './globals.css';

export const metadata = {
  title: 'Blog with next and typescript',
  description: 'Cool stuff',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div>extra content in root layout</div>
        {children}
      </body>
    </html>
  );
}
