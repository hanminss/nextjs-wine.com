import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useData } from "../../hocks/useData";
import { Beer } from "../../types/Beer";

const StoutsPage: NextPage = () => {
  const category = "beers";
  const name = "stouts";
  const { data, error } = useData(category, name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>{name}</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={"port-wine-list-${wineData.id}"}
              beerData={beerData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default StoutsPage;
