import type { NextPage } from "next";
import { useWineData } from "../../hocks/useWineData";
import { Error, Loading, WineCard } from "../../components";
import { Wine } from "../../types/Wine";

const PortPage: NextPage = () => {
  const name = "port";
  const { data, error } = useWineData("port");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>Wine</h1>
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
