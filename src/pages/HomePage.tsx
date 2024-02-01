import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import Layout from "src/components/Layout";
import SearchBox from "src/components/SearchBox";
import { useGetPokemonsQuery } from "src/services/pokemonApi";
import { filterPokemonsByTerm } from "src/utils/helpers";
import PokemonsGrid from "src/modules/PokemonsGrid";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useGetPokemonsQuery();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredPokemons = filterPokemonsByTerm(
    data?.results || [],
    debouncedSearchTerm
  );

  if (isLoading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Something went wrong</Layout>;

  return (
    <div>
      <SearchBox value={searchTerm} onSearch={handleSearch} />
      <PokemonsGrid pokemons={filteredPokemons} />
    </div>
  );
}
