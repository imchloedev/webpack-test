const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 번들이 시작되기 전에 특정 폴더를 지워주는 플러그인
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HTML 파일을 생성하고 스크립트 태그로 번들링된 모든 파일을 HTML 파일에 삽입해준다.
const path = require("path");

module.exports = {
  entry: "./src/index.js", // 모듈의 의존성 그래프를 만드는 것으로, src/index.js 파일이 기본값으로 설정되며, 지정된 파일에 연관된 모듈과 라이브러리를 포함한 번들을 만든다.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  }, // 번들 파일 위치와 이름을 지정한다. 번들링이 시작되면 dist 폴더가 생성되고 번들링이 끝나면 dist 폴더 아래에 번들 파일이 생성된다. 기본값은 './dist/main.js'이다. 절대 경로를 사용(path.resolve)하는 것을 권장한다.
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  }, // module.rules는 사용하려는 로더의 규칙을 정의한다. 로더명은 use속성에 추가하고, test는 해당 로더에 적용하려는 파일 확장자를 정규식형태로 지정한다. css-loader를 적용한다.

  plugins: [new HtmlWebpackPlugin()],

  mode: "production", // 환경 구분
};
