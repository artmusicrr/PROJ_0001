export default function AboutPage() {
  return (
    <div className="container py-16 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About Us</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to our e-commerce platform, where we combine quality products with flexible subscription options to provide the best shopping experience for our customers.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            We strive to provide a seamless shopping experience with high-quality products and flexible subscription options that cater to your needs. Our platform is built on the principles of reliability, security, and customer satisfaction.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <ul className="space-y-4 text-muted-foreground mb-8">
            <li>✓ Curated selection of premium products</li>
            <li>✓ Flexible subscription plans</li>
            <li>✓ Secure payment processing</li>
            <li>✓ Exceptional customer service</li>
          </ul>
        </div>
      </div>
    </div>
  )
}