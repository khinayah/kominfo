import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login'
import './App.css'
import TableCourses from './TableCourses'
import SelectdData from './MentorFee'
import CountStudents from './CountStudents'
import MentorSarjana from './MentorSarjana'
import MentorNotSarjana from './MentorNotSarjana'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
no
  return (
    <>
       {/* <Router> */}
       <div className="App">
        {/* <Routes>
          <Route path="/course" element={<TableCourses />} />
          <Route path="/login" element={<Login />} />
            <Login />
      </Routes> */}
      {/* <Login /> */}
      <TableCourses />
      {/* <SelectdData /> */}
      {/* <CountStudents /> */}
      {/* <MentorSarjana /> */}
      {/* <MentorNotSarjana /> */}

      </div>
    {/* </Router> */}

    </>
  )
}

export default App
