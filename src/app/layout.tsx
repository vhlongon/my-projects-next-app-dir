import './globals.css';

export const metadata = {
  title: 'Blog with next and typescript',
  description: 'Cool stuff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
