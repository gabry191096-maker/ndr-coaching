# NDR Coaching - Deployment Guide

Save **$15+ per month** by migrating from Replit to affordable hosting alternatives.

## 🎯 Recommended Deployment: Railway ($5/month)

Railway offers the perfect balance of cost and performance for your coaching website.

### ✨ Why Railway?

- **Always-on**: No sleep mode, instant response times
- **Simple deployment**: Push to GitHub, auto-deploys
- **Database included**: PostgreSQL option built-in
- **Custom domains**: Free SSL certificates
- **Cost**: $5/month (includes $5 monthly credit)

---

## 🚀 Railway Deployment (Step-by-Step)

### Step 1: Push Code to GitHub

```bash
# In your Replit console or locally:
git init
git add .
git commit -m "Prepare for Railway deployment"
git branch -M main

# Create a new repository on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/ndr-coaching.git
git push -u origin main
```

### Step 2: Sign Up for Railway

1. Go to **railway.com**
2. Click "Start a New Project"
3. Connect your GitHub account
4. You'll get a **$5 trial credit** (valid 30 days)

### Step 3: Create Database

1. In Railway dashboard, click **"+ New"**
2. Select **"Database" → "PostgreSQL"**
3. Wait for provisioning (~30 seconds)
4. Click the database → **"Connect"** tab
5. Copy the **DATABASE_URL** (starts with `postgresql://...`)

### Step 4: Deploy Your App

1. Click **"+ New" → "GitHub Repo"**
2. Select your `ndr-coaching` repository
3. Railway auto-detects Node.js and starts building

### Step 5: Add Environment Variables

1. Click your web service → **"Variables"** tab
2. Add these environment variables:

```env
DATABASE_URL=postgresql://... (from Step 3)
SESSION_SECRET=your-random-32-char-string
ADMIN_USERNAME=gabrygrim
ADMIN_PASSWORD=your-secure-password
NODE_ENV=production
PORT=3000
```

**Generate SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 6: Configure Build & Deploy

Railway automatically detects your setup, but verify in **Settings** tab:

1. **Build Command**: `npm install && npm run build`
2. **Start Command**: `npm run start`
3. Click **"Deploy"**

**Note**: The current build creates an ESM bundle that works with the existing start command.

### Step 7: Run Database Migrations

After your app is deployed, you need to run migrations **once**:

**Method 1: Railway CLI (Recommended)**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and link to your project
railway login
railway link

# Run migrations remotely
railway run tsx scripts/migrate.ts
railway run tsx scripts/seed.ts
```

**Method 2: Railway Console**
1. Go to your web service → **"Settings"** → **"Deploy Triggers"**
2. Add **"Run Command on Deploy"** (one-time):
   ```bash
   npx tsx scripts/migrate.ts && npx tsx scripts/seed.ts
   ```
3. After migrations complete successfully, **remove this trigger** to prevent re-running on every deploy

**Method 3: Manual via Deployments**
1. After first successful deploy, go to **"Deployments"** tab
2. Click the running deployment → **"Shell"** button
3. Run in the shell:
   ```bash
   npx tsx scripts/migrate.ts
   npx tsx scripts/seed.ts
   ```

### Step 8: Connect Custom Domain

1. Go to **Settings** → **Networking**
2. Click **"Generate Domain"** for free railway.app subdomain
3. **Or add custom domain**:
   - Enter `ndrcoaching.co.uk`
   - Railway provides DNS records
   - Add to your domain registrar:
     ```
     CNAME: @ → your-app.railway.app
     CNAME: www → your-app.railway.app
     ```
4. SSL certificate auto-generates (free)

### Step 9: Verify Deployment

Visit your Railway URL and test:
- ✅ Homepage loads
- ✅ Admin login (`/admin/login`)
- ✅ Blog posts display (`/blog`)
- ✅ Email popup works
- ✅ Pacing calculator loads (`/pacing-calculator`)

---

## 💰 Railway Pricing Breakdown

| Item | Cost |
|------|------|
| **Hobby Plan** | $5/month |
| **Monthly Credit** | -$5 |
| **Effective Cost** | $0 if under $5 usage |

Your app (web service + PostgreSQL) should stay **under $5/month** with normal traffic.

**vs Replit:**
- Replit: $20+/month
- Railway: ~$0-5/month
- **Savings: $15-20/month ($180-240/year)**

---

## 🆓 Alternative: Render (Free Tier)

If you want **completely free** hosting and can tolerate sleep mode:

### Render Free Tier Limitations

- ⚠️ **Apps sleep after 15 minutes of inactivity**
- ⚠️ **Apps automatically stop every night around 3am UTC** (requires restart or new request)
- ⚠️ **50+ second cold start time** when waking from sleep
- ⚠️ **PostgreSQL databases deleted after 90 days of inactivity**
- ⚠️ **Build minutes limited to 400/month** (about 13 deploys)

**Reality Check**: Render free tier is suitable for demos and personal projects, but **not recommended for a client-facing coaching business**. The sleep mode creates a poor user experience - first visitors each hour wait 50+ seconds for the site to wake up.

### Render Deployment Steps

1. **Sign up at render.com**
2. **Create PostgreSQL Database**:
   - Dashboard → "New +" → "PostgreSQL"
   - Name: "ndr-coaching-db"
   - Copy **Internal Database URL**

3. **Create Web Service**:
   - "New +" → "Web Service"
   - Connect GitHub repo
   - Settings:
     - **Name**: ndr-coaching
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm run start`
     - **Plan**: Free

