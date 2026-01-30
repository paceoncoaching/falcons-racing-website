import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Trophy, Users, Bike, Zap } from "lucide-react";
import eventsData from "@/data/events.json";
import resultsData from "@/data/results.json";

export default function Home() {
  const events = eventsData;
  const results = resultsData;

  // Sort upcoming events by date
  const upcomingEvents = events
    ?.filter(e => new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {/* peloton racing on road */}
          <img 
            src="/assets/Falcons9_1769686504214.jpg"
            alt="Cycling Peloton" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-40 bottom-0 top-auto"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8 mt-12 md:mt-24">
              Empowering the <br />
              <span className="text-primary">Next Generation</span> <br />
              of <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px white" }}>WA Cyclists.</span>
            </h1>
            <p className="font-body text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed border-l-4 border-primary pl-6">
              Western Australian based elite road cycling team. Dedicated to development, mentorship, and performance at the highest level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/riders">
                <button className="bg-primary hover:bg-primary/90 text-white font-display font-bold text-xl uppercase tracking-wider px-8 py-4 rounded skew-x-[-12deg] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                  <span className="skew-x-[12deg] inline-block">Meet the Team</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-display font-bold text-xl uppercase tracking-wider px-8 py-4 rounded skew-x-[-12deg] transition-all hover:scale-105 active:scale-95">
                  <span className="skew-x-[12deg] inline-block">Join Us</span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Trophy, 
                title: "Performance", 
                desc: "Competing at the elite level in the National Road Series and ProVelo Super League." 
              },
              { 
                icon: Users, 
                title: "Community", 
                desc: "Building a strong, inclusive cycling culture in Western Australia and beyond." 
              },
              { 
                icon: Bike, 
                title: "Development", 
                desc: "Providing pathways for emerging talent to reach their full potential." 
              },
              { 
                icon: Zap, 
                title: "Mentorship", 
                desc: "Experienced riders guiding the next generation of champions." 
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-8 border border-gray-100 hover:border-primary/20 bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-xl"
              >
                <div className="w-14 h-14 bg-black text-white group-hover:bg-primary transition-colors duration-300 rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wide mb-3">{item.title}</h3>
                <p className="font-body text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT HIGHLIGHTS / SPLIT SECTION */}
      <section className="py-0 bg-black text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-full min-h-[400px]">
            {/* cyclist celebrating victory */}
            <img 
              src="/assets/Falcons14_1769686504214.jpg"
              alt="Race Highlight" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </div>
          <div className="flex items-center p-12 lg:p-24 bg-zinc-900">
            <div>
              <span className="text-primary font-display font-bold text-xl tracking-widest uppercase mb-4 block">Latest Results</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl uppercase leading-tight mb-8">
                Staying <br /> 
                <span className="text-stroke text-transparent" style={{ WebkitTextStroke: "1px white" }}>Taloned</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                {results ? (
                  results.slice(0, 3).map((result) => (
                    <div key={result.id} className="flex gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-display font-bold text-xl uppercase mb-1">{result.title}</h4>
                        <p className="text-gray-400 text-sm">{result.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 italic">Loading results...</div>
                )}
              </div>

              <Link href="/events">
                <div className="inline-flex items-center gap-2 text-primary hover:text-white font-display font-bold uppercase tracking-widest cursor-pointer transition-colors group">
                  View All Results 
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING RACES */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-5xl uppercase text-black mb-2">Race Calendar</h2>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
            <Link href="/events">
              <button className="hidden md:block text-black hover:text-primary font-display font-bold uppercase tracking-wider transition-colors mt-4 md:mt-0">
                View Full Calendar &rarr;
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents && upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gray-100 px-4 py-2 rounded-bl-xl font-display font-bold text-gray-500 uppercase text-sm tracking-wider">
                    {event.type}
                  </div>
                  <div className="mb-6">
                    <span className="block font-display font-bold text-6xl text-gray-200 group-hover:text-primary/20 transition-colors">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="block font-body font-medium text-primary uppercase text-sm tracking-widest -mt-4 ml-1">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'long' })}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-gray-500 mb-4">{event.location}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                </div>
              ))
            ) : (
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm h-64 flex flex-col justify-center items-center text-center">
                  <p className="text-gray-400 font-display uppercase tracking-widest">No upcoming events scheduled</p>
                </div>
              ))
            )}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link href="/events">
              <button className="text-black hover:text-primary font-display font-bold uppercase tracking-wider transition-colors">
                View Full Calendar &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display font-bold text-5xl md:text-7xl uppercase text-white mb-8">
            Fly with the <span className="text-black">Falcons</span>
          </h2>
          <p className="font-body text-white/90 text-xl max-w-2xl mx-auto mb-12">
            Whether you're looking to race at the elite level, support the team as a partner, or join our community rides.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="bg-black text-white hover:bg-white hover:text-black font-display font-bold text-xl uppercase tracking-wider px-10 py-4 rounded skew-x-[-12deg] transition-all hover:shadow-xl">
                <span className="skew-x-[12deg] inline-block">Become a Partner</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}