# React Movie App

A responsive movie discovery application built with React and Vite. Browse popular movies, search for titles using The Movie Database (TMDB) API, and save movies to a persistent favorites list.

## Live Demo

[View the live application](https://react-movie-app-dun.vercel.app)

## Features

- Browse a list of popular movies on the home page
- Search for movies by title
- Display movie posters, titles, and release years
- Add and remove movies from favorites
- Persist favorites in the browser with `localStorage`
- Client-side navigation between Home and Favorites pages
- Responsive layout for desktop and mobile screens
- Reusable React components and centralized movie state management

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [React Router](https://reactrouter.com/) 7
- JavaScript (ES modules)
- CSS
- TMDB API for movie data and poster images
- ESLint for code quality

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Displays popular movies and provides movie search functionality |
| `/favorites` | Displays movies saved by the user |

## Project Structure

```text
react-movie-app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/             # Static source assets
│   ├── components/
│   │   ├── MovieCard.jsx   # Movie poster, metadata, and favorite action
│   │   └── NavBar.jsx      # Application navigation
│   ├── contexts/
│   │   └── MovieContext.jsx# Favorites state and localStorage persistence
│   ├── css/                # Application and component styles
│   ├── pages/
│   │   ├── Home.jsx        # Popular movies and search page
│   │   └── Favorites.jsx   # Saved movies page
│   ├── services/
│   │   └── api.js          # TMDB API requests
│   ├── App.jsx             # Routes and application shell
│   └── main.jsx            # React entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or later
- npm 9 or later
- A TMDB API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gihanmadurapriya/react-movie-app.git
   ```

2. Move into the project directory:

   ```bash
   cd react-movie-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown by Vite, usually:

   ```text
   http://localhost:5173
   ```

## TMDB API Configuration

The application uses TMDB to retrieve popular movies and search results. For local development, create a TMDB API key and configure it in `src/services/api.js`.

For production applications, avoid committing API keys directly to source control. A recommended approach is to use a Vite environment variable:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Then read it in the API service with:

```js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

If the API key is changed to an environment variable, restart the Vite development server after updating the `.env` file.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs ESLint across the project |

## How It Works

### Movie discovery and search

The Home page loads popular movies when the application starts. Users can enter a movie title in the search field to request matching results from TMDB.

### Favorites

Favorites are managed through `MovieContext`, which exposes methods for adding, removing, and checking favorite movies. The favorites list is saved to `localStorage`, so it remains available after the browser is refreshed.

### Movie posters

Poster images are loaded from TMDB's image service using each movie's `poster_path` value.

## Building for Production

Create a production build with:

```bash
npm run build
```

To preview the generated build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

## Deployment

This project can be deployed to services that support Vite applications, including Vercel, Netlify, GitHub Pages, or any static hosting provider.

For a typical Vercel deployment:

1. Import the GitHub repository into Vercel.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Add `VITE_TMDB_API_KEY` as an environment variable if the project uses environment-based API configuration.
5. Deploy the project.

## Troubleshooting

### Movies do not load

- Confirm that the TMDB API key is valid.
- Check the browser console for API or network errors.
- Verify that the API key is configured correctly.
- Make sure the development server was restarted after changing environment variables.

### Favorites disappear

Favorites are stored in the browser's `localStorage`. Clearing site data, using a private browsing session, or switching browsers will remove or hide previously saved favorites.

### The page does not load after refreshing a route

When deploying a single-page application, configure the hosting provider to redirect unknown routes to `index.html`. This allows React Router to handle routes such as `/favorites`.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes.
4. Run the checks:

   ```bash
   npm run lint
   npm run build
   ```

5. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

6. Push the branch and open a pull request.

## License

No license has been specified for this repository yet. Add a license file if you intend to allow others to use, modify, or distribute the project under specific terms.

## Acknowledgements

- Movie data and poster images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).
- The application is built with [React](https://react.dev/) and [Vite](https://vite.dev/).
