import PokemonDetails from "../pokemon_details";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PokemonList = () => {
  const { data, error } = useSWR("/api/pokemon", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <ul>
      {data.map((pokemon: { id: number; name: string; owned: boolean }) => (
        <PokemonDetails
          key={pokemon.id}
          name={pokemon.name}
          owned={pokemon.owned}
        />
      ))}
    </ul>
  );
};

export default PokemonList;
