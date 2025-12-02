'use client'

import { Mail, MapPin, Linkedin, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left side - Text content */}
            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Oche David <span className="text-purple">Ankeli</span>
              </h1>
              <p className="text-2xl text-purple font-semibold mb-6">
                Machine Learning Engineer & Researcher
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Specializing in AI fairness, bias mitigation, and culturally grounded NLP for underrepresented communities. 
                First Class Honors graduate with research presented at <strong>NeurIPS 2025</strong> and <strong>Microsoft Research Seminar</strong>.
              </p>
            
            {/* Opportunity Banner */}
            <div className="bg-purple-50 border-l-4 border-purple p-6 mb-8 rounded-r-lg">
              <p className="text-purple font-semibold mb-2">🎓 Currently Seeking MSc Opportunities</p>
              <p className="text-gray-700">
                I am actively looking for <strong>Master's positions</strong> and <strong>research opportunities within labs</strong>. 
                I bring hands-on experience in NLP, AI fairness, federated learning, representation learning, ASR, 
                reinforcement learning, computer vision, and AI for healthcare. I would be a valuable contributor 
                to research teams working on ethical AI, culturally grounded AI systems, and AI applications for social good.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:ankelioche@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-purple transition-colors">
                <Mail size={20} />
                <span>ankelioche@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} />
                <span>Nigerian, based in Kigali, Rwanda</span>
              </div>
            </div>
            
            <div className="flex gap-4 mb-12">
              <a 
                href="https://linkedin.com/in/oche-ankeli-71001a9b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple text-white rounded-lg hover:bg-purple-dark transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Tripp808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-purple text-purple rounded-lg hover:bg-purple hover:text-white transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple shadow-xl">
                  <img 
                    src="/gallery/profile.JPEG" 
                    alt="Oche David Ankeli"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              I am a Machine Learning Engineer and researcher specializing in AI fairness, bias mitigation, and 
              culturally grounded NLP for underrepresented communities. As lead author on <strong>AfriStereo</strong> — 
              the first open-source African stereotype evaluation framework — my work has been presented at NeurIPS 2025, 
              Microsoft Research Seminar, and Deep Learning Indaba.
            </p>
            <p className="mb-4">
              I graduated with <strong>First Class Honors</strong> (top 5% of cohort) from African Leadership University, 
              with a B.Sc. in Software Engineering specializing in Machine Learning & AI. My research focuses on bias 
              evaluation methodologies, low-resource ASR development, and community-engaged AI research across healthcare, 
              linguistic equity, and ethical AI systems.
            </p>
            <p className="text-sm text-gray-600 italic">
              * This site is constantly being updated with new publications and projects as my research progresses.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 mb-12">
            My research interests and expertise span multiple domains in AI and Machine Learning
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-purple mb-4">Research Focus Areas</h3>
              <p className="text-gray-700">NLP, AI Fairness & Bias Mitigation, Federated Learning, Representation Learning, ASR, Reinforcement Learning, Computer Vision, AI for Healthcare</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-purple mb-4">ML/AI Frameworks</h3>
              <p className="text-gray-700">TensorFlow, PyTorch, Keras, Hugging Face Transformers, scikit-learn</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-purple mb-4">Programming</h3>
              <p className="text-gray-700">Python, R, SQL, Java, Scala, JavaScript</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-purple mb-4">NLP & Evaluation</h3>
              <p className="text-gray-700">Bias evaluation metrics, few-shot prompting, human-in-the-loop validation, semantic clustering</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-purple mb-4">Data Science</h3>
              <p className="text-gray-700">Pandas, NumPy, Spark, Hadoop, statistical analysis, A/B testing</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-purple mb-4">Cloud & Databases</h3>
              <p className="text-gray-700">AWS, GCP, Azure, PostgreSQL, MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/research" className="group bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all hover:bg-purple hover:text-white">
              <h3 className="text-2xl font-bold text-purple group-hover:text-white mb-4 flex items-center justify-between">
                Research
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </h3>
              <p className="text-gray-700 group-hover:text-white">View my research experience, publications, and ongoing projects</p>
            </Link>

            <Link href="/experience" className="group bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all hover:bg-purple hover:text-white">
              <h3 className="text-2xl font-bold text-purple group-hover:text-white mb-4 flex items-center justify-between">
                Experience
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </h3>
              <p className="text-gray-700 group-hover:text-white">Explore my professional work and selected projects</p>
            </Link>

            <Link href="/awards" className="group bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all hover:bg-purple hover:text-white">
              <h3 className="text-2xl font-bold text-purple group-hover:text-white mb-4 flex items-center justify-between">
                Awards
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </h3>
              <p className="text-gray-700 group-hover:text-white">See my honors, awards, and achievements</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
