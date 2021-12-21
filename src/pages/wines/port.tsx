import type { NextPage } from "next";
import { useData } from "../../hocks/useData";
import { Error, Loading, WineCard } from "../../components";
import { Wine } from "../../types/Wine";

const PortPage: NextPage = () => {
  const category = "wines";
  const name = "port";
  const { data, error } = useData(category, name);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>port</h1>
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

export default PortPage;
