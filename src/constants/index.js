console.log('执行2')
export const init = [12]
export const element = document.createElement('span')
export const extractNumbersAndChars = (str) => {
    const matches = str.match(/(\d+)|(\D+)/g);
    return matches || []; // 如果没有匹配到任何内容，返回空数组
}