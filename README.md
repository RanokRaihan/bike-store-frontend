# 🚴‍♂️ Bike Store Frontend

A modern, responsive bike store application built with React, TypeScript, and Tailwind CSS. This frontend provides a seamless shopping experience for bike enthusiasts with advanced features like role-based authentication, product management, and secure payment integration.

## 🌟 Features

### 🔐 Authentication & Authorization

- **Secure JWT Authentication** with role-based access control
- **User Registration & Login** with form validation
- **Role-Based Dashboards** for admin and customer users
- **Protected Routes** with route guards
- **Demo Credentials** for easy testing

### 🛍️ E-commerce Functionality

- **Product Catalog** with advanced search and filtering
- **Product Details** with comprehensive information
- **Shopping Cart** management
- **Secure Checkout** with SurjoPay integration
- **Order Management** with status tracking
- **Inventory Management** with stock validation

### 📱 User Experience

- **Responsive Design** for all device sizes
- **Modern UI/UX** with shadcn/ui components
- **Loading States** and error handling
- **Toast Notifications** for user feedback
- **Dark/Light Theme** support

### 👨‍💼 Admin Features

- **User Management** (activate/deactivate accounts)
- **Product Management** (CRUD operations)
- **Order Management** (view, update status)
- **Analytics Dashboard** with key metrics

### 🎯 Customer Features

- **Profile Management** with password updates
- **Order History** and tracking
- **Wishlist** functionality
- **Product Reviews** and ratings

## 🚀 Live Demo

**Live Application**: [https://bike-store-three-chi.vercel.app](https://bike-store-three-chi.vercel.app)

### Demo Credentials

- **Admin**: `admin@example.com` / `admin123`
- **Customer**: `customer@example.com` / `customer123`

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library

### State Management

- **Redux Toolkit** - Predictable state container
- **RTK Query** - Data fetching and caching
- **Redux Persist** - State persistence

### Form Handling

- **React Hook Form** - Performant forms with validation
- **Zod** - Schema validation
- **Hookform Resolvers** - Form validation integration

### Routing & Navigation

- **React Router DOM** - Client-side routing
- **Protected Routes** - Role-based access control

### UI Components

- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/RanokRaihan/bike-store-frontend.git
cd bike-store-frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Setup:**
   Create a `.env` file in the root directory:

```env
VITE_API_URL=your_backend_api_url
VITE_SURJOPAY_KEY=your_surjopay_key
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Build for production:**

```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── forms/          # Form components
│   ├── layout/         # Layout components
│   ├── tables/         # Data table components
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   ├── customer/       # Customer dashboard pages
│   └── public/         # Public pages
├── redux/              # Redux store and slices
│   ├── api/            # RTK Query API slices
│   └── features/       # Feature-based slices
├── routes/             # Route configurations
├── schemas/            # Zod validation schemas
├── types/              # TypeScript type definitions
└── constants/          # Application constants
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Key Pages

### Public Pages

- **Home** - Hero section, featured products, testimonials
- **Products** - Product catalog with search and filters
- **Product Details** - Detailed product information
- **About** - Company information and mission
- **Contact** - Contact form and store locations
- **Services** - Available services and support
- **Test Drive** - Schedule test drives
- **Videos** - Video gallery and tutorials

### Authentication

- **Login** - User authentication with demo credentials
- **Register** - New user registration

### Protected Pages

- **Admin Dashboard** - User, product, and order management
- **Customer Dashboard** - Profile, orders, and settings
- **Checkout** - Secure payment processing

## 🔐 Authentication Flow

1. **Registration**: Users register with email and password
2. **Login**: JWT token generation and storage
3. **Route Protection**: Middleware checks for valid tokens
4. **Role-Based Access**: Different interfaces for admin/customer
5. **Logout**: Token cleanup and redirect

## 🛒 Shopping Flow

1. **Browse Products** - Search and filter bikes
2. **Product Details** - View specifications and images
3. **Add to Cart** - Select quantity and options
4. **Checkout** - Secure payment with SurjoPay
5. **Order Confirmation** - Order tracking and status updates

## 📱 Responsive Design

- **Mobile First** approach
- **Tablet** optimized layouts
- **Desktop** enhanced experience
- **Touch-friendly** interactions

## 🚀 Performance Optimizations

- **Code Splitting** with React.lazy
- **Image Optimization** with lazy loading
- **Bundle Size Optimization** with Vite
- **Caching** with RTK Query
- **State Persistence** with Redux Persist

## 🔗 Related Repositories

- **Backend API**: [bike-store-backend-v2](https://github.com/RanokRaihan/bike-store-backend-v2)
- **Live Demo**: [bike-store-three-chi.vercel.app](https://bike-store-three-chi.vercel.app)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ranok Raihan**

- GitHub: [@RanokRaihan](https://github.com/RanokRaihan)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Portfolio: [Your Portfolio](https://your-portfolio.com)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React Hook Form](https://react-hook-form.com/) for form management

---

⭐ **Star this repository if you find it helpful!**
