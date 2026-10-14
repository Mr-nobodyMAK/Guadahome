# Guadahome

A responsive real estate landing page for properties in Addis Ababa, Ethiopia.
Built with plain HTML, CSS and JavaScript (no build step).

## Features

- Responsive layout (mobile, tablet, desktop)
- Search bar (buy / sell / rent, property type, location)
- Property cards with a favourite toggle
- Renovation feature sections, video section and customer stories
- Accessible navigation (keyboard, `aria-expanded`, Escape to close)

## Project structure

```
guadahome/
├── index.html
├── README.md
├── .gitignore
├── docs/
│   └── style-guide.md      # design tokens and font links
└── assets/
    ├── css/style.css
    ├── js/script.js
    └── images/             # logo, hero, property, story, avatar images, favicon.svg
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Images

The `assets/images/` folder must contain the files referenced in `index.html`:
`logo.png`, `hero.png`, `bg-pattern.png`, `video-card.jpg`,
`feature-banner-1.jpg`, `feature-banner-2.jpg`, `property-1.jpg` to `property-8.jpg`,
`avatar-1.jpg` to `avatar-4.jpg`, `story-1.jpg` to `story-6.jpg`,
`story-avatar-1.jpg` to `story-avatar-6.jpg`,
`facebook.svg`, `twitter.svg`, `insta.svg`, `favicon.svg`.

## Credits

Layout based on a template by [codewithsadee](https://github.com/codewithsadee).
Customised by Mikiyas Sisay.

## License

Add a license after checking the terms of the original template.
