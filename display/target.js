/**
* 单个圆形
* by blue.lb
* @2017-09-02 by blue.lb 
*/
class Target {
  options = {
    title: '添加指标',
    value: '20万',
    compare: '3.2%',
    radius: 50,
    fill: '#fff',
    stroke: '#000'
  }
  svg = null;
  x = 0;
  y = 0;
  constructor(con, options) {
    for (const key in options) {
      if (this.options(key)) {
        this.options[key] = options[key];
      }
    }
  }
  create = (con) => {
    this.svg = con
      .selectAll('g')
      .data([this.options])
      .enter()
      .append('g');
    this.svg.append('circle')
      .attr('cx', this.x)
      .attr('cy', this.y)
      .attr('fill', d => d.fill)
      .attr('stroke', d => d.stroke)
      .attr('r', d => d.radius);
    this.drawValue(this.options);
  }
  drawValue = (data) => {
    for (const key in data) {
      if (this.options[key]) {
        this.options[key] = data[key];
      }
    }
    this.text = this.svg.append('text')
      .attr('y', this.y);
    this.text.append('tspan')
      .attr('x', this.x)
      .attr('dy', 0)
      .attr('text-anchor', 'middle')
      .text(d => d.title);
    this.text.append('tspan')
      .attr('x', this.x)
      .attr('dy', 10)
      .attr('text-anchor', 'middle')
      .text(d => d.value);
    this.text.append('tspan')
      .attr('x', this.x)
      .attr('dy', 20)
      .attr('text-anchor', 'middle')
      .text(d => d.compare);
  }
  setColor = (color) => {
    this.color = color;
  }
  setPosition = (x, y) => {
    this.x = x;
    this.y = y;
  }
}
export default Target;
