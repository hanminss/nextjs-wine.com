import type { NextPage } from "next";
import Image from "next/image";
import style from "../../styles/Wine.module.css";

// img
import dessert from "../../images/desserts.jpeg";
import port from "../../images/port.jpeg";
import reds from "../../images/redwine.jpeg";
import sparkling from "../../images/sparkling.jpeg";
import white from "../../images/white.jpeg";
import rose from "../../images/rose.jpeg";

const WinesPage: NextPage = () => {
  return (
    <div className={style.layout}>
      <h1>세계의 와인</h1>
      <main className={style.flexBox}>
        <article className={style.article}>
          <a href="wines/dessert">
            <Image
              className={style.img}
              src={dessert}
              alt=""
              width={200}
              height={200}
            />

            <h1>디저트 와인</h1>
            <p>
              와인의 한 종류. 서양 요리에서 식사를 마친 후 디저트와 함께 마시는
              와인. 달콤한 스위트 와인 계열이 애용되며 과일향이 풍부한 것이
              많다. 달콤한 과일이나 케이크, 치즈 등과도 잘 어울리는 편이다.
              와인보다 단 디저트는 그리 추천되지 않는다.
            </p>
          </a>
        </article>
        <article className={style.article}>
          <a href="wines/port">
            <Image
              className={style.img}
              src={port}
              alt=""
              width={200}
              height={200}
            />
            <h1>포트 와인</h1>
            <p>
              포르투갈에서 와인에 와인을 증류한 주정을 첨가해 도수를 강화하여
              출시되는 와인을 말한다. 2015년에는 와인 스펙테이터(WS)에서 포트
              와인 중 하나인 빈티지 포트를 세계 100대 와인 중 하나로 선정하기도
              했다.[1] 이와 유사한 주정강화 와인으로는 스페인의 셰리가 있고,
              주정강화의 개념을 사용하는 또 다른 양조주로는 한국의 전통주인
              과하주가 있다.
            </p>
          </a>
        </article>
        <article className={style.article}>
          <a href="wines/reds">
            <Image
              className={style.img}
              src={reds}
              alt=""
              width={200}
              height={200}
            />
            <h1>레드 와인</h1>
            <p>
              적포도주 또는 레드 와인은 껍질을 벗기지 않은 포도로 빚은 술을
              말한다. 적포도주의 양조는 포도의 숙성과 수확, 과즙의 조정, 알코올
              발효의 양조 준비 단계와 실제 양조를 거쳐 병입으로 끝난다
            </p>
          </a>
        </article>
        <article className={style.article}>
          <a href="wines/sparkling">
            <Image
              className={style.img}
              src={sparkling}
              alt=""
              width={200}
              height={200}
            />
            <h1>스파클링 와인</h1>
            <p>
              일반 와인과 다르게 병에 설탕을 넣어서(보당) 2차 발효를 시켜
              이산화탄소가 녹게 만들거나, 이산화탄소, 탄산가스를 집어넣어서
              만드는 발포와인. 한국에서 나오는 제품은 가스를 주입시킨 제품이
              많다.
            </p>
          </a>
        </article>
        <article className={style.article}>
          <a href="wines/whites">
            <Image
              className={style.img}
              src={white}
              alt=""
              width={200}
              height={200}
            />
            <h1>화이트 와인</h1>
            <p>
              백포도주 또는 화이트 와인은 껍질을 벗긴 청포도의 주스만을 발효시킨
              것으로 적포도주와는 달리 껍질의 색소 추출 과정이 없다. 적포도주에
              비해 신선하고 산뜻한 제품이 많다. 약간 덜 익었을 때가 적절한
              산도와 향을 유지하고 있으며, 건강한 포도인지의 여부가 중요하다.
            </p>
          </a>
        </article>
        <article className={style.article}>
          <a href="wines/rose">
            <Image
              className={style.img}
              src={rose}
              alt=""
              width={200}
              height={200}
            />
            <h1>로제 와인</h1>
            <p>
              로제 와인은 적포도주와 백포도주의 중간 상태다. 만드는 방법은
              적포도주와 백포도주를 섞거나, 적포도를 으깨어 백포도주의
              양조법으로 만들거나, 적포도를 담그면서 색소 추출을 해 바로 꺼내는
              방법을 사용한다.
            </p>
          </a>
        </article>
      </main>
    </div>
  );
};

export default WinesPage;
