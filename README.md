# 🛒 Arizon E-Commerce Frontend

A responsive e-commerce web frontend built with **React.js**, styled using **CSS**, and powered by **FakeStoreAPI**.

---

## ⚙️ Tech Stack

- ⚛️ **React.js**
- 🎨 **CSS3**
- 🌐 **React Router**
- 📦 **Context API**
- 🔗 **FakeStore API**

---

## 🚀 Features

✅ Home page with hero banner  
✅ Product listing with API integration  
✅ Add to cart, quantity control, remove items  
✅ Mini cart and full cart pages  
✅ Responsive design for all screens  
✅ Error and loading state handling  

---

## 📸 Preview

> Hero Section | Product List | Mini Cart | Full Cart  
![Screenshot](https://via.placeholder.com/600x120?text=Add+Screenshots+Here)


## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/arizon-ecommerce-app.git
cd arizon-ecommerce-app

# Install dependencies
npm install

# Start development server
npm start
📌 Visit: http://localhost:3000

📡 API Used
FakeStoreAPI – for fetching product data.

📦 State Management
Managed using:

React Context API (default)

Can optionally be switched to Zustand

Functions include:

js
Copy
Edit
addToCart(product)
removeFromCart(productId)
updateQuantity(productId, quantity)