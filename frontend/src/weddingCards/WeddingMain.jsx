import React from "react";
import { Routes, Route } from "react-router-dom";
import WeddingList from "./WeddingList";
import { weddingCards } from "./cardsData";

function WeddingMain() {
  return (
    <Routes>
      {/* All Wedding Cards List */}
      <Route index element={<WeddingList />} />

      {/* Individual Card Routes */}
      {weddingCards.map((card) => {
        const Component = card.component;

        return (
          <React.Fragment key={card.id}>
            {/* Normal View */}
            <Route
              path={card.slug}
              element={<Component />}
            />

            {/* Personalized View */}
            <Route
              path={`${card.slug}/to/:guestName`}
              element={<Component />}
            />
          </React.Fragment>
        );
      })}
    </Routes>
  );
}

export default WeddingMain;