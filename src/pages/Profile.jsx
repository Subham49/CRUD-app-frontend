import React, { useEffect, useState } from 'react'
import Base from '../component/Base'
import { useParams } from 'react-router-dom'
import { getSingleStudent } from '../services/student-service'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap'

function Profile() {
  const {rollNo} = useParams()
  const [student, setStudent] = useState(null)
  useEffect(()=>{
    getSingleStudent(rollNo).then(data=>{
        // console.log(data);
        setStudent(data)
    }).catch(error=>{
        error.toast(error)
        console.log(error)
    })
  },[])
  
  const userView=()=>{
    return(
      <Row className='mt-3'>
        <Col md={{size:6, offset:3}}>
          <Card>
            <CardBody>
              <h3 className='text-uppercase text-center'>Student Information</h3>

              <Container className='text-center'>
                <img style={{width:'50%'}} src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1693663791~exp=1693664391~hmac=29440beae7af3484bc42af5347458010342108b7710086841eb2abfd78b2ca51' alt='user profile pic'/>
              </Container>
              {student && (
              <Table className='mt-5'>
                <tbody>
                    <tr>
                        <td>Roll:</td>
                        <td>{rollNo}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{student.name}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{student.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{student.phoneNo}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{student.address}</td>
                    </tr>
                    <tr>
                        <td>About:</td>
                        <td>{student.about}</td>
                    </tr>
                </tbody>
                
              </Table>
              )
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
  return (
    <Base>
      {/* <h1>profile page {rollNo}</h1> */}
      {userView()}
    </Base>
  )
}

export default Profile
