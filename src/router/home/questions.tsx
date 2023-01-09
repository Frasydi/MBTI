import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./style.module.css";
import ItemSlide from "./itemSlide";
import pertanyaan from "../../util/pertanyaan";
import { ProgressBar } from "react-bootstrap";
import Pertanyaans from "./Pertanyaans";


export default function Questions() {
  const [jawaban, setJawaban] = useState<{ [key: string]: number }>({});
  const [index, setIndex] = useState(0);
  const nav = useNavigate();
  const questionScroll = useRef(null);
  const [jenisIndex, setJenisIndex] = useState(0);
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    setMobile(window.innerWidth > 720 ? false : true)
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
              // @ts-ignore
          <Pertanyaans scrolling={questionScroll} index={index} isMobile={isMobile} nav={nav} el={el} ind={ind} setIndex={setIndex} jawaban={jawaban} setJawaban={setJawaban} setJenisIndex={setJenisIndex} perLength={pertanyaan.length} key={`${ind}-slide`} />
            
        ))}
      ></ItemSlide>
    </div>
  );
}

