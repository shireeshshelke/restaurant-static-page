# GitHub Pages Deployment Guide

## Overview
Your Next.js project is now configured for GitHub Pages deployment with:
- ✅ Automatic static export configuration
- ✅ GitHub Actions CI/CD pipeline
- ✅ Security scanning with Trivy
- ✅ Zero-configuration deployment

## Configuration Added

### 1. **next.config.js** (NEW)
- Enables static HTML export (`output: 'export'`)
- Disables Next.js image optimization
- Optional `basePath` for subdirectory deployment

### 2. **Updated package.json**
New scripts added:
- `npm run build` - Builds the project (already present)
- `npm run export` - Exports static HTML
- `npm run deploy` - Local deployment preparation

### 3. **.github/workflows/deploy.yml** (NEW)
Automatic deployment workflow that:
- Triggers on every push to `main` branch
- Installs dependencies
- Runs Trivy security scan
- Builds the project
- Deploys to GitHub Pages

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)
1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment config"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings: `Settings → Pages`
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - The workflow will run automatically

3. **Monitor deployment:**
   - Go to `Actions` tab in your repository
   - Watch the workflow execute
   - Your site will be live at: `https://yourusername.github.io/repository-name/`

### Option 2: Manual Local Deployment
1. **Build locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Create `.nojekyll` file:**
   ```bash
   touch out/.nojekyll
   ```

3. **Deploy manually:**
   - The `out/` folder contains your static site
   - Upload it manually via GitHub Pages settings

## Important Configuration Notes

### If deploying to a subdirectory:
Edit `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/restaurant-static-page',  // Your repo name
  images: {
    unoptimized: true,
  },
};
```

Update your internal links to use the basePath automatically with Next.js Link component.

## Post-Deployment Verification

✅ **Check deployment status:**
1. Go to `Settings → Pages`
2. You should see: "Your site is live at `https://yourusername.github.io/repository-name/`"

✅ **Verify functionality:**
- [ ] Homepage loads
- [ ] Language switcher works (EN/मराठी)
- [ ] Mobile responsiveness works
- [ ] All internal links navigate correctly
- [ ] Images load properly

## Troubleshooting

### Issue: Site not deploying
**Solution:**
- Check GitHub Actions logs: `Actions` tab → latest workflow
- Ensure GitHub Pages is set to "GitHub Actions" source
- Verify repo is public (or configure private repo GitHub Pages access)

### Issue: Style/CSS not loading
**Solution:**
- Ensure Tailwind CSS build completed
- Check that production build included CSS files
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Assets returning 404
**Solution:**
- If deployed to subdirectory, verify `basePath` is set
- Check that `public/` folder images use correct paths

### Issue: Workflow fails with security scan
**Solution:**
- Trivy scan runs automatically but doesn't block deployment
- Check scan results in Actions logs
- Update dependencies if vulnerabilities found

## Future Deployments

After the initial setup:
1. **Make code changes** locally
2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. **GitHub Actions** automatically:
   - Builds your site
   - Runs security scan
   - Deploys to GitHub Pages
   - Updates your live site

No additional steps needed! 🚀

## Environment Variables (if needed)

If you add environment variables in the future:
1. Create `.env.local` locally (for development)
2. For production, GitHub Actions reads from:
   - Repository Secrets (`Settings → Secrets and variables → Actions`)
   - Environment variables in the workflow file

## Performance Optimization

Your site is now:
- ✅ **Static HTML** - Fast loading, no server needed
- ✅ **CDN hosted** - GitHub Pages provides global CDN
- ✅ **Zero cost** - Free hosting with GitHub Pages
- ✅ **Security verified** - Trivy scans on every deployment

## CI/CD Features

**GitHub Actions Workflow includes:**
- 🔍 Trivy security scanning
- 📦 Automatic dependency caching
- 🔄 Zero-downtime deployments
- 📊 Build status visibility
- 🚀 Concurrent workflows available

## Support & Documentation

- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **GitHub Pages Docs:** https://pages.github.com/
- **GitHub Actions:** https://docs.github.com/en/actions

---

**Your site is now production-ready for GitHub Pages deployment!** ✅🎉
