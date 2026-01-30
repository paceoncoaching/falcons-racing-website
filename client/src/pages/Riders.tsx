import { PageHeader } from "@/components/PageHeader";
import ridersData from "@/data/riders.json";
import { motion } from "framer-motion";
import { Instagram, Activity } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Rider } from "@shared/schema";

// cycling team group photo
const HERO_IMAGE = "/assets/riders_header_v2.jpg";

export default function Riders() {
  const riders = ridersData;
  const isLoading = false;

  // Group riders by category
  const categories = ["Elite", "U23", "U19", "Development", "Alumni/Mentor"];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="The Team" subtitle="Meet the athletes representing Falcons Pedal Mafia Racing Team" image={HERO_IMAGE} />
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-[3/4] bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="The Team" 
        subtitle="Meet the athletes representing Falcons Pedal Mafia Racing Team in the ProVelo Super League" 
        image={HERO_IMAGE} 
      />

      <div className="container mx-auto px-4">
        <section className="py-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-display font-bold text-4xl uppercase tracking-wider text-black">2026 Squad</h2>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {riders?.map((rider) => (
              <RiderCard key={rider.id} rider={rider} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function RiderCard({ rider }: { rider: Rider }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative cursor-pointer"
        >
          {/* Card Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/20">
            {rider.imageUrl ? (
              <img 
                src={rider.imageUrl} 
                alt={rider.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 grayscale group-hover:grayscale-0 object-top scale-110 sm:object-center"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                <span className="font-display text-xl uppercase">No Image</span>
              </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
            
            {/* Content positioned at bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="overflow-hidden">
                <p className="font-display font-bold text-primary tracking-widest text-sm mb-1">
                  {rider.specialization}
                </p>
                <h3 className="font-display font-bold text-3xl uppercase tracking-wide leading-none mb-1 group-hover:text-white transition-colors">
                  {rider.name}
                </h3>
                <div className="h-1 w-0 group-hover:w-12 bg-primary transition-all duration-500 ease-out mt-2"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-white border-none text-black max-h-[90vh] sm:max-h-none overflow-y-auto sm:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="h-64 md:h-full relative bg-gray-100 overflow-hidden">
            {rider.imageUrl && (
              <img 
                src={rider.imageUrl} 
                alt={rider.name} 
                className="absolute inset-0 w-full h-full object-contain md:object-cover bg-gray-100"
              />
            )}
          </div>
          <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white overflow-y-auto">
            <div className="inline-block bg-primary px-3 py-1 mb-4 sm:mb-6 self-start skew-x-[-12deg]">
              <span className="skew-x-[12deg] font-display font-bold uppercase tracking-widest text-white text-[10px] sm:text-xs">
                {rider.category} • {rider.specialization}
              </span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase leading-none mb-4 sm:mb-6">
              {rider.name}
            </h2>
            
            <p className="font-body text-gray-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
              {rider.bio}
            </p>
            
            {rider.achievements && rider.achievements.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h4 className="font-display font-bold text-lg uppercase mb-4 text-black border-b border-gray-100 pb-2">Key Achievements</h4>
                <ul className="space-y-2">
                  {rider.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-body text-gray-600 text-sm">
                      <TrophyIcon className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex gap-4 mt-auto pt-4 sm:pt-6 border-t border-gray-100">
              {rider.instagram && (
                <a href={rider.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-display font-bold uppercase tracking-wider text-xs sm:text-sm">
                  <Instagram size={18} /> Instagram
                </a>
              )}
              {rider.strava && (
                <a href={rider.strava} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#fc4c02] transition-colors font-display font-bold uppercase tracking-wider text-xs sm:text-sm">
                  <Activity size={18} /> Strava
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}