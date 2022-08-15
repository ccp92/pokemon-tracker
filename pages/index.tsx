import type { NextPage } from "next";
import Head from "next/head";
import PokemonList from "../components/list";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Tracker</title>
        <meta
          name="description"
          content="An app for tracking your pokemon collection"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Pokémon Tracker</h1>

        <p className={styles.description}>
          Get started by looking at the list below
        </p>

        <PokemonList />
      </main>
    </div>
  );
};

export default Home;
