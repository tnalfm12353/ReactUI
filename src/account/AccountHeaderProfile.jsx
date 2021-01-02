import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import Jdenticon from 'react-jdenticon';
import styled from 'styled-components';

const AccountHeaderProfile = () =>{

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
    );
}

export default AccountHeaderProfile;

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