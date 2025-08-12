export default function NavBar() {
    return (
        <nav className="flex justify-between space-x-12">
            <div className="hidden md:flex justify-between space-x-12">
            <a href="#">
                HOME
            </a>
             <a href="#">
                ABOUT US
            </a>

            <div className="relative group">
                <a href="#" className="flex items-center space-x-1 cursor-pointer">
                    <span>PRODUCTS AND SERVICES</span>
                    <span className="text-xs leading-none">v</span>
                </a>
            { /* drop down menu */ }
            <div className="absolute left-0 top-full mt-0-64 bg-black hidden group-hover:block z-50 pt-2 pb-2">
                <a href="#" className="block px-4 py-2">
                    Our Products
                </a>
                <a href="#" className="block px-4 py-2 whitespace-nowrap">
                    Parksoft&trade; Garage Management Software
                </a>
                </div>
                </div>


        <div className="relative group">
             <a href="#" className="flex items-center space-x-1 cursor-pointer">
                <span>PROJECTS</span>
                <span className="text-xs leading-none">v</span>
            </a>
            { /* drop down menu */ }
            <div className="absolute left-0 top-full mt-0 bg-black hidden group-hover:block z-50 pt-2 pb-2">
          <a href="#" className="block px-4 py-2">
            Current Projects
          </a>
          <a href="#" className="block px-4 py-2 whitespace-nowrap">
            Portfolio/Case Studies
          </a>
        </div>
            </div>

             <a href="#">
                CONTACT US
            </a>
             <a href="#">
                MEMBER LOGIN
            </a>
            </div>


            {/* mobile devices */}
          <button className="block md:hidden" aria-label="Menu">
                <img src="/burger.svg" alt="Menu" className="w-6 h-6" />
          </button>


        </nav>


        
        
    )
}