'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UISidebar() {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Overview', href: '/ui' },
    { name: 'Button', href: '/ui/button' },
    { name: 'Select', href: '/ui/select' },
  ];

  return (
    <aside className="w-64 border-r h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block p-2 rounded-md ${
              pathname === item.href
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
