import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {device}from '../style/Device';
import Logo from '../img/temp.png';

import Navi from '../components/Navi.jsx';
import AccountButtons from '../account/AccountButtons.jsx';
import AccountHeaderProfile from '../account/AccountHeaderProfile.jsx';
const Header = () =>{
    return(
        <HeaderContainer>
            <Empty>

            </Empty>
            <Link to="/"><LogoImg src={Logo} alt=""/></Link>
            <Navi/>
            <AccountButtons/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width:100%;
    height:50px;
    top:0;
    background: rgba(255,255,255,.2);
    backdrop-filter: saturate(180%) blur(4px);
    border-bottom: 1px solid #eee;
    position:fixed;
    display:flex;
    align-items:center;
    place-content:space-between;
`
const Empty = styled.div`
    display: none;
    @media ${device.mobileL}{
        display : block;
        top: 0;
        left: 0;
        width: 45px;
        height: 50px;
    }
`

const LogoImg = styled.img`
    width: 210px;
    height: 50px;

    @media ${device.mobileL}{
        width : 160px;
        height: 40px;
        margin-left:4.5em;
    }
    @media ${device.mobileM}{
        width: 140px;
        height: 35px;
    }
    @media ${device.mobileS}{
        margin-left:3em;
    }
`
export default Header;