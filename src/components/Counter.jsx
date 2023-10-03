import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    function handleClick() {
        setCount(value => value + 1)
        setDate(new Date().toDateString())
    }

    useEffect(() => {
        console.log('Componente foi montado')
    }, [])

    useEffect(() => {
        console.log('Componente foi atualizado', { count, date })
    }, [count, date])


    return (
        <div>
            <h1>{count}</h1>
            <h1>{date?.toLocaleString()}</h1>
            <button onClick={(handleClick)} className='flex '>Somar mais um</button>

        </div>
    )
}

export default Counter