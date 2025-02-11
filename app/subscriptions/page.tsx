export default function SubscriptionsPage() {
  return (
    <div className="container py-16 px-4 md:px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Subscription Plans</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
          <p className="text-3xl font-bold mb-4">$29<span className="text-sm font-normal text-muted-foreground">/month</span></p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Feature 1
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Feature 2
            </li>
          </ul>
          <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md">
            Subscribe Now
          </button>
        </div>
        {/* Add more subscription plan cards as needed */}
      </div>
    </div>
  )
}