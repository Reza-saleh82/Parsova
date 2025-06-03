import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ProductProvider from "../../context/ProductProvider"


function AboutUs() {
    return (
        <ProductProvider>
            <Navbar />
            <div>
                AboutUs
            </div>
            <Footer/>
        </ProductProvider>
    )
}

export default AboutUs