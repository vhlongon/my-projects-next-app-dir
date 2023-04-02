import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function Home() {
  return (
    <main className={styles.home}>
      <div>
        <div>Hi, my name is McLovin</div>
        <div>
          <Link href="/blog">blog</Link>
        </div>
        <div>
          <Link href="/contact">blog</Link>
        </div>
      </div>
    </main>
  );
}
