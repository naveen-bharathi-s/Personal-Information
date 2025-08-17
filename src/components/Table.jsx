import React from 'react'

import { useNavigate, Link } from "react-router-dom"



const Table = ({ tableData, handleEdit, handleDelete }) => {
    const navigate = useNavigate()
    
  
    return (
        <div className='scrollbar-hide overflow-x-auto shadow-lg rounded-lg bg-red-700 text-white'>
            <table className='border min-w-full border-collapse'>
            
                    <thead>
                        <tr className='bg-gray-100 cursor-pointer text-black'>

                            <th className='border p-2' onClick={() => navigate("/form")}>Name</th>
                            <th className='border p-2' onClick={() => navigate("/form")}>Email</th>
                            <th className='border p-2' onClick={() => navigate("/form")}>Mobile</th>
                            <th className='border p-2 min-w-[300px]' onClick={() => navigate("/form")}>Address</th>
                            <th className='border p-2' onClick={() => navigate("/form")}>Gender</th>
                            <th className='border p-2 min-w-[200px]' onClick={() => navigate("/form")}>Actions</th>
                        </tr>
                    </thead>


                <tbody>
                    {tableData.map((data, idx) => {
                        return (
                            <tr key={idx} >
                                <td className='border border-gray-300 px-4 py-2 text-center'>
                                    {data.name}</td>
                                <td className='border border-gray-300 px-4 py-2 text-center'>
                                    {data.email}</td>
                                <td className='border border-gray-300 px-4 py-2 text-center'>
                                    {data.mobile}</td>
                                <td className='border border-gray-300 px-4 py-2 text-center'>
                                    {data.address}</td>
                                <td className='border border-gray-300 px-4 py-2 text-center'>
                                    {data.gender}</td>
                                <td className='border border-gray-300 px-4 py-2 text-center'>

                                    <button className='bg-yellow-400 text-white px-4 py-2 mx-2 rounded'
                                        onClick={() => {
                                            handleEdit(idx)
                                            navigate("/form")
                                        }}>
                                        Edit</button>
                                    <button className='bg-orange-500 text-white px-4 py-2 rounded'
                                        onClick={() => {
                                            handleDelete(idx)
                                        }}>
                                        Delete</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table