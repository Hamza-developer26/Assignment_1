import React, { useState, useEffect } from 'react';

function Effect() {
  
  const [data, setData] = useState(5);


  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error)); 
  }, []); 


  return (
    <div className='text-center'>
    <h1>Product List</h1>
    {data.length > 0 ? (
      <ul>
        {data.map(product => (
          console.log('Products',product)
        ))}
      </ul>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}
export default Effect;