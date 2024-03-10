import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

const Step3 = (props) => {
  const [city, setCity] = useState()
  const [gender, setGender] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { city, gender }
    localStorage.setItem("Step3", JSON.stringify(data))
    props.setNext(4)
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Step3"))
    console.log("det", data)

    setCity(data?.city)
    setGender(data?.gender)
  }, [])

  return (
    <>
      <div className='' style={{ border: '1px solid black', width: '800px', padding: '20px' }}>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Full Name" value={city} onChange={(e) => setCity(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="Email" value={gender} onChange={(e) => setGender(e.target.value)} />
          </Form.Group>
          <div className=' text-center'>
            <button className='btn btn-primary text-center' onClick={()=>props.setNext(2)}>Previous</button>
            <button className='btn btn-primary text-center' type='submit'>Next</button>

          </div>
        </Form>

      </div>
    </>
  )
}

export default Step3