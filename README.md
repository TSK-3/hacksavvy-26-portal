# HACKSAVVY-26 Portal

Official website for HACKSAVVY-26, a 24-hour national-level hackathon at MGIT, Hyderabad. March 15-16, 2026.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📁 Project Structure

```
hacksavvy-26-portal/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route pages
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── dist/               # Production build output
└── index.html          # HTML template
```

## 🌐 Deployment

This is a **static React application** with no backend dependencies. It can be deployed to any static hosting platform.

**Supported Platforms:**
- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Render
- ✅ Cloudflare Pages
- ✅ AWS S3 + CloudFront
- ✅ Any static hosting service

### Quick Deploy

**Vercel (One-Click)**
```bash
npm i -g vercel
vercel
```

**Netlify (One-Click)**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

**GitHub Pages (Automatic)**
- Push to `main` branch
- GitHub Actions will automatically build and deploy

📖 **[Full Deployment Guide](./DEPLOYMENT.md)** - Detailed instructions for all platforms

## ✨ Features

- 🎨 Modern, responsive design
- 🌓 Dark mode support (next-themes)
- 📱 Mobile-first approach
- ♿ Accessible components (Radix UI)
- 🚀 Optimized performance
- 🔄 Client-side routing with SPA fallback
- 📦 Code splitting for faster loads

## 🔧 Configuration

### No Environment Variables Required

This application works **out of the box** without any environment variables. All configuration is built into the code.

### Build Configuration

The project uses relative paths (`base: "./"`) in `vite.config.ts` for universal deployment compatibility. This ensures assets load correctly regardless of the deployment platform or subdirectory.

### SPA Routing

Client-side routing is configured with fallback support:
- **Vercel**: `vercel.json` handles redirects
- **Netlify**: `netlify.toml` handles redirects
- **GitHub Pages**: GitHub Actions workflow configured

## 📝 Development

### Code Style

- ESLint for code quality
- TypeScript for type safety
- Prettier-style formatting (via ESLint)

### Component Library

UI components are built with:
- shadcn/ui component patterns
- Radix UI primitives
- Tailwind CSS styling
- CVA for variant management

## 🐛 Troubleshooting

**Blank page after deployment?**
- Check browser console for errors
- Verify `base: "./"` in vite.config.ts
- Test locally with `npm run preview`

**404 on routes?**
- Ensure SPA redirect configuration exists
- Check deployment platform documentation

**Assets not loading?**
- Verify build output in `dist/` folder
- Check that relative paths are used

See [DEPLOYMENT.md](./DEPLOYMENT.md) for more troubleshooting tips.

## 📄 License

This project is part of HACKSAVVY-26 event at MGIT, Hyderabad.

## 🤝 Contributing

This is an event-specific website. For issues or suggestions, please open a GitHub issue.

---

**Event Details:**
- 📅 Date: March 15-16, 2026
- 📍 Location: MGIT, Hyderabad
- 💰 Prizes: Worth ₹1L+
- 👥 Participants: 500+ innovators

For more information, visit the deployed website.
