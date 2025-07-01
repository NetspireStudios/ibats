# IBATS Corp - Professional Accounting & Tax Services Website

A modern, responsive website built with Astro, React, and Tailwind CSS for IBATS Corp, a professional accounting and tax services firm based in St. Catharines, Ontario.

## 🌟 Features

- **Modern Design**: Beautiful, professional design with smooth animations and transitions
- **Fully Responsive**: Perfect mobile experience across all devices
- **High Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessible**: WCAG compliant with proper semantic HTML
- **Professional Content**: All content extracted and enhanced from the original IBATS website

## 🎨 Design & Technology

- **Framework**: Astro with React components
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Typography**: Inter & Poppins font families
- **Color Scheme**: Custom brand colors (#09001C primary, blue accents)
- **Images**: High-quality Unsplash images for professional appearance

## 📱 Pages & Sections

### Homepage
- Hero section with compelling messaging
- Services overview with icons
- About company summary
- Client testimonials
- Call-to-action sections

### Service Pages
- **Bookkeeping**: Comprehensive bookkeeping services
- **Accounting**: Expert accounting solutions
- **Corporate Income Tax**: Business tax planning and preparation
- **Personal Income Tax**: Individual tax services
- **Business Advisory**: Strategic business consulting

### Additional Pages
- **About**: Company mission, values, and story
- **Contact**: Contact form and business information

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NetspireStudios/ibats.git
cd ibats
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Import the project
3. Vercel will automatically detect Astro and configure the build
4. Deploy with a single click

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 📁 Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── services/
│   │       ├── bookkeeping.astro
│   │       ├── accounting.astro
│   │       ├── corporate-income-tax.astro
│   │       ├── personal-income-tax.astro
│   │       └── business-advisory.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎯 Key Features Implemented

### Professional Design
- Custom color scheme matching IBATS branding
- Modern, clean layout with professional imagery
- Consistent typography and spacing
- Smooth hover effects and transitions

### Mobile-First Responsive Design
- Optimized for all screen sizes
- Touch-friendly navigation
- Responsive images and text
- Mobile-optimized forms

### SEO & Performance
- Optimized meta tags for all pages
- Fast loading times with Astro
- Proper heading hierarchy
- Semantic HTML structure

### User Experience
- Intuitive navigation with icons
- Clear call-to-action buttons
- Professional contact forms
- Comprehensive service information

## 🔧 Customization

### Colors
Primary colors are defined in `tailwind.config.mjs`:
- Primary: #09001C (dark burgundy)
- Blue: Various shades for accents
- White/Gray: For backgrounds and text

### Fonts
- **Headings**: Poppins (600 weight)
- **Body**: Inter (300-700 weights)

### Content
All content is easily editable in the respective Astro files. Update text, images, and styling as needed.

## 📞 Contact Information

**IBATS Corp**
- Location: St. Catharines, Ontario, Canada
- Email: info@ibats.ca
- Website: [ibats.ca](https://ibats.ca)

## 📄 License

This project is proprietary and confidential. All rights reserved to IBATS Corp and NetspireStudios.

## 🤝 Support

For technical support or questions about this website, please contact NetspireStudios.

---

Built with ❤️ by NetspireStudios for IBATS Corp

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
