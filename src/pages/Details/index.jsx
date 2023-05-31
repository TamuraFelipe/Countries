import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import UseFetch from '../../Hooks/useFetch';

import { Header } from '../../components/Header';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';

import {
    Container,
    Content,
    Country,
} from './styles';

export const Details = () => {
    const {data, loading, borders, request} = UseFetch();
    let {name} = useParams();
    
    useEffect( () => {
        request(`/name/${name}`)
    }, [name, request]);
            
  return (
    <Container>
        <Head 
        title={data[0]?.name}
        description={`Descripton of ${data.name}`}
        img={data[0]?.flag}
        />
        <Header />
        {
            loading ?
            <Loading />
            :
            <Content>
            <Link to='/'><BiArrowBack />Voltar</Link>
            {
                data && 
                <Country key={data.numericCode}>
                    <img src={data[0]?.flag} alt={`Bandeira da ${data[0]?.name}`} />
                    <div className='country-details'>
                        <h2>{data[0]?.name}</h2>
                        <div className='details-one'>
                            <p>
                                <strong>Native Name:</strong> {data[0]?.nativeName} <br />
                                <strong>Population:</strong> {data[0]?.population} <br />
                                <strong>Region:</strong> {data[0]?.region} <br />
                                <strong>Sub Region:</strong> {data[0]?.subregion} <br />
                                <strong>Capital:</strong> {data[0]?.capital} <br />
                            </p>
                        </div>
                        <div className='details-two'>
                            <p>
                                <strong>Top Level Domain:</strong> {data[0]?.topLevelDomain} <br />
                                <strong>Currencies:</strong> {data.currencies ? data.currencies[0]?.name : 'Não informado'} <br />
                                <strong>Languages:</strong> {data.languages ? data.languages[0]?.name : 'Não informado'}
                            </p>
                        </div>
                        <div className='details-borders'>
                            <p><strong>Border Countries:</strong></p>
                                { 
                                loading ? 
                                    <Loading />
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
        }
    </Container>
  )
}
