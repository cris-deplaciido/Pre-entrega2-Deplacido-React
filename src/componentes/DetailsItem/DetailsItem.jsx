import Image from "../Imagen/Image";
import Description from "../Description/Description";
import "./detailsitem.css"
import ButtonDetails from "../ButtonDetails/ButtonDetails";
import fetchSimulation from "../../utilis/fetchSimulation";
import productos from "../../utilis/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCantCart from "../AddCantCart/AddCantCart"

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimulation(productos.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return (
        <div className="detailsItem">
            {
                datos.map( items => (
                        <>
                        <div className="containerLeft">
                            <Image
                                imagen={items.imageProduct.firtsImage}
                            />
                        </div>

                        <div className="containerRight">
                            <Description
                                title= {items.title}
                                parrafo= {items.description}
                                cantidad= {items.stock}
                                precio= {items.price}
                            />
                        <div className="buttons">
                            <AddCantCart
                                cant={5}
                            />

                            <ButtonDetails
                                txt="Agregar al carrito"
                            />
                        </div>
                    </div>
                    </>  
                ))
            }
        </div>
    )
}

export default DetailsItem;