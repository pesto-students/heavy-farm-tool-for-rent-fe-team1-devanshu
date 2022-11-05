const Footer  = () => {
  return(

<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Heavy Farm Tool</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="/services" className="mr-4 hover:underline md:mr-6">Services</a>
        </li>
        <li>
            <a href="/pricing" className="mr-4 hover:underline md:mr-6">Pricing</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

  )
}
export default Footer;