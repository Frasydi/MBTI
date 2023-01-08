import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import getKepribadian from "../../util/getKepribadian"
import Charts from "./chart"
import Style from "./style.module.css"
export default function Hasil() {
    const hasil = Cookies.get("hasil")
    if(hasil == null) {
        return(
            <div style={{width:"100%", height:"100vh", display:"grid",placeItems:"center"}}>
                <h1>Tampaknya jawaban atas pertanyaan anda tadi tidak lagi dapat diakses</h1>
            </div>
        )
    }
    const jsonHasil = JSON.parse(hasil)
    const kepribadian = getKepribadian(jsonHasil)
    console.log(kepribadian)
    return(
        <>
        <div className={Style.hasil}>
            <h1>Anda adalah {kepribadian.title}({kepribadian.kepribadian})</h1>
            <p>Anda adalah {kepribadian.tentang}</p>
        </div>
        <div className={Style.charts}>
            <Charts title="Extrovert vs Introvert" label={["Extrovert", "Introvert"]} data={[jsonHasil["Extrovert"]/2+50, jsonHasil["Introvert"]/2+50] } />
            <Charts title="Sensing vs Intuitive" label={["Sensing", "Intuitive"]} data={[jsonHasil["Sensing"]/2+50, jsonHasil["Intuitive"]/2+50] } />
            <Charts title="Thinking vs Feeling" label={["Thinking", "Feeling"]} data={[jsonHasil["Thinking"]/2+50, jsonHasil["Feeling"]/2+50] } />
            <Charts title="Judging vs Perceiving" label={["Judging", "Perceiving"]} data={[jsonHasil["Judging"]/2+50, jsonHasil["Perceiving"]/2+50] } />
        </div>
        </>

    )
}