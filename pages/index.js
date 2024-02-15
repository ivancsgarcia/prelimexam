import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>10 Things That Require Zero Talent</h2>
    <ul>
      <li>Being on Time</li>
    <li>Making An Effort</li>
    <li>Being High Energy</li>
    <li>Having A Positive Attitude</li>
    <li>Being Passionate</li>
    <li>Using Good Body Language</li>
    <li>Being Coachable</li>
    <li>Doing A Little Extra</li>
    <li>Being Prepared</li>
    <li>Having A Strong Work Ethic</li>
    </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
