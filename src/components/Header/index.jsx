import { useState } from 'react';

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

import {
    Container,
    Content,
    Theme,
} from './styles';

export const Header = () => {
    const [themeMode, setThemeMode] = useState(false);

    function handleSwithMode(){
        setThemeMode(!themeMode);
        const body = document.querySelector("body");
        body.classList.toggle("dark");
    }

  return (
    <Container>
        <Content>
            <h1>Where in the world?</h1>
            <Theme>
                {
                    themeMode ? 
                    <div onClick={handleSwithMode}>
                        <MdOutlineLightMode />
                        <p>Light Mode</p>
                    </div>
                    :
                    <div onClick={handleSwithMode}>
                        <MdOutlineDarkMode />
                        <p>Dark Mode</p>
                    </div>
                }
            </Theme>
        </Content>
    </Container>
  )
}
