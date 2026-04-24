import React, { useState } from "react";
import { Link } from "react-router-dom";
import { weddingCards } from "./cardsData";
import "./WeddingList.css";

function WeddingList() {
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [guestName, setGuestName] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");
    const [copied, setCopied] = useState(false);

    const openSendModal = (card) => {
        setSelectedCard(card);
        setGuestName("");
        setGeneratedLink("");
        setCopied(false);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCard(null);
        setGuestName("");
        setGeneratedLink("");
        setCopied(false);
    };

    const generateLink = () => {
        if (!guestName.trim() || !selectedCard) {
            alert("Please enter recipient name.");
            return;
        }

        const guestSlug = guestName
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");

        const uniqueId = Math.random().toString(36).substring(2, 7);

        const link = `${window.location.origin}/wedding/${selectedCard.slug}/to/${guestSlug}-${uniqueId}`;

        setGeneratedLink(link);
        setCopied(false);
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(generatedLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Copy failed:", error);
        }
    };

    return (
        <>
            <div className="template-grid">
                {weddingCards.map((card) => (
                    <div className="template-card" key={card.id}>
                        <h3>{card.title}</h3>

                        <div className="card-buttons">
                            <Link
                                to={`/wedding/${card.slug}`}
                                className="view-btn"
                            >
                                View Card
                            </Link>

                            <button
                                className="send-btn"
                                onClick={() => openSendModal(card)}
                            >
                                Send Card
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div
                    className="send-modal-overlay"
                    onClick={closeModal}
                >
                    <div
                        className="send-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close-icon"
                            onClick={closeModal}
                        >
                            ×
                        </button>

                        <h2>
                            Send Invitation
                            {selectedCard && (
                                <span> - {selectedCard.title}</span>
                            )}
                        </h2>

                        <p className="modal-subtitle">
                            Enter recipient's name to generate a personalized invitation link.
                        </p>

                        <input
                            type="text"
                            placeholder="Enter recipient name"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && generateLink()
                            }
                        />

                        <button
                            className="generate-btn"
                            onClick={generateLink}
                        >
                            Generate Link
                        </button>

                        {generatedLink && (
                            <div className="generated-link-box">
                                <label>Your Personalized Link</label>

                                <input
                                    type="text"
                                    value={generatedLink}
                                    readOnly
                                />

                                <div className="link-actions">
                                    <button
                                        className="copy-btn"
                                        onClick={copyLink}
                                    >
                                        {copied ? "Copied!" : "Copy Link"}
                                    </button>

                                    <a
                                        className="whatsapp-btn"
                                        href={`https://wa.me/?text=${encodeURIComponent(
                                            `You're invited! View your invitation here: ${generatedLink}`
                                        )}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Share on WhatsApp
                                    </a>
                                </div>
                            </div>
                        )}

                        <button
                            className="close-btn"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default WeddingList;