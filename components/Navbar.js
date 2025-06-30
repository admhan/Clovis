export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white shadow-md fixed top-0 w-full z-10">
      <div className="font-bold">YOUR LOGO</div>
      <ul className="hidden md:flex gap-4">
        <li>Media Plus</li>
        <li>Service Plan</li>
        <li>Plan.Net</li>
        <li>CMS</li>
        <li>Make</li>
      </ul>
      <div className="md:hidden">☰</div>
    </nav>
  );
}
