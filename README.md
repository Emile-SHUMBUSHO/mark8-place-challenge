# Mark8 Marketplace Challenge

A modern e-commerce marketplace built with Next.js, TypeScript, and Tailwind CSS. Features a complete authentication system, product browsing, store management, and shopping cart functionality.

## Features

### Authentication

- **Login Page**: The first page users see when accessing the app
- **Registration**: New user account creation with form validation
- **Password Reset**: Forgot password functionality
- **Protected Routes**: All pages except auth pages require authentication
- **Remember Me**: Option to stay logged in
- **Auto-redirect**: Unauthenticated users are automatically redirected to login

### Core Marketplace Features

- **Product Browsing**: Browse and search products with filtering and sorting
- **Product Details**: Detailed product pages with images, descriptions, and reviews
- **Store Management**: View store profiles, product listings, and store information
- **Shopping Cart**: Add, remove, and manage items in cart with quantity controls
- **Saved Items**: Save products for later viewing
- **Search & Filter**: Advanced search and filtering capabilities
- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile

### UI/UX Features

- **Modern Design**: Clean, modern interface with smooth animations
- **Loading States**: Proper loading indicators throughout the app
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Form Validation**: Real-time form validation with helpful error messages
- **Accessibility**: Built with accessibility in mind using Radix UI primitives

## Login Credentials (Mock Authentication)

This application uses **mock authentication** for demonstration purposes. No real API calls are made for authentication - you can use **any email and password combination** to log in.

**Example:**

- Email: `example@gmail.com`
- Password: `password@123`

_Note: You can use any email/password combination of your choice. The authentication is completely mocked and doesn't validate against any real backend service._

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Emile-SHUMBUSHO/mark8-place-challenge.git
cd mark8-place-challenge
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

### Using Docker

You can also run the application using Docker:

1. Build and run the docker image with docker compose:

```bash
docker compose up -d
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication Flow (Mock Implementation)

1. **First Visit**: Users are automatically redirected to `/login`
2. **Login**: Enter any email and password - authentication is mocked and always succeeds
3. **Registration**: Form validation works, but no real account creation occurs
4. **Password Reset**: UI flow is implemented but no real email/password reset happens
5. **Protected Access**: Route protection works via middleware, but authentication state is mocked
6. **Logout**: Clears mock authentication state and redirects to login

## Project Structure

```
mark8-marketplace/
├── public/                    # Static assets
│   ├── images/               # Image assets
│   └── *.svg                 # Icon files
├── src/                      # Source code
│   ├── app/                  # Next.js App Router pages
│   │   ├── (auth)/          # Authentication route group
│   │   │   ├── login/       # Login page
│   │   │   ├── register/    # Registration page
│   │   │   └── forgot-password/ # Password reset page
│   │   ├── product/         # Product detail pages
│   │   ├── stores/          # Store listing and detail pages
│   │   ├── saved/           # Saved products page
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── auth/           # Authentication components
│   │   ├── cart/           # Shopping cart components
│   │   ├── common/         # Shared/common components
│   │   ├── icons/          # Custom icon components
│   │   ├── layout/         # Layout components (header, footer, etc.)
│   │   ├── product/        # Product-related components
│   │   ├── providers/      # Context providers
│   │   ├── saved/          # Saved items components
│   │   ├── store/          # Store-related components
│   │   └── ui/             # Reusable UI components (buttons, inputs, etc.)
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.ts      # Authentication hook
│   │   ├── useCart.ts      # Shopping cart hook
│   │   └── useProducts.ts  # Products data hook
│   ├── lib/                # Utility functions and configurations
│   │   ├── api.ts          # API client and endpoints
│   │   ├── constants.ts    # Application constants
│   │   ├── utils.ts        # General utility functions
│   │   └── validations.ts  # Form validation schemas
│   ├── types/              # TypeScript type definitions
│   │   ├── cart.ts         # Cart-related types
│   │   ├── product.ts      # Product-related types
│   │   ├── store.ts        # Store-related types
│   │   └── user.ts         # User-related types
│   ├── styles/             # Additional styling files
│   └── middleware.ts       # Next.js middleware for route protection
├── Dockerfile              # Docker configuration
|-- docker-compose.yml      # Docker compose Configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Technologies Used

### Core Framework & Language

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **React 19**: Modern React with latest features

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI primitives
- **Framer Motion**: Animation library
- **Tailwind Animate**: Additional animation utilities
- **Class Variance Authority**: Component variant styling

### Forms & Validation

- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **Hookform Resolvers**: Validation resolvers for React Hook Form

### Icons

- **Lucide React**: Beautiful & consistent icon toolkit
- **Heroicons**: Hand-crafted SVG icons

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### Packaging and containerizaton

- **docker**: Image bundling
- **docker-compose**: Running docker image as a service

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

### Code Style & Best Practices

- **TypeScript**: Strict type checking enabled
- **Component-based Architecture**: Modular, reusable components
- **Custom Hooks**: Logic abstraction and reusability
- **Consistent Naming**: Clear, descriptive naming conventions
- **Error Handling**: Comprehensive error boundaries and handling
- **Performance**: Optimized with React Query caching and lazy loading

### Development Tips

1. **Mock Authentication**: Remember that authentication is completely mocked - any email/password works
2. **Mock Data**: All data is generated dynamically, no real backend connections
3. **Hot Reload**: Uses Turbopack for fast development reload
4. **Type Safety**: All components and hooks are fully typed
5. **Responsive**: Test on different screen sizes using browser dev tools
6. **State Management**: Uses Zustand for client state and React Query for server state

### What's Mocked:

- **Authentication**: No real login validation - any credentials work
- **Product Data**: Dynamically generated mock products with fake details
- **Store Information**: Mock store data and profiles
- **User Data**: Simulated user accounts and profiles
- **Shopping Cart**: Cart functionality works but doesn't persist to a real backend
