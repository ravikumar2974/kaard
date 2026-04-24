import React from "react";
import { useParams } from "react-router-dom";
import "./GuestInvitation.css";
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
        <div className="invitation-wrapper">

            {/* Guest Invitation Section */}
            <div className="guest-invitation">
                <h3>विशेष आमंत्रण</h3>
                <p>
                    प्रिय <strong>{displayName}</strong> जी, <br />
                    आपको एवं आपके परिवार को हमारे शुभ विवाह समारोह में सादर आमंत्रित किया जाता है।
                </p>
            </div>

            {/* Creator Box Section */}
            <div className="creator-box">
                <i className="fas fa-seedling"></i>

                <p>
                    Created with love <i className="fas fa-heart"></i>
                </p>

                <div className="creator-contact">
                    <p className="creator-text">
                        क्या आप भी ऐसा डिजिटल निमंत्रण बनवाना चाहते हैं?
                    </p>

                    <a href="tel:+917061042974" className="creator-btn">
                        <i className="fas fa-phone-alt"></i> हमें संपर्क करें
                        <br />
                        (+917061042974)
                    </a>
                </div>
            </div>

        </div>
    );
};

export default GuestInvitation;