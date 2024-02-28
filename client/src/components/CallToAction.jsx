import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 
    justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>
                Want to explore more about My Journey?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with my Recent Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/iamdul" target='_blank'rel='noopener noreferrer'>
                    iamdul GitHub Profile
                </a>
            </Button>
        </div>
        <div className='p-7 flex-1 '>
            <img src="https://github.blog/wp-content/uploads/2013/04/0cf7be70-a5e3-11e2-8943-6ac7a953f26d.jpg?resize=1234%2C631"  />
        </div>
    </div>
  )
}
