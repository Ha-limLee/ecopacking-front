import React from 'react';
import FeedbackRadioView from "./FeedbackRadio.view";

function FeedbackRadio({groupName}: {groupName: string}) {
    // group := 상자 혹은 포장재
    // value := 피드백 옵션 (-2, -1, 0, 1, 2)
    // (-2, -1, 0, 1, 2) := (매우 작다, 작다, 보통, 크다, 매우 크다)
    const [selectedItem, setSelectedItem] = React.useState({group: "", value: ""});
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const state = {group: e.currentTarget.name, value: e.currentTarget.value};
        console.log(state);
        setSelectedItem(state);
    };

    return (
        <FeedbackRadioView groupName={groupName} handleChange={handleChange}/>
    );
}

export default React.memo(FeedbackRadio);