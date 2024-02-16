import React from "react";
import Link from "next/link";

const Dashboard = async () => {

const res = await fetch('https://api.imgflip.com/get_memes')
const result = await res.json()

console.log(result.data.memes);

  
return (
  <div>
    {result.data.memes &&
      result.data.memes.map((item) => {
        return <div>
          <img src={item.url}/>
          <Link href={`/detail/${item.id}`}>Genrate Meme</Link>
          </div>;
      })}
  </div>
);
}

export default Dashboard


