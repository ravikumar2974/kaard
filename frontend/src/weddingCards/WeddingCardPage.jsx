import React from "react";
import { useParams } from "react-router-dom";

import Randhir from "./components/Randhir";
// import RoyalGold from "./components/RoyalGold";
// aur future cards...

function WeddingCardPage() {
    const { cardSlug, guestName } = useParams();

    const cardComponents = {
        randhir: Randhir,
        // "royal-gold": RoyalGold,
    };

    const SelectedCard = cardComponents[cardSlug];

    if (!SelectedCard) {
        return <h1>Card Not Found</h1>;
    }

    return <SelectedCard guestName={guestName} />;
}

export default WeddingCardPage;