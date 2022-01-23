import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import Month from '../components/Month';

export default function Home() {
  const [days, setdays] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setdays([...json, ...JSON.parse(localStorage.getItem('products') || '[]')]));
  }, []);

  return <div></div>;
}


