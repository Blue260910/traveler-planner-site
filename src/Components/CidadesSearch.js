import React, { useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ["places"];

function CidadesSearch({ onAddCity }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [input, setInput] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      const autocompleteInput = document.getElementById('autocomplete');
      if (!autocompleteInput) {
        console.error("Couldn't find element with id 'autocomplete'");
        return;
      }

      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteInput, {
        types: ['(cities)'],
        fields: ['name', 'address_component']
      });
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const countryComponent = place.address_components.find(component => component.types.includes('country'));
        const country = countryComponent ? countryComponent.long_name : null;
      
        setCities(prevCities => [...prevCities, { name: place.name, country }]);
      
        if (onAddCity) {
          onAddCity(place.name, country);
        } else {
          console.error("onAddCity function is not provided");
        }
      });
    }
  }, [isLoaded]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps</div>;
  }

  return (
    <div>
      <input
        id="autocomplete"
        type="text"
        placeholder="Search City"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
}

export default CidadesSearch;