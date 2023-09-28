import Carrinho from './Cart';
import Menu from './MenuItens';
import logo from '../assets/logo.png';


function Navbar() {



    return (
        <>
            <nav className="flex w-full justify-evenly items-center p-2" style={{ backgroundColor: 'lightblue' }}>
                <div>
                    <img width="160px" src={logo} style={{ backgroundColor: 'white', width: 100, height: 60, justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 5 }} />
                </div>
                <Menu />
                <Carrinho />
            </nav>
        </>
    )
}

export default Navbar