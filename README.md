# The Barber Studio — Premium Barbershop Template

A responsive, single-page barbershop template with a black, cream and gold palette. Built with HTML, CSS and native JavaScript ES Modules, without a build step or external JavaScript dependencies.

[Live demo](https://davemontero.github.io/barbershop-premium-template/)

## Features

- Responsive navigation with keyboard support and Escape-to-close behavior.
- Services, barber cards, an image gallery and a responsive testimonials carousel.
- Native FAQ accordion with one answer open at a time in supporting modern browsers.
- Optimized WebP photographs, explicit image dimensions and lazy loading below the hero.
- Modular CSS and JavaScript, ready for customization.

## Run locally

Serve the project through a local HTTP server so ES Modules can load. For example, with Python installed:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser. Do not open `index.html` directly with a `file://` URL.

## Project structure

- `index.html`: page content, navigation and metadata.
- `css/main.css`: stylesheet entry point.
- `css/variables.css`: shared colors, typography and spacing.
- `css/components/`: shared buttons and navigation.
- `css/sections/`: section-specific styles and responsive rules.
- `js/main.js`: ES Module entry point and demo-link behavior.
- `js/modules/`: navigation and testimonials modules.
- `images/`: optimized WebP assets with lowercase, hyphenated filenames.

## Demo content and customization

This is a presentation template, not a working booking system.

- Booking buttons intentionally use `href="#"`. JavaScript prevents these placeholder links from navigating or jumping to the top. Connect them to the client's booking provider when needed.
- Replace the brand, services, prices, opening hours, FAQ policies and testimonials in `index.html` before using the template for a real business.
- Alex Morgan, Liam Carter and Noah Bennett are fictional sample names; they do not identify the people in the photographs.
- The address, city and postal code are placeholders. The directions link opens Google Maps without pointing to a business.
- Social links and the gallery button open the platforms' main websites. Replace them with the client's profile URLs.
- The Visit Us photograph depicts an AI-generated fictional barbershop.
- Google Fonts are loaded from an external service.

The shared photographic tone is controlled in `css/base.css` using a subtle CSS filter. The images retain their original content. See `css/README.md` for styling conventions.

## Deployment

GitHub Pages publishes the root of the `main` branch. Keep asset paths relative so the template works under a repository subdirectory. No compilation is required.
