/* eslint-disable react/prop-types */
import {useEffect} from 'react'

export const Head = (props) => {
    
    useEffect( () => {
        document.title = props.title;
        document.querySelector('meta[name="description"]').setAttribute('content', props.description || '')
        document.querySelector('link[rel="icon"]').setAttribute('href', props.img || '')
    }, [props]);
  return (
    <></>
  )
}
