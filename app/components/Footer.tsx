import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About shadzIT</h3>
            <p>Your one-stop shop for all things tech. We offer the latest gadgets and accessories at competitive prices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="https://facebook.com/shadzIT" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="https://twitter.com/shadzIT" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com/shadzIT" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 shadzIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

