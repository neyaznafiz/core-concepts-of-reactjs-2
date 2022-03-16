import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Concept Recap, JSX, components, props, display array of objects
//  function App() {
//   const products = [
//     { name: 'Laptopoo', price: '153000' },
//     { name: 'Phoneee', price: '93000' },
//     { name: 'Watchuu', price: '33000' },
//     { name: 'Tabletoo', price: '5000' }
//   ]
//   return (
//     <div className="App">
//       {/* system 1 */}
//       {/* <Product name='Laptop' price='47000'></Product>
//       <Product name='Phone' price='75000'></Product>
//       <Product name='Watch' price='3500'></Product> */}

//       {/* system 2 */}
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }
//     </div>
//   );
// }

// function Product(props) {
//   return (
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// } 


// State, component state hook and set state method
function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  /* useState() function component er moddhe state variable ke rakhte day */
  const [count, setCount] = useState(33)

  // handler
  // system 1 
  // const increaseCount = () => {
  //   const newCount = count + 1
  //   setCount(newCount)
  // }

  // system 2
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* normal js a fucntion ke onclick er moddhe call korte hoi, but aykhane onClick a just function name ta likhei hobe call kora lagbe na */}
      <button onClick={increaseCount}> Increase </button>
      <br />
      <button onClick={decreaseCount}> Decrease </button>
    </div>
  )
}

export default App;
