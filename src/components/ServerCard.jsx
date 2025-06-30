export default function ServerCard({ server }) {
  return (
    <div className="border rounded p-4 hover:shadow-lg transition">
      <img src={server.imageUrl || "https://via.placeholder.com/150"} alt="" className="w-full h-32 object-cover mb-2" />
      <h2 className="font-bold text-xl">{server.title}</h2>
      <p>{server.description}</p>
    </div>
  );
}