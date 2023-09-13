import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  Form,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { getByEmail } from '../services/student-service';
import { toast } from 'react-toastify';


function CustomNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate()

  const submitHandler=(event)=>{
    event.preventDefault()
    console.log(event.target[0].value)
    getByEmail(event.target[0].value).then(data=>{
      // console.log(data)
      navigate(`/profile/${data.rollNo}`)
    }).catch(error=>{
      console.log(error)
      toast.error(error.response.data.message)
    })
  }



  return (
    <div>
      <Navbar color='dark' dark expand='md' className='px-5'>
        <NavbarBrand tag={ReactLink} to='/'>CRUD App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to='/add-student'>
                Add Student
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>YouTube</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><a href='https://www.linkedin.com/in/subham001/' target='_blank'>Linkedin</a></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            <Form onSubmit={submitHandler}>
              <Input type='email' placeholder='email to search'/>
            </Form>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;