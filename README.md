# Film Library - React Application

A comprehensive film library application built with React and Vite. Discover and explore amazing movies with detailed information, cast, reviews, and industry insights.

## 🎬 Features

- **Movie Discovery**: Browse trending and top-rated movies
- **Genre Filtering**: Find movies by genre
- **Detailed Information**: View movie details, cast, and reviews
- **Search Functionality**: Search for specific movies
- **Industry Insights**: Learn about film industry revenue progression
- **Responsive Design**: Works on all devices

## 🚀 Live Demo

[View Live Site](https://vladdergun.github.io/FilmLibrary-React/#/)

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **TMDB API** - Movie database
- **CSS Modules** - Component styling

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Create a `.env` file with your TMDB API credentials:
   ```
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_API_KEY=your_api_key_here
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## 🏗️ Build & Deploy

### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push to main branch to trigger deployment
2. Add environment variables in GitHub Secrets:
   - `VITE_TMDB_BASE_URL`
   - `VITE_TMDB_API_KEY`
3. Your site will be available at: `https://[username].github.io/FilmLibrary-React/`

### Manual Deployment

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── api/           # API service functions
└── assets/        # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.
