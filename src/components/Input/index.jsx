import { AiOutlineSearch } from 'react-icons/ai';

import {
    Container,
} from './styles';

// eslint-disable-next-line react/prop-types
export const Input = ({search, ...rest}) => {
  return (
    <Container className='box-input'>
        <AiOutlineSearch />
        <input 
        type='text' 
        placeholder='Search for a country'
        onChange={ ({target}) => search(target.value)}
        {...rest}
        />
    </Container>
  )
}

