import Header from './Components/Header/Header';
import './globals.css';
import { bodyFont } from './util/fonts';

export const metadata = {
  title: 'J.W. Adkins - Technology team leadership',
  description: 'Contact information for technology team leader Joe Adkins',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${bodyFont.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
