import React from "react";
import { useParams } from "react-router-dom";

const GuestInvitation = () => {
    const { guestName } = useParams();

    const displayName = guestName
        ? guestName
            .split("-")
            .slice(0, -1)
            .join(" ")
            .replace(/\b\w/g, (char) => char.toUpperCase())
        : "";

    if (!displayName) return null;

    return (
        <div className="guest-invitation">
            <h3>विशेष आमंत्रण</h3>
            <p>
                प्रिय <strong>{displayName}</strong> जी, <br />
                आपको एवं आपके परिवार को हमारे शुभ विवाह समारोह में सादर आमंत्रित किया जाता है।
            </p>
        </div>
    );
};

export default GuestInvitation;