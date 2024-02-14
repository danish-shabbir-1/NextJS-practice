import React from 'react'

const Dashboard = () => {

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => console.log(res))

  return (
    <div>
    </div>
  )
}

export default Dashboard
