# Giphyaw 🎬

A modern, responsive GIF search application built with React and TypeScript, powered by the Giphy API. Features a clean architecture with comprehensive testing, debounced search, infinite loading, and a beautiful UI.

## ✨ Features

- 🔍 **Real-time Search** - Debounced search functionality for optimal performance
- 📱 **Responsive Design** - Mobile-first responsive interface using TailwindCSS and daisyUI
- ♾️ **Infinite Loading** - Load more GIFs with a single click
- 🎭 **Multiple Categories** - Browse trending, search, and various GIF categories
- 🏗️ **Clean Architecture** - Domain-driven design with separation of concerns
- 🧪 **Comprehensive Testing** - Unit tests with Vitest and Testing Library
- 🚀 **Modern Stack** - Built with the latest React, TypeScript, and Vite
- 🎨 **Beautiful UI** - Elegant interface with smooth animations

## 🛠️ Tech Stack

- **⚡ Vite** - Lightning fast build tool and dev server
- **⚛️ React 18** - Modern React with hooks and concurrent features
- **📘 TypeScript** - Type safety and improved developer experience
- **🧪 Vitest** - Fast unit testing framework
- **🐙 Testing Library** - Simple and complete testing utilities
- **🔄 TanStack Query** - Powerful data synchronization for React
- **🎨 TailwindCSS** - Utility-first CSS framework
- **🌼 daisyUI** - Beautiful component library for Tailwind
- **📡 Axios** - Promise-based HTTP client
- **🛡️ Zod** - TypeScript-first schema validation
- **🎪 Giphy API** - Access to millions of GIFs
- **🐕 Husky** - Git hooks for code quality
- **✨ Prettier** - Code formatting
- **🔍 ESLint** - Code linting and quality checks

## 🏗️ Architecture

This project follows clean architecture principles:

```
📁 src/
├── 🧩 components/     # Reusable UI components
├── 📊 constants/      # Application constants and configurations
├── 🌐 contexts/       # React context providers
├── 🎯 domains/        # Domain models and business entities
├── 🔧 helpers/        # Utility functions
├── 🪝 hooks/          # Custom React hooks
├── 📱 modules/        # Feature modules (pages)
├── 🌐 services/       # API services and adapters
└── 💼 useCases/       # Business use cases
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm
- Giphy API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/edovqL/giphyaw.git
   cd giphyaw
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Giphy API key:
   ```env
   VITE_GIPHY_API_KEY=your_giphy_api_key_here
   VITE_GIPHY_API_URL=https://api.giphy.com
   ```

4. **Start the development server**
   ```bash
   yarn dev
   ```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | 🚀 Start development server |
| `yarn build` | 🏗️ Build for production |
| `yarn preview` | 👀 Preview production build |
| `yarn test` | 🧪 Run tests in watch mode |
| `yarn coverage` | 📊 Generate test coverage report |
| `yarn lint` | 🔍 Lint code with ESLint |
| `yarn precommit` | ✅ Run linting and tests before commit |

## 🧪 Testing

The project includes comprehensive unit tests for components, services, and use cases:

```bash
# Run tests
yarn test

# Generate coverage report
yarn coverage
```

## 🔧 Development

### Code Quality

- **ESLint** - Enforces code style and catches errors
- **Prettier** - Automatic code formatting
- **Husky** - Pre-commit hooks ensure code quality
- **lint-staged** - Run linting on staged files

### Git Workflow

The project uses Husky to run pre-commit hooks:
- Linting check
- Test execution
- Code formatting

## 🌐 API Integration

Integrates with the Giphy API to provide:
- Trending GIFs
- Search functionality
- Category-based browsing
- Pagination support

## 🎯 Performance Features

- **Debounced Search** - Reduces API calls during typing
- **Query Caching** - TanStack Query handles intelligent caching
- **Lazy Loading** - Components and images load on demand
- **Optimized Builds** - Vite provides efficient bundling

## 🚀 Deployment

The app is deployed on Vercel and automatically builds from the main branch.

**Live Demo:** [https://giphyaw.vercel.app](https://giphyaw.vercel.app)

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/edovqL/giphyaw/blob/master/src/assets/screenshot-1.png?raw=true)

### Search Results
![Search Results](https://github.com/edovqL/giphyaw/blob/master/src/assets/screenshot-2.png?raw=true)

### Mobile View
![Mobile View](https://github.com/edovqL/giphyaw/blob/master/src/assets/screenshot-3.png?raw=true)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Giphy API](https://developers.giphy.com/)
- [Vercel](https://vercel.com/)
