import React from 'react';
import styled from 'styled-components';
import UserSettings from '../../components/UserSettings.jsx';

const Home = () =>{
    return(
        <UserSettingsContainer>
            <UserSettings/>
        </UserSettingsContainer>
    );
}

export default Home;

const UserSettingsContainer = styled.div`
    width:100%;
    
`