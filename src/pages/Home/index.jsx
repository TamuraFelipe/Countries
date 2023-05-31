import { useEffect, useState } from 'react';

import { api } from '../../services/api';

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allRegion, setAllRegion] = useState(false);
  
 async function searchByRegion(region){
  try {
    setLoading(true)
    setData([])
    if(region === 'all'){
      setAllRegion(true)
    } else {
      const response = await api.get(`/region/${region}`);
      const data = response.data;
      setData(data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false)
  }
  
 }

 async function searchByName(name){
  try {
    if(name === ''){
      return name;
    } else {
      setLoading(true)
      const response = await api.get(`/name/${name}`);
      const data = response.data;
      setData(data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false)
  }
 }

  useEffect( () => {
    async function fetchCountries(){
      const response = await api.get('/all');
      const data = response.data;
      setData(data);
    }
    fetchCountries();
    setLoading(false)
  }, [allRegion]);

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
