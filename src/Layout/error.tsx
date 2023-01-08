import Style from "./style.module.css"
export default function ErrorNav() {
    return(
        <>
            <div className={Style.error}>
                <h1>404 Error</h1>
                <h1>Tampaknya anda salah memasuki url</h1>
                <p>
                   Tekan <a href="/">Link</a> ini untuk kembali ke beranda 
                </p>
            </div>
        </>
    )
}