export default function ServerCard({ server }) {
  return (
    <div className="border rounded p-4 hover:shadow-lg transition">
      <img
        src={server.image || 'https://via.placeholder.com/300x150'}
        alt=""
        className="w-full h-32 object-cover mb-2"
      />
      <h2 className="font-bold text-xl">{server.title}</h2>
      <p className="text-sm">{server.description}</p>
    </div>
  );
}
