import {atom} from 'recoil';

// 박스 크기 피드백을 저장하는 store
// 값은 [-2, -1, 0, 1, 2] as string
export default atom<string>({
    key: 'BoxState',
    default: '0'
});