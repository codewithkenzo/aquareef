# Tailwind CSS Documentation

## Introduction

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.

## Installation

### Next.js Installation
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configuration
```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### CSS File
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Core Concepts

### Utility-First
Instead of writing custom CSS, use utility classes:

```html
<!-- Traditional CSS -->
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<!-- Tailwind CSS -->
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

## Layout

### Flexbox
```html
<div class="flex items-center justify-center">
  <div>Centered content</div>
</div>

<div class="flex flex-col space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Grid
```html
<div class="grid grid-cols-3 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Responsive grid -->
</div>
```

### Positioning
```html
<div class="relative">
  <div class="absolute top-0 right-0">Positioned element</div>
</div>

<div class="fixed top-4 right-4 z-50">
  Fixed notification
</div>
```

## Spacing

### Padding & Margin
```html
<div class="p-4">Padding on all sides</div>
<div class="px-4 py-2">Horizontal and vertical padding</div>
<div class="pt-8 pb-4 pl-2 pr-6">Individual sides</div>

<div class="m-4">Margin on all sides</div>
<div class="mx-auto">Centered with auto margins</div>
<div class="mt-8 mb-4">Top and bottom margins</div>
```

### Space Between
```html
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Typography

### Font Size
```html
<h1 class="text-4xl font-bold">Large heading</h1>
<p class="text-base">Regular paragraph</p>
<small class="text-sm text-gray-600">Small text</small>
```

### Font Weight & Style
```html
<p class="font-thin">Thin text</p>
<p class="font-normal">Normal text</p>
<p class="font-bold">Bold text</p>
<p class="italic">Italic text</p>
<p class="underline">Underlined text</p>
```

### Text Alignment & Color
```html
<p class="text-left text-gray-900">Left aligned</p>
<p class="text-center text-blue-600">Center aligned</p>
<p class="text-right text-red-500">Right aligned</p>
```

## Colors

### Background Colors
```html
<div class="bg-blue-500">Blue background</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-600">Gradient</div>
```

### Text Colors
```html
<p class="text-gray-900">Dark text</p>
<p class="text-blue-600">Blue text</p>
<p class="text-red-500">Red text</p>
```

### Color Palette
- Gray: gray-50 to gray-900
- Red: red-50 to red-900
- Blue: blue-50 to blue-900
- Green: green-50 to green-900
- And many more...

## Responsive Design

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Usage
```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>

<div class="hidden md:block">
  Hidden on mobile, visible on desktop
</div>
```

## States & Interactions

### Hover
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white">
  Hover me
</button>
```

### Focus
```html
<input class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
```

### Active & Disabled
```html
<button class="bg-blue-500 active:bg-blue-800 disabled:opacity-50">
  Button
</button>
```

## Animations & Transitions

### Transitions
```html
<div class="transition-all duration-300 ease-in-out hover:scale-105">
  Smooth transition
</div>
```

### Transforms
```html
<div class="transform rotate-45 scale-110 translate-x-4">
  Transformed element
</div>
```

### Animations
```html
<div class="animate-spin">Spinning</div>
<div class="animate-pulse">Pulsing</div>
<div class="animate-bounce">Bouncing</div>
```

## Customization

### Extending the Config
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af',
        'brand-gray': '#64748b',
      },
      fontFamily: {
        'custom': ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}
```

### Custom Utilities
```css
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

## Dark Mode

### Configuration
```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
```

### Usage
```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Dark mode support
</div>
```

## Component Patterns

### Card
```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="image.jpg" alt="Card image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">Card content</p>
  </div>
</div>
```

### Button
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Primary Button
</button>

<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Outline Button
</button>
```

### Form
```html
<form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
    </div>
  </div>
</form>
```

## Best Practices

1. **Use semantic HTML** with Tailwind classes
2. **Extract components** for repeated patterns
3. **Use responsive design** from the start
4. **Leverage the color palette** consistently
5. **Customize the config** for your brand
6. **Use @apply directive** sparingly for component styles

## Performance

### Purging Unused CSS
Tailwind automatically removes unused styles in production builds when properly configured.

### JIT Mode
Just-In-Time compilation generates styles on-demand for faster builds and smaller file sizes.

Tailwind CSS provides a comprehensive utility system for building modern, responsive interfaces efficiently. 