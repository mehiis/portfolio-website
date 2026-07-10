import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SpinningFlower from '../components/general/SpinningFlower';

const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMbNY_x7Iz94IKKoWLeeFz9RWOdoKiJRARQeatBDvDy630ChAakcFkSwudVMVNzYHvDoaBpE-6x9Fa/pub?output=csv";

const gameTypes = [
  "Arcade Racing", "Arcade Sports", "Hack and Slash", "Bullet Hell", "Card Game", 
  "Dungeon Crawler", "Educational Game", "Farming Simulator", "Fighting Game", 
  "Shooter", "Horror Game", "Idle Clicker", "Japanese RPG", "Kart Racing", 
  "Party Game", "Platformer", "Point-and-Click", "Puzzle", "Rhythm Game", 
  "Roguelike", "Roguelite", "Stealth", "Survival", "Tactical RPG", 
  "Visual Novel", "Tower Defense", "Trivia", "Tycoon"
];

const gamePerspectives = [
  "First-Person View", "2D Isometric", "3D Isometric", "2D Side-Scrolling",
  "3D Side-Scrolling", "2D Top-Down", "3D Top-Down", "Third-Person Over-the-Shoulder", 
  "Third-Person Following Camera"
];

interface CombinedIdea {
  setting: string;
  wildCard: string;
  author: string;
}

function GameIdeaGenerator() {
  const [ideaPool, setIdeaPool] = useState<CombinedIdea[]>([]);
  const [generatedCombinedIdea, setGeneratedCombinedIdea] = useState<CombinedIdea | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedGameType, setSelectedGameType] = useState<string>("");
  const [selectedPerspective, setSelectedPerspective] = useState<string>("");

  useEffect(() => {
    const parseCSV = (text: string): string[][] => {
      const result: string[][] = [];
      let row: string[] = [];
      let cell = "";
      let inQuotes = false;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '"' && text[i + 1] === '"') {
          cell += '"';
          i++; 
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          row.push(cell.trim());
          cell = "";
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
          if (char === '\r' && text[i + 1] === '\n') i++; 
          row.push(cell.trim());
          if (row.length > 0) result.push(row);
          row = [];
          cell = "";
        } else {
          cell += char;
        }
      }

      if (cell || row.length > 0) {
        row.push(cell.trim());
        result.push(row);
      }
      return result;
    };

    async function fetchAndParseCsv() {
      try {
        setIsLoading(true);
        const response = await fetch(sheetUrl);
        const csvText = await response.text();

        const rows = parseCSV(csvText);
        const newIdeaPool: CombinedIdea[] = []; 

        for (let i = 1; i < rows.length; i++) {
          const columns = rows[i];
          if (columns.length < 6) continue;

          const setting = columns[2];
          const wildCard = columns[3];
          const nickname = columns[4];
          const isApproved = columns[5]?.toLowerCase() === 'true';

          if (isApproved && setting && wildCard) {
            newIdeaPool.push({
              setting: setting,
              wildCard: wildCard,
              author: nickname
            });
          }
        }

        setIdeaPool(newIdeaPool);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching or parsing CSV data:", error);
        setIsLoading(false);
      }
    }

    fetchAndParseCsv();
  }, []);

  const handleGenerateClick = () => {
    const randomTypeIndex = Math.floor(Math.random() * gameTypes.length);
    setSelectedGameType(gameTypes[randomTypeIndex]);

    const randomPerspectiveIndex = Math.floor(Math.random() * gamePerspectives.length);
    setSelectedPerspective(gamePerspectives[randomPerspectiveIndex]);

    if (ideaPool.length === 0) return;
    const randomIdeaIndex = Math.floor(Math.random() * ideaPool.length);
    setGeneratedCombinedIdea(ideaPool[randomIdeaIndex]);
  };

  const isPoolEmpty = ideaPool.length === 0;

