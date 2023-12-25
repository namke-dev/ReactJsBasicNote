import React from 'react'
const persion = {
    message : "Hi theer local",
    name : "Bob",
    emoji : "😘",
    seatNumbers : [1,4,7]
}
function Hello (person) {
  return (
    <div>{person.message}, {persion.name} {persion.emoji}, {persion.seatNumbers}</div>
  )
}

export default Hello