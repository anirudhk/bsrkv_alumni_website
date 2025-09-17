# BSRKV Alumni Website

A modern, responsive alumni website built with Next.js 14, React, and Tailwind CSS. This platform connects BSRKV alumni worldwide, providing features for networking, event management, news updates, and community engagement.

## 🚀 Features

### Core Functionality
- **Alumni Directory**: Search and connect with fellow alumni by batch, location, profession
- **Event Management**: Browse and register for alumni events, reunions, and networking opportunities
- **News & Updates**: Stay informed with the latest school and alumni community news
- **User Registration**: Multi-step registration process for new alumni members
- **Responsive Design**: Mobile-first design that works on all devices

### Key Pages
- **Homepage**: Hero section, statistics, features overview, recent alumni spotlights
- **Alumni Directory**: Advanced search and filtering capabilities
- **Events**: Event listings with registration functionality
- **News**: News articles with categorization and search
- **About**: Mission, vision, team information, and history
- **Contact**: Contact form and department information
- **Register**: Multi-step alumni registration process

### Technical Features
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Responsive**: Mobile-first design with Tailwind CSS
- **Accessibility**: WCAG compliant components and navigation
- **SEO Ready**: Optimized meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Date Handling**: date-fns

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bsrkv_alumni_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
bsrkv_alumni_website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── alumni/            # Alumni directory
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── news/              # News page
│   └── register/          # Registration page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── Features.tsx       # Features showcase
│   ├── Stats.tsx          # Statistics section
│   ├── RecentAlumni.tsx   # Alumni spotlights
│   ├── UpcomingEvents.tsx # Events preview
│   └── NewsSection.tsx    # News preview
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
      }
    }
  }
}
```

### Content
- Update school information in components
- Replace placeholder images with actual photos
- Modify alumni data in the respective pages
- Customize events and news content

### Styling
- Modify component styles in individual files
- Update global styles in `app/globals.css`
- Customize Tailwind configuration as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: alumni@bsrkv.edu
- Phone: +1 (555) 123-4567
- Website: [Contact Page](/contact)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**BSRKV Alumni Association** - Connecting generations, building futures.
