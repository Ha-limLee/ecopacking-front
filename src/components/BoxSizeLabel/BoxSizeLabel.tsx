import BoxSizeLabelView from "./BoxSizeLabel.view";

export default function({boxSize}: {boxSize: string}) {
    return (
        <BoxSizeLabelView boxSize={boxSize}/>
    );
}