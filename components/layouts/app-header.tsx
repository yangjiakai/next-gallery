'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppHeader() {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'UI Components', href: '/ui' },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              Next Gallery
            </Link>
            <div className="flex gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
