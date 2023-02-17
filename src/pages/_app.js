import '@/styles/globals.css';
import { general } from '@/lib/fonts';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${general.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
