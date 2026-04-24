import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const previewRef = useRef(null);
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);

    const invitationCards = [
        {
            id: 1,
            title: "Wedding",
            subtitle: "Sarah & Michael",
            date: "15 June, 2024",
            image: "/image/wedding.png",
        },
        {
            id: 2,
            title: "Birthday",
            subtitle: "Emma's 30th",
            date: "22 August, 2024",
            image: "/image/birthday.png",
        },
        {
            id: 3,
            title: "Puja Ceremony",
            subtitle: "Ganesh Chaturthi",
            date: "19 September, 2024",
            image: "/image/ganesha.png",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;

            if (textRef.current) {
                textRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
            }

            if (previewRef.current) {
                previewRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        const timer = setTimeout(() => {
            textRef.current?.classList.add("fade-in");
            previewRef.current?.classList.add("fade-in");
        }, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const cardInterval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % invitationCards.length);
        }, 2000);

        return () => clearInterval(cardInterval);
    }, [invitationCards.length]);

    return (
        <section className="hero" ref={heroRef}>
            <div className="bg-animation">
                <div className="blur-circle blur-1"></div>
                <div className="blur-circle blur-2"></div>
                <div className="blur-circle blur-3"></div>
                <div className="blur-circle blur-4"></div>
                <div className="soft-wave wave-1"></div>
                <div className="soft-wave wave-2"></div>
            </div>

            <div className="hero-container">
                <div className="hero-text" ref={textRef}>
                    <div className="badge">PREMIUM DIGITAL EXPERIENCE</div>

                    <h1>
                        Exquisite{" "}
                        <span className="highlight">Digital Invitations</span>
                    </h1>

                    <p>
                        Elevate your event with our luxurious digital templates.
                        Designed for weddings, corporate galas, and special celebrations.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => navigate("/templates")}
                        >
                            Start Designing
                        </button>

                        <button
                            className="btn-secondary"
                            onClick={() => navigate("/templates")}
                        >
                            View Templates
                        </button>
                    </div>
                </div>

                <div className="hero-preview" ref={previewRef}>
                    <div className="card-stack">
                        {invitationCards.map((card, index) => {
                            const position =
                                (index - activeIndex + invitationCards.length) %
                                invitationCards.length;

                            return (
                                <div
                                    key={card.id}
                                    className={`invitation-card position-${position}`}
                                >
                                    <div
                                        className="card-image"
                                        style={{
                                            backgroundImage: `url(${card.image})`,
                                        }}
                                    >
                                        <div className="card-overlay">
                                            <div className="card-inner">
                                                <h3>{card.title}</h3>
                                                <p>{card.subtitle}</p>
                                                <div className="card-date">
                                                    {card.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="preview-glow"></div>
                </div>
            </div>
        </section>
    );
}

export default Home;