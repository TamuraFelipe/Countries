import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Head } from '../../components/Head';

import {
    Container,
    Content,
    Country,
} from './styles';

export const Details = () => {
    const [detail, setDetail] = useState([]);
    const [borders, setBorders] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(detail)
    let {name} = useParams();
    
    useEffect( () => {
        async function fetchDetailCountry(){
            const response = await api.get(`/name/${name}`);
            const data = await response.data;
            data[0]?.borders?.forEach( (border) => {
                findBorderName(border)
            })
            setDetail(data[0]);
        }
        fetchDetailCountry();
        async function findBorderName(sigla){
            const response = await api.get(`/alpha/${sigla}`);
            setBorders( borderPrev => [...borderPrev, response.data.name])
        }
        setBorders([]);
        setLoading(false) 
    }, [name]);
            
  return (
    <Container>
        <Head 
        title={detail.name}
        description={`Descripton of ${detail.name}`}
        img={detail.flag}
        />
        <Header />
        <Content>
            <Link to='/'><BiArrowBack />Voltar</Link>
            {
                detail && 
                <Country key={detail.numericCode}>
                    <img src={detail.flag} alt={`Bandeira da ${detail.name}`} />
                    <div className='country-details'>
                        <h2>{detail.name}</h2>
                        <div className='details-one'>
                            <p>
                                <strong>Native Name:</strong> {detail.nativeName} <br />
                                <strong>Population:</strong> {detail.population} <br />
                                <strong>Region:</strong> {detail.region} <br />
                                <strong>Sub Region:</strong> {detail.subregion} <br />
                                <strong>Capital:</strong> {detail.capital} <br />
                            </p>
                        </div>
                        <div className='details-two'>
                            <p>
                                <strong>Top Level Domain:</strong> {detail.topLevelDomain} <br />
                                <strong>Currencies:</strong> {detail.currencies ? detail.currencies[0]?.name : 'Não informado'} <br />
                                <strong>Languages:</strong> {detail.languages ? detail.languages[0]?.name : 'Não informado'}
                            </p>
                        </div>
                        <div className='details-borders'>
                            <p><strong>Border Countries:</strong></p>
                                { 
                                loading ? 
                                    <p>Carregando...</p>
                                    :
                                    <>
                                    {
                                    borders.length > 0 ?
                                    <ul>
                                        {
                                            borders.map( (item) => (
                                                <li key={item}><Link to={`/details/${item}`}>{item}</Link></li>
                                            ))
                                        }
                                    </ul>
                                    :
                                    <p>
                                        No borders...
                                    </p>
                                    }
                                </>
                                }
                        </div>
                    </div>
                </Country>
            }
        </Content>
    </Container>
  )
}
