import React from 'react';
import BoxRadioView from './BoxRadio.view';
import BoxState from 'states/BoxState';
import { useRecoilState } from 'recoil';

export default function() {
    // value := 피드백 옵션 (-2, -1, 0, 1, 2)
    // (-2, -1, 0, 1, 2) := (매우 작다, 작다, 보통, 크다, 매우 크다)
    const [boxState, setBoxState] = useRecoilState(BoxState);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(boxState);
        setBoxState(e.currentTarget.value);
    };

    return (
        <BoxRadioView groupName={"box"} handleChange={handleChange}/>
    );
}