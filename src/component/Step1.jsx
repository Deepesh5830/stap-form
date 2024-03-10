import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

const Step1 = (props) => {
const[name, setName] = useState()
const[email,setEmail] = useState()
const handleSubmit = (e)=>{
  e.preventDefault()
  const data =  {name,email}
localStorage.setItem("Step1",JSON.stringify(data))
props.setNext(2)
}
useEffect(()=>{
const data = JSON.parse(localStorage.getItem("Step1"))

setName(data?.name)
setEmail(data?.email)
},[])

  return (
    <>
      <div className='' style={{border:'1px solid black',width:'800px',padding:'20px'}}>
      <Form onSubmit={e=>handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <div className=' text-center'>
      <button className='btn btn-primary text-center' type='submit'>Next</button>

      </div>
    </Form>

      </div>
    </>
  )
}

export default Step1