import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServerCard from "../components/ServerCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [servers, setServers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("/api/servers").then(res => setServers(res.data));
  }, []);

  const filtered = servers.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Hero setQuery={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filtered.map(s => (
          <ServerCard key={s.id} server={s} />
        ))}
      </div>
      <footer className="text-center p-4">Footer</footer>
    </>
  );
}