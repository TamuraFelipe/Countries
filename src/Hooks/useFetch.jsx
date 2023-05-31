// eslint-disable-next-line no-unused-vars
import { useCallback, useState } from 'react'
import { api } from '../services/api'

const UseFetch = () => {
    const [data, setData] = useState([]);
    const [borders, setBorders] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const request = useCallback( async (url) => {
        let json;

        try {
            setError(null);
            setLoading(true);
            const response = await api.get(url);
            json = await response.data;
            
            if(json[0]?.borders){
                json[0]?.borders?.forEach( (border) => {
                    findBorderName(border)
                })
            }
        } catch (error) {
            json = null;
            setError(error.message)
        } finally {
            setData(json)
            setLoading(false)
        }

        async function findBorderName(sigla){
            const response = await api.get(`/alpha/${sigla}`);
            setBorders( borderPrev => [...borderPrev, response.data.name])
        }
        setBorders([]);
        setLoading(false)
    }, [])

  return {
    request,
    data,
    error,
    loading,
    borders
  }
}

export default UseFetch
