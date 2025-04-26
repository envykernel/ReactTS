import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { games } from "../data/gamesData";
import Badge from "../../../components/ui/Badge";

const GameDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const game = games.find((g) => g.id === id);

  const handleBack = () => {
    const currentParams = new URLSearchParams(searchParams);
    navigate(`/?${currentParams.toString()}`);
  };

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
        <button className="btn btn-primary" onClick={handleBack}>
          Back to Games
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button className="btn btn-ghost mb-6" onClick={handleBack}>
        ← Back to Games
      </button>

      <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={game.image}
            alt={game.title}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="lg:ml-8">
            <h1 className="text-5xl font-bold">{game.title}</h1>
            <div className="flex flex-wrap gap-2 my-4">
              {game.platforms.map((platform) => (
                <Badge key={platform} text={platform} variant="secondary" />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {game.genres.map((genre) => (
                <Badge key={genre} text={genre} variant="accent" />
              ))}
            </div>
            <p className="py-6">{game.details}</p>
            <div className="flex gap-4">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-outline">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Release Date</h2>
            <p>{game.releaseDate.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Available On</h2>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map((platform) => (
                <Badge key={platform} text={platform} variant="ghost" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
