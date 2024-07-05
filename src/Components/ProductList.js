import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async ()=>{
        let result = await fetch("http://localhost:5000/products",{
            headers:{
                authorization: `baerer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        });

        result = await result.json();
        setProducts(result);
       
       
    }
    // console.log(products)

    const deleteRecord = async(id)=>{
        let result = await fetch(`http://localhost:5000/delete/${id}`,{
            method:"Delete",
            headers:{
                authorization: `baerer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        })
        result = result.json();
        if(result){
            alert("record is deleted");
        }
        // console.log(result);
        getProducts();
    }

    const searchHandle = async(event)=>{
        let key = event.target.value;
        if(key){

            let result = await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization: `baerer ${JSON.parse(localStorage.getItem('Token'))}`
                }
            });
            result = await result.json();
            setProducts(result);
        }else{
            getProducts();
        }
    }
  return (

    <div>
        <div className="heading text-center m-5 font-bold text-[28px] text-indigo-700">Product List</div>
        <input type="text" onChange={searchHandle} placeholder='search product' className='block w-[50%] border-2 border-indigo-600 focus:outline-none focus:border-indigo-900 rounded-md p-2 mx-auto'/>
     <div className="tableview mt-10">
        <div className="headingrow flex text-center w-[90%] mx-auto border-[1px] border-indigo-700 font-bold ">
            <div className="Name w-[10%] border-[1px] border-indigo-700 p-1">Sr.No</div>
            <div className="Name flex-1 border-[1px] border-indigo-700 p-1">Name</div>
            <div className="price flex-1 border-[1px] border-indigo-700 p-1">Price</div>
            <div className="Company flex-1 border-[1px] border-indigo-700 p-1">Company</div>
            <div className="Category flex-1 border-[1px] border-indigo-700 p-1">Category</div>
            <div className="Name flex-1 border-[1px] border-indigo-700 p-1">Operation</div>
        </div>
        {products.length>0 ? products.map((item,index)=>(

        <div key={item._id} className="contentrow flex text-center w-[90%] mx-auto border-[1px] border-indigo-700 capitalize mb-1">
            <div className="Name w-[10%]  border-[1px] border-indigo-700 p-1">{index+1}</div>

            <div className="Name flex-1 border-[1px] border-indigo-700 p-1">{item.name}</div>
            <div className="price flex-1 border-[1px] border-indigo-700 p-1">{item.price}</div>
            <div className="Company flex-1 border-[1px] border-indigo-700 p-1">{item.company}</div>
            <div className="Category flex-1 border-[1px] border-indigo-700 p-1">{item.category}</div>
            <div className="Name flex-1 w-[10%] border-[1px] border-indigo-700 p-1 flex justify-center gap-[10px]">
                <button onClick={()=>{deleteRecord(item._id)}} className=' bg-red-600 px-2 py-1 text-white rounded-md hover:bg-red-400'>Delete</button>
                <Link to={`/update/${item._id}`} className='bg-green-600 px-2 py-1 text-white rounded-md hover:bg-green-400 inline-block'>Update</Link>
                </div>
        </div>
        )):
        <div className='font-bold text-center mt-8'>No result found</div>
        }
     </div>
    </div>
  )
}

export default ProductList
