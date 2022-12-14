type PokemonDetailsProps = {
  name: string;
  owned: boolean;
};

const PokemonDetails = (props: PokemonDetailsProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <input type="checkbox" checked={props.owned} />
    </div>
  );
};

export default PokemonDetails;
