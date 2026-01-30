import { PageHeader } from "@/components/PageHeader";
import { useEvents, useResults } from "@/hooks/use-content";
import { format } from "date-fns";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// team photo
const HERO_IMAGE = "/assets/DSCF2235_1769694327841.jpg";

export default function Events() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'results'>('upcoming');
  const { data: events, isLoading: eventsLoading } = useEvents();
  const { data: results, isLoading: resultsLoading } = useResults();

  const sortedEvents = events
    ?.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const sortedResults = results
    ?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Race Center" 
        subtitle="Follow our journey through the season" 
        image={HERO_IMAGE} 
      />

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-2 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={cn(
              "px-8 py-3 rounded-lg font-display font-bold uppercase tracking-wider text-lg transition-all",
              activeTab === 'upcoming' ? "bg-primary text-white shadow-lg" : "hover:bg-gray-100 text-gray-500"
            )}
          >
            Upcoming Races
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={cn(
              "px-8 py-3 rounded-lg font-display font-bold uppercase tracking-wider text-lg transition-all",
              activeTab === 'results' ? "bg-primary text-white shadow-lg" : "hover:bg-gray-100 text-gray-500"
            )}
          >
            Recent Results
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {activeTab === 'upcoming' ? (
          <div className="space-y-6">
            <h2 className="sr-only">Upcoming Events</h2>
            {eventsLoading ? (
              <p>Loading events...</p>
            ) : sortedEvents?.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <p className="font-display text-xl text-gray-400">No upcoming races scheduled</p>
              </div>
            ) : (
              sortedEvents?.map((event) => (
                <div key={event.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group">
                  <div className="bg-black text-white p-8 flex flex-col items-center justify-center min-w-[200px] border-r border-gray-100 group-hover:bg-primary transition-colors duration-300">
                    <span className="text-5xl font-display font-bold">{new Date(event.date).getDate()}</span>
                    <span className="text-sm font-display font-bold uppercase tracking-widest">{format(new Date(event.date), 'MMMM yyyy')}</span>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded font-display font-bold text-xs uppercase tracking-wider">
                        {event.type}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin size={16} />
                        {event.location}
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-3xl uppercase mb-3 text-black group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-gray-600 font-body leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resultsLoading ? (
              <p>Loading results...</p>
            ) : sortedResults?.length === 0 ? (
              <p className="col-span-2 text-center text-gray-500">No results found</p>
            ) : (
              sortedResults?.map((result) => (
                <div key={result.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                  {result.imageUrl && (
                    <div className="h-48 overflow-hidden">
                      <img src={result.imageUrl} alt={result.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  )}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-display font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                        <Trophy size={16} /> {result.category || "Result"}
                      </span>
                      <span className="text-gray-400 text-sm">{format(new Date(result.date), 'MMM d, yyyy')}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl uppercase mb-3 leading-tight">{result.title}</h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 flex-1">{result.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
