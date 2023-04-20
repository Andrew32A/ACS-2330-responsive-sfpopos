import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../sfpopos-data.json';
import './POPOSDetails.css';
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList';

function POPOSDetails(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <section className="POPOSDetails" role="article">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={ title } />
      </div>
      <div className="POPOSDetails-info">
        <p className="POPOSDetails-title" role="heading" aria-level="1">{ title }</p>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }</p>
        <ul className="POPOSDetails-features" aria-label="Features">
          {features.map((feature, index) => (
            <li key={ index }>{ feature }</li>
          ))}
        </ul>
        <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
        <POPOSFeatureList features={ features }/>
      </div>
    </section>
  );
}

export default POPOSDetails;
