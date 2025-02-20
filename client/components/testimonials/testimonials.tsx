import React from 'react'

const testimonials = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Testimonials
              </h2>
              <p className="text-gray-600 text-lg">
                We provide the tools, resources, and community support needed to
                turn innovative ideas into reality. Join us in shaping the
                future of technology and leadership.
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
                <div className="text-2xl font-bold text-[#448aff]">
                  Innovation Hub
                </div>
              </div>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default testimonials
