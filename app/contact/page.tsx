'use client'

import { Mail, MapPin, Linkedin, Github, GraduationCap } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 mb-12">
            I'm always interested in research collaborations, MSc opportunities, and discussions about Natural Language Processing, low-resource languages, and culturally grounded AI
          </p>

          {/* Opportunity Section */}
          <div className="bg-purple text-white p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Open to Opportunities</h2>
            <p className="mb-4">
              I am actively seeking <strong>Master's programs</strong> and <strong>research positions within academic and industry labs</strong>. 
              My research interests include:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 mb-4">
              <li className="flex items-center gap-2">• Natural Language Processing (NLP)</li>
              <li className="flex items-center gap-2">• AI Fairness & Bias Mitigation</li>
              <li className="flex items-center gap-2">• Federated Learning</li>
              <li className="flex items-center gap-2">• Representation Learning</li>
              <li className="flex items-center gap-2">• Automatic Speech Recognition (ASR)</li>
              <li className="flex items-center gap-2">• Reinforcement Learning</li>
              <li className="flex items-center gap-2">• Computer Vision</li>
              <li className="flex items-center gap-2">• AI for Healthcare</li>
            </ul>
            <p className="text-purple-100">
              I bring hands-on research experience, publication record, and a commitment to building ethical AI systems 
              that serve underrepresented communities. I would be a valuable contributor to research teams working on 
              culturally grounded AI and AI for social good.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <a 
                href="mailto:ankelioche@gmail.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-purple transition-colors group"
              >
                <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-purple group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">ankelioche@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Nigerian, based in Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a 
                href="https://scholar.google.com/citations?hl=en&user=XAlPAEsAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-purple text-white rounded-lg hover:bg-purple-dark transition-colors font-medium"
              >
                <GraduationCap size={20} />
                Google Scholar
              </a>
              <a 
                href="https://linkedin.com/in/oche-ankeli-71001a9b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple text-purple rounded-lg hover:bg-purple hover:text-white transition-colors font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Tripp808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple text-purple rounded-lg hover:bg-purple hover:text-white transition-colors font-medium"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          {/* Additional Note */}
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <p className="text-gray-700 text-center">
              Whether you're interested in <strong>research collaboration</strong>, have <strong>MSc/PhD opportunities</strong>, 
              or would like to discuss <strong>NLP, low-resource languages, and culturally grounded AI</strong>, I'd love to hear from you!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

