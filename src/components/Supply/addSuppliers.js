import React,{useState} from 'react';
import Navbar from '../Home/Navbar';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:9870/addnew";

function AddSuppliers() {
    // const [supplyarr, setSupplyarr] = useState([])
    const navigate = new useNavigate();
    const [supplydata, setSupplydata] = useState({
        name:"",
        email:"",
        city:"",
        foodCount:0,
        waterCount:0,
        kitCount:0,
        clothCount:0,
    })

    const handleChange = (e) => {
        setSupplydata({...supplydata,[e.target.name]:e.target.value})
    }


    // let {name,email,city,foodCount,waterCount,kitCount,clothCount} = supplydata

    const submit = () => {
        fetch(url,{
        method: 'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(supplydata)
        })
        .then(navigate(`/`))
    }



    return (
        <>  

            <Navbar/>
            <h1>addSuppliers</h1>
            <h2>Supplier Name:</h2>
            <input type='text' name='name' value={supplydata.name} onChange={handleChange}/>
            <h2>Email:</h2>
            <input type='text' name='email' value={supplydata.email} onChange={handleChange}/>
            <h2>City:</h2>
            <input type='text' name='city' value={supplydata.city} onChange={handleChange}/>
            <h2>Inventory</h2>
            <span>Food Units : </span>
             < input type='number' step="1" name='foodCount' value={supplydata.foodCount} onChange={handleChange}/>  
            <span>   *1 unit of stored food that can last for 2 days</span>
            <br/>
            <span>Water : </span>
             < input type='number' step="1" name='waterCount' value={supplydata.waterCount} onChange={handleChange}/>  
            <span>    *1 gallon of water container</span>
            <br/>
            <span>Emergency kits : </span>
             < input type='number' step="1"name='kitCount' value={supplydata.kitCount} onChange={handleChange}/>  
            <span>    *Kits containing first aid, medicince, torch ....</span>
            <br/>
            <span>Set of Clothes : </span>
             < input type='number' step="1" name='clothCount' value={supplydata.clothCount} onChange={handleChange}/>  
            <span>*full set with pants shirt</span>
            <br/>
            <button onClick={submit}>Confirm</button>

        </>
    )
}

export default AddSuppliers