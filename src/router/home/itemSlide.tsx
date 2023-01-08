import {ReactNode, useState} from "react"
import Style from "./style2.module.css"
export default function ItemSlide({index,children, elements}:{index:number, children?:any, elements:Array<ReactNode>}) {
    
    
    return(
        <div className={Style.itemsSlide} >
            <div className={Style.items} style={{width:"100%", height:"100%" ,translate : `-${index*100}%`, transition:"all 0.5s"}}>

            {
                elements.map((el:ReactNode) => (
                    <div className={Style.item}>
                    {el}
                    </div>
                ))
            }
            </div>
        </div>
    )
}