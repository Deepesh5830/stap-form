import React, { useState } from 'react'
import Step1 from '../component/Step1'
import Step2 from '../component/Step2'
import Step3 from '../component/Step3'
import Preview from '../component/Step4'
// import Step1 from '../component/Step1'

const Home = () => {
    const [next, setNext] = useState(1)

    return (
        <div>
            <div className='container  mt-5 d-flex justify-content-center align-items-center' style={{ border: '2px solid black', height: '500px' }}>
                <div className='row'>
                    <div className='col-lg-12'>
                        {next === 1 &&
                            <div>
                                <h2>STEP-1</h2>
                                <Step1 setNext={setNext} />

                            </div>

                        }
                        {next === 2 &&
                            <div>
                                <h2>STEP-2</h2>
                                <Step2 setNext={setNext} />

                            </div>

                        }
                        {next === 3 &&
                            <div>
                                <h2>STEP-3</h2>
                                <Step3 setNext={setNext} />

                            </div>}
                        {next === 4 &&
                            <div>
                                <h2>Preview</h2>
                                <Preview setNext={setNext} />

                            </div>

                        }
                    </div>
                </div>
            </div>


            {/* <Step1 /> */}
        </div>
    )
}

export default Home