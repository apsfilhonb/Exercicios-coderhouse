import { useEffect, useState } from "react";
import ItemCount from "../ItemCount";



function ItemList() {

    const [items, setItems] = useState([]);


    useEffect(() => {
        async function getItems() {
            const response = await fetch('/items.json');
            const data = await response.json();
            setItems(data);
        } getItems();
    }, [])

    const [SelectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    async function handleClick(item) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSelectedItems(item);
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <div className="flex justify-evenly mt-14 ">
            {items.map((item) => (
                <div className=" flex flex-col border-2 shadow-md justify-center" key={item.id}>
                    <img className="w-[15rem]" src={item.url_imagem} />
                    <h1 className="flex justify-center font-bold">{item.nome}</h1>
                    <div className="flex justify-center">
                        <button className=" border-2 bg-blue-400 shadow-md rounded-lg" onClick={() => handleClick(item)}>Detalhes do produto</button>
                    </div>
                </div >
            ))
            }
            {
                isOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-white w-1/2 h-1/2 flex flex-col justify-center items-center">
                            <img className="w-[15rem]" src={SelectedItems.url_imagem} />
                            <h1 className="flex justify-center font-bold">{SelectedItems.nome}</h1>
                            <p className="flex justify-center ">{SelectedItems.descricao}</p>
                            <p className="flex justify-center font-bold">R$ {SelectedItems.preco.toLocaleString('pt-BR')}</p>
                            <ItemCount />
                            <button className=" border-2 mt-1 bg-red-400 shadow-md rounded-lg" onClick={handleClose}>Fechar</button>
                        </div>
                    </div>
                )
            }
        </div >
    )

}

export default ItemList;