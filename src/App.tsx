import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Homepage";
import PokemonPage from "@/pages/PokemonPage";
import Layout from "./components/Layout";
import ReadyForBattle from "./modules/ReadyForBattle";

function App() {
  return (
    <Router>
      <Layout>
        <div className="lg:pr-[19.5rem]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemons/:pokemonName" element={<PokemonPage />} />
          </Routes>
        </div>
        <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] right-[max(0px,calc(50%-45rem))] left-auto w-[19rem] pb-10 pr-8 pl-6 overflow-y-auto">
          <ReadyForBattle />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
