import React from 'react'
import { useNavigate } from "react-router-dom"

const Form = ({ formData, handleFormDataChange, handleSubmit, editIndex }) => {
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(e)
        navigate("/table")
    }
    return (
         <div>
            <h2 className="text-2xl font-bold mb-4 underline">Personal Information:</h2>
            <form className='border rounded-lg p-2 overflow-x-auto shadow-lg' onSubmit={onSubmit} >
                <input type="text" placeholder='Name' name='name'
                    className='w-full p-2 border rounded mb-2'
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("name", value);
                    }}
                    required
                    value={formData.name}
                />
                <input type="email" placeholder='Email' name='email'
                    className='w-full p-2 border rounded mb-2'
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("email", value);
                    }}
                    required
                    value={formData.email}
                />
                <input type="number" placeholder='Mobile Number' name='number'
                    className='w-full p-2 border rounded mb-2'
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("mobile", value);
                    }}
                    required
                    value={formData.mobile}
                />
                <textarea type="text" placeholder='Enter your Address'
                    className='w-full p-2 border rounded mb-2'
                    onChange={(e) => {
                        const { value } = e.target;
                        handleFormDataChange("address", value);
                    }}
                    required
                    value={formData.address}
                />
                <select name="gender" className='w-full p-2 border rounded mb-2' 
                onChange={(e) => {
                        // const { value } = e.target;
                        handleFormDataChange("gender", e.target.value);
                    }}
                    required
                    value={formData.gender}>
                    <option value="" name="gender">--None--</option>
                    <option value="Male" name="gender">Male</option>
                    <option value="Female" name="gender">Female</option>
                    <option value="Other" name="gender">Other</option>
                </select>

                <button type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded min-w-full'>
                    {editIndex === null ? "Add" : "Update"}
                </button>

            </form>
        </div>
    )
}

export default Form