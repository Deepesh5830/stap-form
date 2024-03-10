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
            <div className='container  mt-5 pt-5 pb-5 d-flex justify-content-center align-items-center' style={{ border: '2px solid black' }}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='d-flex flex-wrap justify-content-center pb-5'>
                            <h4 className={next === 1 ? "active-color" : "normal-color"} onClick={() => setNext(1)}>STEP-1</h4>
                            <h4 className={next === 2 ? "active-color" : "normal-color"} onClick={() => setNext(2)}>-----STEP-2</h4>
                            <h4 className={next === 3 ? "active-color" : "normal-color"} onClick={() => setNext(3)}>-----STEP-3</h4>
                            <h4 className={next === 4 ? "active-color" : "normal-color"} onClick={() => setNext(4)}>-----Preview</h4>
                        </div>
                        {next === 1 &&
                            <div>
                                <Step1 setNext={setNext} />
                            </div>
                        }
                        {next === 2 &&
                            <div>
                                <Step2 setNext={setNext} />
                            </div>
                        }
                        {next === 3 &&
                            <div>
                                <Step3 setNext={setNext} />
                            </div>}
                        {next === 4 &&
                            <div>
                                <Preview setNext={setNext} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home