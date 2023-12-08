import React from 'react'

export const Contact = () => {
  return (
    <section className='mt-16 border border-red-600'>
        <div>
            <h1 className='font-bold text-xl inline border-b-2 border-gray-800 ml-5'>Contact me</h1>
            <p className='ml-5 mt-2'>Send me a message- <span className='underline'>oshoarofavour@gmail.com</span></p>
            <form action="" className='flex flex-col container mx-auto w-[50%] space-y-5 py-6'>
                <input type="text" placeholder='Name' className='form-input' />
                <input type="email" placeholder='Email' className='form-input' />
                <textarea cols="30" rows="10" placeholder='Message' className='form-input'></textarea>
                <button className='bg-blue-500 text-white p-2 rounded w-48 mx-auto'>Submit</button>
            </form>
        </div>
    </section>
  )
}
