// RecipePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const { id } = useParams();

  // Puoi utilizzare l'ID per recuperare i dettagli della ricetta da un'API o da un'altra fonte.

  return (
    <div>
      <h2>Dettagli della Ricetta #{id}</h2>
      {/* Visualizza i dettagli della ricetta qui */}
    </div>
  );
};

export default RecipePage;
