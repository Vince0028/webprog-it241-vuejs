# Vue Resume App

This Vue.js application displays Vince's resume website.

## 🚀 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 What's Inside

- **App.vue** - Main application wrapper
- **main.js** - Application entry point
- **components/ResumeWebsite.vue** - Component that displays the resume via iframe
- **public/website_resume/** - Resume website files (HTML, CSS, JS, images)

## 🌐 Deployment

This app is configured for Vercel:

1. The build command is: `npm run build`
2. The output directory is: `dist`
3. Vercel will automatically detect these settings

## 📝 Notes

- The resume is loaded from `/website_resume/html/index.html`
- All resume assets are in the `public` folder and will be copied to `dist` during build
- The iframe displays the resume in full-screen mode

---
Built with Vue 3 + Vite
