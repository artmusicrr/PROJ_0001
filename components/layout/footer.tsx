export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 ">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-sm text-muted-foreground hover:text-primary">
                  All Products
                </a>
              </li>
              <li>
                <a href="/subscriptions" className="text-sm text-muted-foreground hover:text-primary">
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-sm text-muted-foreground hover:text-primary">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Store. All rights reserved.
        </div>
      </div>
    </footer>
  )
}