import React,{useState, useEffect} from 'react';
import Navbar from '../Home/Navbar';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './suppliers.css'


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
        <div className='main' >
            <h1 align="center" >Find Suppliers</h1>
            <div className='list'>
                {data.map((values) => {
                    const {_id,name,email,city,foodCount,waterCount,kitCount,clothCount} = values;
                    return(
                        <>
                            <Link to="/send">
                            <div class="card" key={_id} onClick={(e) => {sessionStorage.setItem('supplerEmail',email)}}>
                                <h2 className='sname'>Supplier Name : {name}</h2>
                                <h2 className='city'>City : {city}</h2>
                                <h2  style={{paddingTop:"10px",paddingBottom:"10px"}}> Inventory   </h2>
                                <h4>Food Units  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#127830; X  {foodCount}</h4>
                                <h4>Water Bottles &nbsp;&nbsp;&nbsp;&nbsp;&#128167;&nbsp; X  {waterCount}</h4>
                                <h4>Emergency kits&nbsp; &#127890; X  {kitCount}</h4>
                                <h4>Set of Clothes &nbsp;&nbsp;&nbsp;&#128085; X  {clothCount}</h4>
                            </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </div>
        
        
    </>
  )
}

export default Suppliers