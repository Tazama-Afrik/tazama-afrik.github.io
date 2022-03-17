import Footer from "./Footer"
import Topnav from "./Topnav"

const Layout = ({children}) => {
    return (
        <div className="content">
            <Topnav/>
            {children}
            <Footer/>
        </div>
    );
}
export default Layout