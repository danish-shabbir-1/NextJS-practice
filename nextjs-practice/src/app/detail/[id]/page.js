"use client";

import React, { useState, useEffect } from "react";

const Detail = async ({ params }) => {
  const { id } = params;

const [text1, settext1] = useState('')
const [text2, settext2] = useState('')
console.log(text1);
  const res = await fetch("https://api.imgflip.com/get_memes");
  const result = await res.json();
  const meme = result.data.memes.find(meme => meme.id == id)
  const url = meme.url
  console.log(url);
  return <div>
    <img src={url} />
    <input type="text" placeholder="Enter text one" onChange={(e) => settext1(e.target.value)}/>
    <input type="text" placeholder="Enter text two" onChange={(e) => settext2(e.target.value)}/>
  </div>
};

export default Detail;
