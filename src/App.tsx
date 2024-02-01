import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import PokemonPage from "./pages/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pokemons/:pokemonName",
    element: <PokemonPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
