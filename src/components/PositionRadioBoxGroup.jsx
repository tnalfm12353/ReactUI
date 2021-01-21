import React from 'react';
import styled from 'styled-components';

const PositionGroup = styled.div`
    display:flex;
    justify-content:space-between;
    padding:1rem;
    
`
const Temp = styled.div`
    border:1px solid red;
    width:50px;
    height:50px;
`

const PositionLabel = styled.label`
    color:black;
`

const PositionRadio = styled.input`
    // visibility:hidden;
    &:checked + ${Temp}{
        visibility:hidden;
    }
`
const PositionRadioBoxGroup = ({positions,name,onChange}) =>{
    return(
        <PositionGroup>
            {positions.map((positions, i)=>{
                return <PositionLabel>{positions}<PositionRadio type="radio" value={positions} name={name} onChange={(e)=>{onChange(e)}}></PositionRadio></PositionLabel>
            })}
            <Temp/>
        </PositionGroup>
    )
}

export default PositionRadioBoxGroup;

