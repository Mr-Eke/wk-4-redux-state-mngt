# React Redux Counter

A counter app built with React, TypeScript and Vite, using Redux for state management without Redux Toolkit. State changes are logged to the browser console with `redux-logger`.

## Requirements

- Node.js `20.19.0` or later (or `22.12.0` or later)
- npm

Check your versions:

```bash
node -v
npm -v
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Mr-Eke/wk-4-redux-state-mngt.git
   ```
2. Move into the app folder:
   ```bash
   cd wk-4-redux-state-mngt/react-redux-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## Using the App

- **+** increases the counter by 1.
- **-** decreases the counter by 1.
- **Reset** sets the counter back to 0.

Open the browser developer tools (F12) and go to the **Console** tab. Each click logs the dispatched action (`INCREMENT`, `DECREMENT` or `RESET`) with the state before and after it.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server at `http://localhost:5173` |
| `npm run build` | Type-checks the project and builds it into `dist/` |
| `npm run preview` | Serves the `dist/` build at `http://localhost:4173` (run `npm run build` first) |
| `npm run lint` | Lints the project with Oxlint |

