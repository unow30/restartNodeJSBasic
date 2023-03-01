const path = require('path')
// @deprecated — Since v14.0.0 - Use main instead.
// 'mainModule'은(는) 사용되지 않습니다.ts(6385)
// module.exports = path.dirname(process.mainModule); 

// require.main.filename은 현재 Node.js 애플리케이션의 진입 모듈(main module)의 파일 경로를 반환합니다. (app.js)
// path.dirname()은 파일 경로에서 디렉토리 경로만 추출하는 Node.js 내장 모듈 함수입니다. 
// 따라서 path.dirname(require.main.filename)은 현재 Node.js 애플리케이션의 진입 모듈(main module)이 위치한 디렉토리 경로를 반환합니다.

// root폴더, 다음 폴더, 파일 경로
module.exports = (folderName, fileName) => {

    // if(typeof folderName !== 'string' || typeof fileName !== 'string'){
    //     console.log('its not match folderName|fileName');
    // }

    const rootDir = path.dirname(require.main.filename);
    console.log(rootDir)
    return path.join(rootDir, folderName, fileName)
}