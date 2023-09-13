import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardText, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Base from '../component/Base'
import { toast } from 'react-toastify'
import { submitStudent } from '../services/student-service'
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const [student, setStudent] = useState({
    name:'',
    email:'',
    phoneNo:'',
    address:'',
    about:''
  })

  const handleOnChange=(event, property)=>{
    setStudent({...student, [property]:event.target.value})
    // console.log(student.name)
  }

  const handleReset=()=>{
    setStudent({
        name:'',
        email:'',
        phoneNo:'',
        address:'',
        about:''
    })
  }

  const navigate = useNavigate()

  const handleSubmit=(event)=>{
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
        toast.error("phone length must be 10!")
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
    submitStudent(student).then(data=>{
        console.log(data)
        setStudent({
            name:'',
            email:'',
            phoneNo:'',
            address:'',
            about:''
        })
        toast.success('Student is added successfully!!')
        navigate('/')
    }).catch(error=>{
        console.log(error)
    })
  }
  return (
    <Base>
        {/* {JSON.stringify(student)} */}
        <Row className="mt-3">
            <Col sm={{ size: 6, offset: 3 }}>
                <Card>
                    <CardHeader className='text-center'>
                        <h3 className='my-3'>Add Student details!!</h3>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
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
                                <Button color="dark">Submit</Button>
                                <Button onClick={handleReset} type="reset" color="secondary" className="ms-2">Reset</Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Base>
  )
}

export default AddStudent
