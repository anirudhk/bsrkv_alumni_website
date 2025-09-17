#!/bin/bash

# BSRKV Alumni Website Setup Script
echo "🚀 Setting up BSRKV Alumni Website..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p public/images
mkdir -p public/icons

# Copy environment example
echo "⚙️ Setting up environment..."
if [ ! -f .env.local ]; then
    echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local
    echo "NEXT_PUBLIC_SITE_NAME=BSRKV Alumni Association" >> .env.local
    echo "Environment file created!"
fi

# Run build to check for errors
echo "🔨 Building project..."
npm run build

echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
