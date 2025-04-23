type UserCardProps = {
  name: string;
  age: number;
  isActive?: boolean;
};

export const UserCard = ({ name, age, isActive = false }: UserCardProps) => (
  <div className="card bg-base-200">
    <h3>{name}</h3>
    <p>Âge : {age}</p>
    {isActive && <span className="badge badge-success">Actif</span>}
  </div>
);
