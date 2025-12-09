# ✨ SparkWish

Manifest Your Desires. Track Your Spark.

SparkWish is an elegant manifestation tracking web application that bridges spirituality with accountability. It combines AI-powered goal analysis and verified progress tracking via social media to help manifestors turn their intentions into reality.

Show Image

Show Image

Show Image


## 🌟 Features

### Core Functionality
- 🎯 Manifestation Creation: Declare your goals with detailed intentions, deadlines, and personal affirmations
- 🤖 AI-Powered Analysis: Automatic categorization and generation of 5 tailored action milestones
- 📊 Progress Tracking: Visual progress bars with milestone checkboxes
- 💾 Persistent Storage: All data saved locally via localStorage (no backend required)

### Advanced Features
- 🔐 Social Verification: Connect LinkedIn/Twitter to auto-verify milestone achievements
  - LinkedIn: Detects job changes, promotions, profile updates
  - Twitter: Scans posts for goal-related keywords and wins
  - Gold verification badges for proven progress
- 🧘 Current State Analysis: AI-powered vibrational alignment assessment
  - Energy & alignment sliders (1-10)
  - Optional journal entries
  - Personalized "vibe score" (0-100) with actionable nudges

### Design Philosophy
- Old Money Aesthetic: Elegant serif typography, neutral palette (ivory, deep brown, gold)
- Minimal & Luxurious: Clean lines, generous whitespace, subtle animations
- Mobile-Responsive: Fully optimized for all screen sizes


## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/sparkwish.git
cd sparkwish

# Install dependencies
npm install

# Start development server
npm start
```
The app will open at http://localhost:3000

### Build for Production
```bash
npm run build
```


## 📁 Project Structure
```
sparkwish/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Landing.js              # Hero & features landing page
│   │   ├── AuthPage.js             # Login/signup flow
│   │   ├── ManifestForm.js         # Manifestation creation form
│   │   ├── Dashboard.js            # Main manifestation dashboard
│   │   ├── StateAnalyzer.js        # Current state analysis modal
│   │   ├── VerificationModal.js    # Social verification flow
│   │   └── ProfilePage.js          # Account & linked socials settings
│   ├── services/
│   │   ├── mockAuth.js             # Mock authentication service
│   │   ├── mockOAuth.js            # Mock OAuth (LinkedIn/Twitter)
│   │   └── aiService.js            # AI analysis functions
│   ├── App.js                      # Main app with routing logic
│   ├── index.js                    # React entry point
│   └── index.css                   # Global styles (Tailwind)
├── package.json
└── README.md
```


## 🎨 Tech Stack

### Frontend
- React 18.2+: Functional components with Hooks (useState, useEffect)
- Tailwind CSS: Utility-first styling with custom old money palette
- Lucide React: Icon library for UI elements
- localStorage: Client-side data persistence

### Planned Integrations (Coming Soon)
- Firebase: Authentication, Firestore database, Cloud Functions
- OAuth 2.0: Real LinkedIn & Twitter API integrations
- OpenAI API: Advanced AI analysis and manifestation coaching
- React Router: Enhanced routing for multi-page experience


## 🔧 Configuration

### Environment Variables (Future)
Create a .env file in the root directory:
```env
# OAuth Credentials
REACT_APP_LINKEDIN_CLIENT_ID=your_linkedin_client_id
REACT_APP_TWITTER_BEARER_TOKEN=your_twitter_bearer_token

# AI Services
REACT_APP_OPENAI_API_KEY=your_openai_api_key

# Firebase (Future)
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

### Current Mock Services
All features currently use mock services for development:
- mockAuth: Simulates Firebase authentication
- mockOAuth: Simulates LinkedIn/Twitter OAuth flows
- analyzeManifestation(): Keyword-based AI categorization
- analyzeState(): Formula-based vibe scoring


## 📖 Usage Guide

### 1. Create Your First Manifestation
- Sign Up: Click "Start Manifesting" and create an account
- Declare Intention: Fill out the manifestation form
  - Title: "Financial Abundance"
  - Description: Detailed vision of your goal
  - Deadline: Target date
  - Optional: Custom affirmation
- AI Analysis: System generates 5 tailored milestones
- Track Progress: Check off milestones as you complete them

### 2. Verify Your Progress
- Connect Socials: Go to Profile → Linked Accounts
- Authorize Access: Connect LinkedIn and/or Twitter
- Scan for Updates: Click "Verify Progress" on any manifestation
- Get Verified Badge: If keywords match, receive confirmation

### 3. Current State Check-In
- Analyze State: Click "Analyze State" button in dashboard
- Rate Your Energy: Use sliders (1-10)
- Optional Journal: Add reflections
- Receive Insights: AI generates vibe score + personalized nudge

## 🎯 Roadmap

### Version 1.0 (Current - MVP)
- Core manifestation creation & tracking
- AI milestone generation (mock)
- Progress bars & milestone checkboxes
- localStorage persistence
- Old money UI/UX design
- Mock authentication flow

### Version 2.0 (In Progress)
- Firebase authentication & Firestore integration
- Real OAuth flows (LinkedIn, Twitter APIs)
- OpenAI GPT-4 integration for analysis
- Firebase Functions for verification logic
- Email/push notifications for reminders

### Version 3.0 (Future)
- Mobile app (React Native)
- Community feed & discussions
- Manifestation templates library
- Guided meditation audio integration
- Analytics dashboard (streak tracking, insights)
- Premium tier with advanced AI coaching


## 🔐 Privacy & Ethics
SparkWish is built with user empowerment and consent at its core:
- Opt-In Everything: All social connections and verifications are optional
- Minimal Data Collection: We only scan for goal-related keywords, never store full profiles
- Revocable Access: Disconnect social accounts anytime from Profile settings
- Transparent AI: All AI suggestions clearly labeled; users maintain full control

### Data Storage (Current MVP)
- All data stored locally in browser localStorage
- No server-side storage or tracking
- Clear browser data to reset completely


## 🤝 Contributing
We welcome contributions! Here's how:
- Fork the repository
- Create a feature branch: `git checkout -b feature/AmazingFeature`
- Commit your changes: `git commit -m 'Add AmazingFeature'`
- Push to branch: `git push origin feature/AmazingFeature`
- Open a Pull Request

### Development Guidelines
- Use functional React components with Hooks
- Follow Tailwind utility-first styling conventions
- Maintain old money aesthetic (neutral palette, serif fonts)
- Add PropTypes or TypeScript for type safety
- Write unit tests for new features (Jest + React Testing Library)
- Ensure accessibility (ARIA labels, keyboard navigation)


## 🐛 Known Issues
- Mock OAuth: Social verification currently uses simulated data
- No Backend: Data only persists in browser localStorage
- Single User: No multi-user support yet (Firebase integration coming)
- Rate Limits: Real API integrations will have rate limits (not in mock)


## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.


## 🙏 Acknowledgments
- Design Inspiration: Old money aesthetics, luxury minimalism
- Icon Library: Lucide Icons
- Manifestation Community: For inspiring this tool
- Create React App: For the development foundation


## 📧 Contact & Support
- Issues: GitHub Issues
- Discussions: GitHub Discussions
- Email: support@sparkwish.app (coming soon)
- Twitter: @SparkWishApp (coming soon)


## 💫 Philosophy
"SparkWish bridges the mystical with the measurable. We believe manifestation works best when paired with intentional action and real-world accountability. Your desires deserve both devotion and data."

Manifest deliberately. Track authentically.
