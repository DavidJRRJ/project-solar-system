import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    console.log(missions);
    return (
      <div data-testid="missions">
        <div className="title">
          <Title headline="Missões" />
        </div>
        <div className="container-missions">
          {missions.map((e) => (
            <div key={ e } className="card-missions">
              <MissionCard
                name={ e.name }
                year={ e.year }
                country={ e.country }
                destination={ e.destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
