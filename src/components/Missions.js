import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    console.log(missions);
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {missions.map((e) => (
            <li key={ e }>
              <MissionCard
                name={ e.name }
                year={ e.year }
                country={ e.country }
                destination={ e.destination }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Missions;
