import React from 'react'
import './NotFound.css';
import Button from '../button/Button';

function NotFound() {
  return (
    <div className='notfound'>
      <div>
        <h1>This page does not exist</h1>
        <p>You are trying to access a page that does not exist</p>
        <Button text='Back to main page' route='/'></Button>
      </div>
    </div>
  )
}

export default NotFound;