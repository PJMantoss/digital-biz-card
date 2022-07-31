import React from 'react'

const Info = () => {
  return (
    <div className='info'>
      <img 
        className='userImg' 
        src='./images/profile_pic.jpg' 
        alt='user' 
      />
      <div className='userInfo'>
        <h2 className='name'>PJ Mantoss</h2>
        <p className='position'>Frontend Developer</p>
        <a 
          href='https://pjmantoss.github.io/' 
          target='_blank' 
          rel="noreferrer"
          className='website'
        >https://pjmantoss.github.io/</a>
      </div>
      <div className='socialMedia'>
        <a href='mailto:pjmantoss@gmail.com' className='emailBtn'>
          <img src='./images/email-icon.png' alt='email-icon'/> Email
          </a>
        <a 
          href='https://www.linkedin.com/in/pj-mantoss-55a372a3/' 
          target='_blank'
          rel="noreferrer"
          className='linkedInBtn'
        >
          <img src='./images/linkedin-icon.png' alt='email-icon'/> LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Info