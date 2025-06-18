# 🌊 Aquareef

<div align="center">

![Aquareef Logo](https://img.shields.io/badge/Aquareef-AI%20Social%20Empire-339989?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgN0wyMSA3TTMgMTJIMjFNMyAxN0gyMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHN2Zz4K)

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**🌊 Automate Your Social Empire with AI Magic**

*Build a thriving social media empire across 8+ platforms. AI creates your content, schedules strategically, and optimizes for maximum engagement—all while you sleep.*

[🚀 Live Demo](https://aquareef.ai) • [📖 Documentation](./docs/) • [🎯 Roadmap](#roadmap) • [💬 Community](https://github.com/codewithkenzo/aquareef/discussions)

</div>

---

## ✨ What is Aquareef?

**Aquareef** is a cutting-edge AI-powered social media automation platform that transforms how digital creators and businesses manage their online presence. Like a thriving coral reef ecosystem, Aquareef creates a self-sustaining environment where your content flourishes across multiple platforms simultaneously.

### 🎯 Core Philosophy

- **🌊 Frontend-First**: Beautiful, responsive UI built with Magic UI components
- **🤖 AI-Powered**: Intelligent content generation and optimization
- **🔗 Multi-Platform**: Seamless integration across 8+ social networks
- **⚡ Performance**: Lightning-fast, 60fps animations and interactions
- **🎨 Design Excellence**: Professional-grade UI/UX with ocean-inspired aesthetics

---

## 🚀 Features

### 🌊 **AI Content Studio**
- **Smart Content Generation**: AI creates platform-optimized posts
- **Visual Content**: Auto-generate images, carousels, and videos
- **Voice & Tone**: Maintains your brand personality across platforms
- **Trend Integration**: Leverages real-time trends and hashtags

### 📅 **Intelligent Scheduling**
- **Optimal Timing**: AI determines best posting times per platform
- **Bulk Scheduling**: Plan weeks/months of content in advance
- **Cross-Platform Sync**: Coordinated campaigns across all networks
- **Time Zone Optimization**: Global audience targeting

### 📊 **Advanced Analytics**
- **Performance Insights**: Deep dive into engagement metrics
- **Audience Analytics**: Understand your followers across platforms
- **Growth Tracking**: Monitor follower and engagement growth
- **ROI Reporting**: Track conversion and revenue attribution

### 🎯 **Platform Coverage**
- ✅ **Instagram** (Posts, Stories, Reels)
- ✅ **LinkedIn** (Posts, Articles, Company Pages)
- ✅ **Facebook** (Posts, Stories, Pages)
- ✅ **Threads** (Native Meta integration)
- ✅ **TikTok** (Videos, Trending content)
- ✅ **YouTube** (Shorts, Community posts)
- ✅ **Pinterest** (Pins, Boards)
- ⚡ **X/Twitter** (Professional & Enterprise only)

---

## 🏗️ Architecture

### 🎨 **Frontend-First Design**
```
🌊 Aquareef Frontend Stack
├── Next.js 15 (App Router) - React framework
├── TypeScript - Type safety
├── Tailwind CSS - Styling system
├── Magic UI - 150+ animated components
├── Framer Motion - Advanced animations
├── Shadcn/ui - Base component library
└── Zustand - State management
```

### ⚙️ **Backend Infrastructure**
```
🔧 Core Services
├── Fastify Server - High-performance API
├── Prisma ORM - Type-safe database
├── Ayrshare API - Social media integration
├── OpenAI/Claude - AI content generation
└── MCP Access Point - AI agent compatibility
```

### 🤖 **AI Agent System**
```
🧠 Specialized Agents
├── @agent_frontend - Next.js/React specialist
├── @agent_ui - Magic UI designer
├── @agent_core - TypeScript library expert
├── @agent_social - Platform integration
└── @agent_mcp - AI agent compatibility
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/codewithkenzo/aquareef.git
cd aquareef

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development server
cd src/frontend
npm run dev
```

Visit `http://localhost:3000` to see Aquareef in action! 🌊

### 🔑 Environment Setup

```env
# Social Media APIs
AYRSHARE_API_KEY=your_ayrshare_key
OPENAI_API_KEY=your_openai_key

# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

---

## 🎨 Design System

### 🌊 **Color Palette**
```css
/* Ocean-Inspired Brand Colors */
--night: #131515      /* Deep ocean depths */
--jet: #2b2c28        /* Volcanic rock */
--persian-green: #339989  /* Coral reef */
--tiffany-blue: #7de2d1   /* Tropical waters */
--snow: #fffafb       /* Ocean foam */
```

### 🎯 **Typography**
- **Primary**: Poppins (Marketing-friendly, modern)
- **Secondary**: Space Grotesk (Technical, clean)
- **Weights**: 300-800 for maximum flexibility

### ✨ **Animation Principles**
- **60fps Performance**: Smooth, butter-like interactions
- **Meaningful Motion**: Animations that enhance UX
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: Respects `prefers-reduced-motion`

---

## 📁 Project Structure

```
aquareef/
├── 🎨 src/frontend/          # Next.js application
│   ├── app/                  # App Router pages
│   │   ├── magic/           # Magic UI components
│   │   ├── custom/          # Brand-specific components
│   │   └── ui/              # Base UI components
│   └── styles/              # Global styles
├── ⚙️ src/core/             # TypeScript library
├── 🖥️ src/server/           # Fastify backend
├── 🛠️ src/cli/              # Command-line tools
├── 🔗 mcp-access-point/     # AI agent integration
├── 📱 social-media-api/     # Ayrshare wrapper
└── 📚 docs/                 # Documentation
```

---

## 🛠️ Development

### 🎯 **Phase 0: Frontend Excellence** (Current)
- ✅ Magic UI integration and component library
- ✅ Responsive design with mobile-first approach
- ✅ Advanced animation system with Framer Motion
- ✅ Dashboard with real-time metrics
- 🔄 Component refinement and optimization

### 📊 **Phase 1: Backend Integration** (Next)
- 🔄 Fastify server with OpenAPI specs
- 🔄 Database integration with Prisma
- 🔄 Authentication and user management
- 🔄 API endpoint development

### 🤖 **Phase 2: AI & Social Integration**
- ⏳ Ayrshare API integration
- ⏳ AI content generation pipeline
- ⏳ Multi-platform posting system
- ⏳ Analytics and reporting

### 🌐 **Phase 3: AI Agent Compatibility**
- ⏳ MCP Access Point configuration
- ⏳ AI agent tool generation
- ⏳ Automated workflows

---

## 🎯 Roadmap

### 🚀 **v0.5 - Ocean Foundation** (Q3 2025)
- [x] Complete frontend with Magic UI
- [x] Dashboard and user interface
- [x] Responsive design system
- [ ] Backend API development
- [ ] User authentication

### 🌊 **v1.0 - Reef Ecosystem** (Q4 2025)
- [ ] Full social media integration
- [ ] AI content generation
- [ ] Advanced scheduling system
- [ ] Analytics dashboard
- [ ] Multi-user support

### 🐠 **v1.5 - Coral Growth** (Q1 2026)
- [ ] AI agent compatibility
- [ ] Advanced automation workflows
- [ ] Team collaboration features
- [ ] White-label solutions
- [ ] API marketplace

### 🦈 **v2.0 - Deep Sea** (Q2 2026)
- [ ] Enterprise features
- [ ] Advanced AI models
- [ ] Custom integrations
- [ ] Global scaling
- [ ] Mobile applications

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes Aquareef better for everyone.

### 🌊 **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our coding standards
4. Add tests for new functionality
5. Submit a pull request with a clear description

### 📋 **Development Guidelines**
- **Frontend-First**: Prioritize UI/UX development
- **TypeScript**: Strict mode for all code
- **Testing**: Comprehensive test coverage
- **Documentation**: Update docs for new features
- **Performance**: Maintain 60fps animations

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Magic UI** for the incredible component library
- **Ayrshare** for robust social media API integration
- **Vercel** for seamless deployment platform
- **The Open Source Community** for endless inspiration

---

<div align="center">

**Built with 🌊 by the Aquareef Team**

[Website](https://aquareef.ai) • [Documentation](./docs/) • [Support](mailto:support@aquareef.ai)

*Dive into the future of social media automation* 🚀

</div> 
