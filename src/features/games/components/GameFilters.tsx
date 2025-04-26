import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface GameFiltersProps {
  onFilterChange: (filters: { platforms: string[]; genres: string[] }) => void;
}

const GameFilters = ({ onFilterChange }: GameFiltersProps) => {
  const [searchParams] = useSearchParams();
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const platforms = ["All", "PC", "PlayStation", "Xbox", "Nintendo"];
  const genres = ["All", "Action", "Adventure", "RPG", "Strategy", "Sports", "Racing", "FPS", "Open World", "Survival", "Sci-Fi", "Fantasy"];

  useEffect(() => {
    const platformsParam = searchParams.get("platforms");
    const genresParam = searchParams.get("genres");

    if (platformsParam) {
      const platform = platformsParam.split(",")[0];
      setSelectedPlatform(platform);
    }

    if (genresParam) {
      const genre = genresParam.split(",")[0];
      setSelectedGenre(genre);
    }
  }, [searchParams]);

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const platform = e.target.value;
    setSelectedPlatform(platform);
    const selectedPlatforms = platform === "All" ? [] : [platform];
    const selectedGenres = selectedGenre === "All" ? [] : [selectedGenre];
    onFilterChange({ platforms: selectedPlatforms, genres: selectedGenres });
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    const selectedGenres = genre === "All" ? [] : [genre];
    const selectedPlatforms = selectedPlatform === "All" ? [] : [selectedPlatform];
    onFilterChange({ platforms: selectedPlatforms, genres: selectedGenres });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-base-200 rounded-lg mb-6">
      <div className="form-control w-full sm:w-48">
        <label className="label">
          <span className="label-text">Platform</span>
        </label>
        <select 
          className="select select-bordered w-full"
          value={selectedPlatform}
          onChange={handlePlatformChange}
        >
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control w-full sm:w-48">
        <label className="label">
          <span className="label-text">Genre</span>
        </label>
        <select 
          className="select select-bordered w-full"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GameFilters; 