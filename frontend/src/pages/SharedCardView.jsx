import React from 'react';
import { useParams } from 'react-router-dom';

function SharedCardView() {
  const { uniqueId, slug } = useParams();
  const cardIdentifier = uniqueId || slug;
  return (
    <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Your Personalized Card</h1>
      <p>This is a standalone view for card ID: {cardIdentifier}</p>
      {/* Fetch and display the customized card content here */}
    </div>
  );
}
export default SharedCardView;