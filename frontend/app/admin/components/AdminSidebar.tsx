"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "All Requests", href: "/admin/requests" },
    { name: "Pending", href: "/admin/requests?status=PENDING" },
    { name: "Completed", href: "/admin/requests?status=COMPLETED" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name} className="mb-4">
            <Link
              href={link.href}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                pathname === link.href ? "bg-gray-700 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}