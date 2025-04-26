const HelloWorldPage = () => {
  const sessionTopics: string[] = [
    "Components",
    "Fragments",
    "Conditional Rendering",
    "Handling Events",
    "Managing State",
    "Passing Data via Props",
    "Passing Children",
    "Inspecting Components with React Developer Tools",
  ];

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold">Welcome to React Typescript</h1>

      <div className="p-6 max-w-xl mx-auto rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold">First Session Topics</h2>
        <p>In the first session, we will cover the following topics:</p>
        <ul className="list-disc list-inside space-y-1">
          {sessionTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <p>
          At the end, we will do some exercises to reinforce these concepts.
        </p>
      </div>
    </div>
  );
};

export default HelloWorldPage;
