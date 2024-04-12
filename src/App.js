import './App.css';
import Banner from './components/Banner/Banner';
import CartForm from './modules/CartForm/CartForm';
import FeedbackSlider from './modules/FeedbackSlider';
import ProductCard from './modules/ProductCard/ProductCard';


function App() {
  return (
    <div>
      <Banner />
      <FeedbackSlider />
      <CartForm />

      <div className='cards'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
