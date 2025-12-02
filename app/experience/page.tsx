'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Experience & Projects</h1>
          <p className="text-xl text-gray-600 mb-12">
            Professional experience and selected projects demonstrating AI applications for social impact
          </p>

          {/* Professional Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple mb-2">Software Engineering & Marketing Intern</h3>
                    <p className="text-gray-600">Wami Agro Ltd (Ghana)</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">May - Aug 2025</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Developed farm management systems supporting 15,000+ farmers in sustainable agricultural practices.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Designed data-driven software features for fair trade market access and agricultural education.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple mb-2">Consumer Insights Data Analytics Intern</h3>
                    <p className="text-gray-600">Beats by Dre (Apple)</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">Sep - Nov 2024</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Conducted large-scale sentiment analysis on thousands of Amazon reviews using Python (Pandas, NumPy, TextBlob), identifying key consumer pain points.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Built ETL pipelines with Python and SQL and performed competitive benchmarking of Beats Pill 2024 against JBL and Bose to support product decisions.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple mb-2">Senior Research Intern</h3>
                    <p className="text-gray-600">TOORLY, Hong Kong</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">Nov 2023 - Jul 2024</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Managed global music datasets, designing analytics dashboards and KPIs to identify market trends.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Partnered with A&R teams on data-driven expansion strategies, boosting growth by 22%.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Selected Projects</h2>
            <p className="text-sm text-purple mb-8 italic">
              * Additional projects and implementations are continuously being added to my portfolio
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-purple mb-4">Iyacare</h3>
                <p className="text-gray-700 mb-4">
                  IoT-driven maternal healthcare platform integrating AI analytics, predictive modeling, and blockchain 
                  health records to reduce maternal mortality in underserved communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple text-xs rounded-full">Final Year Project</span>
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple text-xs rounded-full">AI for Healthcare</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-purple mb-4">OpenVision</h3>
                <p className="text-gray-700 mb-4">
                  TensorFlow/OpenCV solution converting images to Swahili audio descriptions for visually impaired users in East Africa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple text-xs rounded-full">Accessibility</span>
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple text-xs rounded-full">Computer Vision</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-purple mb-4">MediChatbot</h3>
                <p className="text-gray-700 mb-4">
                  Healthcare chatbot using Hugging Face Transformers deployed for medical information access in low-resource settings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple text-xs rounded-full">NLP</span>
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple text-xs rounded-full">Healthcare AI</span>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership & Service</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-4 rounded-r-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-2">United Nations Millennium Fellowship</h3>
                <p className="text-gray-600">Led community technology project aligned with UN Sustainable Development Goals</p>
              </div>

              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-4 rounded-r-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Student Representative</h3>
                <p className="text-gray-600">Nigerian Students Association and Association of Nigerians in Rwanda</p>
              </div>

              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-4 rounded-r-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-2">British Council SoCreative Fellow</h3>
                <p className="text-gray-600">Completed fellowship program focused on creative entrepreneurship in African creative industries and innovation for the creative economy</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

