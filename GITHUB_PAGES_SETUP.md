# 🚀 GitHub Pages Setup - Quick Start

## What Was Added

Your project now has everything needed for GitHub Pages deployment:

```
✅ next.config.js           - Static export configuration
✅ .github/workflows/       - Automatic deployment setup
✅ package.json scripts     - Build & export commands
✅ DEPLOYMENT.md            - Full deployment guide
```

## 5-Minute Setup

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add GitHub Pages deployment config"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** (top right)
3. Scroll to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Set **Source** to "GitHub Actions"
5. Done! ✅

### Step 3: Monitor Deployment
1. Go to **Actions** tab
2. Watch your workflow run automatically
3. Once complete, your site is live! 🎉

**Your site will be at:**
```
https://yourusername.github.io/repository-name/
```

---

## Test Your Deployment

After deployment, verify these work:
- ✅ Homepage loads
- ✅ Language switcher (EN/मराठी) works
- ✅ Navigation links work
- ✅ All sections load and scroll
- ✅ Mobile layout is responsive

---

## What Happens Automatically

Every time you push code to `main`:
1. GitHub Actions triggers build
2. Runs Trivy security scan
3. Builds & exports static site
4. Deploys to GitHub Pages
5. Your live site updates instantly ⚡

---

## If Deployed to Subdirectory

If your repo name doesn't match your domain, edit `next.config.js`:

```javascript
basePath: '/your-repo-name',  // Add this line
```

Then all internal links work automatically! 🔗

---

## Troubleshooting

**Site not showing?**
→ Check Actions tab for build errors

**Styles not loading?**
→ Clear browser cache (Ctrl+Shift+Delete)

**404 errors?**
→ Check that `basePath` matches repo name (if using subdirectory)

---

## Next Steps

- 📖 Read full guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🔗 Push to GitHub and watch magic happen!
- 📊 Monitor builds in Actions tab
- 🎯 Share your live link!

---

**That's it! Your site is now ready for GitHub Pages deployment.** ✨
