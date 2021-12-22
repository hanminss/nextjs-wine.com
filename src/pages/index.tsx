import type { NextPage } from "next";
import Image from "next/image";
import style from "../styles/Home.module.css";
import drunkImg from "../images/drunk.gif";
const Home: NextPage = () => {
  return (
    <nav className={style.layout}>
      <h1 className={style.title}>뭐 마실까?</h1>
      <Image className={style.img} src={drunkImg} alt="" />
      <br />
      <a className={style.btnWine} href="wines/">
        와인
      </a>
      <br />
      <a className={style.btnBeer} href="beers">
        맥주
      </a>
    </nav>
  );
};

export default Home;
