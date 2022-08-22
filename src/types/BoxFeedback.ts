import MaterialFeedback from './MaterialFeedback';

type BoxFeedback= {
    "boxFeedback": string, // 박스 크기 피드백. [-2, -1, 0, 1, 2]
    "materials": MaterialFeedback[] // 포장재 피드백 배열
};

export default BoxFeedback;