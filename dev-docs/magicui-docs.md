# Magic UI Documentation

## What is Magic UI?

Magic UI is a collection of re-usable components built using React, TypeScript, Tailwind CSS, and Framer Motion. Perfect for developers who want to add beautiful animations and interactions to their React applications.

## Features

- **150+ Components**: A comprehensive library of animated components
- **React & TypeScript**: Built with modern React patterns and full TypeScript support
- **Tailwind CSS**: Styled with Tailwind CSS for easy customization
- **Framer Motion**: Powered by Framer Motion for smooth animations
- **Copy & Paste**: Simply copy and paste components into your project
- **Customizable**: Easy to customize and extend for your needs

## Installation

### Prerequisites
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion

### Setup
```bash
npm install framer-motion
npm install clsx tailwind-merge
```

### Add to tailwind.config.js
```js
module.exports = {
  content: [
    // ... your existing content
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
```

## Component Categories

### Layout Components
- **Bento Grid**: Beautiful grid layouts
- **Dock**: macOS-style dock component
- **Sidebar**: Animated sidebar navigation

### Animation Components
- **Particles**: Particle background effects
- **Ripple**: Ripple animation effects
- **Meteors**: Meteor shower animations
- **Globe**: Interactive 3D globe

### Text Components
- **Typing Animation**: Typewriter effect
- **Text Reveal**: Text reveal animations
- **Gradient Text**: Animated gradient text
- **Shimmer**: Shimmer text effects

### UI Components
- **Animated Button**: Various button animations
- **Loading Spinner**: Beautiful loading animations
- **Progress Bar**: Animated progress indicators
- **Toast**: Animated notification toasts

### Data Display
- **Charts**: Animated chart components
- **Metrics**: Animated metric displays
- **Cards**: Various card animations
- **Lists**: Animated list components

## Usage Example

```tsx
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/magic-ui/particles"

export default function Hero() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Welcome to Magic UI</h1>
        <Button variant="default" size="lg">
          Get Started
        </Button>
      </div>
    </div>
  )
}
```

## Best Practices

1. **Performance**: Use components sparingly on mobile devices
2. **Accessibility**: Provide options to disable animations
3. **Customization**: Use CSS variables for easy theming
4. **Responsive**: Test animations on different screen sizes

## Community

- **GitHub**: https://github.com/magicuidesign/magicui
- **Discord**: Join the community for support
- **Twitter**: Follow for updates and examples

Magic UI makes it easy to create stunning, animated interfaces that delight users and enhance the overall experience of your React applications. 