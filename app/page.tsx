import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Premium Products & Subscriptions
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover our curated collection of products and flexible subscription plans.
              Start your journey with us today.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Browse Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/subscriptions">
                  View Subscriptions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/5 rounded-full">
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Flexible Subscriptions</h3>
              <p className="text-muted-foreground">
                Choose from monthly, quarterly, or annual plans that suit your needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/5 rounded-full">
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 1 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 17 4 4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Easy Management</h3>
              <p className="text-muted-foreground">
                Manage your subscriptions and orders from a single dashboard.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/5 rounded-full">
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple payment options with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}