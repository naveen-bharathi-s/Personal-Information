import { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

function App() {
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",  
    address: "",
    gender: "",
  }
  const [formData, setFormData] = useState(initialFormData)
  const [tableData, setTableData] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleFormDataChange = (key, value) => {
    // console.log({key, value})

    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log("form sumbitted", formData)
    if (editIndex === null) {
      setTableData([...tableData, formData])
      setFormData(initialFormData)
    } else {
      tableData[editIndex] = formData
      setTableData(tableData)
      setFormData(initialFormData)
      setEditIndex(null)
    }
  }

  const handleEdit = (index) => {
    // console.log("edited clicked on row", index)
    const clickedItem = tableData[index]
    setFormData(clickedItem)
    setEditIndex(index)
    
  }

  const handleDelete = (index) => {
    // console.log("delete clicked on", index)
    tableData.splice(index, 1)
    // console.log("delete clicked on", tableData)
    setTableData([...tableData])
  }

  // console.log("Form Data Changed", {formData, tableData})

  return (
    <BrowserRouter>
    <div className='p-6 mx-auto'>
     <Routes>
      <Route path='/form' element={<Form
        formData={formData}
        handleFormDataChange={handleFormDataChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />} />
      <Route path='/table' element={<Table
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete} />} />

        <Route path='*' element={<Navigate to="/form" />} />
     </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
