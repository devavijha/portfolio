# Abhishek Jha - Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion** animations, showcasing the work and skills of Abhishek Jha, a Computer Science Engineering student and web developer.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, animated counters, and smooth transitions
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and structured data
- **Contact Form**: Integrated contact form (ready for Formspree integration)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── lib/
    └── utils.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devavijha/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. Replace the placeholder URL in `src/components/Contact.tsx`:
```javascript
const response = await fetch('https://formspree.io/f/your-form-id', {
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, tagline
- `src/components/About.tsx` - Personal description and stats
- `src/components/Contact.tsx` - Contact information
- `src/app/layout.tsx` - Meta tags and SEO information

### Projects
Edit `src/components/Projects.tsx` to add your projects:
```javascript
const projectsData = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    // ... other fields
  }
]
```

### Skills
Update `src/components/Skills.tsx` to reflect your skill set.

### Experience & Education
Modify the respective components with your background information.

## 📱 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎯 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Abhishek Jha**
- Email: abhishekjha1651@gmail.com
- LinkedIn: [linkedin.com/in/theabhishekkjha](https://linkedin.com/in/theabhishekkjha)
- GitHub: [github.com/devavijha](https://github.com/devavijha)

---

⭐ Don't forget to star this repo if you found it helpful!
