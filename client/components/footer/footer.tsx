import React from 'react'

const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer
