# SparkWish ✨

**Manifest Your Desires. Track Your Spark.**

SparkWish is an elegant manifestation tracking application that helps you transform your desires into reality through intelligent goal breakdown, progress tracking, and mindful action.

## Features

- 🎯 **Declare Your Manifestations** - Articulate your deepest desires with intention and clarity
- 🤖 **AI-Powered Goal Breakdown** - Receive intelligent milestone suggestions tailored to your manifestation
- 📊 **Visual Progress Tracking** - Monitor your advancement with elegant progress indicators
- 📅 **Daily Alignment Reminders** - Stay connected to your intentions with gentle nudges
- 💾 **Local Storage** - Your manifestations are saved locally in your browser

## Categories

SparkWish automatically categorizes your manifestations into:
- 💰 **Financial** - Money, abundance, wealth, prosperity
- 💪 **Health** - Fitness, wellness, nutrition, body
- 💼 **Career** - Professional growth, business, success
- ❤️ **Relationship** - Love, partnership, family, connections
- 🌱 **Personal** - Growth, learning, mindfulness, spiritual development

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/SparkWish.git
cd SparkWish
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
SparkWish/
├── SparkWish.jsx      # Main React component
├── main.jsx           # React entry point
├── index.html         # HTML template
├── index.css          # Tailwind CSS imports
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── README.md          # This file
```

## Usage

1. **Landing Page** - Start by exploring the features and clicking "Start Manifesting"
2. **Create Manifestation** - Fill in your manifestation details:
   - Title (e.g., "Financial Abundance")
   - Detailed intention description
   - Target deadline
   - Optional personal affirmation
3. **Dashboard** - View all your manifestations, track progress, and manage milestones
4. **Milestones** - Click on a manifestation card to view and complete milestones

## How It Works

When you create a manifestation, SparkWish:
1. Analyzes your title and description using keyword matching
2. Categorizes your manifestation automatically
3. Generates 5 personalized milestones based on the category
4. Creates a custom affirmation (or uses yours)
5. Saves everything to localStorage for persistence

## Data Storage

All your manifestations are stored locally in your browser's localStorage. This means:
- ✅ Your data stays private on your device
- ✅ No account or login required
- ⚠️ Clearing browser data will remove your manifestations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

Made with ✨ and intention
