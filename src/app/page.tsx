import Image from "next/image";
import Link from "next/link";
import { Binoculars, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
        <nav className="hidden sm:flex items-center rounded-full bg-gray-100/80 backdrop-blur-xl pl-5 pr-2 py-2 min-w-[540px]">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-black no-underline">
            <Binoculars size={28} />
            <span>SaleSpy</span>
          </Link>
          <div className="flex-1"></div>
          <div className="flex items-center gap-1">
            <Link href="/pricing" className="text-base font-semibold text-black px-4 py-2.5 rounded-full hover:bg-black/5 transition-colors h-11 inline-flex items-center">
              Pricing
            </Link>
            <Link href="/login" className="text-base font-semibold text-black px-4 py-2.5 rounded-full hover:bg-black/5 transition-colors h-11 inline-flex items-center">
              Log in
            </Link>
          </div>
        </nav>
        
        {/* Mobile Nav */}
        <nav className="sm:hidden w-full rounded-[28px] bg-gray-100/80 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden">
          <div className="flex items-center justify-between pl-5 pr-3 py-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-black no-underline">
              <Binoculars size={28} />
              <span>SaleSpy</span>
            </Link>
            <button className="size-11 rounded-full inline-flex items-center justify-center hover:bg-black/5 transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative bg-white pt-32 sm:pt-40 pb-12 sm:pb-16 px-6 text-center">
        <h1 className="hero-in text-5xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-gray-950">
          See which <span className="whitespace-nowrap">Etsy listings</span> <span>actually sell</span>
        </h1>
        <p className="hero-in-d1 mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
          Track competitor sales by listing. Find new product ideas, spot trends, and see what actually sells <span className="whitespace-nowrap">in your niche.</span>
        </p>
        <div className="hero-in-d2 mt-8 flex items-start justify-center gap-3">
          <div>
            <Link href="/sign-up" className="inline-flex h-11 min-w-[12.75rem] items-center justify-center rounded-full bg-black px-5 text-base font-semibold text-white no-underline transition-all hover:bg-gray-800 active:scale-95">
              Start for free
            </Link>
            <p className="text-gray-500 text-sm mt-1.5">No credit card required</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-in-d3 mx-auto max-w-[834px] px-4 pb-32 sm:px-6 sm:pb-36 lg:pb-40">
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          <Image 
            src="/hero-dashboard-top-selling-listings.webp" 
            alt="SaleSpy dashboard" 
            width={1668} 
            height={1000}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>

      {/* Product Analytics Section */}
      <section className="bg-white mx-auto max-w-7xl px-4 pb-32 sm:px-6 sm:pb-36 lg:px-8 lg:pb-40">
        <div className="overflow-hidden rounded-[2rem] bg-stone-100">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="px-6 pt-16 sm:px-10 sm:pt-20 lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:pl-14 lg:pr-8 lg:py-20">
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold leading-none tracking-tight text-gray-950 sm:text-5xl">Find winning products across shops</h2>
                <p className="mt-8 text-lg leading-relaxed text-gray-500 sm:text-xl">Track product groups across multiple Etsy shops and find which listings lead your niche. Compare winners, spot trends, and uncover demand faster.</p>
              </div>
            </div>
            <figure className="px-6 sm:px-10 lg:col-span-7 lg:self-end lg:px-0 lg:pr-6">
              <div className="overflow-hidden rounded-t-3xl bg-stone-100 p-px">
                <Image 
                  src="/product-analytics.webp" 
                  alt="Product analytics view" 
                  width={1400} 
                  height={900}
                  className="block h-auto w-full object-cover object-top"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Market Tracker Section */}
      <section className="bg-white mx-auto max-w-7xl px-4 pb-32 sm:px-6 sm:pb-36 lg:px-8 lg:pb-40">
        <div className="overflow-hidden rounded-[2rem] bg-stone-100 px-6 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-4xl font-bold leading-none tracking-tight text-gray-950 sm:text-5xl">Know whether it's your shop or <span className="whitespace-nowrap">the market</span></h2>
            <p className="mt-8 text-lg leading-relaxed text-gray-500 sm:text-xl">Track a niche over time and see whether demand is rising, slowing down, or shifting across competitors. Compare market trends, share, and top sellers in one view.</p>
          </div>
          <figure className="mx-auto mt-12 max-w-6xl sm:mt-14 lg:mt-16">
            <div className="overflow-hidden rounded-t-3xl bg-stone-100 p-px">
              <Image 
                src="/market-tracker.webp" 
                alt="Market tracker view" 
                width={1400} 
                height={900}
                className="block w-full h-auto"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white mx-auto max-w-7xl px-4 pb-32 sm:px-6 sm:pb-36 lg:px-8 lg:pb-40">
        <div className="overflow-hidden rounded-[2rem] bg-stone-100 px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-none tracking-tight text-gray-950 sm:text-5xl">See what your competitors <span className="block">actually sell</span></h2>
            <div className="mt-10">
              <Link href="/sign-up" className="inline-flex h-11 min-w-[12.75rem] items-center justify-center rounded-full bg-black px-5 text-base font-semibold text-white no-underline transition-all hover:bg-gray-800 active:scale-95">
                Start for free
              </Link>
              <p className="mt-1.5 text-sm text-gray-500">No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pb-8">
        <div className="mx-auto max-w-6xl px-6 pt-16">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-white no-underline">
                <Binoculars size={28} />
                <span>SaleSpy</span>
              </Link>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">Competitor tracking for Etsy sellers.</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 sm:justify-end">
              <li><Link href="/pricing" className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/sign-up" className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">Sign up</Link></li>
              <li><Link href="/contact" className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="mt-16 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-sm text-gray-400">© 2026 SaleSpy. All rights reserved</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">Privacy policy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
