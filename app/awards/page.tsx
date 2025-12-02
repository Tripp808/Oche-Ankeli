'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Awards() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Honors & Awards</h1>
          <p className="text-xl text-gray-600 mb-12">
            Recognition for contributions to AI research, academic excellence, and community impact
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">NeurIPS 2025 Spotlight Talk</h3>
              <p className="text-gray-600 mb-2">
                Selected for spotlight talk at CLRLC-LLMs workshop (acceptance rate &lt;10%)
              </p>
              <p className="text-sm text-purple">Research Excellence</p>
            </div>

            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">First Class Honors</h3>
              <p className="text-gray-600 mb-2">
                Top 5% of cohort at African Leadership University
              </p>
              <p className="text-sm text-purple">Academic Excellence</p>
            </div>

            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Kaggle Contest Winner</h3>
              <p className="text-gray-600 mb-2">
                Time Series Forecasting — Air Quality Prediction
              </p>
              <p className="text-sm text-purple">Data Science Competition</p>
            </div>

            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">CodeXtreme Hackathon</h3>
              <p className="text-gray-600 mb-2">
                Top 10 finalist out of 400+ participants
              </p>
              <p className="text-sm text-purple">Technical Innovation</p>
            </div>

            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">UN Millennium Fellowship</h3>
              <p className="text-gray-600 mb-2">
                Led community technology project aligned with UN Sustainable Development Goals
              </p>
              <p className="text-sm text-purple">Leadership & Social Impact</p>
            </div>

            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">British Council SoCreative Fellow</h3>
              <p className="text-gray-600 mb-2">
                Fellowship in creative entrepreneurship and innovation for African creative industries
              </p>
              <p className="text-sm text-purple">Innovation & Entrepreneurship</p>
            </div>

            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Machine Learning Specialization</h3>
              <p className="text-gray-600 mb-2">
                Coursera certification from DeepLearning.AI
              </p>
              <p className="text-sm text-purple">Professional Certification</p>
            </div>

            <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2">ALU Awards</h3>
              <p className="text-gray-600 mb-2">
                Nominations: Exemplary Volunteer Award and Moonshot Award for innovation impact
              </p>
              <p className="text-sm text-purple">University Recognition</p>
            </div>
          </div>

          {/* Education Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple mb-2">Bachelor of Science in Software Engineering</h3>
                  <p className="text-gray-600 mb-2">Specialization: Machine Learning & AI</p>
                  <p className="text-gray-700">African Leadership University, Kigali, Rwanda</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">2022 - 2025</span>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Honors:</strong> First Class Honors, Top 5% of 120+ students
                </p>
                <p className="text-gray-700">
                  <strong>Key Coursework:</strong> Mathematics for Machine Learning (Linear Algebra, Calculus, Probability & Statistics, Optimization), 
                  Machine Learning (Introduction, Pipeline, Techniques I & II), Deep Learning, Software Engineering
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

