import type { NextPage } from "next";
import Image from "next/image";
import style from "../../styles/Beer.module.css";
import ale from "../../images/ale.jpeg";
import stouts from "../../images/stouts.png";
const BearPage: NextPage = () => {
  return (
    <div className={style.layout}>
      <h1>세계의 맥주</h1>
      <main className={style.flexBox}>
        <article className={style.article}>
          <a href="beers/ale">
            <Image
              className={style.img}
              src={ale}
              alt=""
              width={200}
              height={200}
            />
            <h1>에일 맥주</h1>
            <p>
              상면발효맥주은 상면발효방식으로 생산되는 맥주다. 표면 발효로
              양조되며, 보리 맥아를 사용하고 효모를 상온에서 단기간에 발효시켜,
              복잡한 향과 깊은 맛, 과일 맛을 만들어 낸다. 영국, 아일랜드,
              벨기에, 독일, 캐나다 동부 및 미국의 맥주에서 일반적이다.
            </p>
          </a>
        </article>
        <article className={style.article}>
          <a href="beers/stouts">
            <Image
              className={style.img}
              src={stouts}
              alt=""
              width={200}
              height={200}
            />
            <h1>스타우트 맥주</h1>
            <p>
              스타우트는 맥주의 스타일 중 하나로, 검게 될 때까지 로스팅한 보리를
              사용하여 표면 발효에 의해 양조되는 것을 가리킨다. 보통
              흑맥주라고도 부른다.
            </p>
          </a>
        </article>
      </main>
    </div>
  );
};

export default BearPage;
