<<<<<<< HEAD
import React from 'react';
=======
import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import Jdenticon from 'react-jdenticon';
>>>>>>> 9caac0cc4aaf657d149ee55775253f5822a18349
import styled from 'styled-components';

const AccountHeaderProfile = () =>{

<<<<<<< HEAD
    return(
        <div>hong</div>
=======
    const [hiddenProfile,setHiddenProfile] = useState(true);
    const [hiddenAlarm,setHiddenAlarm] = useState(true);

    const account = useSelector(state => state.Account.get('account'));

    function handleSetAlarm (){
        if(!hiddenProfile){
            setHiddenProfile(true);
        }

        if(hiddenAlarm){
            setHiddenAlarm(false);
        }else{
            setHiddenAlarm(true);
        }
    }

    function handleSetProfile (){
        if(!hiddenAlarm){
            setHiddenAlarm(true);
        }

        if(hiddenProfile){
            setHiddenProfile(false);
        }else{
            setHiddenProfile(true);
        }
    }

    return(
        <AccountHeaderProfileDiv>
            <Alarmbell onClick={() => handleSetAlarm()}>
                {
                    hiddenAlarm?
                    <FontAwesomeIcon icon={faBell} size="lg" color="#636466"/>
                    :
                    <FontAwesomeIcon icon={faBell} size="lg" color="#ffca08"/>
                }
            </Alarmbell>
            <ProfileImageDiv onClick={() => handleSetProfile()}>
                <Jdenticon size="2rem" value = {account.nickname} />
            </ProfileImageDiv>
        </AccountHeaderProfileDiv>
>>>>>>> 9caac0cc4aaf657d149ee55775253f5822a18349
    );
}

export default AccountHeaderProfile;

<<<<<<< HEAD
=======
const AccountHeaderProfileDiv = styled.div`
    display:flex;
    width:auto;
    height: 100%;
    align-items:center;
`
const Alarmbell = styled.div`
    margin: 0 .5em;
`
const ProfileImageDiv = styled.div`
    margin: 0 .5em;
`
>>>>>>> 9caac0cc4aaf657d149ee55775253f5822a18349
