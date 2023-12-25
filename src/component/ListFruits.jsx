import React from 'react'
const Fruits = [
  {name: "Mango", price: 10},
  {name: "Banana", price: 20},
  {name: "Coconut", price: 4},
  {name: "Kiwi", price: 12}
];

const ListFruits = () => {
  return (
    <ul>
      {Fruits.map(fruit => 
      <li 
        key={fruit.name}>
          name: {fruit.name}, price: {fruit.price}
      </li>)
      }</ul>
  )
}

export default ListFruits