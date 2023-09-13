import React, { useEffect, useState } from 'react'
import One from './One'
import { deleteStudent, getAllStudent } from '../services/student-service'
import Base from './Base'
import { toast } from 'react-toastify'

function Home() {
  const [students, setStudents] = useState([])

  const loadAllStudents=()=>{
    getAllStudent().then((data)=>{
      setStudents([...data])
      // console.log(data)
      // console.log("aaaa")
    }).catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    loadAllStudents()
  },[])
  
  const deleteFunction=(student)=>{
    // console.log(student)
    deleteStudent(student.rollNo).then(data=>{
      toast.success(`student with roll ${student.rollNo} deleted!!`)
      loadAllStudents()
    }).catch(error=>{
      console.log(error)
      toast.error('error in deleting!!')
    })
  }
  return (

    <Base>
      {
        students.map((student, index)=>(
          <One student={student} key={index} deleteStudent={deleteFunction}/>
        ))
      }
    </Base>
  )
}

export default Home
