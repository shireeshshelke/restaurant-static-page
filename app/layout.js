import './globals.css';

export const metadata = {
  title: 'Cloud Kitchen',
  description: 'Authentic Home-Style Meals Delivered Fresh',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
