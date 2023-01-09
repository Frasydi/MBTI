import { useEffect, useState } from "react";
import Style from "./style.module.css";

const bobot = [10, 5, 3];
const bobot2 = [3, 5, 10];
export default function Pertanyaan({
    pertanyaan,
    show,
    setJawaban,
    jenis,
    isMobile
  }: {
    pertanyaan: string;
    show: boolean;
    setJawaban: any;
    jenis: string[];
    isMobile : boolean
  }) {
    const [terjawab, setTerjawab] = useState(-1);
    useEffect(() => {
      
      return () => {
        setTerjawab(-1);
      };
    }, []);
  
    return (
      <div
        
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          opacity: show ? 1 : 0.5,
        }}
      >
        <div
          style={{
            display: !show ? "block" : "none",
            width: "100%",
            position: "absolute",
            height: "100%",
            top: "0",
            left: "0",
          }}
        ></div>
        <p style={{ textAlign: "center", fontSize: !isMobile ? "x-large" : "large" }}>{pertanyaan}</p>
        <div className={Style.answers}>
          <p style={{color:"#33a474", display:"flex",alignItems:"center", fontSize:isMobile ? "medium" :"larger"}}>Setuju</p>
          {bobot.map((el, ind) => {
            let ukuran = 0;
            if (isMobile) {
              switch (ind) {
                case 0:
                  ukuran = 2.5;
                  break;
  
                case 1:
                  ukuran = 2;
                  break;
  
                case 2:
                  ukuran = 1.5;
                  break;
              }
            } else {
              switch (ind) {
                case 0:
                  ukuran = 70;
                  break;
  
                case 1:
                  ukuran = 50;
                  break;
  
                case 2:
                  ukuran = 40;
                  break;
              }
            }
            return (
              <div
                className={Style.jawab}
                style={{
                  // @ts-ignore
  
                  "--warna": "#33a474",
                  "--ukuran": isMobile ? `${ukuran}rem`:`${ukuran}px`,
                  backgroundColor: terjawab == ind ? "var(--warna)" : "",
                }}
                onClick={() => {
                  setJawaban(el, jenis[0]);
                  setTerjawab(ind);
                }}
              >
                {terjawab == ind ? <i className="fa fa-check"></i> : <></>}
              </div>
            );
          })}
          {bobot2.map((el, ind) => {
            let ukuran = 0;
            if (isMobile) {
              switch (ind) {
                case 0:
                  ukuran= 1.5;
                  break
                case 1:
                  ukuran = 2;
                  break
                case 2:
                  ukuran = 2.5;
                  break
              }
            } else {
              switch (ind) {
                case 0:
                  ukuran = 40;
                  break;
                case 1:
                  ukuran = 50;
                  break;
                case 2:
                  ukuran = 70;
                  break;
              }
            }
            return (
              <div
                className={Style.jawab}
                style={{
                  // @ts-ignore
  
                  "--warna": "#88619a",
                  "--ukuran": isMobile ? `${ukuran}rem`:`${ukuran}px`,
                  backgroundColor: terjawab == ind + 3 ? "var(--warna)" : "",
                }}
                onClick={() => {
                  setJawaban(el, jenis[1]);
                  setTerjawab(ind + 3);
                }}
              >
                {terjawab == ind + 3 ? <i className="fa fa-check"></i> : <></>}
              </div>
            );
          })}
          <p style={{color:"#88619a", display:"flex",alignItems:"center", fontSize:isMobile ? "small" :"larger"}}>Tidak Setuju</p>
        </div>
        <hr />
      </div>
    );
  }
  