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
    <div>
      <div>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{mobile}</h3>
        <h3>{address}</h3>
        <h3>{city}</h3>
        <h3>{gender}</h3>


      </div>
      <button className='btn btn-primary' onClick={() => clearItem()}>save</button>
    </div>
  )
}

export default Preview