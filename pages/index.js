import Head from 'next/head';
import Link  from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Ilustradora, Design Gráfico , 27 anos , Gêmeos, Maceió-AL ]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="http://nextjs.org/learn">our next.js tutorial</a>.)
        </p>
        <Link href="http://localhost:3000/posts/first-post">First Post</Link> <br></br>
        <Link href= "http://localhost:3000/posts/first-post">Second Post</Link>
      </section>
    </Layout>
  );
}