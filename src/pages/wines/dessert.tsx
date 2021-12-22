import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useData } from "../../hocks/useData";
import { Wine } from "../../types/Wine";
import style from "../../styles/Card.module.css";

const DesertPage: NextPage = () => {
  const category = "wines";
  const name = "dessert";
  const { data, error } = useData(category, name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div className={style.layout}>
      <h1>디저트 와인</h1>
      <table className={style.table}>
        <tr>
          <th>id</th>
          <th>wine</th>
          <th>winery</th>
          <th>location</th>
        </tr>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`port-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </table>
    </div>
  );
};

export default DesertPage;
