# Vercel Deployment Guide for NDR Coaching

This guide will help you deploy your NDR Coaching website to Vercel for **FREE hosting**.

## 📋 Prerequisites

1. **GitHub account** (to store your code)
2. **Vercel account** (free tier - sign up at vercel.com)
3. **Free database** (Neon or Supabase)
4. **Your environment secrets** (admin credentials, session secret)

---

## 🚀 Step 1: Download Your Code from Replit

### Option A: Use GitHub Integration (Recommended)

1. In Replit, click the **Version Control** icon (Git icon in left sidebar)
2. Click "Create a Git repository"
3. Click "Connect to GitHub"
4. Authorize Replit to access GitHub
5. Create a new repository: `ndr-coaching`
6. Push your code

### Option B: Manual Download

1. Download as ZIP from Replit
2. Extract on your computer
3. Create a new GitHub repository at github.com
4. Push your code:
```bash
git init
git add .
git commit -m "Initial commit for Vercel deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ndr-coaching.git
git push -u origin main
```

---

## 🗄️ Step 2: Set Up Free PostgreSQL Database

### Option A: Neon (Recommended)

1. Go to **neon.tech**
2. Sign up (free - no credit card required)
3. Create new project:
   - Name: "NDR Coaching"
   - Region: Choose closest to London (EU West)
4. **Copy the connection string** (looks like this):
   ```
   postgresql://user:password@ep-xxx.eu-west-1.aws.neon.tech/ndrdb?sslmode=require
   ```
5. Save this - you'll need it in Step 4

**Neon Free Tier:**
- ✅ 500 MB storage (more than enough)
- ✅ No credit card required
- ✅ Automatic backups
- ✅ Perfect for your needs

### Option B: Supabase

1. Go to **supabase.com**
2. Create account (free)
3. New Project → "NDR Coaching"
4. Go to Settings → Database
5. Copy the connection string (select "Connection pooling" mode)
6. Save for later

---

## 🔧 Step 3: Deploy to Vercel

1. **Go to vercel.com** and sign up/login
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repo: `ndr-coaching`
5. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **DO NOT DEPLOY YET** - Click "Environment Variables" first

---

## 🔐 Step 4: Add Environment Variables

Before deploying, add these environment variables in Vercel:

Click **"Environment Variables"** and add each one:

### Required Variables:

| Variable Name | Value | Example |
|--------------|-------|---------|
| `DATABASE_URL` | Your Neon/Supabase connection string | `postgresql://user:pass@host/db` |
| `SESSION_SECRET` | Any random 32+ character string | `your-super-secret-key-here-min-32-chars` |
| `ADMIN_USERNAME` | Your admin username | `gabrygrim` |
| `ADMIN_PASSWORD` | Your admin password | `NDRcoaching` |
| `NODE_ENV` | production | `production` |

**To generate SESSION_SECRET:**
```bash
# Run this in terminal to generate random string:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Important Notes:
- Select **"Production", "Preview", and "Development"** for all variables
- Double-check DATABASE_URL is correct
- Keep ADMIN_PASSWORD secure

---

## ✅ Step 5: Deploy!

1. After adding all environment variables, click **"Deploy"**
2. Vercel will:
   - Install packages
   - Run migrations (creates database tables)
   - Seed sample blog posts
   - Build your site
   - Deploy to production
3. Wait 2-3 minutes for first deployment

---

## 🌐 Step 6: Connect Custom Domain (ndrcoaching.co.uk)

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click **"Add Domain"**
   - Enter: `ndrcoaching.co.uk`
   - Click "Add"

2. **Vercel will show DNS records to add:**
   ```
   A Record:
   Name: @
   Value: 76.76.21.21

   CNAME Record (for www):
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update DNS at your domain registrar:**
   - Log into wherever you bought ndrcoaching.co.uk
   - Go to DNS settings
   - Add the A record and CNAME record from Vercel
   - Save changes

4. **Wait for DNS propagation** (5-60 minutes)
   - Vercel will auto-verify when DNS is ready
   - You'll get automatic HTTPS/SSL certificate (free!)

5. **Test your site:**
   - Visit `https://ndrcoaching.co.uk`
   - Should load your site with green padlock (HTTPS)

---

## 🧪 Step 7: Test Everything Works

### Test Admin Login:
1. Go to `https://ndrcoaching.co.uk/admin/login`
2. Login with your credentials
3. Check subscriber dashboard loads
4. Try logout

