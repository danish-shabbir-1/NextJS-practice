import Detail from "./Detail"

const Dashboard = async () => {

const res = await fetch('https://dummyjson.com/products')
const result = await res.json()

console.log(result);

  return <Detail  data={result}/>
}

export default Dashboard
