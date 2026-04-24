import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateGallery.css'; // Assuming you will add CSS for the grid

function TemplateGallery() {
  const navigate = useNavigate();
  
  const templates = [
    { id: 'wedding', title: 'Wedding', category: 'Wedding'},
    { id: 'birthday', title: 'Birthday', category: 'Birthday'},
    { id: 'puja-elegant', title: 'Puja Ceremony', category: 'Religious'},
    { id: 'party-modern', title: 'Modern Housewarming', category: 'Party'},
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <header className="gallery-header">
          <h1>Choose a <span className="highlight-gold">Template</span></h1>
          <p>Select a professionally designed layout to start your personalization.</p>
        </header>

        <div className="template-grid">
          {templates.map((tpl) => (
            <div 
              key={tpl.id} 
              className="template-card"
              onClick={() => navigate(`/${tpl.id}`)}
            >
              <span className="card-category">{tpl.category}</span>
              <h3>{tpl.title}</h3>
              <button className="btn-outline-black">See Cards</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TemplateGallery;