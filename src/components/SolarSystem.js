import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="container-planet">
          {planets.map(({ name, image }, e) => (
            <div key={ e }>
              <PlanetCard
                planetName={ name }
                planetImage={ image }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
