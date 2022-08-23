export default function({boxSize}: {boxSize: string}) {
    return (
        <div className="font-bold">
            {`박스 크기 ${boxSize}`}
        </div>
    );
}