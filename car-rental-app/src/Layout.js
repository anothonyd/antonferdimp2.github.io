import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main className="absolute">
                {children}
            </main>
            <div>
                <Footer />
            </div>
        </>
    )
};

export default Layout;