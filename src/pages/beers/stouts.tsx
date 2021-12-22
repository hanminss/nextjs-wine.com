import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useData } from "../../hocks/useData";
import { Beer } from "../../types/Beer";
import style from "../../styles/Card.module.css";

const StoutsPage: NextPage = () => {
  const category = "beers";
  const name = "stouts";
  const { data, error } = useData(category, name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div className={style.layout}>
      <h1>스타우트 맥주</h1>
      <table className={style.table}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
        </tr>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={"port-wine-list-${wineData.id}"}
              beerData={beerData}
            />
          );
        })}
      </table>
    </div>
  );
};

export default StoutsPage;
