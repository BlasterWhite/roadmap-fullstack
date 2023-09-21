# [Roadmap Fullstack](https://roadmap.sh/full-stack)

## Tailwind CSS 🌬️

### Useful links
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind CSS - Installation vite & vue](https://tailwindcss.com/docs/guides/vite#vue)

### Installation
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configuration
- `tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- `style.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Production

- `tailwind.config.js`
```bash
npx tailwindcss -o build.css --minify
```
