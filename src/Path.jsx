import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Package from './Package'
import Airlines from './Airlines'
import Popular from './Popular'
import Last from './Last'
import Navbar from './Navbar'
import Search from './Search'
import Manali from './Manali'
import Leh from './Leh'
import Goa from './Goa'
import Kerela from './Kerela'
import Delhi from './Delhi'
import Kutch from './Kutch'

export default function Path() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourpackage" element={<Package />} />
          <Route path="/airlines" element={<Airlines />} />
          <Route path="/destination" element={<Popular />} />
          <Route path="/about" element={<Last />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/manali" element={<Manali />} />
          <Route path="/leh" element={<Leh />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/kerela" element={<Kerela />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/kutch" element={<Kutch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
