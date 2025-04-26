import Card from "../../../components/ui/Card";
import Hero from "../components/Hero";
import GameFilters from "../components/GameFilters";
import { Game, Games } from "../types/game";
import { games as importedGames } from "../data/gamesData";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GamesHomePage = () => {
  const [games, setGames] = useState<Games>(importedGames);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const platforms = searchParams.get("platforms")?.split(",") || [];
    const genres = searchParams.get("genres")?.split(",") || [];
    
    if (platforms.length > 0 || genres.length > 0) {
      const filteredGames = importedGames.filter((game) => {
        const platformMatch = platforms.length === 0 || 
          game.platforms.some(platform => platforms.includes(platform));
        const genreMatch = genres.length === 0 || 
          game.genres.some(genre => genres.includes(genre));
        return platformMatch && genreMatch;
      });
      setGames(filteredGames);
    }
  }, [searchParams]);

  const handleClick = (game: Game) => {
    console.log(`Game added to cart: ${game.id}`);
  };

  const handleViewDetails = (game: Game) => {
    const currentParams = new URLSearchParams(searchParams);
    navigate(`/games/${game.id}?${currentParams.toString()}`);
  };

  const handleFilterChange = (newFilters: { platforms: string[]; genres: string[] }) => {
    const params = new URLSearchParams();
    if (newFilters.platforms.length > 0) {
      params.set("platforms", newFilters.platforms.join(","));
    }
    if (newFilters.genres.length > 0) {
      params.set("genres", newFilters.genres.join(","));
    }
    setSearchParams(params);

    const filteredGames = importedGames.filter((game) => {
      const platformMatch = newFilters.platforms.length === 0 || 
        game.platforms.some(platform => newFilters.platforms.includes(platform));
      const genreMatch = newFilters.genres.length === 0 || 
        game.genres.some(genre => newFilters.genres.includes(genre));
      return platformMatch && genreMatch;
    });
    setGames(filteredGames);
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex w-full flex-col">
          <Hero />
          
          <div className="w-full max-w-screen-xl mx-auto px-4 mt-12">
            <GameFilters onFilterChange={handleFilterChange} />
          </div>
          <div className="divider">Games</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto px-4">
            {games.map((game) => (
              <Card
                key={game.id}
                title={game.title}
                details={game.details}
                image={game.image}
                platforms={game.platforms}
                onClick={() => handleClick(game)}
                onViewDetails={() => handleViewDetails(game)}
                buttonText="Add to Cart"
              />
            ))}
          </div>
          <div className="divider">OR</div>
          <div className="rounded-box  place-items-center"></div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GamesHomePage;
