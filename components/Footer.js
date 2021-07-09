import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faCoins, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="flex justify-around w-8/12 h-10 py-6 px-7">
          <FontAwesomeIcon icon={faCoins} />
          <FontAwesomeIcon icon={faAccusoft} />
          <FontAwesomeIcon icon={faCloudRain} />
        </div>
    )
}

export default Footer
