import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

function CreatorCard({ creator, onDelete }) {
  const handleDelete = async (e) => {
    e.stopPropagation();
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
    <Link to={`/creator/${creator.id}`} className="creator-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="creator-card">
        <img src={creator.imageURL || 'https://via.placeholder.com/150'} alt={`${creator.name}`} />
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          Visit Channel
        </a>
        <div style={{ marginTop: '10px' }}>
          <Link to={`/edit/${creator.id}`} onClick={(e) => e.stopPropagation()}>
            <button>Edit</button>
          </Link>
          <Link to={'/'} onClick={handleDelete}>
            <button style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default CreatorCard;