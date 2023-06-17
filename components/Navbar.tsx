import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="car rent logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <div className="navbar__link">
                    <CustomButton
                        title="About Us"
                        btnType="button"
                        containerStyles="text-black-900 invisible md:visible min-w-[130px]"
                    />

                    <CustomButton
                        title="Contact Us"
                        btnType="button"
                        containerStyles="text-black-900 invisible md:visible min-w-[130px]"
                    />
                    <CustomButton
                        title="Sign In"
                        btnType="button"
                        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar