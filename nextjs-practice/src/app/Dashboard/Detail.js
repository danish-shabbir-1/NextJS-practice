import React from 'react'

const Detail = (props) => {

    const { data } = props

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export default Detail
