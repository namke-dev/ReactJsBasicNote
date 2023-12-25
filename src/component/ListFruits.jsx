import React from 'react'
const Fruits = ["Banana", "kiwi", "kimchi", "apple", "melon"];

const ListFruits = () => {
  return (
    <ul>{Fruits.map(fruit => <li>{fruit}</li>)}</ul>
  )
}

export default ListFruits