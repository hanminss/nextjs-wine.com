import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useData } from "../../hocks/useData";
import { Wine } from "../../types/Wine";

const RosePage: NextPage = () => {
  const category = "wines";
  const name = "rose";
  const { data, error } = useData(category, name);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>rose</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`port-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default RosePage;
