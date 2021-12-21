import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div>
      <h1>alcohol</h1>
      <ul>
        <li>
          <a href="wines/">wines</a>
        </li>
        <li>
          <a href="beers">beers</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
