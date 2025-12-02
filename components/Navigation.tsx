'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Experience', path: '/experience' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-purple hover:text-purple-light transition-colors">
            Oche Ankeli
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-purple ${
                  pathname === item.path ? 'text-purple' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-3 ml-4">
              <a 
                href="https://linkedin.com/in/oche-ankeli-71001a9b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/Tripp808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

