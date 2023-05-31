import { useEffect } from 'react';
import UseFetch from '../../Hooks/useFetch';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { Head } from '../../components/Head';

import {
  Container,
  Select,
  Cards,
} from './styles';

export function Home() {
  const {data, loading, request} = UseFetch();
  
  function searchByRegion(region){
    request(`/region/${region}`);
  }
  function searchByName(name){
    if(!name){
      request('/all');
    } else {
      request(`/name/${name}`);
    }
  }
 
  useEffect( () => {
    request('/all');
  }, [request]);
 
  if(data)
  return (
    <Container>
      <Head 
        title='Countries'
        description='Flags and details of coutries'
        img='./src/assets/favicon.png'
        />
      <Header />
      <div>
        <Input 
          type='text'
          id='search'
          onChange={ ({target}) => searchByName(target.value)}
        />
        <Select onChange={ ({target}) => searchByRegion(target.value)}>
            <option value='all'>All Regions</option>
            <option value='asia'>Asia</option>
            <option value='americas'>America</option>
            <option value='europe'>Europe</option>
            <option value='africa'>Africa</option>
            <option value='oceania'>Oceania</option>
         </Select>
      </div>
      
      <Cards>
        {
        loading ?
        <p>Carregando...</p>
        :
          <>
          {
            data && data.map( (item, index) => (
              <Card key={index} data={item}/>
              ))
            }
          </>
        }
      </Cards>
      
    </Container>
  )
  else return null;
}
