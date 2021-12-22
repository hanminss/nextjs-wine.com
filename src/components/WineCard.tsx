import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine;
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, location, id } = wineData;

  return (
    <tr>
      <td>{id}</td>
      <td>{wine}</td>
      <td>{winery}</td>
      <td>{location}</td>
    </tr>
  );
};
