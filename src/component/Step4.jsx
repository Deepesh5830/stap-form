import React, { useEffect, useState } from 'react'

const Preview = (props) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [gender, setGender] = useState()
  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem("Step1"))
    const data2 = JSON.parse(localStorage.getItem("Step2"))
    const data3 = JSON.parse(localStorage.getItem("Step3"))

    setName(data1?.name)
    setEmail(data1?.email)
    setMobile(data2?.mobile)
    setAddress(data2?.address)
    setCity(data3?.city)
    setGender(data3?.gender)
  }, [])

  const clearItem = () => {
    localStorage.clear("Step1", "Step2", "Step3")
    props.setNext(1)
  }
  return (
    <div className="border p-5 w-100 maxw-800px" >
      <div className='d-flex flex-wrap justify-content-between gap-3'>
        <h5 className='border border-pink p-3 rounded-3'>Name : {name}</h5>
        <h5 className='border border-pink p-3 rounded-3'>Email : {email}</h5>
      </div>
      <div className='d-flex flex-wrap  justify-content-between gap-3'>
        <h5 className='border border-pink p-3 rounded-3'>Mobile : {mobile}</h5>
        <h5 className='border border-pink p-3 rounded-3'>Address : {address}</h5>
      </div>
      <div className='d-flex flex-wrap  justify-content-between gap-3'>
        <h5 className='border border-pink p-3 rounded-3'>City : {city}</h5>
        <h5 className='border border-pink p-3 rounded-3'>Gender : {gender}</h5>
      </div>
      <div className='text-center'>
        <button className='btn btn-primary' onClick={() => clearItem()}>Go To Home</button>
      </div>
    </div>
  )
}

export default Preview