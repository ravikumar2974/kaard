import React, { useEffect, useRef, useState } from "react";
import "./Randhir.css";
import { FaPause, FaMusic, FaChevronDown, FaCalendarAlt, FaOm, FaSpa, FaRing, FaMapMarkerAlt, FaHeart, FaQuoteLeft, FaBell, FaPhoneAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { GiPrayer, GiLotus } from "react-icons/gi";

import ganeshaImg from "./assets/image.png";
import musicFile from "./assets/india_happy-indian-wedding-490659.mp3";
import heartPicture from "./assets/heart picture.png";
import groomImg from "./assets/randhir.png";
import brideImg from "./assets/khushbu.png";
import GuestInvitation from "../GuestInvitation";

const Randhir = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [curtainOpen, setCurtainOpen] = useState(false);
    const [showCurtains, setShowCurtains] = useState(true);
    const audioRef = useRef(null);

    // Scroll reveal animation
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");

        const revealOnScroll = () => {
            revealElements.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 100;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        setTimeout(revealOnScroll, 100);

        return () => window.removeEventListener("scroll", revealOnScroll);
    }, []);

    // Auto-play music after curtain opens
    const tryPlayMusic = async () => {
        if (!audioRef.current) return;
        try {
            await audioRef.current.play();
            setIsPlaying(true);
        } catch (error) {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
        }
    };

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Audio play failed:", error);
            }
        }
    };

    const openCurtains = () => {
        if (curtainOpen) return;
        setCurtainOpen(true);
        setTimeout(() => {
            tryPlayMusic();
        }, 500);
        setTimeout(() => {
            setShowCurtains(false);
        }, 3800);
    };

    // Auto-open curtains after delay
    useEffect(() => {
        const timer = setTimeout(() => {
            openCurtains();
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const scrollToEvents = () => {
        const eventsSection = document.getElementById("events");
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: "smooth" });
        }
        tryPlayMusic();
    };

    return (
        <div className="randhir-page">
            {/* Curtain Animation */}
            {showCurtains && (
                <div className="curtain-container">
                    <div className={`curtain-left ${curtainOpen ? "curtain-animate-left" : ""}`}>
                        <div className="curtain-overlay"></div>
                    </div>
                    <div className={`curtain-right ${curtainOpen ? "curtain-animate-right" : ""}`}>
                        <div className="curtain-overlay"></div>
                    </div>
                    <div className="curtain-seal" onClick={openCurtains}>
                        <div className="seal-ring"></div>
                        <span className="seal-text">
                            R <span className="ampersand">&</span> K
                        </span>
                    </div>
                </div>
            )}

            {/* Background Effects */}
            <div className="mandala-bg"></div>
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>

            {/* Music Button */}
            <button className="music-toggle" onClick={toggleMusic}>
                {isPlaying ? <FaPause /> : <FaMusic />}
            </button>
            <audio ref={audioRef} loop preload="none">
                <source src={musicFile} type="audio/mpeg" />
            </audio>

            <div className="randhir-container">
                {/* Hero Section */}
                <header className="hero-section reveal">
                    <p className="ganesh-mantra">॥ श्री गणेशाय नमः ॥</p>

                    <div className="ganesha-wrapper">
                        <div className="ganesha-ring"></div>
                        <div className="ganesha-ring-dotted"></div>
                        <img src={ganeshaImg} alt="Lord Ganesha" className="ganesha-image" />
                    </div>

                    {/* Heart Picture Section */}
                    <div className="heart-picture-wrapper">
                        <div className="heart-glow"></div>
                        <img src={heartPicture} alt="Wedding Hearts" className="heart-picture" />
                    </div>

                    <p className="hero-quote">
                        "मैं अपनी जिंदगी के इस नए और खूबसूरत सफर की शुरुआत करने जा रहा हूँ।
                        इस खास मौके पर आपकी उपस्थिति का हमें बेसब्री से इंतजार रहेगा।"
                    </p>

                    <button className="scroll-indicator" onClick={scrollToEvents}>
                        <span>Scroll</span>
                        <FaChevronDown />
                    </button>
                </header>

                {/* Events Section */}
                <section id="events" className="events-section reveal">
                    <h2>
                        <FaCalendarAlt /> कार्यक्रम
                    </h2>

                    <div className="timeline">
                        <div className="timeline-line"></div>

                        <div className="event-card">
                            <div className="event-icon">
                                <FaOm />
                            </div>
                            <div className="event-content">
                                <h3>!! पूजा एवं मटकोर !!</h3>
                                <p className="event-date">
                                    <FaCalendar /> 27 April 2026
                                </p>
                                <p className="event-day">सोमवार</p>
                            </div>
                        </div>

                        <div className="event-card">
                            <div className="event-icon">
                                <FaSpa />
                            </div>
                            <div className="event-content">
                                <h3>!! हल्दी एवं मेहंदी !!</h3>
                                <p className="event-date">
                                    <FaCalendar /> 30 April 2026
                                </p>
                                <p className="event-day">गुरुवार</p>
                            </div>
                        </div>

                        <div className="event-card featured">
                            <div className="event-icon pulse">
                                <FaRing />
                            </div>
                            <div className="event-content">
                                <h3>!! शुभ विवाह !!</h3>
                                <p className="event-date">
                                    <FaCalendar /> 01 May 2026
                                </p>
                                <p className="event-day">शुक्रवार</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bride & Groom Section */}
                <section id="couple" className="couple-section reveal">
                    <h2>वर - वधू</h2>

                    <div className="person-card">
                        <div className="avatar-wrapper">
                            <img src={groomImg} alt="Groom - Randhir" className="avatar-img" />
                        </div>
                        <h3>चि० रणधीर कुमार</h3>
                        <p className="relation">सुपुत्र</p>
                        <h4>श्रीमती प्रमिला देवी एवं स्व० अजय सिंह</h4>

                        <div className="address-card">
                            <div className="address-header">
                                <FaMapMarkerAlt />
                                <span>स्थाई पता</span>
                            </div>
                            <div className="address-details">
                                <div className="address-row">
                                    <span className="label">ग्राम:</span>
                                    <span className="value">अदखनी</span>
                                </div>
                                <div className="address-row">
                                    <span className="label">पो०:</span>
                                    <span className="value">सुतिहारा</span>
                                </div>
                                <div className="address-row">
                                    <span className="label">थाना:</span>
                                    <span className="value">परिहार</span>
                                </div>
                                <div className="address-row">
                                    <span className="label">जिला:</span>
                                    <span className="value">सीतामढ़ी</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heart-divider">
                        <FaHeart />
                    </div>

                    <div className="person-card">
                        <div className="avatar-wrapper">
                            <img src={brideImg} alt="Bride - Khushbu" className="avatar-img" />
                        </div>
                        <h3>आयु० कुमारी खुशबू</h3>
                        <p className="relation">सुपुत्री</p>
                        <h4>श्रीमती पुनिता देवी एवं श्री शम्भु महतो</h4>

                        <div className="address-card">
                            <div className="address-header">
                                <FaMapMarkerAlt />
                                <span>स्थाई पता</span>
                            </div>
                            <div className="address-details">
                                <div className="address-row">
                                    <span className="label">ग्राम:</span>
                                    <span className="value">हरिहरपुर</span>
                                </div>
                                <div className="address-row">
                                    <span className="label">पो०:</span>
                                    <span className="value">कुम्हरा विशनपुर</span>
                                </div>
                                <div className="address-row">
                                    <span className="label">थाना:</span>
                                    <span className="value">डुमरा</span>
                                </div>
                                <div className="address-row">
                                    <span className="label">जिला:</span>
                                    <span className="value">सीतामढ़ी</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shayari Section */}
                <section className="shayari-section reveal">
                    <div className="shayari-card">
                        <div className="shayari-glow"></div>
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>
                        <p className="shayari-text">
                            <span>मिलन है दो परिवारों का रस्म है खुशी मनाने का,</span>
                            <span>हमें तो इंतजार है, शादी में आपके आने का!</span>
                        </p>
                        <div className="shayari-decoration">
                            <div className="decoration-line"></div>
                            <FaSpa />
                            <div className="decoration-line"></div>
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="location-section reveal">
                    <div className="location-card">
                        <div className="location-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <h2>दर्शन अभिलाषी / स्थान</h2>
                        <p className="family-names">
                            श्री राम नाथ सिंह<br />
                            सुनील सिंह, नबिन सिंह, विद्यानन्द सिंह<br />
                            रजनीश कुमार, अवनीश, साजन<br />
                            देवराज, शिवराज, युवराज<br />
                            <span className="family-all">एवं समस्त कुशवाहा परिवार</span>
                        </p>
                        <div className="location-divider"></div>
                        <p className="address-full">
                            ग्राम - अदखनी, पोस्ट - सुतिहारा<br />
                            थाना - परिहार, जिला - सीतामढ़ी<br />
                            पिन - 843331
                        </p>
                    </div>
                </section>

                {/* Note Section */}
                <section className="note-section reveal">
                    <div className="note-card">
                        <FaBell className="bell-icon" />
                        <h2>नोट:</h2>
                        <p>
                            बारात मेरे निवास स्थान अदखनी से संध्या 5 बजे हरिहरपुर के लिए प्रस्थान करेगी।
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer-section reveal">
                    <div className="footer-divider"></div>

                    <h2>दर्शनाभिलाषी</h2>
                    <p className="footer-name">
                        आपका अपना<br />
                        <strong>रणधीर कुमार</strong><br />
                        (एवं समस्त परिवार)
                    </p>

                    <a href="tel:+917486862483" className="contact-btn">
                        <FaPhoneAlt /> +917486862483
                    </a>
                    <GuestInvitation />
                </footer>
            </div>
        </div>
    );
};

export default Randhir;