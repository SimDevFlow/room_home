import { useState } from 'react'
import icon from './assets/icon-arrow.svg'
import leftIcon from './assets/icon-angle-left.svg'
import rightIcon from './assets/icon-angle-right.svg'
import logo from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="h-lvh">
      <div className="h-4/6 flex">
        <div className="flex-auto w-72 bg-[url('./assets/1.jpg')] bg-cover bg-center p-9">
          <header className='flex items-center'>
            <span>
              <img src={logo} alt="" width="" />
            </span>
            <ul className=' flex gap-3  text-white mx-10'>
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </header>
        </div>
        <div className="flex-auto w-28 h-full flex flex-col justify-between">
          <div className="px-20 mt-10">
            <h2 className=" font-bold text-4xl"> Discover innovative ways to decorate</h2>
            <p className="text-gray-400 text-sm my-6">
              We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
            <button className='flex items-center'>
              <p className='text-xs tracking-widest'>S H O P&nbsp;&nbsp;&nbsp;&nbsp;N O W</p>
              <div>
                <img src={icon} alt="" className='mx-5' />
              </div>
            </button>
          </div>
          <div className='flex '>
            <button className='bg-black px-8 py-5'><img src={leftIcon} /></button>
            <button className='bg-black px-8 py-5'><img src={rightIcon} /></button>
          </div>
        </div>
      </div>
      <div className="h-2/6 flex">
        <div className="flex-auto w-28 bg-[url('./assets/3.jpg')] bg-cover bg-center"></div>
        <div className="flex-auto w-52 px-10 py-14">
          <h2 className='uppercase font-bold tracking-widest text-sm mb-2'>About our furniture</h2>
          <p className="text-gray-400 text-xs">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. </p>
        </div>
        <div className="flex-auto w-28 bg-[url('./assets/4.jpg')] bg-cover bg-center"></div>
      </div>
    </section>
  )
}

export default App
