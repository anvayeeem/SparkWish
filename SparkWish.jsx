import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Check, Trash2, Sparkles, ChevronRight, Shield, Linkedin, Twitter, Lock, Activity, Users } from 'lucide-react';

// Mock Auth
const mockAuth = {
  currentUser: null,
  signIn: (email) => new Promise(resolve => setTimeout(() => resolve({ uid: 'user123', email }), 800)),
  signUp: (email) => new Promise(resolve => setTimeout(() => resolve({ uid: 'user123', email }), 800)),
  signOut: () => { mockAuth.currentUser = null; }
};

// Mock OAuth
const mockOAuth = {
  connectLinkedIn: () => new Promise(resolve => setTimeout(() => resolve({
    provider: 'linkedin', connected: true, lastSync: new Date().toISOString()
  }), 1500)),
  connectTwitter: () => new Promise(resolve => setTimeout(() => resolve({
    provider: 'twitter', connected: true, lastSync: new Date().toISOString()
  }), 1500)),
  scanForVerification: (keywords, provider) => new Promise(resolve => setTimeout(() => {
    const hasMatch = Math.random() > 0.3;
    resolve({
      verified: hasMatch,
      confidence: hasMatch ? 0.75 + Math.random() * 0.25 : 0,
      evidence: hasMatch ? `${provider} update detected matching keywords` : null,
      timestamp: new Date().toISOString()
    });
  }, 2000))
};

// Analyze State
const analyzeState = (energy, alignment, journal) => new Promise(resolve => setTimeout(() => {
  const score = Math.round((energy * 5 + alignment * 5 + (journal ? 20 : 0)) / 1.3);
  const msgs = [
    { range: [0, 30], text: "Gentle energy—nurture with rest", nudge: "Journal for clarity" },
    { range: [31, 60], text: "Steady alignment building", nudge: "Share a small win" },
    { range: [61, 85], text: "Rising abundance energy", nudge: "Connect with others" },
    { range: [86, 100], text: "Peak alignment achieved", nudge: "Guide others" }
  ];
  const msg = msgs.find(m => score >= m.range[0] && score <= m.range[1]);
  resolve({ score, vibe: msg.text, nudge: msg.nudge });
}, 1200));

// Analyze Manifestation
const analyzeManifestation = (title, desc) => {
  const keywords = {
    financial: ['money', 'financial', 'wealth', 'income'],
    health: ['health', 'fitness', 'wellness', 'body'],
    career: ['career', 'job', 'promotion', 'business'],
    relationship: ['love', 'relationship', 'partner'],
    personal: ['growth', 'learning', 'mindfulness']
  };
  const text = `${title} ${desc}`.toLowerCase();
  let category = 'personal';
  for (const [key, words] of Object.entries(keywords)) {
    if (words.some(w => text.includes(w))) { category = key; break; }
  }
  const milestones = {
    financial: ['Track daily gratitude', 'Create vision board', 'Network with 3 people', 'Save weekly', 'Visualize daily'],
    health: ['Set sleep schedule', 'Mindful eating', 'Move 30 min daily', 'Hydrate', 'Journal weekly'],
    career: ['Update profile', 'Reach 5 mentors', 'Learn new skill', 'Attend events', 'Daily affirmations'],
    relationship: ['Self-love rituals', 'Visualize', 'Meet people', 'Release blocks', 'Affirm worthiness'],
    personal: ['Meditate', 'Learn weekly', 'Journal', 'Gratitude', 'Visualize']
  };
  return {
    category,
    milestones: milestones[category],
    keywords: keywords[category].slice(0, 5),
    affirmation: `I am worthy of ${title}. The universe conspires in my favor.`
  };
};

// Find Matches
const findMatches = () => new Promise(resolve => setTimeout(() => {
  resolve([
    { id: 'm1', theme: 'Career Transform', alignment: 87, verified: true, detail: 'LinkedIn promo', preview: 'Tech leadership', hash: 'c_x1' },
    { id: 'm2', theme: 'Financial Abundance', alignment: 78, verified: false, detail: null, preview: '6-figure goal', hash: 'f_m2' }
  ]);
}, 1000));

