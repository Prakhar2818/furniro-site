# Furniro Furniture Store - Premium E-commerce Platform

A modern, responsive furniture e-commerce platform built with React, TypeScript, and Node.js. Features a sleek design, comprehensive shopping cart functionality, and seamless user experience for browsing and purchasing premium furniture.

## Features

✅ **Complete API Integration**:
- Products API with CRUD operations
- Cart API with full cart management
- Real-time cart updates
- Error handling and loading states

✅ **Frontend Features**:
- Product listing with real data from backend
- Product details page with dynamic routing
- Shopping cart functionality with quantity management
- Cart sidebar with live updates
- Responsive design with Tailwind CSS

✅ **Backend Features**:
- RESTful API for products and cart
- MongoDB database with Mongoose ODM
- CORS enabled for frontend integration
- Seed script for sample data

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- Shadcn/ui components
- Lucide React icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- CORS middleware
- Environment variables with dotenv

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd furniro-furniture-store
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/furniro-ecommerce
   # OR use MongoDB Atlas
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/furniro-ecommerce
   ```

3. **Frontend Setup**
   ```bash
   cd ..  # Go back to root
   npm install
   ```

### Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on http://localhost:5000

2. **Seed the Database (Optional)**
   ```bash
   cd backend
   node seed.js
   ```

3. **Start the Frontend**
   ```bash
   cd ..  # Go back to root
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Cart
- `GET /api/cart/:id` - Get cart by ID
- `POST /api/cart` - Create new cart
- `POST /api/cart/:id/items` - Add item to cart
- `PUT /api/cart/:id/items` - Update item quantity
- `DELETE /api/cart/:id/items` - Remove item from cart
- `DELETE /api/cart/:id` - Delete entire cart

## Frontend Architecture

### State Management
- **AppContext**: Global state using React Context + useReducer
- **Types**: TypeScript interfaces for type safety
- **API Service**: Centralized API calls with error handling
- **Utils**: Helper functions for data transformation

### Key Components
- **ProductsSection**: Displays products from API
- **ProductGridSection**: Shop page product grid
- **ProductDetailsSection**: Single product page with add to cart
- **CartContentSection**: Cart page with quantity management
- **CartSidebar**: Slide-out cart with live updates
- **ErrorNotification**: Global error handling
- **LoadingSpinner**: Reusable loading component

### Routing
- `/` - Home page with featured products
- `/shop` - All products grid
- `/product/:id` - Individual product details
- `/cart` - Cart management page
- `/checkout` - Checkout process (UI only)
- `/about`, `/contact`, `/blog` - Static pages

## Project Structure

```
├── backend/
│   ├── controllers/        # Route handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── seed.js            # Database seeding
├── src/
│   ├── components/        # Reusable components
│   ├── context/           # React Context
│   ├── services/          # API service layer
│   ├── types/             # TypeScript types
│   ├── utils/             # Helper functions
│   ├── pages/             # Page components
│   └── App.tsx            # Main app component
└── package.json
```

## Development Notes

### Cart Persistence
- Cart ID is stored in localStorage
- Cart data is synchronized with backend
- Automatic cart creation on first item addition

### Error Handling
- Global error notification system
- API errors are caught and displayed
- Loading states for better UX

### Type Safety
- Full TypeScript integration
- Separate types for backend and frontend data
- Type-safe API calls and state management

## Future Enhancements
- User authentication
- Payment integration
- Product reviews and ratings
- Search and filtering
- Admin dashboard
- Order management
- Email notifications

## Troubleshooting

### Common Issues
1. **CORS errors**: Ensure backend is running on port 5000
2. **Database connection**: Check MongoDB URI in .env file
3. **Cart not loading**: Check browser localStorage for cartId
4. **Build errors**: Clear node_modules and reinstall

### Development Tips
- Use browser dev tools to monitor API calls
- Check Network tab for failed requests
- Console logs are available for debugging state changes
- MongoDB Compass can be used to view database contents