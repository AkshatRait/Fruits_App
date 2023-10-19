import axios from 'axios';
import React, { useState } from 'react'

const CreateVeggies = () => {
    const [veggieData, setVeggieData] = useState({
        name: "",
        color: "",
        age: 0,
        readyToEat: false,
        isHealthy: false,
    })
    console.log(veggieData)
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!veggieData.name || !veggieData.color){
            setError('Invalid inputs!'); 
            return
        }
        console.log(veggieData);
        axios({
            method: "POST",
            url: "/server/veggies",
            data: veggieData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
        }).then((res)=>{
            console.log(res.data);
            setVeggieData({
                name: "",
                color: "",
                age: 0,
                readyToEat: false,
                isHealthy: false,
            })
            setError('')
        })
    }
    return (
        <div>
            <h1>New veggie page</h1>
            {
                error && <div>{error}</div>
            }
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={veggieData.name} onChange={(e) => setVeggieData({...veggieData, name: e.target.value})} /><br/>
                Color: <input type="text" name="color" value={veggieData.color} onChange={(e) => setVeggieData({...veggieData, color: e.target.value})} /><br/>
                Age: <input type="number" name="age" value={veggieData.age} onChange={(e) => setVeggieData({...veggieData, age: +e.target.value})} /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" value={veggieData.readyToEat} onChange={(e) => setVeggieData({...veggieData, readyToEat: !veggieData.readyToEat})} /><br/>
                Is Healthy To Eat: <input type="checkbox" name="healthy" value={veggieData.isHealthy} onChange={(e) => setVeggieData({...veggieData, isHealthy: !veggieData.isHealthy})} /><br/>
                <button>Create Veggie</button>
             </form>
        </div>);
}

export default CreateVeggies