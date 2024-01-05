import Image from 'next/image'
import Navbar from './../components/Navbar'
import Products from './Products/page'

export default function Home() {
  return (
    
   <div  className="container">
  <Navbar/>
  <Products/>
   </div>
  )
}
