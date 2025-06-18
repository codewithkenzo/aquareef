# Next.js 15 Documentation

## Getting Started

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

## Main Features

- **Routing**: A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.
- **Rendering**: Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.
- **Data Fetching**: Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.
- **Styling**: Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
- **Optimizations**: Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.
- **TypeScript**: Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.

## App Router

Next.js 13 introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.

The App Router works in a new directory named app. The app directory works alongside the pages directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory for previous behavior.

## Installation

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

## Project Structure

```
my-next-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.js
├── package.json
└── tsconfig.json
```

## Key Concepts

### Server Components
By default, Next.js uses Server Components. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components when needed.

### Client Components
Client Components enable you to write traditional React components that are pre-rendered on the server and hydrated on the client.

### Layouts
A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render.

### Pages
A page is UI that is unique to a route. You can define pages by exporting a component from a page.js file.

This documentation provides the foundation for building with Next.js 15 and the App Router. 