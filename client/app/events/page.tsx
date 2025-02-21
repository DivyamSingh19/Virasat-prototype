import Header from "@/components/header/header";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="events" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Upcoming Events
                </h2>
                <p className="text-gray-600 text-lg">
                  Discover the latest events, workshops, and meetups tailored for learning and networking.
                </p>
              </div>
              <Link 
                href="/events"
                className="inline-flex items-center gap-2 bg-[#448aff] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                View All Events <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <EventCard 
                title="Tech Conference 2025"
                location="San Francisco, CA"
                date="March 15, 2025"
              />
              <EventCard 
                title="AI & ML Workshop"
                location="Online"
                date="April 10, 2025"
              />
              <EventCard 
                title="Startup Pitch Fest"
                location="New York, NY"
                date="May 5, 2025"
              />
              <Link 
                href="/events" 
                className="bg-[#448aff]/10 rounded-2xl p-6 flex items-center justify-center hover:bg-[#448aff]/15 transition-colors"
              >
                <div className="text-lg font-semibold text-[#448aff] flex items-center gap-2">
                  View More Events <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const EventCard = ({ title, location, date }: { title: string; location: string; date: string }) => (
  <div className="bg-[#448aff]/5 rounded-2xl p-6 flex flex-col space-y-3 hover:shadow-lg transition-all">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
      <CalendarIcon className="w-6 h-6 text-[#448aff]" />
    </div>
    <span className="inline-block bg-[#448aff]/10 text-[#448aff] px-3 py-1 rounded-full text-sm">
      {date}
    </span>
  </div>
);
