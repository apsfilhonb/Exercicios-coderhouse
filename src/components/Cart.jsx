import { Popover, Text, Button } from '@mantine/core';
import ItensListCart from './ItensListCart';

function Carrinho() {

    const produto = "Switch Aruba 24p"
    const preco = "R$ 3.190,00"



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
                // width: 250,
                witdh: "targetWidth",
                border: 1,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#60a5a2',
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                top: 90,
                color: 'white'
            }}>
                <Text size="xs">Itens do carrinho</Text>

                <ItensListCart
                    produto={produto}
                    preco={preco}
                />
            </Popover.Dropdown>
        </Popover>
    );
}

export default Carrinho;