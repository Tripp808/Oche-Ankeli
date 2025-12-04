'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Research() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Research</h1>
          <p className="text-xl text-gray-600 mb-12">
            My work focuses on Natural Language Processing, with emphasis on culturally grounded NLP, low-resource languages, AI fairness, and ethical AI systems for underrepresented communities
          </p>
          <p className="text-sm text-purple mb-12 italic">
            * More publications and research outputs coming soon. This page is regularly updated as new work is published.
          </p>

          {/* Research Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Experience</h2>
            <div className="space-y-8">
              {/* YUX Design */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple mb-2">Machine Learning Engineer & Researcher</h3>
                    <p className="text-gray-600">YUX Design (Cultural AI Lab)</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">Apr 2025 - Present</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span><strong>AfriStereo Project (NeurIPS 2025, LREC 2026 under review):</strong> Co-lead author developing the first open-source African stereotype dataset and evaluation framework through community-engaged research across Senegal, Kenya, and Nigeria.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Collected 1,163 culturally grounded stereotypes spanning gender, ethnicity, religion, age, and profession; augmented to 5,000+ stereotype-antistereotype pairs using few-shot prompting with human-in-the-loop validation.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Evaluated 11 language models using novel Bias Preference Ratio (BPR) metric, revealing statistically significant bias (p ≤ 0.05) in 9 models with BPR ranging 0.63–0.78.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span><strong>Selected for spotlight talk</strong> at NeurIPS 2025 CLRLC-LLMs workshop; abstract invited for submission to AfricaNLP workshop.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Fine-tuned ASR models (Whisper, Wav2Vec) for Wolof, Hausa, and Yoruba, reducing word error rates by 40–60% and deploying production-ready systems in Nakala AI tool.</span>
                  </li>
                </ul>
              </div>

              {/* Ruzivo Research Lab */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple mb-2">Research Assistant & Cofounder</h3>
                    <p className="text-gray-600">Ruzivo Research Lab (ALU)</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">Jan 2025 - Present</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Co-founded the first student-led research lab at African Leadership University conducting AI and ML research across NLP, computer vision, policy, and reinforcement learning.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Built solutions addressing healthcare, accessibility, and education challenges in underserved African communities.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>Contributing to the AI research community through publications and open-source projects.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research in Action</h2>
            <p className="text-gray-600 mb-8">Photos from conferences, seminars, and presentations</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Deep Learning Indaba Photos */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/gallery/indaba-1.jpeg" 
                    alt="Deep Learning Indaba - Presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple mb-1">Deep Learning Indaba</h3>
                  <p className="text-sm text-gray-600">Poster presentation on ASR fine-tuning</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/gallery/indaba-2.jpeg" 
                    alt="Deep Learning Indaba - Networking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple mb-1">Deep Learning Indaba</h3>
                  <p className="text-sm text-gray-600">Networking and collaboration</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/gallery/indaba-3.jpeg" 
                    alt="Deep Learning Indaba - Discussion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple mb-1">Deep Learning Indaba</h3>
                  <p className="text-sm text-gray-600">Research discussions</p>
                </div>
              </div>

              {/* NeurIPS */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/gallery/neurips.jpeg" 
                    alt="NeurIPS 2025 - AfriStereo Spotlight Talk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple mb-1">NeurIPS 2025</h3>
                  <p className="text-sm text-gray-600">AfriStereo spotlight talk</p>
                </div>
              </div>

              {/* Microsoft Research Seminar */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/gallery/microsoft-seminar.jpeg" 
                    alt="Microsoft Research Seminar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple mb-1">Microsoft Research Seminar</h3>
                  <p className="text-sm text-gray-600">Cultural relevance of AI models</p>
                </div>
              </div>

              {/* Open School Initiative */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/gallery/open-school.jpeg" 
                    alt="Open School Nigeria AI Literacy Fellowship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple mb-1">Open School Nigeria</h3>
                  <p className="text-sm text-gray-600">AI Literacy Fellowship talk</p>
                </div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications & Presentations</h2>
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  AfriStereo: A Culturally Grounded Dataset for Evaluating Stereotypical Bias in Large Language Models
                </h3>
                <p className="text-gray-600 mb-2">
                  Le Beux, Y., Audu, O., <strong>Ankeli, O.D.</strong>, Balakrishnan, D., Weya, M., Ralaiarinosy, M.D., Ezeani, I.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <p className="text-sm text-purple">Manuscript under review, LREC 2026</p>
                  <a 
                    href="https://arxiv.org/abs/2511.22016v1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-purple hover:text-purple-dark underline font-medium"
                  >
                    View on arXiv →
                  </a>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Spotlight Talk: AfriStereo presentation at NeurIPS 2025
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <p className="text-sm text-purple">NeurIPS 2025 CLRLC-LLMs workshop (Dec 2025)</p>
                  <a 
                    href="https://clrlcllms.github.io/CLRLCLLMs-workshop.github.io-NeurIPS-2025/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-purple hover:text-purple-dark underline font-medium"
                  >
                    View Workshop →
                  </a>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Microsoft Research Seminar: Evaluating the Cultural Relevance of AI Models and Products
                </h3>
                <p className="text-gray-600 mb-2">
                  Presented AfriStereo work and ASR development methodologies focusing on maternal health ASR, data augmentation, and user testing methods
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Open School Nigeria AI Literacy Fellowship
                </h3>
                <p className="text-gray-600 mb-2">
                  Speaker: "Designing With, Not For: Building Human-Centred AI for African Realities"
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Fine-Tuning ASR Models for Wolof & Hausa in Maternal Health
                </h3>
                <p className="text-sm text-purple">Manuscript under review, YUX Cultural AI Lab</p>
              </div>

              <div className="bg-white border-l-4 border-purple pl-6 pr-6 py-6 rounded-r-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Poster Presentation: Deep Learning Indaba
                </h3>
                <p className="text-gray-600">ASR fine-tuning and LLM bias evaluation in African contexts</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

