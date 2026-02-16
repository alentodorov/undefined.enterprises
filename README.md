# undefined.enterprises

A one-page website for undefined.enterprises - a studio exploring what's possible when code cost approaches zero.

## Stack

- **11ty** - Static site generator
- **Tailwind CSS 4** - Styling with the new v4 CSS-first architecture
- **Bun** - Fast JavaScript runtime and package manager

## Design Inspiration

Inspired by [sfcompute.com](https://sfcompute.com/) - minimalist design with:
- Serif headings + sans-serif body text (Inter)
- Generous whitespace and max-width containers
- Clean, professional aesthetic
- Restrained color palette

## Development

```bash
# Install dependencies
bun install

# Start 11ty development server (auto-rebuilds CSS on changes)
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:8080/`

11ty handles serving and watching. CSS is automatically rebuilt before each build and when source files change.

## Project Structure

```
├── src/
│   ├── _data/
│   │   └── projects.js      # Portfolio projects data
│   ├── _includes/
│   │   └── base.njk         # Base HTML layout
│   ├── public/
│   │   └── css/
│   │       └── styles.css   # Compiled Tailwind CSS (generated)
│   ├── index.njk            # Main page template
│   └── styles.css           # Tailwind CSS source
├── _site/                   # Generated site (git-ignored)
├── .eleventy.js             # 11ty configuration
└── package.json             # Dependencies and scripts
```

## Content

Projects are managed in `src/_data/projects.js`. Each project includes:
- Name
- Launch date
- Status (launched, pre-launch, graveyard)
- Description
- URL
- OG image

## Deployment

Build the site with `bun run build` and deploy the `_site/` directory to any static hosting service.
