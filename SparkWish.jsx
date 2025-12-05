import React, { useState, useEffect } from 'react';

import { Calendar, Plus, Check, Trash2, Edit, Sparkles, ChevronRight } from 'lucide-react';



// Mock AI Analysis Function

const analyzeManifestation = (title, description) => {

  const keywords = {

    financial: ['money', 'financial', 'abundance', 'wealth', 'income', 'prosperity'],

    health: ['health', 'fitness', 'wellness', 'body', 'exercise', 'nutrition'],

    career: ['career', 'job', 'promotion', 'business', 'success', 'professional'],

    relationship: ['love', 'relationship', 'partner', 'family', 'friendship', 'connection'],

    personal: ['growth', 'learning', 'skill', 'development', 'mindfulness', 'spiritual']

  };



  const text = `${title} ${description}`.toLowerCase();

  let category = 'personal';

  

  for (const [key, words] of Object.entries(keywords)) {

    if (words.some(word => text.includes(word))) {

      category = key;

      break;

    }

  }



  const milestones = {

    financial: [

      'Track daily gratitude for current abundance',

      'Create a detailed financial vision board',

      'Network with 3 new financially successful individuals',

      'Implement one money-saving strategy weekly',

      'Visualize your financial goal daily for 5 minutes'

    ],

    health: [

      'Set a consistent sleep schedule (8 hours)',

      'Practice mindful eating for 21 days',

      'Move your body for 30 minutes daily',

      'Hydrate with 8 glasses of water daily',

      'Journal your wellness journey weekly'

    ],

    career: [

      'Update your professional profile and resume',

      'Reach out to 5 mentors in your field',

      'Develop one new skill relevant to your goal',

      'Attend 2 industry events or webinars monthly',

      'Visualize your success daily with affirmations'

    ],

    relationship: [

      'Practice self-love rituals daily',

      'Visualize your ideal relationship for 10 minutes',

      'Engage in activities where you meet like-minded people',

      'Release past relationship blocks through journaling',

      'Affirm your worthiness of love daily'

    ],

    personal: [

      'Meditate for 10 minutes daily',

      'Read or learn something new each week',

      'Journal your progress and reflections',

      'Practice gratitude for 3 things daily',

      'Visualize your manifestation as already achieved'

    ]

  };



  return {

    category,

    milestones: milestones[category],

    nextAction: milestones[category][0],

    affirmation: `I am worthy of achieving ${title}. The universe is conspiring in my favor.`

  };

};



// Landing Page Component

