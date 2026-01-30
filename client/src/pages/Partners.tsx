import { PageHeader } from "@/components/PageHeader";
import { useSponsors } from "@/hooks/use-content";

// bike parts/mechanic shop
const HERO_IMAGE = "/assets/partners_hero.jpg";

export default function Partners() {
  const { data: sponsors, isLoading } = useSponsors();

  const tiers = ["Title", "Gold", "Silver", "Partner"];

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Our Partners" 
        subtitle="The brands powering our performance" 
        image={HERO_IMAGE} 
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="font-body text-xl text-gray-600 leading-relaxed">
            Falcons Pedal Mafia Racing is proud to be supported by industry-leading brands who share our commitment to excellence, innovation, and the development of cycling in Western Australia.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-20">Loading partners...</div>
        ) : (
          <div className="space-y-20">
            {tiers.map((tier) => {
              const tierSponsors = sponsors?.filter(s => s.tier === tier);
              if (!tierSponsors?.length) return null;

              // Adjust grid based on tier prominence
              const gridClass = tier === "Title" 
                ? "grid-cols-1 md:grid-cols-1 max-w-2xl" 
                : tier === "Gold" 
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl" 
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

              const logoSizeClass = tier === "Title" ? "h-32 md:h-48" : tier === "Gold" ? "h-24 md:h-32" : "h-16 md:h-20";

              return (
                <div key={tier} className="flex flex-col items-center">
                  <h3 className="font-display font-bold text-2xl uppercase tracking-widest text-gray-300 mb-8 border-b border-gray-100 pb-2 px-12">
                    {tier} Partners
                  </h3>
                  <div className={`grid ${gridClass} gap-12 w-full mx-auto items-center justify-items-center`}>
                    {tierSponsors.map((sponsor) => (
                      <a 
                        key={sponsor.id} 
                        href={sponsor.websiteUrl || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center text-center w-full"
                      >
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 w-full flex items-center justify-center">
                          <img 
                            src={sponsor.logoUrl} 
                            alt={sponsor.name} 
                            className={`${logoSizeClass} w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100`} 
                          />
                        </div>
                        {sponsor.description && tier !== "Partner" && tier !== "Silver" && (
                          <p className="mt-4 text-gray-500 text-sm max-w-xs">{sponsor.description}</p>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-32 bg-black text-white rounded-2xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">Become a Partner</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Join us in supporting the next generation of Western Australian cyclists. We offer custom partnership packages tailored to your brand's goals.
            </p>
            <a href="/contact">
              <button className="bg-primary hover:bg-white hover:text-black text-white font-display font-bold text-xl uppercase tracking-wider px-10 py-4 rounded skew-x-[-12deg] transition-all">
                <span className="skew-x-[12deg] inline-block">Get in Touch</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
