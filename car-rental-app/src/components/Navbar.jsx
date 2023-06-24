import { Outlet, Link } from "react-router-dom";
import styles from "../styles/style";

const Navbar = () => {
    return (
        <>
            <nav className={`${styles.paddingX} w-full flex items-center justify-between py-3 fixed top-0 z-20 bg-primary`}>
                <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                    <Link to="/">
                        <img
                            src="/path/to/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </div>
                <ul className='list-none hidden sm:flex flex-row  whitespace-nowrap gap-5'>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;
