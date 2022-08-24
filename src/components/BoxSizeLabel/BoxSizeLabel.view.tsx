export default function ({ boxSize }: { boxSize: string }) {
    return (
        <div>
            <div className="flex flex-nowrap items-center p-4 mb-4 font-bold text-large
                text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                <svg aria-hidden="true" className="w-5 h-5 mr-2 text-yellow-700 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                {/* ▼ 종이 텍스트 부분 texture 한글로 추가 부탁드립니다 */}
                {`종이 ${boxSize} 박스`}
            </div>
        </div>
    );
}