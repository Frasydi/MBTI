import Style from "./style.module.css"
export default function Kartu({ text, header }:{text?:string, header : string}) {
  return (
    <div className={Style.kartu}>
        <p style={{fontSize:"larger",fontWeight:"bold", textAlign:"center",marginTop:"3rem"}}>{header}</p>
        <p style={{textAlign:"center"}}>{text}</p>
    </div>
  );
}