return (
    <>
      <Helmet>
          <title>Niko Mehiläinen - Game Idea Generator</title>
          <meta name="description" content={`Generate random game ideas with unique settings and wild cards.`} />
      </Helmet>
      
      <section className="py-5 items-center bg-(--secondary-color) px-0 shadow-sm 2xl:py-10">
        <div
          className="max-w-[1440px] min-w-[360px] m-auto sm:center items-center justify-center md:px-10 lg:px-25">
          <h1 className="text-xl 2xl:text-2xl font-[LeagueSpartanBold] text-(--black-color) mb-4 mx-10">
            Game Idea Generator
          </h1>
          <p className="text-md 2xl:text-xl font-[LeagueSpartanRegular] text-(--black-color) rounded-lg my-auto  mx-10">
            This is a game idea generator that I built to help me come up with weekly game ideas for my game development challenge.<br/><br/>You can contribute with your own ideas by submitting them by a simple Google Form.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzdV1XMVyNcCM_vNJJg7IZ4btcS2WdNTgQpDPzt7nChE1Z4A/viewform?hl=en" target="_blank" rel="noopener noreferrer" className="bg-(--primary-color) font-[LeagueSpartanBold] text-lg text-(--black-color) inline-block mt-5 px-8 py-2 mx-10 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm max-h-[80px]">
            Submit Your Idea
          </a>
        </div>
      </section>

      <div className='max-w-170 w-full md:w-170 flex flex-col justify-center items-center p-5 mx-auto xl:mt-25'>
          <div className='w-full bg-white shadow-sm border border-gray-100 rounded-2xl p-16 mb-4 results-panel justify-center items-center'>
            <ul className="gap-10 flex flex-col">
              <li className="mb-1 min-h-[30px] h-[30px] block xl:min-h-[40px] xl:h-[40px]">
                <p className="font-[LeagueSpartanBold] text-lg xl:text-2xl">Genre:</p>
                {generatedCombinedIdea?.setting != null ? (
                  <p className="font-[LeagueSpartanRegular] text-base text-lg xl:text-2xl">{selectedGameType}</p>
                ) : <p>...</p>} 
              </li>

              <li className="min-h-[50px] h-[50px] block xl:min-h-[40px] xl:h-[40px]">
                <p className="font-[LeagueSpartanBold] text-lg xl:text-2xl">Perspective:</p>
                {generatedCombinedIdea?.setting != null ? (
                  <p className="font-[LeagueSpartanRegular] text-base text-lg xl:text-2xl">{selectedPerspective}</p>
                ) : <p>...</p>} 
              </li>

              <li className="mb-1 xl:mb-4 min-h-[60px] h-[60px] block xl:min-h-[80px] xl:h-[80px]">
                <p className="font-[LeagueSpartanBold] text-lg xl:text-2xl">Setting:</p>
                {generatedCombinedIdea?.setting != null ? (
                  <>
                  <p className="font-[LeagueSpartanRegular] text-base text-lg xl:text-2xl">{generatedCombinedIdea.setting || ""}</p>
                  <p className="font-[LeagueSpartanRegular] text-base text-sm xl:text-md">Suggested by: {generatedCombinedIdea?.author}</p>
                  </>
                ) : <p>...</p>} 
              </li>

              <li className="mb-6 min-h-[60px] h-[60px] block xl:min-h-[80px] xl:h-[80px]">
                <p className="font-[LeagueSpartanBold] text-lg xl:text-2xl">Wild Card:</p>
                {generatedCombinedIdea?.wildCard != null ? (
                  <>
                    <p className="font-[LeagueSpartanRegular] text-base text-lg xl:text-2xl">{generatedCombinedIdea.wildCard || ""}</p>
                    <p className="font-[LeagueSpartanRegular] text-base text-sm xl:text-md">Suggested by: {generatedCombinedIdea.author}</p>
                  </>
                ) : <p>...</p>} 
              </li>
            </ul>
          
          <div className="flex justify-center">
          
          {isLoading ? (
              <SpinningFlower /> ) :(
            <button 
            onClick={handleGenerateClick} 
            className="bg-(--secondary-color) font-[LeagueSpartanBold] text-xl text-(--black-color) inline-block mt-22 xl:mt-10 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm max-h-[80px]"
            disabled={isLoading}>Generate</button>
          )}
        </div>
          </div>

          
        {!isLoading && isPoolEmpty && (
          <p className="error-message" style={{ color: 'red' }}>
            Error! No data found.
          </p>
        )}
        </div>
      </>
  );
}

export default GameIdeaGenerator;