const LandingPage = ({ onNavigate }) => {

  return (

    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-neutral-100">

      {/* Hero Section */}

      <div className="relative overflow-hidden">

        <div className="absolute inset-0 opacity-10">

          {[...Array(20)].map((_, i) => (

            <div

              key={i}

              className="absolute animate-pulse"

              style={{

                left: `${Math.random() * 100}%`,

                top: `${Math.random() * 100}%`,

                animationDelay: `${Math.random() * 3}s`,

                animationDuration: `${2 + Math.random() * 3}s`

              }}

            >

              <Sparkles className="text-amber-600" size={16} />

            </div>

          ))}

        </div>

        

        <div className="container mx-auto px-6 py-24 relative z-10">

          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-6xl md:text-7xl font-serif text-neutral-800 mb-6 tracking-tight">

              Manifest Your Desires.<br />

              <span className="text-amber-700">Track Your Spark.</span>

            </h1>

            <p className="text-xl text-neutral-600 mb-12 font-light leading-relaxed">

              Elevate your manifestation practice with intelligent progress tracking,

              AI-powered insights, and elegant simplicity.

            </p>

            <button

              onClick={() => onNavigate('manifest')}

              className="bg-neutral-800 text-amber-50 px-12 py-4 text-lg font-light tracking-wide hover:bg-neutral-900 transition-all duration-300 shadow-lg hover:shadow-xl"

            >

              Start Manifesting

            </button>

          </div>

        </div>

      </div>



      {/* Features Section */}

      <div className="container mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div className="border border-neutral-200 p-8 bg-white">

            <div className="text-amber-700 mb-4">

              <Sparkles size={32} />

            </div>

            <h3 className="text-2xl font-serif text-neutral-800 mb-4">Declare Your Manifestations</h3>

            <p className="text-neutral-600 font-light leading-relaxed">

              Articulate your deepest desires with intention. Our platform provides

              a sacred space to crystallize your goals with clarity and purpose.

            </p>

          </div>



          <div className="border border-neutral-200 p-8 bg-white">

            <div className="text-amber-700 mb-4">

              <ChevronRight size={32} />

            </div>

            <h3 className="text-2xl font-serif text-neutral-800 mb-4">AI-Powered Goal Breakdown</h3>

            <p className="text-neutral-600 font-light leading-relaxed">

              Receive intelligent milestone suggestions tailored to your manifestation.

              Transform abstract wishes into actionable steps with AI guidance.

            </p>

          </div>



          <div className="border border-neutral-200 p-8 bg-white">

            <div className="text-amber-700 mb-4">

              <Check size={32} />

            </div>

            <h3 className="text-2xl font-serif text-neutral-800 mb-4">Visual Progress Tracking</h3>

            <p className="text-neutral-600 font-light leading-relaxed">

              Monitor your advancement with elegant progress indicators. Celebrate

              each milestone as you align your reality with your vision.

            </p>

          </div>



          <div className="border border-neutral-200 p-8 bg-white">

            <div className="text-amber-700 mb-4">

              <Calendar size={32} />

            </div>

            <h3 className="text-2xl font-serif text-neutral-800 mb-4">Daily Alignment Reminders</h3>

            <p className="text-neutral-600 font-light leading-relaxed">

              Stay connected to your intentions with gentle nudges. Maintain

              energetic alignment through consistent, mindful action.

            </p>

          </div>

        </div>

      </div>



      {/* Footer */}

      <footer className="border-t border-neutral-200 bg-white">

        <div className="container mx-auto px-6 py-8">

          <div className="text-center text-neutral-500 text-sm font-light">

            <p className="mb-2">© 2025 SparkWish. All rights reserved.</p>

            <div className="space-x-6">

              <a href="#" className="hover:text-amber-700 transition-colors">About</a>

              <a href="#" className="hover:text-amber-700 transition-colors">Privacy</a>

            </div>

          </div>

        </div>

      </footer>

    </div>

  );

};



// Manifestation Form Component

