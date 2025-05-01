import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductListingPage from './components/ProductListingPage';
import FullCartPage from './components/FullCartPage';


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<FullCartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;




// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/products" element={<ProductListingPage />} />
//             <Route path="/cart" element={<FullCartPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

