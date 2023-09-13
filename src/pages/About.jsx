import React from 'react'
import Base from '../component/Base'
import { Container, List } from 'reactstrap'

function About() {
  return (
    <Base>
      <Container>
        <h1 className='text-center'>CRUD App</h1>
        <p>The CRUD App is a user-friendly web application designed to simplify the management of student records. It offers a seamless experience for educators and administrators to handle student data efficiently. Key features of the app include:</p>
        <List>
          <li><b>Student List:</b> The app provides a clear and organized list of all registered students. Users can quickly browse through the student database, which includes essential information such as student ID, name, age, and grade.</li>
          <li><b>Create:</b> Easily add new students to the system by entering their details into a user-friendly form. Upon submission, the student's information is stored securely in the database and immediately visible in the student list.</li>
          <li><b>Read:</b> The app allows users to access detailed information about each student by clicking on their respective entries in the list. This feature provides quick access to individual student profiles, making it effortless to review their data.</li>
          <li><b>Update:</b> Users can edit existing student information at any time. By clicking the "Edit" button on a student's profile, they can modify fields such as name, age, or grade. The changes are instantly reflected in the database.</li>
          <li><b>Delete:</b> When necessary, users can remove student records from the system with the "Delete" option. This operation ensures that outdated or irrelevant data is efficiently managed.</li>
        </List>
        <p>The CRUD App empowers educators and administrators with a centralized platform to maintain student records, enhancing their ability to track and manage student information effectively. With its user-friendly interface and CRUD capabilities, this app streamlines the process of student data management, saving time and improving efficiency for educational institutions.</p>
      </Container>    
    </Base>
  )
}

export default About