const ManifestForm = ({ onNavigate, onSubmit }) => {

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [deadline, setDeadline] = useState('');

  const [affirmation, setAffirmation] = useState('');

  const [analyzing, setAnalyzing] = useState(false);



  const handleSubmit = () => {

    if (!title || !description || !deadline) {

      alert('Please fill in all required fields');

      return;

    }



    setAnalyzing(true);

    

    setTimeout(() => {

      const analysis = analyzeManifestation(title, description);

      const manifest = {

        id: Date.now(),

        title,

        description,

        deadline,

        affirmation: affirmation || analysis.affirmation,

        category: analysis.category,

        milestones: analysis.milestones.map((m, i) => ({

          id: i,

          text: m,

          completed: false

        })),

        progress: 0,

        createdAt: new Date().toISOString()

      };

      

      onSubmit(manifest);

      setAnalyzing(false);

      onNavigate('dashboard');

    }, 1500);

  };



  return (

    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-neutral-100">

      <div className="container mx-auto px-6 py-12">

        <button

          onClick={() => onNavigate('landing')}

          className="text-neutral-600 hover:text-amber-700 mb-8 font-light"

        >

          ← Back to Home

        </button>



        <div className="max-w-3xl mx-auto bg-white border border-neutral-200 p-12">

          <h2 className="text-4xl font-serif text-neutral-800 mb-8 text-center">

            Create Your Manifestation

          </h2>

          

          <div className="space-y-6">

            <div>

              <label className="block text-neutral-700 mb-2 font-light text-sm tracking-wide">

                MANIFESTATION TITLE

              </label>

              <input

                type="text"

                value={title}

                onChange={(e) => setTitle(e.target.value)}

                placeholder="e.g., Financial Abundance"

                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700 transition-colors font-light"

              />

            </div>



            <div>

              <label className="block text-neutral-700 mb-2 font-light text-sm tracking-wide">

                DETAILED INTENTION

              </label>

              <textarea

                value={description}

                onChange={(e) => setDescription(e.target.value)}

                rows={5}

                placeholder="Describe your manifestation in detail. What does success look like? How will it feel?"

                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700 transition-colors font-light resize-none"

              />

            </div>



            <div>

              <label className="block text-neutral-700 mb-2 font-light text-sm tracking-wide">

                TARGET DEADLINE

              </label>

              <input

                type="date"

                value={deadline}

                onChange={(e) => setDeadline(e.target.value)}

                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700 transition-colors font-light"

              />

            </div>



            <div>

              <label className="block text-neutral-700 mb-2 font-light text-sm tracking-wide">

                PERSONAL AFFIRMATION (Optional)

              </label>

              <input

                type="text"

                value={affirmation}

                onChange={(e) => setAffirmation(e.target.value)}

                placeholder="e.g., I am worthy of all the abundance flowing to me"

                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700 transition-colors font-light"

              />

            </div>



            <button

              onClick={handleSubmit}

              disabled={analyzing}

              className="w-full bg-neutral-800 text-amber-50 py-4 hover:bg-neutral-900 transition-colors font-light tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"

            >

              {analyzing ? 'Analyzing with AI...' : 'Create & Analyze with AI'}

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};



// Dashboard Component

const Dashboard = ({ manifests, onNavigate, onUpdateMilestone, onDelete }) => {

  const [selectedManifest, setSelectedManifest] = useState(null);



  if (manifests.length === 0) {

    return (

      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-neutral-100">

        <div className="container mx-auto px-6 py-12">

          <div className="text-center py-20">

            <Sparkles className="mx-auto text-amber-700 mb-6" size={64} />

            <h2 className="text-3xl font-serif text-neutral-800 mb-4">

              Your Journey Awaits

            </h2>

            <p className="text-neutral-600 mb-8 font-light">

              Begin by creating your first manifestation

            </p>

            <button

              onClick={() => onNavigate('manifest')}

              className="bg-neutral-800 text-amber-50 px-8 py-3 hover:bg-neutral-900 transition-colors font-light tracking-wide"

            >

              Create Manifestation

            </button>

          </div>

        </div>

      </div>

    );

  }



  return (

    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-neutral-100">

      <div className="container mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-4xl font-serif text-neutral-800">Your Manifestations</h2>

          <button

            onClick={() => onNavigate('manifest')}

            className="bg-amber-700 text-white p-3 rounded-full hover:bg-amber-800 transition-colors shadow-lg"

          >

            <Plus size={24} />

          </button>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {manifests.map((manifest) => {

            const completedMilestones = manifest.milestones.filter(m => m.completed).length;

            const progress = (completedMilestones / manifest.milestones.length) * 100;



            return (

              <div

                key={manifest.id}

                className="bg-white border border-neutral-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"

                onClick={() => setSelectedManifest(manifest)}

              >

                <div className="flex justify-between items-start mb-4">

                  <h3 className="text-xl font-serif text-neutral-800">{manifest.title}</h3>

                  <button

                    onClick={(e) => {

                      e.stopPropagation();

                      if (window.confirm('Are you sure you want to delete this manifestation?')) {

                        onDelete(manifest.id);

                      }

                    }}

                    className="text-neutral-400 hover:text-red-600 transition-colors"

                  >

                    <Trash2 size={18} />

                  </button>

                </div>



                <p className="text-sm text-neutral-600 mb-4 line-clamp-2 font-light">

                  {manifest.description}

                </p>



                <div className="mb-4">

                  <div className="flex justify-between text-xs text-neutral-500 mb-1">

                    <span>Progress</span>

                    <span>{Math.round(progress)}%</span>

                  </div>

                  <div className="w-full bg-neutral-200 h-2">

                    <div

                      className="bg-amber-700 h-2 transition-all duration-300"

                      style={{ width: `${progress}%` }}

                    />

                  </div>

                </div>



                <div className="text-xs text-neutral-500 font-light">

                  <p>Deadline: {new Date(manifest.deadline).toLocaleDateString()}</p>

                  <p className="mt-1">Category: {manifest.category}</p>

                </div>

              </div>

            );

          })}

        </div>



        {/* Detailed View Modal */}

        {selectedManifest && (

          <div

            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"

            onClick={() => setSelectedManifest(null)}

          >

            <div

              className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"

              onClick={(e) => e.stopPropagation()}

            >

              <div className="flex justify-between items-start mb-6">

                <h3 className="text-3xl font-serif text-neutral-800">

                  {selectedManifest.title}

                </h3>

                <button

                  onClick={() => setSelectedManifest(null)}

                  className="text-neutral-400 hover:text-neutral-800"

                >

                  ✕

                </button>

              </div>



              <p className="text-neutral-600 mb-6 font-light leading-relaxed">

                {selectedManifest.description}

              </p>



              <div className="bg-amber-50 border border-amber-200 p-4 mb-6">

                <p className="text-sm italic text-neutral-700 font-light">

                  "{selectedManifest.affirmation}"

                </p>

              </div>



              <h4 className="text-lg font-serif text-neutral-800 mb-4">Milestones</h4>

              <div className="space-y-3">

                {selectedManifest.milestones.map((milestone) => (

                  <div

                    key={milestone.id}

                    className="flex items-start space-x-3 p-3 hover:bg-neutral-50 transition-colors"

                  >

                    <button

                      onClick={() => onUpdateMilestone(selectedManifest.id, milestone.id)}

                      className={`flex-shrink-0 w-6 h-6 border-2 flex items-center justify-center transition-colors ${

                        milestone.completed

                          ? 'bg-amber-700 border-amber-700'

                          : 'border-neutral-300 hover:border-amber-700'

                      }`}

                    >

                      {milestone.completed && <Check size={16} className="text-white" />}

                    </button>

                    <span

                      className={`font-light ${

                        milestone.completed ? 'text-neutral-400 line-through' : 'text-neutral-700'

                      }`}

                    >

                      {milestone.text}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );

};



// Main App Component

export default function SparkWish() {

  const [page, setPage] = useState('landing');

  const [manifests, setManifests] = useState([]);



  // Load manifests from localStorage on mount

  useEffect(() => {

    const stored = localStorage.getItem('sparkwish_manifests');

    if (stored) {

      setManifests(JSON.parse(stored));

      if (JSON.parse(stored).length > 0) {

        setPage('dashboard');

      }

    }

  }, []);



  // Save manifests to localStorage whenever they change

  useEffect(() => {

    localStorage.setItem('sparkwish_manifests', JSON.stringify(manifests));

  }, [manifests]);



  const handleSubmitManifest = (manifest) => {

    setManifests([...manifests, manifest]);

  };



  const handleUpdateMilestone = (manifestId, milestoneId) => {

    setManifests(manifests.map(m => {

      if (m.id === manifestId) {

        const updatedMilestones = m.milestones.map(ms =>

          ms.id === milestoneId ? { ...ms, completed: !ms.completed } : ms

        );

        return { ...m, milestones: updatedMilestones };

      }

      return m;

    }));

  };



  const handleDelete = (manifestId) => {

    setManifests(manifests.filter(m => m.id !== manifestId));

  };



  return (

    <div className="font-sans antialiased">

      {page === 'landing' && <LandingPage onNavigate={setPage} />}

      {page === 'manifest' && (

        <ManifestForm onNavigate={setPage} onSubmit={handleSubmitManifest} />

      )}

      {page === 'dashboard' && (

        <Dashboard

          manifests={manifests}

          onNavigate={setPage}

          onUpdateMilestone={handleUpdateMilestone}

          onDelete={handleDelete}

        />

      )}

    </div>

  );

}
