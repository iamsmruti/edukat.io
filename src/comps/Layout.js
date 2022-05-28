import Footer from "./Footer";
import AppBar from "./AppBar";
import styles from './Layout.module.css'
import Notif from './Notif'

const Layout = ({ children, cartItems }) => {
    return (
        <div className={styles.root}>
            <AppBar cartItems={cartItems}/>
            <div className={styles.children}>
                {children}
            </div>
            <Footer />
            {/* <Notif /> */}
        </div>
    );
}

export default Layout;