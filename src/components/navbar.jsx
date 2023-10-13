import Carrinho from './Cart';
import Menu from './MenuItens';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();


    return (
        <>
            <nav className="flex w-full justify-evenly items-center p-2" style={{ backgroundColor: 'lightblue' }}>
                <div>
                    <button onClick={() => navigate('/')}>
                        <img width="160px" src={logo} style={{ backgroundColor: 'white', width: 100, height: 60, justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 5 }} />
                    </button>
                </div>
                <button onClick={() => navigate('/cart')}>
                    Ir para Produtos!
                </button>
                <Menu />
                <Carrinho />
            </nav>
        </>
    )
}

export default NavBar;