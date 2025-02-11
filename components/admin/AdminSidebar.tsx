import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  Settings 
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard
  },
  {
    title: "Usuários",
    href: "/admin/users",
    icon: Users
  },
  {
    title: "Configurações",
    href: "/admin/settings",
    icon: Settings
  }
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen p-4">
      <div className="font-bold text-xl mb-6">Admin</div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
          >
            <item.icon className="w-5 h-5" />
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}