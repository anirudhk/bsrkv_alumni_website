# 🗄️ Database Setup Guide

## Current Status: No Data Storage
Currently, when alumni click "Join Our Community", the form data is only logged to the browser console and not saved anywhere.

## 🚀 Solution: Supabase Integration

I've added Supabase integration to save alumni registration data. Here's how to set it up:

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login with your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `bsrkv-alumni-website`
   - **Database Password**: (choose a strong password)
   - **Region**: Choose closest to your users
6. Click "Create new project"

### Step 2: Get Supabase Credentials
1. Go to your project dashboard
2. Click "Settings" → "API"
3. Copy:
   - **Project URL** (starts with `https://`)
   - **Anon public key** (starts with `eyJ`)

### Step 3: Create Database Table
Run this SQL in your Supabase SQL Editor:

```sql
-- Create alumni_profiles table
CREATE TABLE alumni_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  graduation_year TEXT NOT NULL,
  department TEXT NOT NULL,
  profession TEXT,
  company TEXT,
  location TEXT,
  linkedin TEXT,
  interests TEXT[] DEFAULT '{}',
  newsletter BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_alumni_email ON alumni_profiles(email);
CREATE INDEX idx_alumni_graduation_year ON alumni_profiles(graduation_year);
CREATE INDEX idx_alumni_department ON alumni_profiles(department);
CREATE INDEX idx_alumni_location ON alumni_profiles(location);

-- Enable Row Level Security (RLS)
ALTER TABLE alumni_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON alumni_profiles
  FOR SELECT USING (true);

-- Create policy to allow public insert access
CREATE POLICY "Allow public insert access" ON alumni_profiles
  FOR INSERT WITH CHECK (true);
```

### Step 4: Set Environment Variables
Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=BSRKV Alumni Association
```

### Step 5: Install Dependencies
```bash
npm install
```

### Step 6: Test the Integration
1. Start your development server: `npm run dev`
2. Go to `/register` page
3. Fill out the form and submit
4. Check your Supabase dashboard → Table Editor → `alumni_profiles`

## 📊 Data Storage Details

### What Gets Saved:
- **Personal Info**: Name, email, phone, graduation year, department
- **Professional Info**: Profession, company, LinkedIn profile
- **Location**: Current location
- **Preferences**: Interests, newsletter subscription
- **Timestamps**: Created and updated dates

### Database Schema:
```sql
alumni_profiles
├── id (UUID, Primary Key)
├── first_name (TEXT)
├── last_name (TEXT)
├── email (TEXT, Unique)
├── phone (TEXT)
├── graduation_year (TEXT)
├── department (TEXT)
├── profession (TEXT)
├── company (TEXT)
├── location (TEXT)
├── linkedin (TEXT)
├── interests (TEXT[])
├── newsletter (BOOLEAN)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

## 🔒 Security Features

- **Row Level Security (RLS)** enabled
- **Public read access** for alumni directory
- **Public insert access** for registration
- **Email uniqueness** constraint
- **Data validation** on frontend and backend

## 🚀 Alternative Solutions

If you prefer other options:

### 1. Vercel Forms
- Built into Vercel
- No database setup needed
- Limited to form submissions

### 2. PlanetScale (MySQL)
- Free tier available
- More traditional database

### 3. MongoDB Atlas
- NoSQL database
- Good for flexible data structures

### 4. Firebase
- Google's solution
- Real-time capabilities

## 📈 Next Steps

After setting up Supabase:
1. Test the registration form
2. View data in Supabase dashboard
3. Update alumni directory to use real data
4. Add admin panel for data management
5. Set up email notifications

## 🆘 Troubleshooting

**Common Issues:**
- **Environment variables not loading**: Restart your dev server
- **Database connection failed**: Check your Supabase URL and key
- **Permission denied**: Check RLS policies in Supabase
- **Table not found**: Run the SQL schema creation

**Need Help?**
- Supabase Docs: [supabase.com/docs](https://supabase.com/docs)
- Community: [github.com/supabase/supabase/discussions](https://github.com/supabase/supabase/discussions)
