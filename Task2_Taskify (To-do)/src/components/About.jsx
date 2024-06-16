import React from 'react'

const About = () => {
  return (
    <>

      <div className="conatiner-fluid noteCard py-5">
        <div className="container">
          <h1 className=' text-center '>About Us</h1>
          <p className='fs-5'>Welcome to our task management web application!</p>
          <p className='fs-5'>At Taskify, we understand the importance of staying organized and productive. That's why we've created this app to help you manage your tasks effectively and efficiently.</p>
          <p className='fs-5'>Our app is designed to be simple and easy to use, allowing you to focus on what matters most – getting things done. Whether you're a student juggling assignments, a professional managing deadlines, or just someone looking to stay organized, our app is here to help.</p>
          <p className='fs-5'>With Taskify, you can:</p>
          <ul className='fs-5'>
            <li>Add, edit, and delete tasks</li>
            <li>Mark tasks as complete</li>
            <li>Organize tasks by priority or due date</li>
            <li>Access your tasks from anywhere, as they are stored locally on your device</li>
          </ul>
          <p className='fs-5'>Our team is dedicated to providing you with the best possible experience. We're constantly working to improve our app and add new features based on your feedback.</p>
          <p className='fs-5'>Thank you for choosing Taskify! We hope our app helps you stay organized and productive.</p>
        </div>
      </div>
    </>
  )
}

export default About
