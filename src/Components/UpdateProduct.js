import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState(""); 
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
         
        getData();
    }, [])


    const getData = async ()=>{
        let result = await fetch("http://localhost:5000/product/"+param.id,{
            headers:{
                authorization: `baerer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        });
        result = await result.json();
        // console.log(result);
       setName(result.name);
       setPrice(result.price);
       setCategory(result.category);
       setCompany(result.company);
    }
    const updateProduct = async () => {
        // console.log(name,price,category,company);

        let result = await fetch("http://localhost:5000/product/"+param.id,{
            method:"put",
            body:JSON.stringify({
                name:name,
                price:price,
                category:category,
                company: company
            }),
            headers:{
                "Content-Type":"application/json",
                    authorization: `baerer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        })
        result = await result.json();
        if(result){
            alert("product updated successfully");
            navigate('/');
        }else{
            alert("something went wrong")
        }
        // console.log(name,price,category,company);
    }


   
  return (
    <div className='flex justify-center items-center my-auto'>
            <div className="contentWrapper w-[40%]  flex flex-col gap-1">
                <h1 className='text-center font-bold text-[28px] text-blue-600'>Update Product</h1>

                <label htmlFor="name">Name</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='name'
                    value={name}
                    type="text"
                    placeholder='Enter name'
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label htmlFor="price">Price</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='price'
                    value={price}
                    type="number"
                    placeholder='Enter price'
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                />

                <label htmlFor="category">Category</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='category'
                    value={category}
                    type="text"
                    placeholder='Enter category'
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                />

                <label htmlFor="company">Company</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='company'
                    value={company}
                    type="text"
                    placeholder='Enter company'
                    onChange={(e) => {
                        setCompany(e.target.value);
                    }}
                />

                <button
                    className='bg-indigo-700 px-5 py-2 inline-block w-fit text-white ml-auto rounded-md hover:bg-indigo-400 hover:text-black font-bold mt-4'
                    onClick={updateProduct}
                >Update Product</button>
            </div>
        </div>
  )
}

export default UpdateProduct
