# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: BSRKV Alumni Website"

# Create a GitHub repository and push
git remote add origin https://github.com/yourusername/bsrkv-alumni-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your `bsrkv-alumni-website` repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"
7. Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `alumni.bsrkv.edu`)
4. Update DNS records as instructed
5. SSL certificate will be automatically provisioned

## Alternative Hosting Options

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings: `npm run build`
4. Publish directory: `.next`
5. Deploy!

### Railway
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will auto-detect Next.js and deploy

### DigitalOcean App Platform
1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Create new app
3. Connect GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Run command: `npm start`
5. Deploy!

## Environment Variables

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=BSRKV Alumni Association
NEXT_PUBLIC_CONTACT_EMAIL=alumni@bsrkv.edu
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
```

For production, add these in your hosting platform's environment variables section.

## Pre-Deployment Checklist

- [ ] All dependencies are in `package.json`
- [ ] No hardcoded localhost URLs
- [ ] Images are optimized
- [ ] Environment variables are set
- [ ] Custom domain is configured (if needed)
- [ ] SSL certificate is active
- [ ] Analytics is set up (optional)

## Post-Deployment

1. Test all pages and functionality
2. Check mobile responsiveness
3. Verify contact forms work
4. Test image loading
5. Check page load speeds
6. Set up monitoring (optional)

## Cost Estimates

- **Vercel**: Free tier (100GB bandwidth, unlimited static sites)
- **Netlify**: Free tier (100GB bandwidth, 300 build minutes)
- **Railway**: $5/month credit (generous free tier)
- **DigitalOcean**: $5/month for basic app

## Support

If you need help with deployment:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Railway: [docs.railway.app](https://docs.railway.app)