// Landing Page
const Landing = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-b from-amber-50 to-neutral-100">
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute animate-pulse" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animationDelay: `${Math.random()*3}s` }}>
            <Sparkles className="text-amber-600" size={16} />
          </div>
        ))}
      </div>
      <div className="container mx-auto px-6 py-24 relative z-10 text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-serif text-neutral-800 mb-6">
          Manifest Your Desires.<br/><span className="text-amber-700">Track Your Spark.</span>
        </h1>
        <p className="text-xl text-neutral-600 mb-6 font-light">AI insights, verified progress tracking.</p>
        <p className="text-lg text-neutral-500 mb-12 font-light italic">Sync LinkedIn/Twitter for verified wins.</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => onNavigate('signup')} className="bg-neutral-800 text-amber-50 px-12 py-4 hover:bg-neutral-900">
            Start Manifesting
          </button>
          <button onClick={() => onNavigate('login')} className="border-2 border-neutral-800 px-12 py-4 hover:bg-neutral-800 hover:text-amber-50">
            Sign In
          </button>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 max-w-5xl">
      <div className="border border-neutral-200 p-8 bg-white">
        <Sparkles className="text-amber-700 mb-4" size={32} />
        <h3 className="text-2xl font-serif text-neutral-800 mb-4">Declare Manifestations</h3>
        <p className="text-neutral-600 font-light">Crystallize goals with clarity.</p>
      </div>
      <div className="border border-neutral-200 p-8 bg-white">
        <Shield className="text-amber-700 mb-4" size={32} />
        <h3 className="text-2xl font-serif text-neutral-800 mb-4">Verified Progress</h3>
        <p className="text-neutral-600 font-light">Auto-verify via social accounts.</p>
      </div>
      <div className="border border-neutral-200 p-8 bg-white">
        <Activity className="text-amber-700 mb-4" size={32} />
        <h3 className="text-2xl font-serif text-neutral-800 mb-4">State Analysis</h3>
        <p className="text-neutral-600 font-light">AI sentiment, personalized nudges.</p>
      </div>
    </div>
    <footer className="border-t border-neutral-200 bg-white py-8 text-center text-neutral-500 text-sm">
      <p>© 2025 SparkWish</p>
    </footer>
  </div>
);

// Auth Page
const AuthPage = ({ mode, onNavigate, onAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) return;
    setLoading(true);
    if (mode === 'signup') {
      await mockAuth.signUp(email);
    } else {
      await mockAuth.signIn(email);
    }
    onAuth({ uid: 'user123', email });
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-neutral-800 mb-2">SparkWish</h1>
          <p className="text-neutral-600 font-light">{mode === 'signup' ? 'Begin Journey' : 'Welcome Back'}</p>
        </div>
        <div className="bg-white border border-neutral-200 p-8 space-y-4">
          <div>
            <label className="block text-neutral-700 mb-2 font-light text-sm">EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700" />
          </div>
          <div>
            <label className="block text-neutral-700 mb-2 font-light text-sm">PASSWORD</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700" />
          </div>
          <button onClick={handleSubmit} disabled={loading} className="w-full bg-neutral-800 text-amber-50 py-3 hover:bg-neutral-900 disabled:opacity-50">
            {loading ? 'Processing...' : mode === 'signup' ? 'Create Account' : 'Sign In'}
          </button>
          <button onClick={() => onNavigate(mode === 'signup' ? 'login' : 'signup')} className="w-full text-neutral-600 hover:text-amber-700 text-sm">
            {mode === 'signup' ? 'Sign in instead' : 'Sign up instead'}
          </button>
        </div>
        <button onClick={() => onNavigate('landing')} className="mt-6 text-neutral-600 hover:text-amber-700 text-sm w-full">← Back</button>
      </div>
    </div>
  );
};

