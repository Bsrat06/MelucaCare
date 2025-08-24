# Meluca Care

This project is set up with React, TypeScript, Tailwind CSS, and shadcn/ui using Vite.

## Getting Started

- Install dependencies: `npm install`
- Start development server: `npm run dev`

## Features
- React + TypeScript
- Tailwind CSS
- shadcn/ui component library

## Customization
- Add shadcn/ui components using `npx shadcn@latest add <component>`
- Tailwind config: `tailwind.config.js`
- shadcn/ui config: `components.json`

---

For more info, see the documentation for [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
