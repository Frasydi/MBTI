import Cookies from "js-cookie";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import Pertanyaan from "./Pertanyaan";

export default function Pertanyaans({
  el,
  ind,
  index,
  setJenisIndex,
  setJawaban,
  setIndex,
  jawaban,
  perLength,
  nav,
  isMobile,
  scrolling
}: {
  index : number;
  nav: any;
  setIndex: any;
  perLength: number;
  jawaban: any;
  setJenisIndex: any;
  setJawaban: any;
  isMobile:boolean;
  el: any;
  ind: number;
  scrolling:any
}) {
    
const ref = useRef(null)
  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {el.pert.map((el2: string, ind2: number) => (
        <Pertanyaan
          isMobile={isMobile}
          show={index == 10 * ind + ind2}
          pertanyaan={el2}
          jenis={el.jenis}
          setJawaban={(bobot: number, jenis: string) => {
            const jawabanTemp = jawaban;
            if (jawabanTemp[jenis] == null) {
              jawabanTemp[jenis] = 0;
            }
            jawabanTemp[jenis] += bobot;
            setJawaban(jawabanTemp);
            setIndex(10 * ind + ind2 + 1);
            if (ind * 10 + ind2 + 1 == perLength * 10) {
              const date = new Date();
              date.setTime(date.getTime() + 60 * 60 * 1000);
              Cookies.set("hasil", JSON.stringify(jawabanTemp), {
                expires: date,
              });
              Swal.fire({
                title: "Terima Kasih Sudah Mengisi",
                text: "Anda akan dialihkan ke halaman hasil setelah 2 detik",
                timer: 2000,
                allowOutsideClick: false,
                allowEscapeKey: false,
                showCancelButton: false,
                showConfirmButton: false,
              }).then((ef) => {
                nav("/hasil");
              });
              return;
            }

            if (ind * 10 + ind2 + 1 == (ind + 1) * 10) {
              setJenisIndex(ind + 1);
              scrolling.current.scrollIntoView()
            } else {
                // @ts-ignore
                ref?.current.children[ind2+1].scrollIntoView()
            }

            console.log(jawabanTemp);
          }}
        />
      ))}
    </div>
  );
}