// Manifest Form
const ManifestForm = ({ onNavigate, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [analyzing, setAnalyzing] = useState(false);

  const handleSubmit = () => {
    if (!title || !description || !deadline) return;
    setAnalyzing(true);
    setTimeout(() => {
      const analysis = analyzeManifestation(title, description);
      const manifest = {
        id: Date.now(),
        title,
        description,
        deadline,
        affirmation: analysis.affirmation,
        category: analysis.category,
        keywords: analysis.keywords,
        milestones: analysis.milestones.map((m, i) => ({ id: i, text: m, completed: false })),
        verifiedMilestones: [],
        currentScore: 0,
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
        <button onClick={() => onNavigate('dashboard')} className="text-neutral-600 hover:text-amber-700 mb-8">← Back</button>
        <div className="max-w-3xl mx-auto bg-white border border-neutral-200 p-12">
          <h2 className="text-4xl font-serif text-neutral-800 mb-8 text-center">Create Manifestation</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-neutral-700 mb-2 font-light text-sm">TITLE</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Financial Abundance" className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700" />
            </div>
            <div>
              <label className="block text-neutral-700 mb-2 font-light text-sm">INTENTION</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} placeholder="Describe your manifestation..." className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700 resize-none" />
            </div>
            <div>
              <label className="block text-neutral-700 mb-2 font-light text-sm">DEADLINE</label>
              <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-amber-700" />
            </div>
            <button onClick={handleSubmit} disabled={analyzing} className="w-full bg-neutral-800 text-amber-50 py-4 hover:bg-neutral-900 disabled:opacity-50">
              {analyzing ? 'Analyzing...' : 'Create & Analyze'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard
const Dashboard = ({ manifests, onNavigate, onUpdate, onDelete }) => {
  const [selected, setSelected] = useState(null);

  const handleMilestone = (manifestId, milestoneId) => {
    const updated = manifests.map(m => {
      if (m.id === manifestId) {
        const newMilestones = m.milestones.map(ms => ms.id === milestoneId ? { ...ms, completed: !ms.completed } : ms);
        return { ...m, milestones: newMilestones };
      }
      return m;
    });
    onUpdate(updated);
  };

  if (manifests.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-neutral-100">
        <div className="container mx-auto px-6 py-12 text-center py-20">
          <Sparkles className="mx-auto text-amber-700 mb-6" size={64} />
          <h2 className="text-3xl font-serif text-neutral-800 mb-4">Your Journey Awaits</h2>
          <p className="text-neutral-600 mb-8 font-light">Create your first manifestation</p>
          <button onClick={() => onNavigate('manifest')} className="bg-neutral-800 text-amber-50 px-8 py-3 hover:bg-neutral-900">
            Create Manifestation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-neutral-100">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-serif text-neutral-800">Your Manifestations</h2>
          <button onClick={() => onNavigate('manifest')} className="bg-amber-700 text-white p-3 rounded-full hover:bg-amber-800">
            <Plus size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manifests.map(m => {
            const completed = m.milestones.filter(ms => ms.completed).length;
            const progress = Math.round((completed / m.milestones.length) * 100);
            
            return (
              <div key={m.id} className="bg-white border border-neutral-200 p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelected(m)}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-neutral-800">{m.title}</h3>
                  <button onClick={(e) => { e.stopPropagation(); if (window.confirm('Delete?')) onDelete(m.id); }} className="text-neutral-400 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="text-sm text-neutral-600 mb-4 line-clamp-2 font-light">{m.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-neutral-500 mb-1">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2">
                    <div className="bg-amber-700 h-2 transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50" onClick={() => setSelected(null)}>
            <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between mb-6">
                <h3 className="text-3xl font-serif text-neutral-800">{selected.title}</h3>
                <button onClick={() => setSelected(null)} className="text-neutral-400 hover:text-neutral-800 text-2xl">✕</button>
              </div>
              <p className="text-neutral-600 mb-6 font-light">{selected.description}</p>
              <div className="bg-amber-50 border border-amber-200 p-4 mb-6">
                <p className="text-sm italic text-neutral-700">"{selected.affirmation}"</p>
              </div>
              <h4 className="text-lg font-serif text-neutral-800 mb-4">Milestones</h4>
              <div className="space-y-3">
                {selected.milestones.map(ms => (
                  <div key={ms.id} className="flex items-start gap-3 p-3 hover:bg-neutral-50">
                    <button onClick={() => handleMilestone(selected.id, ms.id)} className={`flex-shrink-0 w-6 h-6 border-2 flex items-center justify-center ${ms.completed ? 'bg-amber-700 border-amber-700' : 'border-neutral-300 hover:border-amber-700'}`}>
                      {ms.completed && <Check size={16} className="text-white" />}
                    </button>
                    <span className={`font-light ${ms.completed ? 'text-neutral-400 line-through' : 'text-neutral-700'}`}>{ms.text}</span>
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

// Main App
export default function SparkWish() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [manifests, setManifests] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('sparkwish_manifests');
    if (stored) {
      try {
        setManifests(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored manifests');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sparkwish_manifests', JSON.stringify(manifests));
  }, [manifests]);

  const handleAddManifest = (manifest) => {
    setManifests([...manifests, manifest]);
  };

  const handleDeleteManifest = (id) => {
    setManifests(manifests.filter(m => m.id !== id));
  };

  return (
    <div className="font-sans antialiased">
      {page === 'landing' && <Landing onNavigate={setPage} />}
      {page === 'signup' && <AuthPage mode="signup" onNavigate={setPage} onAuth={setUser} />}
      {page === 'login' && <AuthPage mode="login" onNavigate={setPage} onAuth={setUser} />}
      {page === 'manifest' && user && <ManifestForm onNavigate={setPage} onSubmit={handleAddManifest} />}
      {page === 'dashboard' && user && <Dashboard manifests={manifests} onNavigate={setPage} onUpdate={setManifests} onDelete={handleDeleteManifest} />}
    </div>
  );
}