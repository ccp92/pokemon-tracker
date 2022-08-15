type PokemonDetailsProps = {
  name: string;
  owned: boolean;
};

const PokemonDetails = (props: PokemonDetailsProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Owned: {props.owned ? "Yes" : "No"}</p>
    </div>
  );
};

export default PokemonDetails;
