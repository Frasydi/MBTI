import Style from "./style.module.css"

export default function Wave() {
    return(
        <div className={Style.wave}>
             <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,350 0,350 C 205.71428571428572,450 822.8571428571429,400 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#7bdcb5" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path></svg>
        </div>
    )
}