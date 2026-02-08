import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: 'Cloud Kitchen | Authentic Hygienic Home-Cooked Meals',
  description: 'Experience authentic home-style meals delivered fresh. 100% hygienic, fresh ingredients, family recipes. Order now from Cloud Kitchen in Pune.',
  keywords: 'cloud kitchen, food delivery, home cooked meals, Pune, hygienic food, authentic recipes',
  openGraph: {
    title: 'Cloud Kitchen | Ghar Jaisa Khana',
    description: 'Authentic Home-Style Meals Delivered Fresh',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6b5b" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
