export const getGameImage = (title: string): string => {
  const imageMap: { [key: string]: string } = {
    "Call Of Duty": "/games/CallOfDuty.avif",
    "God of War": "/games/GodOfWar.avif",
    "Red Dead Redemption 2": "/games/RedDeadRedemption2.jpg",
    "The Last of Us": "/games/TheLastOfUsGame.jpg",
    "Cyberpunk 2077": "/games/Cyberpunk2077.jpg",
    "Elden Ring": "/games/EldenRing.avif",
    "Spider-Man 2": "/games/SpiderMan2.jpeg",
    "Starfield": "/games/Starfield.jpeg",
    "Baldur's Gate 3": "/games/BaldurGate3.webp",
    "Final Fantasy XVI": "/games/FinalFantasyXVI.jpg"
  };

  return imageMap[title] || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";
}; 