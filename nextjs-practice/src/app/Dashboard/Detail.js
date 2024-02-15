import React from 'react'

const Detail = (props) => {

    const { data } = props

{result.data.memes.map((item) => {
  console.log(item);
})}

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.thumbnail} />
    </div>
  )
}

export default Detail
