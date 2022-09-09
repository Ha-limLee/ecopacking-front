# Eco Packing - Optimize Your Packing System

![image](https://user-images.githubusercontent.com/63112453/189303380-8b0b465f-f9d9-4347-b3db-4323e930f602.png)

## Features

1. 조회

![image](https://user-images.githubusercontent.com/63112453/189303702-277c67ae-fd6e-48ae-b27c-546fb4b86bd5.png)

&nbsp;&nbsp;주문 번호 칸에 번호를 넣고 조회 버튼을 클릭하면 상자 단위로 물품들을 확인할 수 있습니다. 번호는 000001부터 000008까지 있습니다. 좌/우로 스크롤 하거나 Prev/Next 버튼을 눌러 다른 상자를 확인할 수 있습니다.

2. 피드백 전송

![image](https://user-images.githubusercontent.com/63112453/189304006-68ba1f67-d6d3-4a10-b8a6-54b3aafb7276.png)

&nbsp;&nbsp;시스템이 제안한 상자 크기와 포장재 길이에 대해서 피드백을 보낼 수 있습니다. 라디오 버튼을 눌러 피드백을 보내면 백엔드에서 피드백에 따른 적절한 크기 및 길이를 찾습니다.

3. 포장 완료

![image](https://user-images.githubusercontent.com/63112453/189304536-c9750c8c-5c3a-4140-aeaf-4dd2f5e95aa6.png)

&nbsp;&nbsp;포장 완료 버튼은 해당 주문 번호의 마지막 상자까지 확인해야 활성화됩니다. 포장 완료 버튼을 클릭하면 해당 주문 번호의 모든 상자가 포장되었음을 서버에 알릴 수 있습니다.

&nbsp;&nbsp;자세한 사항은 [발표 자료](./about.pptx)를 참고해주세요.

## How to start project
You need [Node.js 16 LTS](https://nodejs.org) and Yarn package manager. \
If you have node.js already, please install yarn.

> npm install --global yarn

Then clone or pull this repo.

> git clone https://github.com/Ha-limLee/ecopacking-front.git \
cd ecopacking-front

or 

> mkdir ecopacking-front \
cd ecopacking-front \
git init \
git pull https://github.com/Ha-limLee/ecopacking-front.git

Now install all dependencies.
> yarn

Let's launch this project.
> yarn start

Finally you'll see the browser open.

## Available Scripts

In the project directory, you can run:

### `node start-with-server`

Start the development mode with server url. \
Default server is [http://localhost:5000](http://localhost:5000) \
If you have other server, give the server url as argument. \
e.g. node start-with-server http<area>://other-server.com

### `yarn start`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. \
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. \
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder. \
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. \
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
