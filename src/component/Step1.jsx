import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

const Step1 = (props) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const [error1, setError1] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      setError("Required Filed Name.")
      return toast.warn("Required Filed Name.")
    }
    if (!email) {
      setError1("Required Filed Email.")
      return toast.warn("Required Filed Email. ")
    }
    const data = { name, email }
    localStorage.setItem("Step1", JSON.stringify(data))
    props.setNext(2)
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Step1"))
    setName(data?.name)
    setEmail(data?.email)
  }, [])

  return (
    <>
      <div className="border p-5 w-100 maxw-800px" >
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            {name ? "" : <div className='text-danger'>{error}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {email ? "" : <div className='text-danger'>{error1}</div>}
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