import { Beer } from "../types/Beer";

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { price, name, rating, image, id } = beerData;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};
