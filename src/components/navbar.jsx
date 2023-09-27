import { Popover, Text, Button } from '@mantine/core';
import logo from '../assets/logo.png';


function Navbar() {

    function Carrinho() {
        return (
            <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Button style={{ backgroundColor: 'white', width: 80, height: 60, justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 5 }}>
                        <img width="40px" src='https://cdn-icons-png.flaticon.com/512/6713/6713723.png' />

                    </Button>
                </Popover.Target>
                <Popover.Dropdown style={{
                    justifyContent: 'center',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    width: 200,
                    border: 1,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#60a5a2',
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    top: 90,
                    color: 'white'
                }}>
                    <Text size="xs">Itens do carrinho</Text>
                </Popover.Dropdown>
            </Popover>
        );
    }

    return (
        <>
            <nav className="flex w-full justify-evenly items-center p-2" style={{ backgroundColor: 'lightblue' }}>
                {/* <img width="50px" height="auto" src="https://seeklogo.com//images/T/ti-wheels-logo-DF6252D47D-seeklogo.com.png" /> */}
                <img width="160px" src={logo} style={{ backgroundColor: 'white', width: 100, height: 60, justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 5 }} />
                <ul className="flex items-center w-80 h-16 gap-20 justify-center">
                    <li className="text-xl font-bold ">SWITCHS</li>
                    <li className="text-xl font-bold ">UNIFI</li>
                    <li className="text-xl font-bold ">POE</li>
                </ul>

                <Carrinho />
            </nav>
        </>
    )
}

export default Navbar