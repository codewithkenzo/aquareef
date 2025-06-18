# Framer Motion Documentation

## Introduction

Framer Motion is a production-ready motion library for React. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.

## Installation

```bash
npm install framer-motion
```

## Basic Usage

```jsx
import { motion } from "framer-motion"

export default function Component() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello World
    </motion.div>
  )
}
```

## Core Concepts

### Motion Components
Any HTML or SVG element can be made animatable by prefixing it with `motion.`:

```jsx
<motion.div />
<motion.button />
<motion.svg />
<motion.path />
```

### Animation Props

#### initial
Defines the initial state of the component:
```jsx
<motion.div initial={{ x: -100, opacity: 0 }} />
```

#### animate
Defines the target state:
```jsx
<motion.div animate={{ x: 0, opacity: 1 }} />
```

#### transition
Controls how the animation behaves:
```jsx
<motion.div 
  transition={{ 
    duration: 0.5, 
    ease: "easeInOut",
    delay: 0.2 
  }} 
/>
```

#### exit
Defines the exit animation:
```jsx
<motion.div exit={{ opacity: 0, scale: 0.8 }} />
```

## Animation Types

### Tween Animations
```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ 
    type: "tween",
    duration: 0.5,
    ease: "easeInOut"
  }}
/>
```

### Spring Animations
```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ 
    type: "spring",
    stiffness: 100,
    damping: 10
  }}
/>
```

### Keyframes
```jsx
<motion.div
  animate={{ 
    x: [0, 100, 0],
    rotate: [0, 180, 360]
  }}
  transition={{ duration: 2 }}
/>
```

## Gestures

### Hover
```jsx
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
/>
```

### Drag
```jsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
  dragElastic={0.1}
/>
```

## Layout Animations

### Layout Prop
```jsx
<motion.div layout />
```

### Shared Layout Animations
```jsx
<motion.div layoutId="shared-element" />
```

## Variants

Define reusable animation states:

```jsx
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>
```

### Orchestrating Animations
```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

<motion.ul variants={container} initial="hidden" animate="visible">
  <motion.li variants={item} />
  <motion.li variants={item} />
  <motion.li variants={item} />
</motion.ul>
```

## AnimatePresence

Handle component mounting and unmounting:

```jsx
import { AnimatePresence } from "framer-motion"

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

## Scroll Animations

### useScroll Hook
```jsx
import { useScroll, useTransform } from "framer-motion"

const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 1], [1, 2])

<motion.div style={{ scale }} />
```

### Scroll-triggered Animations
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
/>
```

## Performance Optimization

### Transform vs Layout Properties
Prefer animating transform properties:
```jsx
// Good - animates on compositor
<motion.div animate={{ x: 100, scale: 1.2 }} />

// Avoid - causes layout recalculation
<motion.div animate={{ left: 100, width: 200 }} />
```

### will-change
```jsx
<motion.div style={{ willChange: "transform" }} />
```

## Common Patterns

### Page Transitions
```jsx
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" }
}

<motion.div
  variants={pageVariants}
  initial="initial"
  animate="in"
  exit="out"
  transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
>
  Page Content
</motion.div>
```

### Loading Spinner
```jsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ 
    duration: 1, 
    repeat: Infinity, 
    ease: "linear" 
  }}
>
  ⟳
</motion.div>
```

### Staggered Lists
```jsx
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}
```

## Best Practices

1. **Use transform properties** for better performance
2. **Avoid animating layout properties** like width, height, top, left
3. **Use variants** for complex animations
4. **Implement proper exit animations** with AnimatePresence
5. **Consider reduced motion** preferences
6. **Test on mobile devices** for performance

## Accessibility

```jsx
<motion.div
  animate={{ scale: 1.1 }}
  transition={{ 
    duration: prefersReducedMotion ? 0 : 0.3 
  }}
/>
```

Framer Motion provides powerful animation capabilities while maintaining excellent performance and accessibility standards. 