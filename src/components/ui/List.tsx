interface Song {
  artist: string;
  title: string;
}

const songs: Song[] = [
  { artist: "Dio Lupa", title: "Remaining Reason" },
  { artist: "Ellie Beilish", title: "Bears of a fever" },
  { artist: "Sabrino Gardener", title: "Cappuccino" },
];
const List = () => {
  return (
    <ul className="list bg-base-100 rounded-box ">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most played songs this week
      </li>

      {songs.map((item, index) => {
        return (
          <li className="list-row" key={index}>
            <div>
              <div>{item.artist}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {item.title}
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
