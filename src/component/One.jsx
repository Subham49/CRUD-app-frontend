import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Container, Row } from 'reactstrap'


function One({student, deleteStudent}) {
  
  return (
    <Container>
        {/* {JSON.stringify(student)} */}
        {/* {console.log(student.rollNo)} */}
        <Card className="my-3">
          <CardHeader>
            Roll no : {student.rollNo}
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={6}>
                <CardTitle tag="h5">
                {student.name}
              </CardTitle>
              <CardText>
                {student.about}
              </CardText>
              </Col>
              <Col md={6}>
                <div className='text-center'>
                <Button color='warning' tag={Link} to={`/update/${student.rollNo}`}>
                  Update
                </Button>
                <Button color='danger' onClick={()=>{deleteStudent(student)}} className='ms-2'>
                  Delete
                </Button>
                <Button color='info' tag={Link} to={`/profile/${student.rollNo}`} className='ms-2'>
                  More Info
                </Button>
                </div>
              </Col>
            </Row>
            
          </CardBody>
        </Card>
    </Container>
  )
}

export default One