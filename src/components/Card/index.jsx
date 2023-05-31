/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import {
    Container,
} from './styles';

export const Card = ({data}) => {

  return (
    <Container className='box-card' >
        <Link to={`/details/${data.name}`}>
          <img src={data.flags.png} alt={data.flags.alt} />
          <h2>{data.name}</h2>
          <p>
              <strong>Population:</strong> {data.population}<br />
              <strong>Region:</strong> {data.region}<br />
              <strong>Capital:</strong> {data.capital}
          </p>
        </Link>
    </Container>
  )
}
