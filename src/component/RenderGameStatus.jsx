import React from "react";
import clsx from "clsx";
import { getHeartLostMessage } from "../utils/utils";

export default function RenderGameStatus(props) {
  const className = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost,
    incorrect: !props.isGameOver && props.isLastGuessIncorrect,
  });

  const renderMessage = () => {
    if (!props.isGameOver && props.isLastGuessIncorrect) {
      return <p>{getHeartLostMessage()}</p>;
    }

    if (!props.isGameOver) {
      return null;
    }

    if (props.isGameWon) {
      return (
        <>
          <h2>You've Escaped Death... For Now</h2>
          <p>
            The gallows remain empty, but they wait patiently for your return.
          </p>
        </>
      );
    }

    if (props.isGameLost) {
      return (
        <>
          <h2>The Reaper Claims Another Soul</h2>
          <p>Your fate is sealed. The darkness consumes you.</p>
        </>
      );
    }

    return;
  };
  return <section className={className} aria-live="polite" role="status">{renderMessage()}</section>;
}
