import React,{useState, useEffect} from 'react';
import Navbar from '../Home/Navbar';
import {Link} from 'react-router-dom';
import axios from 'axios';


const url = "http://localhost:9870/suppliers" 

function Suppliers() {

    const [data,setData] = useState([]);

    

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })


  return (
    <>
        <Navbar/>
        <h1>Suppliers</h1>
        <div className='list'>
            {data.map((values) => {
                const {_id,name,email,city,foodCount,waterCount,kitCount,clothCount} = values;
                return(
                    <>
                        <Link to="/send">
                        <div class="card" key={_id} onClick={(e) => {sessionStorage.setItem('supplerEmail',email)}}>
                            <h2 className='sname'>Supplier Name : {name}</h2>
                            <h3 className='city'>City : {city}</h3>
                            <h3>Inventory</h3>
                            <h4>Food Units &#127830; X  {foodCount}</h4>
                            <h4>Water Bottles &#128167; X  {waterCount}</h4>
                            <h4>Emergency kits &#127890; X  {kitCount}</h4>
                            <h4>Set of Clothes &#128085; X  {clothCount}</h4>
                        </div>
                        </Link>
                    </>
                )
            })}
        </div>
        
    </>
  )
}

export default Suppliers