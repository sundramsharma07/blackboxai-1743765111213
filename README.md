# BuildMate - Construction Materials Marketplace

## Project Setup

1. Install dependencies:
```bash
npm install -g json-server
```

2. Start the JSON server (API backend):
```bash
cd api && node server.js
```

3. Open the website:
- For development: Open `index.html` in your browser
- For production: Deploy the static files to any web server

## Features

- **Seller Dashboard**: Manage products, view sales analytics
- **Customer Marketplace**: Browse and purchase construction materials
- **Shopping Cart**: Add/remove items, adjust quantities
- **Authentication**: Login/register for both sellers and customers
- **Responsive Design**: Works on all device sizes

## API Endpoints

- `GET /products` - List all products
- `POST /products` - Add new product (seller only)
- `POST /auth/login` - User authentication
- `GET /users` - List users
- `POST /cart` - Add to cart

## Technologies Used

- HTML5, CSS3, JavaScript
- Tailwind CSS for styling
- Font Awesome for icons
- JSON Server for mock API backend
- Chart.js for analytics visualization