import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Home">
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh' }}>
        <img
          src="/shuu-ni-ichido-classmate-wo-kau-hanashi/img/logo.png"
          alt="Shuu ni Ichido Classmate wo Kau Hanashi Logo"
          style={{ width: 200, marginBottom: 32 }}
        />
        <h1>Shuu ni Ichido Classmate wo Kau Hanashi ~ Futari no Jikan, Iiwake no Gosen'en ~</h1>
        <Link
          className="button button--primary button--lg"
          to="/wn/chapter-111"
          style={{ marginTop: 32 }}
        >
          Đọc Truyện (Web Novel)
        </Link>
      </main>
    </Layout>
  );
}