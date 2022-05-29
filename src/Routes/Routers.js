import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DataDisimpan } from '../Asset/Components/Alert/DataDisimpan'
import { AddNewCar } from '../Pages/AddNewCar/AddNewCar'
import { Cars } from '../Pages/Cars/Cars'
// import ContohApi from '../Pages/Contoh/ContohApi'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { Detail } from '../Pages/Detail Mobil/Detail'
import { SignIn } from '../Pages/SignIn/SignIn'
import { Tiket } from '../Pages/Tiket/Tiket'

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="Cars" element={<Cars/>} />
        {/* <Route path="ContohApi" element={<ContohApi/>} /> */}
        <Route path="AddNewCar" element={<AddNewCar/>} />
        <Route path="DataDisimpan" element={<DataDisimpan/>} />
        <Route path="Detail" element={<Detail/>} />
        <Route path="Tiket" element={<Tiket/>} />
    </Routes>
  )
}
