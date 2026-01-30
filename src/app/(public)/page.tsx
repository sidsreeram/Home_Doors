import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Sparkles, MapPin, Briefcase } from "lucide-react"

const team = [
  { id: 1, name: 'Siva Subramanian', role: 'Founder', bio: '20+ years involved in aluminium fabrication and design.', imageUrl: '/images/team1.png' },
  { id: 2, name: 'Sreeja Sivan', role: 'Managing Director', bio: 'Ensuring every project is delivered on time and within budget.', imageUrl: '/images/team2.jpeg' },
  { id: 3, name: 'Abhishek ', role: 'Senior Engineer', bio: 'Specialist in structural integrity and thermal efficiency.', imageUrl: '/images/team3.jpeg' },
  { id: 4, name: 'Anaswara', role: 'Verdhee', bio: 'Helping clients visualize their perfect space.', imageUrl: '/images/team4.jpeg' },
]

// Static mock data for careers
const JOBS: any[] = [
  // Add dummy jobs here if needed, keeping it empty for now as user provided no career info
]

export default function HomePage() {
  const jobs = JOBS

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center space-y-10 py-32 md:py-48 lg:py-56 text-center overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Architecture Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Premium Aluminium <br className="hidden sm:inline" />
            <span className="text-blue-400">Doors & Windows</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-300 sm:text-xl sm:leading-8">
            Elevate your space with our architectural-grade aluminium solutions. Designed for durability, engineered for style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products">
              <Button size="lg" className="h-12 px-8 text-lg">Explore Products</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg bg-transparent text-white border-white hover:bg-white hover:text-slate-950">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-2xl bg-secondary/20 border border-border">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Unmatched Durability</h3>
            <p className="text-muted-foreground">Built to withstand the toughest weather conditions with corrosion-resistant aluminium.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-2xl bg-secondary/20 border border-border">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Energy Efficient</h3>
            <p className="text-muted-foreground">Advanced thermal break technology to keep your home cool in summer and warm in winter.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-2xl bg-secondary/20 border border-border">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Modern Aesthetics</h3>
            <p className="text-muted-foreground">Sleek designs and slim profiles that maximize glass area and natural light.</p>
          </div>
        </div>
      </section>

      {/* Product Highlight / Categories */}
      <section className="bg-muted/30 py-24 border-y border-border/50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Collection</h2>
            <Link href="/products" className="group flex items-center font-medium text-primary">
              View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Categories */}
            {/* Categories */}
            {[
              { title: 'Windows', image: '/images/window.jpg' },
              { title: 'Doors', image: '/images/door.jpg' },
              { title: 'Facades', image: '/images/facade.jpg' },
              { title: 'Railings', image: '/images/railing.png' }
            ].map((cat) => (
              <Link key={cat.title} href={`/products?cat=${cat.title.toLowerCase()}`} className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-card border hover:shadow-lg transition-all">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">{cat.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">About Us & Team</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16 text-lg text-slate-600">
            Founded in 2014, Home Doors has evolved from a small workshop to a leading fabrication facility. Our mission is to bridge the gap between architectural vision and structural reality.
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-lg group-hover:border-blue-100 transition-colors">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-blue-600 font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Careers */}
      <section id="contact" className="py-24 bg-slate-950 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
              <p className="text-slate-400 mb-8">Ready to start your project? Get in touch for a consultation or quote.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-400" />
                  <input type="text" placeholder="Phone" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-400" />
                </div>
                <input type="email" placeholder="Email" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-400" />
                <textarea rows={4} placeholder="Project Details" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-400"></textarea>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none">Send Message</Button>
              </form>
            </div>

            <div id="careers" className="bg-slate-900 p-8 rounded-lg border border-slate-800 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
              <p className="text-slate-400 mb-6">We are always looking for skilled talent.</p>
              <div className="space-y-4">
                {jobs.map(job => (
                  <div key={job.id} className="border-b border-slate-800 pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{job.title}</h4>
                        <span className="text-xs text-blue-400 uppercase">{job.type} &bull; {job.location}</span>
                      </div>
                      <Button size="sm" variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">Apply</Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex items-center text-slate-300 mb-2"><MapPin className="w-5 h-5 mr-3 text-blue-400" /> Nemmara Road Pittupeedika Koduvayur Palakkad-678501 Kerala <br /> Also Service In Tamilnadu</div>
                <div className="flex items-center text-slate-300"><Briefcase className="w-5 h-5 mr-3 text-blue-400" /> homedoors73@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
