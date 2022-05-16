
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Carousel from './components/Body/carousel/Carousel';
import Navbar from './components/Header/Navbar/Navbar';
import Product from './components/Body/carousel/Product';
import BannerImg1 from "./BannerImage/BannerImg1.jpg"
import BannerImg2 from "./BannerImage/BannerImg2.jpg";
import BannerImg3 from "./BannerImage/Bannerimg3.jpg";
import BannerImg4 from "./BannerImage/BannerImg4.jpg";
import BannerImg5 from "./BannerImage/BannerImg5.jpg";
let api = "http://localhost:5000/products";


function App() {
  const bannerImage = [BannerImg1 , BannerImg2 , BannerImg3 , BannerImg4 , BannerImg5]
  const [data, setData] = useState([])

     useEffect(() => {
       loadData();
     }, []);
  
  const loadData = async () => {
    const response = await axios.get(api)
    console.log(response.data)
    setData(response.data)

 
  }
  return (
    <div className="App">
      <Navbar />
      <Carousel image={bannerImage} />
      <Product data={data} />
    </div>
  );
}

export default App;
