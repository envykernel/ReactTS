import Badge from "./Badge";

interface CardProps {
  title: string;
  details: string;
  image: string;
  platforms: string[];
  onClick: () => void;
  onViewDetails: () => void;
  buttonText?: string;
}

const Card = ({
  title,
  details,
  image,
  platforms,
  onClick,
  onViewDetails,
  buttonText = "View Details"
}: CardProps) => {
  const truncatedDetails = details.length > 100 ? `${details.substring(0, 100)}...` : details;

  return (
    <div className="card bg-base-200 shadow-sm w-full">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{truncatedDetails}</p>
        <div className="flex flex-wrap gap-2 justify-center my-2">
          {platforms.map((platform) => (
            <Badge key={platform} text={platform} variant="secondary" />
          ))}
        </div>
        <div className="card-actions flex gap-2">
          <button className="btn btn-primary" onClick={onClick}>
            {buttonText}
          </button>
          <button className="btn btn-outline" onClick={onViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card; 