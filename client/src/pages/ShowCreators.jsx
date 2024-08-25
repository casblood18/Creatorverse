import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    };

    fetchCreators();
  }, []);

  const handleDelete = (id) => {
    setCreators(creators.filter((creator) => creator.id !== id));
  };

  return (
    <div>
      <div className="creator-cards-container">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No creators found.</p>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;