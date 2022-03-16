import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Laptopoo', price: '153000' },
    { name: 'Phoneee', price: '93000' },
    { name: 'Watchuu', price: '33000' },
    { name: 'Tabletoo', price: '5000' }
  ]
  return (
    <div className="App">
      {/* system 1 */}
      {/* <Product name='Laptop' price='47000'></Product>
      <Product name='Phone' price='75000'></Product>
      <Product name='Watch' price='3500'></Product> */}

      {/* system 2 */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
export default App;
