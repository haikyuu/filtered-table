import React from 'react';
import { withState, pure, compose, withPropsOnChange } from 'recompose'
import { searchProducts, data } from '../../utils'

import './App.css';

const App = ({items, name, price, setName, setPrice}) =>(
  <div className="my-app">
  
  <div className="input-container left-input">
    <label htmlFor="name">name</label>
    <input type="text" id="name" value={name} onChange={(e)=>{e.persist(); setName(name=>e.target.value)}} />
  </div>
  
  <div className="input-container">
    <label htmlFor="price">price</label>
    <input type="number" id="price" value={price} onChange={(e)=> {e.persist(); setPrice(price=>e.target.value) }} />
  </div>

    <table id="table">
    <tbody>
      <tr>
        <th>name</th>
        <th>price</th>
      </tr>
      {
        items.map( (item, i)=> (
          <tr className={i%2 === 0 ? 'alt': ''} key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
          ) 
        )
      }
      
    </tbody>
    </table>
  </div>
)

const enhance = compose(
  withState('name', 'setName', ''),
  withState('price', 'setPrice', ''),
  withState('items', 'setItems', data),
  withPropsOnChange(
    ['name', 'price'],
    ({name, price, items}) => ({
      name,
      price,
      items: searchProducts(items, { name, price })
    })
  ),
  pure
)

export default enhance(App);
