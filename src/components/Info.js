import React from 'react'

const Info = () => {
  return (
    <div className='info'>
      <img src='./images/profile_pic.jpg' alt='user image' />
      <di className='userInfo'>
        <h2 className='name'>PJ Mantoss</h2>
        <p className='position'>Frontend Developer</p>
        <a 
          href='https://pjmantoss.github.io/' 
          target='_blank' 
          className='website'
        >https://pjmantoss.github.io/</a>
      </di>
      <div className='socialMedia'>
        <button className='emailBtn'>Email</button>
        <button className='linkedInBtn'>LinkedIn</button>
      </div>
    </div>
  )
}

export default Info