### Test Lead Popup:
1. Visit homepage (wait 10 seconds for popup)
2. Enter test email
3. Check it appears in admin dashboard

### Test Pacing Calculator:
1. Go to `/pacing-calculator`
2. Enter LT1/LT2 values
3. Generate pacing recommendations

### Test Blog:
1. Go to `/blog`
2. Check sample posts appear
3. Click one to view full post

---

## 📊 Post-Deployment Checklist

- ✅ Site loads at ndrcoaching.co.uk
- ✅ HTTPS works (green padlock)
- ✅ Admin login works
- ✅ Email popup collects subscribers
- ✅ Admin dashboard shows subscribers
- ✅ All pages load correctly
- ✅ Blog posts display
- ✅ Pacing calculator works
- ✅ Calendly booking widget works

---

## 💰 Monthly Costs

| Service | Cost | What You Get |
|---------|------|--------------|
| **Vercel** | $0/month | Hosting, SSL, CDN, automatic deployments |
| **Neon/Supabase** | $0/month | PostgreSQL database (500MB) |
| **Domain** | ~£10/year | ndrcoaching.co.uk (you already own this) |
| **Total** | **$0/month** | Professional website, unlimited traffic |

---

## 🔄 How to Update Your Site (After Initial Deployment)

### Method 1: Git Push (Automatic)
```bash
# Make changes to your code
git add .
git commit -m "Updated homepage"
git push origin main
```
→ Vercel automatically deploys within 1-2 minutes!

### Method 2: Via Replit
1. Make changes in Replit
2. Use Git integration to commit & push
3. Vercel auto-deploys

---

## 🆘 Troubleshooting

### "500 Internal Server Error"
**Cause:** Missing environment variables
**Fix:** 
1. Vercel Dashboard → Settings → Environment Variables
2. Verify all 5 variables are set
3. Redeploy: Deployments → click ⋯ → Redeploy

### "Database connection failed"
**Cause:** Wrong DATABASE_URL
**Fix:**
1. Copy connection string again from Neon/Supabase
2. Update DATABASE_URL in Vercel
3. Redeploy

### Admin login doesn't work
**Cause:** ADMIN_USERNAME or ADMIN_PASSWORD not set
**Fix:**
1. Check environment variables in Vercel
2. Verify credentials match what you're entering
3. Redeploy

### Blank page / assets not loading
**Cause:** Build failed or wrong build settings
**Fix:**
1. Vercel Dashboard → Deployments → View build logs
2. Check for errors
3. Verify build settings match Step 3

---

## 📧 Exporting Email Subscribers

Before canceling Replit, export your current subscribers:

1. Login to Replit version: `/admin/subscribers`
2. Click **"Export CSV"**
3. Save the file

After Vercel deployment:
1. Login to new site: `https://ndrcoaching.co.uk/admin/subscribers`
2. Your database starts fresh (no old subscribers)
3. **Note:** Email collection will work going forward

---

## ✨ What's Different on Vercel vs Replit?

| Feature | Replit | Vercel |
|---------|--------|--------|
| **Cost** | Paid subscription | FREE |
| **Speed** | Good | Faster (global CDN) |
| **Uptime** | Requires subscription | 99.99% free |
| **Auto-deploy** | Manual | Automatic on git push |
| **SSL/HTTPS** | Included | Included |
| **Custom domain** | Supported | Supported |
| **Database** | Included | External (free) |
| **Complexity** | Simple | Slightly more setup |

---

## 🎉 Success!

Once deployed, your site will be:
- ✅ Live 24/7 on ndrcoaching.co.uk
- ✅ Costing $0/month
- ✅ Fast (global CDN)
- ✅ Secure (HTTPS)
- ✅ Automatically backed up
- ✅ Auto-deploys on code changes

**You can safely cancel your Replit subscription!**

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Neon Dashboard:** https://console.neon.tech
- **Vercel Docs:** https://vercel.com/docs
- **Support:** If you have issues, check Vercel's community forum or documentation

---

## 📝 Next Steps

1. Monitor your site analytics in Vercel Dashboard
2. Set up email marketing integration (Mailchimp, ConvertKit, etc.)
3. Add more blog posts to drive SEO traffic
4. Implement referral program for viral growth
5. Consider adding Stripe for paid coaching services

**Questions?** Check Vercel's excellent documentation or their community Discord.
