import BoxSizeLabelView from "./BoxSizeLabel.view";
import React from 'react';

function BoxSizeLabel({boxSize, texture}: {boxSize: string, texture: string}) {
    let boxType = '';
    if (texture === 'PAPER') {
        boxType = '종이 상자'
    } else if (texture === 'STYROFOAM') {
        boxType = '스티로폼 박스'
    }
    return (
        <BoxSizeLabelView boxSize={boxSize} boxType={boxType}/>
    );
}

export default React.memo(BoxSizeLabel);
