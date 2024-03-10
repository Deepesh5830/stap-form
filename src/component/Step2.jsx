import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

const Step2 = (props) => {
  const [mobile, setMobile] = useState()
  const [address, setAddress] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { mobile, address }
    localStorage.setItem("Step2", JSON.stringify(data))
    props.setNext(3)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Step2"))
    console.log("det", data)

    setMobile(data?.mobile)
    setAddress(data?.address)
  }, [])

  return (
    <>
      <div className='' style={{ border: '1px solid black', width: '800px', padding: '20px' }}>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Full Name" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Email" value={address} onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>
          <div className='d-flex justify-space-evenly text-center gap-4'>
            <button className='btn btn-primary text-center' onClick={()=>props.setNext(1)} >Previous</button>
            <button className='btn btn-primary text-center' type='submit'>Next</button>

          </div>
        </Form>

      </div>
    </>
  )
}

export default Step2