4. **Add Environment Variables**:
   - Click "Environment"
   - Add all variables (DATABASE_URL, SESSION_SECRET, ADMIN_USERNAME, ADMIN_PASSWORD, NODE_ENV=production)

5. **Deploy**:
   - Click "Create Web Service"
   - Wait 3-5 minutes for first deploy
   - Check logs for successful startup

6. **Run Migrations** (After first deploy):
   - Go to your service → **"Shell"** tab
   - Run:
     ```bash
     npx tsx scripts/migrate.ts
     npx tsx scripts/seed.ts
     ```

### Keeping Render Free Tier Awake (Limited Success)

⚠️ **Important**: UptimeRobot can prevent *inactivity-based* sleep, but **cannot prevent the automatic nightly shutdown** that Render enforces on all free tier services.

**Partial Solution:**
1. Sign up at **uptimerobot.com** (free)
2. Add New Monitor:
   - Type: HTTP(s)
   - URL: `https://your-app.onrender.com`
   - Interval: 5 minutes
3. This keeps it awake during the day, but it will still sleep overnight

**Reality**: Free tier users will experience cold starts at least once daily (first visit each morning).

---

## 🗄️ Database Setup (Neon PostgreSQL)

If you prefer a separate database service:

### Neon Free Tier

1. Go to **neon.tech**
2. Sign up (no credit card)
3. Create project: "NDR Coaching"
4. Region: **EU West** (closest to London)
5. Copy connection string:
   ```
   postgresql://user:pass@ep-xxx.eu-west-1.aws.neon.tech/ndrdb?sslmode=require
   ```
6. Use this as **DATABASE_URL** in Railway/Render

**Neon Limits (Free):**
- 500 MB storage
- 100 hours compute/month (enough for low traffic)
- Auto-pause after 5 min inactivity
- Perfect for MVP/demo sites

---

## 🔄 Continuous Deployment

Both Railway and Render auto-deploy when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update homepage"
git push origin main

# Railway/Render automatically:
# 1. Detects push
# 2. Runs build
# 3. Deploys new version
# 4. Switches traffic (zero downtime)
```

---

## 📊 Monitoring & Logs

### Railway Logs
- Dashboard → Your Service → "Deployments"
- Click any deployment → "View Logs"
- Real-time streaming logs

### Render Logs
- Dashboard → Your Service → "Logs" tab
- Filter by severity (info, error, warning)
- Download logs as needed

---

## 🆘 Troubleshooting

### Database Connection Errors

**Error:** `Error: connect ECONNREFUSED`

**Fix:**
1. Verify DATABASE_URL is set correctly
2. Check database is running (Railway/Render dashboard)
3. Ensure migrations ran: `tsx scripts/migrate.ts`

### App Crashes on Startup

**Error:** `Cannot find module`

**Fix:**
1. Check `package.json` dependencies
2. Railway/Render settings → **Build Command**: `npm install`
3. Clear build cache and redeploy

### Admin Login Fails

**Error:** `Invalid credentials` or 500 error

**Fix:**
1. Verify ADMIN_USERNAME and ADMIN_PASSWORD are set
2. Check SESSION_SECRET is set (32+ characters)
3. Ensure database has users table (migrations ran)

---

## ✅ Pre-Migration Checklist

Before leaving Replit:

- [ ] Export email subscribers from `/admin/subscribers`
- [ ] Download all attached assets/images
- [ ] Save any custom environment variables
- [ ] Test deployment on Railway/Render fully
- [ ] Update DNS to point to new host
- [ ] Verify SSL certificate works
- [ ] Test all features (booking, blog, forms)
- [ ] Set up monitoring (UptimeRobot)
- [ ] **Only then cancel Replit subscription**

---

## 💡 Comparison Summary

| Feature | Replit | Railway | Render Free |
|---------|--------|---------|-------------|
| **Cost** | $20+/mo | $5/mo | $0 |
| **Always-on** | ✅ | ✅ | ❌ (sleeps) |
| **Custom Domain** | ✅ | ✅ | ✅ |
| **Database** | ✅ | ✅ | ✅ (90 day limit) |
| **Auto-deploy** | Manual | ✅ | ✅ |
| **SSL** | ✅ | ✅ | ✅ |
| **Build Minutes** | Unlimited | Unlimited | 400/mo |
| **Cold Start** | N/A | N/A | 50+ seconds |

---

## 🎯 Recommendation

**For production coaching business**: Use **Railway ($5/month)**
- Professional, always-on performance
- Saves $15+/month vs Replit
- No sleep mode = better user experience
- Worth the small cost for client-facing site

**For testing/demo**: Use **Render Free**
- Completely free
- Good for low-traffic demos
- Set up UptimeRobot to minimize sleep

---

## 📞 Support

- **Railway Docs**: https://docs.railway.com
- **Render Docs**: https://render.com/docs
- **Neon Docs**: https://neon.tech/docs/introduction

**Need help?** Check the platform's community Discord or documentation.
