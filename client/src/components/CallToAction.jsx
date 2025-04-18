import {Button} from 'flowbite-react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border
         border-teal-500 justify-center items-center rounded-tl-3xl 
         rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more about javascript</h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with 100 Javascript Projects
        </p>
        <Button gradientDuoTone='purpleToPink'target='_blank'
        rel='noopener noreferrer' className='rounded-tl-xl rounded-bl-none'>
          <a href="#">100 Javascript Projects</a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://tse4.mm.bing.net/th?id=OIP.OvS1IQzKZR0YN_A5YFebvgHaDg&pid=Api&P=0&h=180"/>
      </div>
    </div>
  )
}
