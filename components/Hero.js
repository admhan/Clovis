export default function Hero({ query, setQuery }) {
  return (
    <div className="bg-yellow-300 flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">MCP Serveurs HOC</h1>
      <input
        type="text"
        placeholder="Recherche"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 w-full max-w-md"
      />
    </div>
  );
}
