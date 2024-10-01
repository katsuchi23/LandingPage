// import React, { useState, useRef, useEffect, RefObject, useMemo, useCallback } from "react";
// import Image from "next/image"; // Import the Image component from Next.js

// interface Character {
//   id: number;
//   name: string;
//   level: number;
//   image: string;
//   selected: boolean;
// }

// const characters: Character[] = [
//   { id: 1, name: 'Character 1', level: 30, image: 'https://placehold.co/100x100', selected: true },
//   { id: 2, name: 'Character 2', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 3, name: 'Character 3', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 4, name: 'Character 4', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 5, name: 'Character 5', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 6, name: 'Character 6', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 7, name: 'Character 7', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 8, name: 'Character 8', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 9, name: 'Character 9', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 10, name: 'Character 10', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 11, name: 'Character 11', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 12, name: 'Character 12', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 13, name: 'Character 13', level: 30, image: 'https://placehold.co/100x100', selected: false },
//   { id: 14, name: 'Character 14', level: 30, image: 'https://placehold.co/100x100', selected: false },
// ];

// const CharacterSelection: React.FC = () => {
//   const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
//   const [visibleCharacters, setVisibleCharacters] = useState(characters.slice(0, 10));
//   const [endIndex, setEndIndex] = useState(10);

//   // Wrap colRefs in useMemo
//   const colRefs = useMemo(() => [
//     useRef<HTMLDivElement>(null),
//     useRef<HTMLDivElement>(null),
//     useRef<HTMLDivElement>(null),
//   ], []); // Empty dependency array means it will be initialized once

//   // Function to load more characters
//   const loadMoreCharacters = useCallback(() => {
//     const nextChars = characters.slice(endIndex, endIndex + 10);
//     if (nextChars.length > 0) {
//       setVisibleCharacters((prev) => [...prev, ...nextChars]);
//       setEndIndex((prev) => prev + 10);
//     }
//   }, [endIndex]); // Add endIndex to dependencies

//   // Use useCallback to memoize the handleInfiniteScroll function
//   const handleInfiniteScroll = useCallback((colRef: RefObject<HTMLDivElement>) => {
//     const column = colRef.current;
//     if (column) {
//       const onScroll = () => {
//         const scrollTop = column.scrollTop;
//         const clientHeight = column.clientHeight;
//         const scrollHeight = column.scrollHeight;
//         if (scrollTop + clientHeight >= scrollHeight - 50) {
//           loadMoreCharacters(); // Call loadMoreCharacters here
//         }
//       };
//       column.addEventListener('scroll', onScroll);
//       return () => {
//         column.removeEventListener('scroll', onScroll);
//       };
//     }
//   }, [loadMoreCharacters]); // Add loadMoreCharacters to dependencies

//   useEffect(() => {
//     colRefs.forEach((colRef) => {
//       handleInfiniteScroll(colRef);
//     });
//   }, [colRefs, handleInfiniteScroll]); // Ensure dependencies are correct

//   const renderCharacters = (characters: Character[]) => {
//     return characters.map((character) => (
//       <div
//         key={character.id}
//         className={`character-card ${character.selected ? "border-yellow-500" : "border-transparent"} border-2 rounded-lg p-2 bg-gray-800 mb-2`}
//         onClick={() => setSelectedCharacter(character)}
//       >
//         {/* Use Image component from Next.js for optimized images */}
//         <Image src={character.image} alt={`Image of ${character.name}`} width={100} height={100} className="rounded" />
//         <div className="text-center mt-2">
//           <p className="text-xs">{character.name}</p>
//           <p className="text-xs">Lv. {character.level}</p>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="flex flex-col items-center h-screen">
//       <div className="flex w-full max-w-4xl h-full">
//         {/* Character Details */}
//         <div className="w-1/3 p-4 flex flex-col items-start h-full">
//           <div className="character-details mb-4">
//             <Image src={selectedCharacter.image} alt={`Image of ${selectedCharacter.name}`} width={100} height={100} className="w-32 h-32 rounded" />
//             <div className="info mt-2">
//               <h2 className="text-xl">{selectedCharacter.name}</h2>
//               <p className="text-lg">Level: {selectedCharacter.level}</p>
//             </div>
//           </div>
//         </div>
//         {/* Columns */}
//         <div className="w-2/3 p-4 flex overflow-hidden h-full">
//           {/* Column 1 */}
//           <div className="flex flex-col transform -rotate-12 overflow-y-auto hide-scrollbar h-full" ref={colRefs[0]}>
//             {renderCharacters(visibleCharacters)}
//           </div>
//           {/* Column 2 */}
//           <div className="flex flex-col transform translate-y-4 -rotate-12 mx-2 overflow-y-auto hide-scrollbar h-full" ref={colRefs[1]}>
//             {renderCharacters(visibleCharacters)}
//           </div>
//           {/* Column 3 */}
//           <div className="flex flex-col transform -rotate-12 overflow-y-auto hide-scrollbar h-full" ref={colRefs[2]}>
//             {renderCharacters(visibleCharacters)}
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none; /* For Safari and Chrome */
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;  /* Internet Explorer and Edge */
//           scrollbar-width: none;  /* Firefox */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CharacterSelection;
