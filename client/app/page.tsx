// app/page.tsx
import Header from "@/components/header/header";
import { ArrowRight, Code, Globe, Lightbulb, Telescope, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Vision Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 mt-24 px-6 py-12 gap-8">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-7xl text-[#448aff] font-bold w-full max-w-xl">
            Empowering Future Innovators & Leaders
          </h3>
          <p className="text-gray-600 text-lg max-w-xl">
            Building tomorrow&apos;s technology leaders through innovation, education, and collaboration.
          </p>
          <button className="flex items-center gap-2 bg-[#448aff] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="text-5xl">
          <div className="bg-white rounded-3xl flex items-center justify-center py-32 shadow-xl uppercase font-bold text-[#448aff]/90">
            Vision
          </div>
        </div>
      </section>

       
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="w-8 h-8" />}
              title="Global Reach"
              description="Connect with innovators and leaders from around the world"
            />
            <FeatureCard 
              icon={<Code className="w-8 h-8" />}
              title="Cutting-edge Technology"
              description="Access to the latest tools and technologies in the industry"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Community Driven"
              description="Join a thriving community of like-minded professionals"
            />
          </div>
        </div>
      </section>

       
      <section className="px-6 py-24 bg-[#448aff]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="10K+" label="Active Users" />
            <StatCard number="500+" label="Projects Completed" />
            <StatCard number="150+" label="Global Partners" />
            <StatCard number="50+" label="Countries Reached" />
          </div>
        </div>
      </section>

       
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Driving Innovation Through Technology
              </h2>
              <p className="text-gray-600 text-lg">
                We provide the tools, resources, and community support needed to turn innovative ideas into reality. Join us in shaping the future of technology and leadership.
              </p>
              <button className="flex items-center gap-2 bg-[#448aff] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#448aff]/5 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <Lightbulb className="w-16 h-16 text-[#448aff]" />
              </div>
              <div className="bg-[#448aff]/5 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <Telescope className="w-16 h-16 text-[#448aff]" />
              </div>
              <div className="bg-[#448aff]/10 rounded-2xl p-6 aspect-square flex items-center justify-center col-span-2">
                <div className="text-2xl font-bold text-[#448aff]">Innovation Hub</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">About</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Resources</h3>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Connect</h3>
            <ul className="space-y-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for feature cards
const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-[#448aff]/5 rounded-2xl p-8 space-y-4">
    <div className="text-[#448aff]">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Component for statistics
const StatCard = ({ 
  number, 
  label 
}: { 
  number: string;
  label: string;
}) => (
  <div className="space-y-2">
    <div className="text-4xl font-bold text-[#448aff]">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);