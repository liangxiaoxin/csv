// 这里是我自己写的生成csv格式逻辑，仅供参考，推荐还是使用https://github.com/knrz/CSV.js 简单粗暴
const newLine = '\r\n';
export default function (columns, datas, separator = ',', noHeader = false) {

  const content = [];

  content.push(columns.join(separator));

  datas.forEach( data => {
    let values = Object.values(data);
    content.push( values.join(separator) );
  });
  return content.join(newLine);

}
