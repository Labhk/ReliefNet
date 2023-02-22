import React,{useState} from 'react';
import Navbar from '../Home/Navbar';
import { useNavigate } from 'react-router-dom';
import './supply.css';

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
            <div className='Add'>
            <h1>Fill the Supplier Details</h1>
            <div className='fill'>
            <input type='text' name='name' value={supplydata.name} onChange={handleChange} placeholder='Enter Your Name'/>
            </div>
            <div className='fill'>
            <input type='text' name='email' value={supplydata.email}  onChange={handleChange} placeholder='Enter Your Email'/>
            </div>
            <div className='fill'>
            <input type='text' name='city' value={supplydata.city} onChange={handleChange} placeholder='Enter Your City '/>
            </div>
            <div className='fillUnit'>
                <h2>Inventory</h2>
                <span>Food Units : </span>
                < input type='number' step="1" name='foodCount' style={{marginLeft:"56px"}} value={supplydata.foodCount} onChange={handleChange}/>  
                <p>   *1 unit of stored food that can last for 2 days</p>
                <br/>
                <span>Water : </span>
                < input type='number' step="1" name='waterCount' style={{marginLeft:"96px"}} value={supplydata.waterCount} onChange={handleChange}/>  
                <p>    *1 gallon of water container</p>
                <br/>
                <span>Emergency kits : </span>
                < input type='number' step="1"name='kitCount' value={supplydata.kitCount} onChange={handleChange}/>  
                <p>*Emergency kit containing flashlight, radio, first aid kit, and emergency blankets</p>
                <br/>
                <span>Set of Clothes : </span>
                < input type='number'  name='clothCount'style={{marginLeft:"35px"}} value={supplydata.clothCount} onChange={handleChange}/>  
                <br/>
                <div className='confirm'>
                <button onClick={submit}>Confirm</button>
                </div>
                
            </div>

            
            
            
            
            
            
            </div>
        </>
    )
}

export default AddSuppliers