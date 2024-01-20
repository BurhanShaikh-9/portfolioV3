// import { Header } from "@/app/client-side/header/header";
import { Suspense } from 'react';
import { Header } from '../client-side/header/header';
import '../styles/globalStyle.css'
import LoaderComponent from '../client-side/loader/loader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
          {children}
    
      </body>
    </html>
  );
}
