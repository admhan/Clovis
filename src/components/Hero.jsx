export default function Hero({ setQuery }) {
  return (
    <div className="bg-yellow-300 text-center p-10">
      <h1 className="text-4xl font-bold mb-4">MCP Serveurs HOC</h1>
      <input
        type="text"
        placeholder="Recherche"
        onChange={e => setQuery(e.target.value)}
        className="p-2 w-1/2"
      />
    </div>
  );
}