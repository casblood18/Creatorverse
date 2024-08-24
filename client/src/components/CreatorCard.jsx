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
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Channel
      </a>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={`${creator.name}`} />
      )}
      <Link to={`/edit/${creator.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CreatorCard;