import BoxSizeLabelView from "./BoxSizeLabel.view";
import React from 'react';

function BoxSizeLabel({boxSize}: {boxSize: string}) {
    return (
        <BoxSizeLabelView boxSize={boxSize}/>
    );
}

export default React.memo(BoxSizeLabel);