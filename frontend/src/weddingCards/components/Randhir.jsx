import React, { useEffect, useRef, useState } from "react";
import "./Randhir.css";

import ganeshaImg from "./assets/image.png";
import musicFile from "./assets/india_happy-indian-wedding-490659.mp3";

import { useParams } from "react-router-dom";

const Randhir = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const { guestName } = useParams();
    const displayName = guestName 
    ? guestName.split("-").slice(0, -1).join(" ").replace(/\b\w/g, (char) => char.toUpperCase()) : "";

    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");

        const revealOnScroll = () => {
            revealElements.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < windowHeight - 100) {
                    element.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        setTimeout(revealOnScroll, 100);

        return () => window.removeEventListener("scroll", revealOnScroll);
    }, []);

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

    return (
        <div className="randhir-page">
            {/* Background Effects */}
            <div className="mandala-bg"></div>
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>

            {/* Music Button */}
            <button className="music-toggle" onClick={toggleMusic}>
                <i className={`fas ${isPlaying ? "fa-pause" : "fa-music"}`}></i>
            </button>
            <audio ref={audioRef} loop>
                <source src={musicFile} type="audio/mpeg" />
            </audio>

            <div className="randhir-container">
                {/* Hero Section */}
                <header className="hero-section reveal">
                    <p className="ganesh-mantra">॥ श्री गणेशाय नमः ॥</p>

                    <div className="ganesha-wrapper">
                        <img src={ganeshaImg} alt="Lord Ganesha" className="ganesha-image" />
                    </div>

                    <div className="hearts-container">
                        <div className="name-heart groom-heart">
                            <div className="heart-shape"></div>
                            <span>रणधीर</span>
                        </div>

                        <div className="name-heart bride-heart">
                            <div className="heart-shape"></div>
                            <span>खुशबू</span>
                        </div>
                    </div>

                    <div className="title-banner">
                        <h1>शुभ वैवाहिक कार्यक्रम</h1>
                    </div>

                    <p className="hero-quote">
                        "मैं अपनी जिंदगी के इस नए और खूबसूरत सफर की शुरुआत करने जा रहा हूँ।
                        इस खास मौके पर आपकी उपस्थिति मेरे लिए बहुत मायने रखती है।"
                    </p>

                    <a href="#couple" className="scroll-indicator">
                        <span>Scroll</span>
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </header>

                {/* Couple Section */}
                <section id="couple" className="couple-section reveal">
                    <h2>वर - वधू</h2>

                    <div className="person-card">
                        <div className="avatar">👨</div>
                        <h3>चि० रणधीर कुमार</h3>
                        <p>सुपुत्र</p>
                        <h4>श्रीमती प्रमिला देवी एवं स्व. अजय सिंह</h4>
                    </div>

                    <div className="heart-divider">
                        <span>❤️</span>
                    </div>

                    <div className="person-card">
                        <div className="avatar">👩</div>
                        <h3>आयुषी कुमारी खुशबू</h3>
                        <p>सुपुत्री</p>
                        <h4>श्रीमती पुनीता देवी एवं श्री शंभू महतो</h4>
                    </div>
                </section>

                {/* Events Section */}
                <section className="events-section reveal">
                    <h2>कार्यक्रम</h2>

                    <div className="event-card">
                        <h3>पूजा एवं मटकोर</h3>
                        <p>27 April 2026 • मंगलवार</p>
                    </div>

                    <div className="event-card">
                        <h3>हल्दी एवं मेहंदी</h3>
                        <p>30 April 2026 • गुरुवार</p>
                    </div>

                    <div className="event-card featured">
                        <h3>शुभ विवाह</h3>
                        <p>01 May 2026 • शुक्रवार</p>
                    </div>
                </section>

                {/* Location */}
                <section className="location-section reveal">
                    <h2>दर्शन अभिलाषी / स्थान</h2>
                    <p>
                        ग्राम - अदखनी<br />
                        पोस्ट - सुतिहारा, जिला - सीतामढ़ी<br />
                        पिन - 843331
                    </p>
                </section>

                {/* Note */}
                <section className="note-section reveal">
                    <h2>🔔 नोट:</h2>
                    <p>
                        मेरी शादी में आपका अपने परिवार के साथ पधारना अनिवार्य है!
                        कृपया पधारकर मुझे और मेरी जीवनसंगिनी को अपना शुभ आशीर्वाद प्रदान करें।
                        मुझे आपका बेसब्री से इंतज़ार रहेगा।
                    </p>
                </section>

                {/* Footer */}
                <footer className="footer-section reveal">
                    <h2>दर्शनाभिलाषी</h2>
                    <p>
                        आपका अपना<br />
                        <strong>रणधीर कुमार</strong><br />
                        (एवं समस्त परिवार)
                    </p>

                    <a href="tel:+917486862483" className="contact-btn">
                        📞 +91 7486862483
                    </a>

                    <div className="creator-box">
                        <p>क्या आप भी ऐसा डिजिटल निमंत्रण बनवाना चाहते हैं?</p>
                        <a href="tel:+917061042974">📞 +91 7061042974</a>
                    </div>
                    {displayName && 
                    ( 
                    <div className="guest-invitation">
                        <h3>विशेष आमंत्रण</h3>
                        <p> प्रिय <strong>{displayName}</strong> जी, <br /> आपको एवं आपके परिवार को हमारे शुभ विवाह समारोह में सादर आमंत्रित किया जाता है। </p>
                         </div> 
                        )}
                </footer>
            </div>
        </div>
    );
};

export default Randhir;
