# React Router SPA - Complete Routing Implementation

A modern **Single Page Application** built with **Vite + React** and **React Router DOM v6**, demonstrating comprehensive routing capabilities including dynamic routes, nested routing, protected routes, lazy loading, and more.

## 🚀 Features Implemented

### Core Routing Features
- ✅ **BrowserRouter** - Client-side routing without hash in URL
- ✅ **Routes & Route** - Modern route configuration
- ✅ **NavLink** - Active state highlighting in navigation
- ✅ **Dynamic Routes** - `/products/:id` with URL parameters
- ✅ **Nested Routing** - Layout component with Outlet for child routes
- ✅ **Wildcard Route** - 404 Not Found page for unmatched URLs

### Advanced Features
- ✅ **Protected Routes** - Authentication-based route protection
- ✅ **Programmatic Navigation** - `useNavigate` for redirect after login
- ✅ **Breadcrumb Navigation** - `useLocation` for route hierarchy display
- ✅ **Query Parameters** - `useSearchParams` for search functionality
- ✅ **Lazy Loading** - React.lazy & Suspense for code splitting
- ✅ **Mock Authentication** - localStorage-based auth system

### Pages Included
1. **Home** - Landing page with feature showcase
2. **About** - Project information and tech stack
3. **Products** - Product listing with search & query params
4. **Product Detail** - Dynamic route showing product details
5. **Contact** - Contact form with validation
6. **Login** - Authentication page with redirect
7. **Dashboard** - Protected route (requires auth)
8. **404 Not Found** - Custom error page

## 📁 Project Structure

```
exp3-routing/
├── public/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Shared components
│   │   ├── Breadcrumbs.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── Loading.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/         # React context
│   │   └── AuthContext.jsx
│   ├── hooks/           # Custom hooks
│   │   └── useAuth.js
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx          # Route definitions
│   ├── App.css          # Component styles
│   ├── main.jsx         # App bootstrap with BrowserRouter
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd exp3-routing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
# or
pnpm build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
# or
pnpm preview
```

## 🌐 Deployment

### SPA Rewrite Configuration

Single Page Applications require server configuration to handle client-side routing. All routes should serve `index.html`.

#### Netlify
Create `netlify.toml` in the project root:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel
Create `vercel.json` in the project root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🧪 Example Routes to Test

### Public Routes
- `/` - Home page
- `/about` - About page
- `/products` - Products listing
- `/products/1` - Product detail (IDs: 1-6)
- `/products?q=react&page=1` - Products with search query
- `/contact` - Contact form

### Authentication Flow
1. Visit `/dashboard` (will redirect to `/login`)
2. Login with any credentials:
   - Username: any value
   - Password: minimum 4 characters
3. Redirected back to `/dashboard`
4. Logout button returns to `/login`

### Protected Route
- `/dashboard` - Requires authentication (redirects to `/login` if not logged in)

### 404 Handling
- `/random-path` - Shows 404 Not Found page
- Any unmatched route triggers the wildcard route

## 🎨 Key Implementation Details

### 1. Lazy Loading
All page components are lazy-loaded for optimal performance:
```jsx
const Home = lazy(() => import('./pages/Home'));
```

### 2. Protected Routes
Authentication check before rendering:
```jsx
<Route 
  path="dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

### 3. Active Navigation
NavLink automatically applies active class:
```jsx
<NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
  Home
</NavLink>
```

### 4. Dynamic Parameters
Access route parameters with useParams:
```jsx
const { id } = useParams();
```

### 5. Query Parameters
Handle search queries with useSearchParams:
```jsx
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('q');
```

### 6. Breadcrumbs
Display current route hierarchy:
```jsx
const location = useLocation();
const pathnames = location.pathname.split('/').filter(x => x);
```

## 🖼️ Screenshots

> Add screenshots of your application here after deployment

- Home Page
- Products Listing
- Product Detail
- Dashboard (Protected)
- Login Page
- 404 Page

## 🔧 Technology Stack

- **React** 19.2.0 - UI library
- **React Router DOM** 7.13.0 - Routing library (v6 API compatible)
- **Vite** 7.3.1 - Build tool and dev server
- **JavaScript** ES6+ - Programming language
- **CSS3** - Styling with custom properties

## 📝 Code Quality

- ✅ Clean, modular, and readable code
- ✅ Proper separation of concerns
- ✅ No console errors or warnings
- ✅ Responsive design for all screen sizes
- ✅ Semantic HTML structure
- ✅ Accessible navigation

## 🎯 Learning Outcomes

This project demonstrates:
- Complete React Router v6 implementation
- Modern React patterns (Hooks, Context, Lazy Loading)
- Authentication flow in SPAs
- Route protection and redirection
- URL parameter handling
- Query string manipulation
- Component composition and reusability
- Responsive CSS design
- Production deployment considerations

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

---

Built with ❤️ using React & React Router DOM v6
