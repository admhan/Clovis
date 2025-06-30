import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServerCard from '../components/ServerCard';
import servers from '../data/servers.json';

export default function Home() {
  const [query, setQuery] = useState('');

  const filtered = servers.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>MCP Serveurs HOC</title>
        <meta name="description" content="Liste des serveurs MCP" />
      </Head>
      <Navbar />
      <Hero query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filtered.map((s, i) => (
          <ServerCard key={i} server={s} />
        ))}
      </div>
      <footer className="text-center p-4">Footer</footer>
    </>
  );
}
