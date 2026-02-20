# Modern Portfolio Website

A high-performance portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS with clsx and tailwind-merge
- **Animations**: Framer Motion for complex interactions
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Font**: Geist Sans (optimized with next/font)

## ✨ Features

- **Modern Dark Mode**: Rich colorful gradients and glassmorphism effects
- **High Performance**: Optimized for Lighthouse score 95+
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Smooth Animations**: Staggered animations and scroll-triggered effects
- **Accessibility**: ARIA labels, reduced motion support, semantic HTML
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## 🎨 Design System

### Colors

- **Background**: Deep dark (#0a0a0a) with gradient mesh overlay
- **Accents**: Indigo, Violet, Cyan, and Emerald gradients
- **Glass Effects**: Backdrop blur with subtle borders

### Typography

- **Font**: Geist Sans with Inter fallback
- **Hierarchy**: Responsive text scales (4xl to 8xl for headings)
- **Features**: Anti-aliasing, ligatures, and proper line heights

### Components

- **SectionWrapper**: Reusable animation wrapper with scroll triggers
- **StaggerContainer**: Orchestrates staggered child animations
- **Glass Cards**: Glassmorphism effect with hover interactions

## 🔧 Performance Optimizations

1. **Font Optimization**:
   - Local font loading with `next/font`
   - Font display swap for better FCP
   - Preloaded critical fonts

2. **Image Optimization**:
   - Next.js Image component with AVIF/WebP formats
   - Optimized placeholder images
   - Proper sizing and lazy loading

3. **Animation Performance**:
   - GPU-accelerated transforms
   - `will-change` properties for smooth animations
   - Intersection Observer for scroll triggers
   - Reduced motion support

4. **Bundle Optimization**:
   - Tree shaking for unused code
   - Dynamic imports for heavy components
   - Optimized package imports

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Download the Geist font**:
   - Visit [Vercel Font](https://vercel.com/font/sans)
   - Download `GeistVF.woff2`
   - Place in `src/app/fonts/` directory

3. **Run development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── fonts/              # Local font files
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with font setup
│   └── page.tsx           # Main page composition
├── components/
│   ├── sections/          # Page sections (Hero, Projects, etc.)
│   └── ui/                # Reusable UI components
└── lib/
    └── utils.ts           # Utility functions (cn, etc.)
```

## 🎯 Customization

### Personal Information

Update the following in `src/app/layout.tsx` and components:

- Name and title
- Social media links
- Contact information
- Meta descriptions

### Projects

Edit `src/components/sections/Projects.tsx`:

- Update project data
- Add your project images
- Modify tech stacks and descriptions

### Styling

Customize colors in `tailwind.config.ts`:

- Brand colors
- Gradient combinations
- Animation timings

## 📊 Performance Targets

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

## 🛠️ Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📝 License

This project is open source and available under the MIT License.
