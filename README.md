# User Panel - User Management Dashboard

👀 **See live here:** [https://user-panel-eight.vercel.app/](https://user-panel-eight.vercel.app/)

## Project Description

The application provides a convenient interface for searching, sorting, and detailed viewing of users with advanced filtering capabilities.

## Project Features

### 🔍 **Advanced Search & Filtering**

- User search with debounce mechanism (500ms)
- Sorting by any user field with nested property support
- Pagination with customizable records per page

### 📱 **Responsive Design**

- Modern Material Design with custom theme
- Fully responsive interface for all devices

### 🔗 **Deep Linking**

- Search, sorting, and pagination state preserved in URL
- Shareable direct links to specific pages with filters

### 📊 **Detailed Information**

- Modal windows with detailed user information
- Structured display of all user data

## Selected Technologies

### **Frontend Framework**

- **React 19.1.0** - Latest version with newest capabilities
- **TypeScript 5.8.3** - Strict typing for code reliability

### **UI Framework**

- **Material-UI (MUI) 7.1.1** - Modern component library
- **Emotion** - CSS-in-JS solution for styling
- **MUI Icons Material** - Material Design style icons

### **State Management**

- **Redux Toolkit 2.8.2** - Modern Redux approach
- **RTK Query** - Built-in API solution
- **React Redux 9.2.0** - React-Redux integration

### **Development Tools**

- **Vite 6.3.5** - Fast modern bundler
- **ESLint** - Code quality linter
- **TypeScript ESLint** - ESLint rules for TypeScript

### **Deployment**

- **Vercel** - Deployment platform with automatic CI/CD

## Architectural Solutions

### 🏗️ **Feature-Driven Architecture**

```
src/
├── features/           # Feature modules
│   └── users/         # User module
│       ├── api/       # API layer (RTK Query)
│       ├── components/ # Feature-specific components
│       ├── hooks/     # Custom hooks
│       └── Users.tsx  # Main component
├── components/        # Reusable components
├── store/            # Redux store configuration
├── utils/            # Utilities and helpers
└── assets/           # Themes, translations, resources
```

### 🔄 **Lazy Loading & Code Splitting**

- **Dynamic Redux Slices** - Slices loaded only when needed
- **Dynamic Middleware Addition** - RTK Query middleware connected automatically
- **Optimized Build** - Vite provides tree-shaking and minification

### 🌐 **API Integration**

- **DummyJSON API** - External API for functionality demonstration see [DummyJSON](https://dummyjson.com/) for more information

---

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation & Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/nkv843/user-panel.git
   cd user-panel
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Lint code**
   ```bash
   npm run lint
   # or
   yarn lint
   ```

The application will be available at `http://localhost:5173` in development mode.

## Development Approach & Tradeoffs

### 🎯 **Approach**

**Modern React Ecosystem**: I chose React 19 with TypeScript to leverage the latest features and ensure type safety throughout the application. The combination provides excellent developer experience and maintainability.

**Feature-Driven Architecture**: The project follows a feature-based folder structure where each feature (like `users`) contains its own components, API layer, hooks, and types. This approach:

- ✅ Enhances maintainability and scalability
- ✅ Makes features self-contained and reusable
- ✅ Simplifies team collaboration
- ❌ Can lead to some code duplication across features

**Redux Toolkit + RTK Query**: For state management, I implemented Redux Toolkit with RTK Query for API calls:

- ✅ Provides excellent caching and synchronization
- ✅ Reduces boilerplate compared to traditional Redux
- ✅ Built-in loading/error states
- ❌ Adds complexity for simple applications
- ❌ Learning curve for developers new to Redux

**Material-UI**: Chosen for rapid development and consistent design:

- ✅ Rich component library with theming support
- ✅ Excellent accessibility features
- ✅ Mobile-responsive out of the box
- ❌ Larger bundle size compared to custom CSS
- ❌ Can be challenging to customize deeply

## Live Application

🌐 **Deployed Application**: [https://user-panel-eight.vercel.app/](https://user-panel-eight.vercel.app/)

The application is deployed on Vercel with automatic deployments from the main branch. The deployment includes:

- Production-optimized build with Vite
- Automatic HTTPS and CDN distribution
- Environment-specific configurations
- Error monitoring and analytics
