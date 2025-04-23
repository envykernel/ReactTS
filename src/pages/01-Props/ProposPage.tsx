// Fichier : `/exercises/01-props/ExerciseProps.tsx`
import { UserCard } from "./components/UserCard";

const ProposPage = () => {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30, isActive: true },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Exercice Props</h2>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
};

export default ProposPage;
