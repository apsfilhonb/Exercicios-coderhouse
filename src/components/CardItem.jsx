import ItemCount from './ItemCount'

function CardItem(){

    const produto = "Switch Aruba 48p"
    const preco = "R$ 3.190,00"
    
    return(
        <div className='flex flex-col ml-20 justify-center border-2 w-80 mt-28 items-center'>
                <img className='mt-2' width={240} src="https://img.olx.com.br/images/64/649128951846588.jpg" alt="imagem do produto"/>
            <h1 className='ml-1'>Produto: {produto}</h1>
            <h1>Preço: {preco}</h1>
            <ItemCount/>
        </div>
    )
}

export default CardItem