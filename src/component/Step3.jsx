import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

const Step3 = (props) => {
  const [city, setCity] = useState()
  const [gender, setGender] = useState()
  const [error, setError] = useState()
  const [error1, setError1] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!city) {
      setError("Required Filed City.")
      return toast.warn("Required Filed City.")
    }
    if (!gender) {
      setError1("Required Filed Gender.")
      return toast.warn("Required Filed Gender. ")
    }
    const data = { city, gender }
    localStorage.setItem("Step3", JSON.stringify(data))
    props.setNext(4)
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Step3"))
    setCity(data?.city)
    setGender(data?.gender)
  }, [])

  return (
    <>
      <div className="border p-5 w-100 maxw-800px" >
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter Your City." value={city} onChange={(e) => setCity(e.target.value)} />
            {city ? "" : <div className='text-danger'>{error}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Gender." value={gender} onChange={(e) => setGender(e.target.value)} />
            {gender ? "" : <div className='text-danger'>{error1}</div>}
          </Form.Group>
          <div className='d-flex justify-content-center gap-5'>
            <button className='btn btn-primary text-center' onClick={() => props.setNext(2)}>Previous</button>
            <button className='btn btn-primary text-center' type='submit'>Next</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Step3