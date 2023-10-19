import axios from 'axios'
import { useEffect, useState } from 'react'

const Veggies = () => {
    const [veggies,setVeggies] = useState([]);

    useEffect(()=>{
        axios(({
            url: "/server/veggies",
            method: "GET",
        })).then((res)=>{
            setVeggies(res.data)
        })
    },[])

  return (
    <div>
    {/* map to show veggies state */}
    {veggies.map((veggie) => {
        return <div key={veggie._id}>{veggie.name}</div>
    })}
</div>
  )
}

export default Veggies