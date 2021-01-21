import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PositionRadioBox from './PositionRadioBoxGroup.jsx';
import SettingInputForm from './SettingInputForm';

const UserSettings = () =>{

    /*
        state데이터를 axios api 사용하여 서버에 보낸후 응답 값을 받을 때에 redux action을 호출해 account redux값에 담기.
    */
    const positions = ["Student","Graduate","Professor"];
    const grades = ["Grade 1", "Grade 2", "Grade 3","Grade 4"];

    const [name,setName] = useState(null);
    const [major,setMajor] = useState(null);
    const [studentNum, setStudentNum] = useState(null);
    const [position, setPosition] = useState(null);
    const [grade, setGrade] = useState(null);
    useEffect(()=>{
        // if(account.major != null){
        //     setMajor(account.major);
        // }


    },[]);

    function InputOnChange(e){
        const inputName = e.target.name;

        switch(inputName){
            case "name" : setName(e.target.value);
                break;
            case "major": setMajor(e.target.value);
                break;
            case "studentNum": setStudentNum(e.target.value);
                break;
        }
    }

    function PositionCheckOnChange(e){
        setPosition(e.currentTarget.value);
    }

    function GradeCheckOnChange(e){
        setGrade(e.currentTarget.value);
    }

    return(
        <UserSettingsContainer>
            <SettingInputForm name={"name"} labelValue={"Name"} value={major} onChange={InputOnChange}/>
            <SettingInputForm name={"major"} labelValue={"Major"} value={major} onChange={InputOnChange}/>
            <SettingInputForm name={"studentNum"} labelValue={"StudentNumber"} value={studentNum} onChange={InputOnChange}/>
            <PositionRadioBox positions={positions} name={"position"} onChange={PositionCheckOnChange}/>
            {position == "Student"? <PositionRadioBox positions={grades} name={"grade"} onChange={GradeCheckOnChange}/>: null}
        </UserSettingsContainer>
    );

}

export default UserSettings;

const UserSettingsContainer = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid #ccc;
    width:50%;
    height:auto;    
`