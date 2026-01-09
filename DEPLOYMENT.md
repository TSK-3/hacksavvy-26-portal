# Deployment Guide

This project is a **static React + Vite + TypeScript application** that can be deployed to any static hosting platform. The application has no backend dependencies, database connections, or environment variables required.

## Prerequisites

- Node.js 18+ installed locally
- Git installed
- Account on your chosen hosting platform

## Build the Project Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The build outputs to the `dist/` folder and includes:
- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and other assets
- `favicon.ico` and other public files

## Deployment Options

### 1. Deploy to Vercel

**Vercel** is the easiest option and works seamlessly with this project.

#### Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect the framework settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**

Your site will be live at `https://your-project.vercel.app`

#### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Configuration**: The included `vercel.json` handles SPA routing automatically.

---

### 2. Deploy to Netlify

**Netlify** offers great performance and built-in CI/CD.

#### Via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to your Git provider and select the repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18
5. Click **"Deploy site"**

Your site will be live at `https://your-project.netlify.app`

#### Via Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

**Configuration**: The included `netlify.toml` configures:
- Build settings
- SPA redirects (all routes → index.html)
- Caching headers for assets

---

### 3. Deploy to GitHub Pages

**GitHub Pages** is free for public repositories.

#### Setup Steps

1. **Enable GitHub Pages** for your repository:
   - Go to repository **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source**: GitHub Actions

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

3. The included `.github/workflows/deploy.yml` will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

4. Your site will be available at:
   ```
   https://<username>.github.io/<repository-name>/
   ```

**Note**: For custom domains, add a `CNAME` file to the `public/` folder.

#### Manual Deployment (Alternative)

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

### 4. Deploy to Render

**Render** offers static site hosting with automatic deployments.

1. Go to [render.com](https://render.com) and sign in
2. Click **"New"** → **"Static Site"**
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **"Create Static Site"**

---

## Environment Variables

**This application requires NO environment variables** to run. All configuration is built into the code. The app will work immediately after deployment without any additional setup.

## SPA Routing

This project uses React Router for client-side routing. The deployment configurations ensure that:
- All routes (e.g., `/about-mgit`) are redirected to `/index.html`
- React Router handles the navigation client-side
- Direct URL access and page refreshes work correctly

## Troubleshooting

### Blank Page After Deployment

1. Check browser console for errors
2. Verify build completed successfully: `npm run build`
3. Test locally: `npm run preview`
4. Check that `base: "./"` is set in `vite.config.ts`

### 404 Errors on Routes

- Verify SPA redirect configuration is in place
- For Vercel: Check `vercel.json` exists
- For Netlify: Check `netlify.toml` exists
- For GitHub Pages: Check workflow is running

### Assets Not Loading

- Ensure `base: "./"` is set in `vite.config.ts` (relative paths)
- Check that all files in `public/` are copied to `dist/`
- Verify build output in `dist/` folder

## Performance Optimization

The build is already optimized with:
- ✅ Code splitting (vendor chunks separate from app code)
- ✅ Minification and tree-shaking
- ✅ Asset caching headers (31536000s = 1 year)
- ✅ CSS extraction and optimization

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain and follow DNS instructions

### Netlify
1. Go to Domain Settings
2. Add custom domain and configure DNS

### GitHub Pages
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS with your provider:
   - Add A records pointing to GitHub Pages IPs
   - Or add CNAME record pointing to `<username>.github.io`

## Support

For platform-specific issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- Render: [render.com/docs](https://render.com/docs)
