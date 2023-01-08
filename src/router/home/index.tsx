import Kartu from "./card"
import Questions from "./questions"
import Style from "./style.module.css"
import Wave from "./wave"
export default function Home() {
    return(
        <>
            <div className={Style.welcomeText}>
                <Wave />
                <h1>MBTI TEST</h1>
                <div className={Style.cards}>
                    <Kartu header="Selesaikan Test Berikut" text="Jadilah dirimu sendiri dan jujurlah untuk menemukan kepribadianmu" />
                    <Kartu header="Dapatkan hasil yang memuaskan" text="Pelajari dampak dari tipe kepribadianmu kepada lingkungan di sekitarmu"/>
                </div>
            </div>
            <main className={Style.main}>

            </main>
            <Questions/>
        </>
    )
}