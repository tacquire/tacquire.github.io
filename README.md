# Pankajkumar Mishra — Developer Portfolio Website

A modern, high-performance developer portfolio website built with Vite, HTML5, Vanilla CSS, and JavaScript.

Live local preview: `http://localhost:3000/`

---

## 🚀 How to Host on GitHub Pages

This repository is pre-configured for seamless GitHub Pages deployment using two easy methods:

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub under your user account (`tacquire/portfolio` or `tacquire/tacquire.github.io`).
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/tacquire/portfolio.git
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) will automatically build and publish your site whenever you push to `main`!

---

### Method 2: Manual CLI Deployment via `npm run deploy`

1. Push your repository to GitHub.
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
   This will automatically compile the production bundle (`dist/`) and publish it to the `gh-pages` branch on GitHub.
3. On GitHub, go to **Settings** → **Pages**, select branch **`gh-pages`**, folder **`/ (root)`**, and click **Save**.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Production build test
npm run build
```
