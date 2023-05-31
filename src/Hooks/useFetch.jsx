// eslint-disable-next-line no-unused-vars
import { useCallback, useState } from 'react'
import { api } from '../services/api'

const UseFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const request = useCallback( async (url) => {
        let json;

        try {
            setError(null);
            setLoading(true);
            const response = await api.get(url);
            json = await response.data;
            console.log(json)
        } catch (error) {
            json = null;
            setError(error.message)
        } finally {
            setData(json)
            setLoading(false)
        }
    }, [])
  
  return {
    request,
    data,
    error,
    loading,
  }
}

export default UseFetch
