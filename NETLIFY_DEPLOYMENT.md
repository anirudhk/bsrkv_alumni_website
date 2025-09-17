# 🚀 Netlify Deployment Guide

## Option 1: Drag & Drop (No Login Required)

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Scroll down to "Deploy manually"
3. Drag your entire project folder to the deploy area
4. Wait for deployment to complete
5. Get your live URL!

## Option 2: GitHub Integration

### Step 1: Push to GitHub (Already Done)
Your code is already on GitHub at:
`https://github.com/anirudhk/bsrkv_alumni_website`

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" (free)
3. Choose "Sign up with GitHub"
4. Click "New site from Git"
5. Select your repository: `bsrkv_alumni_website`
6. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
7. Click "Deploy site"

## Option 3: Command Line (Surge.sh)

### Install Surge
```bash
npm install -g surge
```

### Deploy
```bash
npm run build
cd .next
surge
```

## Option 4: GitHub Pages

### Step 1: Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Step 2: Build and Deploy
```bash
npm run build
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / `root`
5. Save

## 🎯 Recommended: Netlify

**Why Netlify?**
- ✅ No login required for basic deployment
- ✅ Free tier with generous limits
- ✅ Automatic deployments from GitHub
- ✅ Custom domains
- ✅ SSL certificates included
- ✅ Form handling built-in
- ✅ Perfect for Next.js

**Your Live URL will be:**
`https://bsrkv-alumni-website.netlify.app`

## 🔧 Build Configuration

I've added a `netlify.toml` file with the correct settings for Next.js deployment.

## 📱 Testing Your Deployment

After deployment:
1. Visit your live URL
2. Test all pages:
   - Homepage
   - Alumni Directory
   - Events
   - News
   - About
   - Contact
   - Register
3. Test the registration form
4. Check mobile responsiveness

## 🚨 Important Notes

### For Database Integration:
If you want to use Supabase (database), you'll need to:
1. Set up Supabase project
2. Add environment variables in Netlify
3. Update the code to use real data

### For Custom Domain:
1. Buy a domain (e.g., `alumni.bsrkv.edu`)
2. Add it in Netlify dashboard
3. Update DNS records
4. SSL will be automatic

## 🆘 Troubleshooting

**Build Fails?**
- Check `package.json` has all dependencies
- Ensure `npm run build` works locally
- Check Netlify build logs

**Pages Not Loading?**
- Check if it's a Next.js routing issue
- Verify `netlify.toml` configuration
- Check browser console for errors

**Need Help?**
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Community: [community.netlify.com](https://community.netlify.com)
