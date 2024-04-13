import './App.css';
import Banner from './components/Banner/Banner';
import CartForm from './modules/CartForm/CartForm';
import FeedbackSlider from './modules/FeedbackSlider';
import ProductCard from './modules/ProductCard/ProductCard';
import { useEffect, useState } from "react";
import React from "react";
import OrderModal from './modules/OrderModal/OrderModal';



export default function App() {
  const url = 'http://o-complex.com:1337/products?page=1&page_size=20';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataAmount, setDataAmount] = useState(6);



  const getAnswer = async () => {
    const params = new URLSearchParams({ page: '1', page_size: dataAmount }).toString();
    const searchURL = `${url}?${params}`;
    const response = await fetch(searchURL)
    .catch(error => {
      console.log('Error fetching data: ', error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })

    const data = await response.json();
    setData(data.products);
  };

  useEffect(() => {
    getAnswer();
  }, [dataAmount]);


  function generateProducts() {
    return data.map(product =>
      React.cloneElement(
        <ProductCard 
          key={product.id}
          id={product.id}
          image={product.image_url}
          name={product.title}
          describtion={product.description}
          price={product.price} 
        />
      ))
  }

  if (loading) return 'Loading data...';
  if (error) return error;


  return (
    <div>
      <OrderModal />
      <Banner />
      <FeedbackSlider />
      <CartForm />
      
      <div className='cards'>
        {generateProducts()}
      </div>

      <button className='new-products' onClick={() => setDataAmount(dataAmount + 6)}>Загрузить еще</button>    
    </div>
  );
}

