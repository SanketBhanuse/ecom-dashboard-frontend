import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState("");
    const Navigate = useNavigate();
    const addproduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        let userId = JSON.parse(localStorage.getItem("user"))._id;

        let result = await fetch(`${URL}/add-product`, {
        // let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        result = await result.json();
        console.log(result)
        Navigate('/');

    }
    return (
        <div className='flex justify-center items-center my-auto'>
            <div className="contentWrapper w-[40%]  flex flex-col gap-1">
                <h1 className='text-center font-bold text-[28px] text-blue-600'>Add Product</h1>

                <label htmlFor="name">Name</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='name'
                    type="text"
                    placeholder='Enter name'
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                {error && !name && <span className='text-red-600 font-semibold'>Please enter a valid name*</span>}
                <label htmlFor="price">Price</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='price'
                    type="number"
                    placeholder='Enter price'
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                />
                {error && !price && <span className='text-red-600 font-semibold'>Please enter a valid price*</span>}

                <label htmlFor="category">Category</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='category'
                    type="text"
                    placeholder='Enter category'
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                />
                {error && !category && <span className='text-red-600 font-semibold'>Please enter a valid category*</span>}

                <label htmlFor="company">Company</label>
                <input
                    className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required
                    name='company'
                    type="text"
                    placeholder='Enter company'
                    onChange={(e) => {
                        setCompany(e.target.value);
                    }}
                />
                {error && !company && <span className='text-red-600 font-semibold'>Please enter a valid company*</span>}

                <button
                    className='bg-indigo-700 px-5 py-2 inline-block w-fit text-white ml-auto rounded-md hover:bg-indigo-400 hover:text-black font-bold mt-4'
                    onClick={addproduct}
                >Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct
