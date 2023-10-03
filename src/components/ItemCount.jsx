import React, {useState} from 'react';
import {Text} from '@mantine/core'

function ItemCount(props) {
    const [count, setCount] = useState(1);
    
    const estoque = 5


    function handleClick() {
        if (count >= estoque) {
            alert("Não é possível adicionar mais que" + {estoque})
        } else         
        setCount(value => value + 1)

    }

    function handleClick2() {
        if(count <= 1) {
            alert('Não é possível adicionar menos que 1 item')
        } else {
        setCount(value => value - 1)
        }
    }

  return (
   <div className='flex flex-row gap-14 border-4 w-[10rem] justify-evenly items-center text-xl'> 
    <button onClick={() => handleClick2()}>-</button>
    <Text>{count}</Text>
    <button onClick={handleClick}>+</button>
   </div>
  )
}

export default ItemCount;