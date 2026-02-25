export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Cyber Services</h1>
      <div className="space-x-4">
        <a href="/.">Home</a>
        <a href="/services">Services</a>
        <a href="/request">Request</a>
      </div>
    </nav>
  );
}