import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./style.module.css";
import Carousel from "react-bootstrap/Carousel";
import ItemSlide from "./itemSlide";
import pertanyaan from "../../util/pertanyaan";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { ProgressBar } from "react-bootstrap";
const bobot = [10, 5, 3];
const bobot2 = [3, 5, 10];

export default function Questions() {
  const [jawaban, setJawaban] = useState<{ [key: string]: number }>({});
  const [index, setIndex] = useState(0);
  const nav = useNavigate();
  const questionScroll = useRef(null);
  const [jenisIndex, setJenisIndex] = useState(0);
  useEffect(() => {
    const jawabanTemp: any = {};
    pertanyaan.forEach((el) => {
      el.jenis.forEach((el2) => {
        jawabanTemp[el2] = 0;
      });
    });
    setJawaban(jawabanTemp);
    return () => {
      setIndex(0);
      setJawaban({});
      setJenisIndex(0);
    };
  }, [0]);
  useEffect(() => {
    console.log(index);
    console.log(jenisIndex);
  }, [index]);
  return (
    <div ref={questionScroll} className={Style.questions}>
      <ProgressBar
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: "30",
        }}
        variant="success"
        animated
        now={(index / (pertanyaan.length * 10)) * 100}
        label={`${((index / (pertanyaan.length * 10)) * 100).toFixed(2)}%`}
      />
      <ItemSlide
        index={jenisIndex}
        elements={pertanyaan.map((el, ind) => (
          <>
            {el.pert.map((el2, ind2) => (
              <Pertanyaan
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
                  if (ind * 10 + ind2 + 1 == pertanyaan.length * 10) {
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
                    // @ts-ignore

                    questionScroll?.current?.scrollIntoView();
                  }

                  console.log(jawabanTemp);
                }}
              />
            ))}
          </>
        ))}
      ></ItemSlide>
    </div>
  );
}

function Pertanyaan({
  pertanyaan,
  show,
  setJawaban,
  jenis,
}: {
  pertanyaan: string;
  show: boolean;
  setJawaban: any;
  jenis: string[];
}) {
  const [terjawab, setTerjawab] = useState(-1);
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth > 720 ? false : true);
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
      <p style={{ textAlign: "center", fontSize: "x-large" }}>{pertanyaan}</p>
      <div className={Style.answers}>
        {bobot.map((el, ind) => {
          let ukuran = 0;
          if (isMobile) {
            switch (ind) {
              case 0:
                ukuran = 2;
                break;

              case 1:
                ukuran = 1.5;
                break;

              case 2:
                ukuran = 1.3;
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
                ukuran= 1.3;
                break
              case 1:
                ukuran = 1.5;
                break
              case 2:
                ukuran = 2;
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
      </div>
      <hr />
    </div>
  );
}
