import React from 'react';

import onlineIcon from '../../Icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users ? (
          <div>
            <h3>People Online :</h3>
            <div className="activeContainer">
              <h2>
                {users.map(({name,id}) => (
                  <div key={id} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : (<div>Not working</div>)
    }
  </div>
);

export default TextContainer;