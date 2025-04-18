import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      {/* New Header */}
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-screen-lg flex justify-between items-center p-3 text-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {/* Placeholder for Logo SVG */}
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3663 5.99324C13.8243 5.28956 14.0756 3.1872 11.4355 3.08842C9.05798 3.07478 9.52902 6.2557 8.15463 7.52811C6.78024 8.80052 4.58839 7.50765 3.5514 9.79208C2.5144 12.0765 5.45798 13.3801 6.16446 14.7738C6.87094 16.1676 5.52375 19.3123 8.25676 20.4603C10.9898 21.6083 12.1966 18.3598 13.4645 16.7908C14.7325 15.2219 17.0941 15.5507 18.9101 15.1493C20.726 14.748 22.8453 12.1738 21.6044 8.85982C20.3636 5.54582 16.9083 6.69692 15.3663 5.99324Z" fill="black"/>
</svg>

            <span className="text-lg">Somantic</span>
          </Link>

          {/* Desktop Navigation - Href changed to # */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="text-foreground/60 hover:text-foreground">Product</Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground">Use Cases</Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground">Pricing</Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground">Docs</Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground">Company</Link>
          </div>

          {/* Desktop Auth Buttons - Removed Link/asChild */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">
              Sign up
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-4">
                  {/* Mobile Navigation - Href changed to # */}
                  <Link href="#" className="text-foreground hover:underline">Product</Link>
                  <Link href="#" className="text-foreground hover:underline">Use Cases</Link>
                  <Link href="#" className="text-foreground hover:underline">Pricing</Link>
                  <Link href="#" className="text-foreground hover:underline">Docs</Link>
                  <Link href="#" className="text-foreground hover:underline">Company</Link>
                  <hr className="my-2"/>
                  {/* Mobile Auth Buttons - Removed Link/asChild */}
                  <Button variant="outline">
                    Login
                  </Button>
                  <Button>
                    Sign up
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      {/* End New Header */}

      {/* Hero Section Content - Needs to be added */}
      <div className="flex-1 flex flex-col gap-6 max-w-6xl px-3 w-full items-center justify-center text-center py-8 md:py-24">
         <h1 className="text-5xl md:text-5xl font-semibold leading-tight tracking-tighter ">Analytics for <span className="italic">generative products.</span></h1>
         <p className="text-lg text-foreground/80 max-w-xl">
           Somantic turns language into data so AI teams can see what's broken, what users want, and what to build next.
         </p>
         <Button size="lg" asChild className="mt-4 text-md py-6 px-6">
           <Link href="/start">Start for free →</Link>
         </Button>

         {/* Added Hero Image */}
         <div className="p-0 mt-12 w-full max-w-6xl mx-auto rounded-lg border border-foreground/10 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] overflow-hidden">
           <Image
             src="/images/hero.png" // Assumes hero.png is in the /public directory
             alt="Somantic Application Screenshot"
             width={2000} // Adjust width as needed
             height={500} // Adjust height as needed
             className="w-full h-auto"
           />
         </div>
       </div>
      {/* End Hero Section Content */}

      {/* Added Features Section */}
      <section className="w-full max-w-6xl px-3 py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-24">
          You&apos;ve shipped your AI, but now you&apos;re flying blind.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          {/* Column 1 */}
          <div>
            <p className="text-4xl mb-4">🧨</p>
            <h3 className="text-2xl font-semibold mb-4">Hallucinations are hurting your brand.</h3>
            <p className="text-foreground/70">
              Your AI is saying things you'd never approve. Vague replies, made-up info, dead ends. And you're not catching them until it's too late.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <p className="text-4xl mb-4">📉</p>
            <h3 className="text-2xl font-semibold mb-4">You have no idea what to fix next.</h3>
            <p className="text-foreground/70">
              You're shipping prompts and debating what's broken but you're flying blind. No failure metrics. No usage signal. No clarity.
            </p>
          </div>
          {/* Column 3 */}
          <div>
            <p className="text-4xl mb-4">💡</p>
            <h3 className="text-2xl font-semibold mb-4">You're missing what users actually want.</h3>
            <p className="text-foreground/70">
              They're telling your AI what they need: new features, edge cases, fixes. That's roadmap gold, and you're throwing it away.
            </p>
          </div>
        </div>
      </section>
      {/* End Features Section */}

     

      {/* How It Works Section 1 */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-3">
          {/* Text Column - Added md:pr-8 */}
          <div className="flex flex-col gap-4 md:pr-16">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Effortlessly navigate thousands of sessions.
            </h3>
            <p className="text-lg text-muted-foreground">
              Stop spending hours tinkering with your clumsy BI tool. Somantic is purpose-built for navigating and making sense of conversational data.
            </p>
          </div>
          {/* Visual Column - Added Styling */}
          <div className="rounded-lg border border-foreground/10 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] overflow-hidden">
            <Image src="/images/convos.png" alt="Somantic Conversations Screenshot" width={2000} height={2000} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* How It Works Section 2 */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-3">
          {/* Visual Column - Added Styling */}
          <div className="rounded-lg border border-foreground/10 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] overflow-hidden order-last md:order-first">
            <Image src="/images/events.png" alt="Somantic Events Screenshot" width={2000} height={2000} className="w-full h-auto" />
          </div>
          {/* Text Column - Added md:pl-8 */}
          <div className="flex flex-col gap-4 md:pl-16">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Create semantic events on the fly.
            </h3>
            <p className="text-lg text-muted-foreground">
              Tag any message, response or conversation to create and track similar occurrences. Tag intents, issues and turn your text into actionable data.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section 3 */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-3">
          {/* Text Column - Revised Copy & Added md:pr-8 */}
          <div className="flex flex-col gap-4 md:pr-16">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Analyze conversations like structured data.
            </h3>
            <p className="text-lg text-muted-foreground">
            Get the clarity you're used to and confidently improve your AI. Somantic lets you quantify issues, track user intents with familiar breakdowns and funnels, and monitor impact. 
            </p>
          </div>
          {/* Visual Column - Replaced Placeholder with Image & Styling */}
          <div className="rounded-lg border border-foreground/10 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] overflow-hidden">
            <Image src="/images/analyze.png" alt="Somantic Analysis Screenshot" width={2000} height={2000} className="w-full h-auto" />
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="w-full bg-muted py-16 md:py-24">
        <div className="container mx-auto max-w-3xl text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Turn your logs into actionable data in minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            LLM Ops is for fixing bugs, Somantic helps you build AI people actually love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              See what&apos;s failing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Prioritize what matters
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Stop guessing
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild>
              <Link href="/get-started">Get started →</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
      </div>
      </section>
      {/* End CTA Section */}

      {/* New Footer */}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
        <div className="flex items-center gap-2">
           {/* Logo SVG */}
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3663 5.99324C13.8243 5.28956 14.0756 3.1872 11.4355 3.08842C9.05798 3.07478 9.52902 6.2557 8.15463 7.52811C6.78024 8.80052 4.58839 7.50765 3.5514 9.79208C2.5144 12.0765 5.45798 13.3801 6.16446 14.7738C6.87094 16.1676 5.52375 19.3123 8.25676 20.4603C10.9898 21.6083 12.1966 18.3598 13.4645 16.7908C14.7325 15.2219 17.0941 15.5507 18.9101 15.1493C20.726 14.748 22.8453 12.1738 21.6044 8.85982C20.3636 5.54582 16.9083 6.69692 15.3663 5.99324Z" fill="currentColor"/>
            </svg>
           <span>Somantic</span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Somantic. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
