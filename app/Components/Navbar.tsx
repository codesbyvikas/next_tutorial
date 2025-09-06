import Link from "next/link"
const Navbar = () => {
  return (
   
      <header className="grid grid-cols-2">

         <div className="text-xl font-bold">
            <Link href="/">Vikas</Link>
        </div>
        <nav >
            <ul className="flex gap-2">
             
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/service">Service</Link>
                </li>
            </ul>
        </nav>
      </header>
    
  )
}

export default Navbar
