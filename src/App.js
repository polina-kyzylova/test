import './App.css';
import Banner from './components/Banner/Banner';
import CartForm from './modules/CartForm/CartForm';
import FeedbackSlider from './modules/FeedbackSlider';


function App() {
  return (
    <div>
      <Banner />
      <FeedbackSlider />
      <CartForm />
    </div>
  );
}

export default App;
