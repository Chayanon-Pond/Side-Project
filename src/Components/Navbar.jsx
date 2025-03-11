
const Navbar = () => {
    return (
        <nav className="md:flex  md:justify-between md:mx-0 shadow-sm flex justify-between bg-white h-[80px] md:items-center w-full border-b rounded-3xl">
                <div className="md:ml-20 ml-6">
                        <img src="./src/assets/logo/hh.svg"alt="logo"></img>
                </div>
                <div className="hidden md:flex gap-4">
                    <div class=" mx-auto md:pl-120 mr-20 mt-3">

                        <ul class="flex flex-col md:flex-row md:gap-10 gap-2 ">
                        <li
                            class="text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8 hover:decoration-[#000000] cursor-pointer ">
                            Home</li>
                        <li
                            class="text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8 hover:decoration-[#000000] cursor-pointer ">
                            About</li>
                        <li
                            class="text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8 hover:decoration-[#000000] cursor-pointer ">
                            contact</li>
                            <li
                            class="text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8 hover:decoration-[#000000] cursor-pointer ">
                            Help</li>
                        </ul>
                        
                        
                        
                        
                    </div>
                        <button  className="w-[127px] h-[48px] border px-4 py-2  hover:bg-gray-100  mr-6 md:rounded-3xl  hover:shadow-md cursor-pointer">Log in</button>
                        <button className= " w-[127px] h-[48px] bg-black text-white px-4 py-2  hover:bg-gray-800  md:w-47px md:w-24px md:mr-20 md:rounded-3xl hover:shadow-md cursor-pointer">Sign up</button>
                </div>
                <div className="flex h-6 md:hidden items-center justify-center ">
                    <div  data-collapse-toggle="navbar-default"><img src="./src/assets/logo/hamberger.svg"
                    alt="load"></img></div>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
        </nav>


    )
}
export default Navbar;