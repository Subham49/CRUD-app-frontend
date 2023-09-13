import React, { useEffect, useState } from 'react'
import Base from '../component/Base'
import { useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { getSingleStudent, updateStudent } from '../services/student-service'
import { toast } from 'react-toastify'

function UpdateForm() {
  const {rollNo} = useParams()
  const [student, setStudent] = useState(null)
  useEffect(()=>{
    getSingleStudent(rollNo).then(data=>{
        setStudent(data)
        // console.log(student)
    }).catch(error=>{
        toast.error('error while loading student')
        console.log(error)
    })
  },[])

  const handleReset=()=>{
    setStudent({
        name:'',
        email:'',
        phoneNo:'',
        address:'',
        about:''
    })
  }

  const handleOnChange=(event, property)=>{
    setStudent({...student, [property]:event.target.value})
    // console.log(student.name)
  }

  const handleupdate=(event)=>{
    event.preventDefault()
    if(student.name==='')
    {
        toast.error("name can't be empty!!")
        return
    }
    if(student.email==='')
    {
        toast.error("email can't be empty!!")
        return
    }
    if(student.phoneNo==='')
    {
        toast.error("phone can't be empty!!")
        return
    }
    if(student.phoneNo.length!==10)
    {
        toast.error("phone length must be 10!!")
        return
    }
    if(student.address==='')
    {
        toast.error("address can't be empty!!")
        return
    }
    if(student.about==='')
    {
        toast.error("about can't be empty!!")
        return
    }
    // console.log(student)
    updateStudent(student, rollNo).then(data=>{
        console.log(data)
        setStudent({
            name:'',
            email:'',
            phoneNo:'',
            address:'',
            about:''
        })
        toast.success('Student is updated successfully!!')
    }).catch(error=>{
        console.log(error)
        toast.error('error while updating student!!')
    })
  }

  return (
    <Base>
        <Container>
        {/* {JSON.stringify(student)} */}
        <Row className="mt-3">
            <Col sm={{ size: 6, offset: 3 }}>
                <Card>
                    <CardHeader className='text-center'>
                        <h3>Updating Student {rollNo} data</h3>
                    </CardHeader>
                    <CardBody>
                    { student &&
                        <Form onSubmit={handleupdate}>
                            <FormGroup>
                                <Label>Enter Student name</Label>
                                <Input value={student.name} type='text' placeholder='enter here' onChange={(e)=>{handleOnChange(e, 'name')}}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Enter Student email</Label>
                                <Input value={student.email} type='email' placeholder='enter here' onChange={(e)=>{handleOnChange(e, 'email')}}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Enter Student phone no.</Label>
                                <Input value={student.phoneNo} type='text' placeholder='enter here' onChange={(e)=>{handleOnChange(e, 'phoneNo')}}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Enter Student address</Label>
                                <Input value={student.address} type='text' placeholder='enter here' onChange={(e)=>{handleOnChange(e, 'address')}}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>About Student</Label>
                                <Input value={student.about} type='textarea' placeholder='enter here' onChange={(e)=>{handleOnChange(e, 'about')}}></Input>
                            </FormGroup>

                            <Container className="text-center">
                                <Button color="dark">Update</Button>
                                <Button onClick={handleReset} type="reset" color="secondary" className="ms-2">Reset</Button>
                            </Container>
                        </Form>
                    }
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </Container>
    </Base>
  )
}

export default UpdateForm
