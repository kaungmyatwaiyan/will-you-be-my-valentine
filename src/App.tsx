"use client";
import { useState, useMemo, useCallback } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  
  // Memoize the button size calculation
  const yesButtonSize = useMemo(() => noCount * 20 + 16, [noCount]);

  // Use useCallback for event handlers
  const handleNoClick = useCallback(() => {
    setNoCount(prevCount => prevCount + 1);
  }, []);

  const handleYesClick = useCallback(() => {
    setYesPressed(true);
  }, []);

  // Memoize the button text selection
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please?",
      "PLEASE POTE POTE",
      "With a chocolate lava cake on top?",
      "What about a grape cream cheese?",
      "But :*(",
      "I am going to die",
      "I am dead",
      "Now, you are talking to Ko Ko's ghost",
      "Pleaseeeeee",
      ":((((",
      "Kalay lay Please",
      "Pote Pote Lay Please",
      "No :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  }, [noCount]);

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Yayy! I love you so much, Pote Pote Pu Tu Tuu Lay!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noButtonText}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
