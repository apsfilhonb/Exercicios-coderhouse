import { useEffect, useState } from 'react';
import { Popover, Text, Button } from '@mantine/core';
import ItensListCart from './ItensListCart';

function Carrinho() {

    const produto = "Switch Aruba 48p"
    const preco = 3190
    const [quantidade, setQuantidade] = useState(1)
    const [total , setTotal] = useState(preco)

    function handleClick() {
        if (
            quantidade >= 5
        ) {
            alert("Não é possível adicionar mais que 5")
        } else {
        setQuantidade(value => value + 1)
        }
    }

    function handleClick2() {
        if (
            quantidade <= 1
        ) {
            alert("Não é possível adicionar menos que 1")
        } else {
        setQuantidade(value => value - 1)
        console.log(total)
        }
    }

    useEffect(() => {
        setTotal(value => quantidade * preco)
        console.log(total)
    }, [quantidade])

    return (
        <Popover Popover width={200} position="bottom" withArrow shadow="md" >
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
                    quantidade={quantidade}
                    total={total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    
                />
                <div className='flex gap-x-10 text-xl'>
                    <Button onClick={handleClick2}>-</Button>
                    <Button onClick={handleClick}>+</Button>
                </div>
            </Popover.Dropdown>

        </Popover >

    );
}

export default Carrinho;