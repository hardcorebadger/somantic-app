'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function StartPage() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !company || !useCase) {
      setError('Please fill out all fields.');
      setIsLoading(false);
      return;
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        setIsLoading(false);
        return;
    }

    try {
      const response = await fetch('/api/early-access-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, company, useCase }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong.');
      }

      setSubmitted(true);

    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to submit request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12">
       {/* Logo Link */}
       <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 font-semibold">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3663 5.99324C13.8243 5.28956 14.0756 3.1872 11.4355 3.08842C9.05798 3.07478 9.52902 6.2557 8.15463 7.52811C6.78024 8.80052 4.58839 7.50765 3.5514 9.79208C2.5144 12.0765 5.45798 13.3801 6.16446 14.7738C6.87094 16.1676 5.52375 19.3123 8.25676 20.4603C10.9898 21.6083 12.1966 18.3598 13.4645 16.7908C14.7325 15.2219 17.0941 15.5507 18.9101 15.1493C20.726 14.748 22.8453 12.1738 21.6044 8.85982C20.3636 5.54582 16.9083 6.69692 15.3663 5.99324Z" fill="currentColor"/>
          </svg>
          <span className="text-lg">Somantic</span>
        </Link>

      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Join the Early Access Program</h1>
          <p className="mt-2 text-muted-foreground">
            Somantic is currently in limited early access. We&apos;re looking for AI-native teams to become design partners and shape the future of AI analytics.
          </p>
        </div>

        {submitted ? (
          <div className="text-center p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-semibold">Thank You!</h2>
            <p className="mt-2 text-muted-foreground">We&apos;ve received your request and will be in touch soon.</p>
            <Button variant="outline" asChild className="mt-4">
               <Link href="/">Back to Homepage</Link>
             </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company Inc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="use-case">What is your AI feature or product / use case?</Label>
              <Textarea
                id="use-case"
                placeholder="Describe how you're using AI (e.g., customer support chatbot, internal knowledge base search, content generation...)"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                required
                rows={4}
                disabled={isLoading}
              />
            </div>
            {error && (
                <p className="text-sm text-destructive">{error}</p>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Request Early Access'
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
} 