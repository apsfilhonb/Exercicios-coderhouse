
function ItensListCart(props) {



    return (
        <div>
            <p>Produto: {props.produto}</p>
            <p>Preço: {props.preco}</p>
            <p>Quantidade: {props.quantidade}</p>
            <p>Total: {props.total}</p>
        </div>

    )

}

export default ItensListCart;