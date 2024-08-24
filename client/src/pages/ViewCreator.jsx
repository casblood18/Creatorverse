import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div>
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Channel
      </a>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={`${creator.name}`} />
      )}
    </div>
  );
}

export default ViewCreator;