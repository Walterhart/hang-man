# Hangman Game

An interactive Hangman game built with React and Vite. This application lets you guess hidden words by selecting letters, with a limited number of wrong guesses allowed. The project was created to practice React fundamentals and game logic.

## Features

- **Classic Hangman Gameplay** – Guess the word by picking letters, but too many mistakes and you lose!
- **Responsive Design** – Play on desktop or mobile devices.
- **Customizable Word List** – Easily add or modify words in the game.
- **Accessible UI** – Keyboard navigation and screen reader support.
- **Fast Performance** – Powered by Vite for instant reloads.

## Tech Stack

- **Frontend**: React 18+ with Vite
- **State Management**: React Hooks
- **Styling**: CSS Modules
- **Icons**: Custom SVG components

## Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wordle-game.git
   cd wordle-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

## Project Structure

```
wordle-game/
├── src/
│   ├── component/
│   │   ├── Header.jsx           # Game header
│   │   ├── Heart.jsx            # Heart/life indicator
│   │   ├── Keyboard.jsx         # On-screen keyboard
│   │   ├── RenderGameStatus.jsx # Game status messages
│   ├── data/
│   │   └── word.js              # Word list and randomizer
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # App entry point
├── public/                      # Static assets
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

## Key Features Explained

### Gameplay Flow
- Select letters using the on-screen keyboard
- Each incorrect guess breaks a heart
- Reveal the word when you win or lose
- Start a new game with a single click

### Accessibility
- Screen reader announcements for guesses and game status
- Keyboard navigation for letter selection

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Scrimba](https://scrimba.com)

---

Made with React
