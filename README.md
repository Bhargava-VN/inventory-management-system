# 📦 Inventory Management System

A modern, full-stack inventory management system built with the MERN stack and contemporary UI/UX design.

---

## 🚀 Quick Start (One Click!)

### Windows Users

Double-click one of these files in the project root:

- **`start.bat`** - Recommended for most Windows users
- **`start.ps1`** - For PowerShell users

### Mac/Linux Users

Run in terminal from project root:
```bash
bash start.sh
```

> **That's it!** The system will automatically:
> - Install dependencies for both client and server
> - Start the backend on `http://localhost:5000`
> - Start the frontend on `http://localhost:5173`
> - Open both in separate terminal windows

#### Default Login Credentials
- 📧 **Email:** `test-visitor@gmail.com`
- 🔑 **Password:** `pass123`

---

## 📋 Prerequisites

Before running the system, ensure you have:

- ✅ **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- ✅ **npm** (comes with Node.js)
- ✅ **MongoDB** (Atlas or Local) - Free tier: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

**Optional but Recommended:**
- Git for version control
- VS Code for development

---

## 🛠️ Manual Setup (Advanced)

If you prefer to set up manually or customize the setup:

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file (template provided in .env.default)
# Add your MongoDB connection string and JWT secret

# Start development server
npm run dev

# Server runs on http://localhost:5000
```

### Frontend Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env file (template provided in .env.default)
# VITE_BASE_URL=http://localhost:5000

# Start development server
npm run dev

# Frontend runs on http://localhost:5173
```

---

## 🎨 Modern UI/UX Features

This system has been recently modernized with:

- ✨ Beautiful gradient backgrounds
- 🎨 Professional color scheme
- ⚡ Smooth animations and transitions
- 📱 Fully responsive design
- ♿ Improved accessibility
- 🎯 Icon-enhanced forms
- 📊 Modern card-based layouts

See **[MODERNIZATION_GUIDE.md](./MODERNIZATION_GUIDE.md)** for detailed design improvements.

---

## 📚 Technology Stack

### Backend
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** JWT
- **Validation:** Zod
- **Logging:** Morgan

### Frontend
- **Framework:** React 18 with TypeScript
- **State Management:** Redux Toolkit
- **UI Library:** Ant Design v5
- **Styling:** Modern CSS with Tailwind utilities
- **HTTP Client:** Redux Query
- **Forms:** React Hook Form
- **Charting:** Recharts
- **Alerts:** SweetAlert2 & Sonner

---

## ✨ Core Features

### 1. **Authentication**
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Profile management

### 2. **Product Management**
- Create, read, update, delete products
- Product categories and brands
- Product variants
- Inventory tracking
- Search and filtering

### 3. **Sales Management**
- Record sales transactions
- Update and delete sales records
- Sales analytics

### 4. **Purchase Management**
- Track purchases
- Manage purchase records
- Purchase history

### 5. **Seller Management**
- Create and manage sellers
- Seller information
- Sales attribution

### 6. **Dashboard Analytics**
- Total stock overview
- Sales statistics
- Revenue tracking
- Daily/Monthly/Weekly/Yearly sales reports
- Interactive charts

### 7. **User Profile**
- Edit profile information
- Change password
- Personal dashboard

---

## 📁 Project Structure

```
inventory-management-system/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store & slices
│   │   ├── lib/           # Utility libraries
│   │   └── styles/        # Global styles
│   └── package.json
│
├── server/                # Express Backend
│   ├── src/
│   │   ├── modules/       # Feature modules
│   │   ├── routes/        # API routes
│   │   ├── middlewares/   # Custom middlewares
│   │   ├── config/        # Configuration
│   │   └── server.ts      # Entry point
│   └── package.json
│
├── start.bat             # Windows startup script
├── start.ps1             # PowerShell startup script
├── start.sh              # Mac/Linux startup script
└── README.md             # This file
```

---

## 🔧 Available Commands

### Client

```bash
cd client

npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

### Server

```bash
cd server

npm run dev       # Start with ts-node-dev
npm run build     # Compile TypeScript
npm start         # Run compiled JavaScript
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

---

## ⚙️ Environment Variables

### Server (.env)

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/inventory
JWT_SECRET=your-super-secret-key-change-this-in-production
```

### Client (.env)

```env
VITE_BASE_URL=http://localhost:5000
```

> **⚠️ Security Note:** Never commit `.env` files to version control. Use `.env.default` as a template.

---

## 🚨 Troubleshooting

### "Port 5000 already in use"
```bash
# Windows
lsof -i :5000          # Find process using port 5000
taskkill /PID <PID> /F # Kill the process

# Mac/Linux
lsof -i :5000 | grep LISTEN
kill -9 <PID>
```

### "Cannot find module" error
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### "MongoDB connection failed"
- Verify MongoDB is running locally or MongoDB Atlas connection string is correct
- Check `.env` file has correct `DATABASE_URL`
- Ensure your IP is whitelisted in MongoDB Atlas

### Startup script not running
```bash
# Run manually for detailed error messages
cd server
npm install
npm run dev

# In another terminal
cd client
npm install
npm run dev
```

---

## 📊 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Dashboard | `/` | Main analytics dashboard |
| Products | `/management/products` | Manage inventory products |
| Sales | `/management/sales` | Track sales records |
| Purchases | `/management/purchases` | Manage purchases |
| Sellers | `/management/sellers` | Manage sellers |
| Sales History | `/sales-history` | Sales analytics by period |
| Profile | `/profile` | User profile management |
| Login | `/login` | User authentication |
| Register | `/register` | Create new account |

---

## 🔐 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ CORS enabled for API access
- ✅ Express middleware for security
- ✅ Input validation with Zod
- ✅ Protected routes on frontend
- ✅ HttpOnly cookies recommended for production

---

## 📈 Performance Optimizations

- ✅ Lazy-loaded components
- ✅ Optimized database queries
- ✅ Redux for state management
- ✅ Memoized components
- ✅ Code splitting enabled
- ✅ Minified production builds
- ✅ Efficient API caching

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Original Author:** [mhShohan](https://github.com/mhShohan)

**Modernization & One-Click Setup:** April 2026

---

## 🔗 Resources

- [MERN Stack Documentation](https://mern.io/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Ant Design Components](https://ant.design/components/overview/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

## 📞 Support

Having issues? Follow these steps:

1. Check [Troubleshooting](#troubleshooting) section
2. Verify all prerequisites are installed
3. Check `.env` files are configured correctly
4. Review application logs in terminal
5. Clear browser cache and restart servers

---

## 🎯 Next Steps

1. **Customize Database:** Update MongoDB connection in `.env`
2. **Change JWT Secret:** Update `JWT_SECRET` for production
3. **Customize Branding:** Update app title and logo
4. **Add More Features:** Extend the modular backend/frontend
5. **Deploy:** Push to Vercel (frontend) and Heroku/Railway (backend)

---
