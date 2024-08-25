import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

function CreatorCard({ creator, onDelete }) {
  const handleDelete = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', creator.id);

    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      onDelete(creator.id);
    }
  };

  return (
    <div className="creator-card">
      <img src={creator.imageURL || 'https://via.placeholder.com/150'} alt={`${creator.name}`} />
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Channel
      </a>
      <div style={{ marginTop: '10px' }}>
        <Link to={`/edit/${creator.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CreatorCard;