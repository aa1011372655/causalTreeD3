export const createSvg = (tag, attr) => {
  if(!document.createElementNS) return;//防止IE8报错
  var $svg = $(document.createElementNS('http://www.w3.org/2000/svg', tag));
  for(var key in attr) {
      switch(key) {
          case 'xlink:href'://文本路径添加属性特有
            $svg[0].setAttributeNS('http://www.w3.org/1999/xlink', key, attr[key]);   
          break;
          default:
          $svg.attr(key, attr[key]);
      }
  }
 return $svg;    
};
