import * as d3 from 'd3';
import Target from './display/target';

class CausalTree {
  options ={
    width: '100%',
    height: '100%',
    con: 'causalTree'
  }
  data = {
    id: 1,
    name: '指标',
    children: [
      {
        id: 2,
        name: '指标1',
        children: [
          {
            id: 3,
            name: '指标2',
            children: []
          }
        ]
      }
    ]
  }
  con = null;
  drawCon = null;
  canvas = null;
  drawList = [];
  center = {
    x: 0,
    y: 0
  };
  constructor(options) {
    for (const key in options) {
      if (this.options[key]) {
        this.options[key] = options[key];
      }
    }
    this.init();
    this.createTarget(this.data);
    // this.createRing();
    // this.run();
  }
  init = () => {
    // 创建svg
    this.$con = d3.select('#causalTree');
    // 选择文档中的body元素
    this.svg = this.$con
    // 添加一个svg元素
      .append('svg')
      // 设定宽度
      .attr('width', this.$con.node().offsetWidth)
      // 设定高度
      .attr('height', this.$con.node().offsetHeight);
    this.center.x = Math.floor(this.$con.node().offsetWidth / 2);
    this.center.y = Math.floor(this.$con.node().offsetHeight / 2);
    // const data = [{
    //   title: '相关指数指数相关指数相关指数相关指数',
    //   value: '20万',
    //   compare: '2.7',
    //   r: 100,
    //   color: '#f00'
    // }];
    this.drawCon = this.svg.append('g');
    // const g = this.drawCon
    //   .selectAll('g')
    //   .data(data)
    //   .enter()
    //   .append('g');
    // g.append('circle')
    //   .attr('cy', 100)
    //   .attr('cx', 100)
    //   .attr('fill', d => d.color)
    //   .attr('r', d => d.r);
    // g.append('text')
    //   .attr('y', 20)
    //   .attr('x', 100)
    //   .attr('height', 20)
    //   // .attr('width', 100)
    //   .attr('text-anchor', 'middle')
    //   .text(d => d.title);
    // g.append('text')
    //   .attr('y', 40)
    //   .attr('x', 100)
    //   // .attr('width', 100)
    //   .attr('text-anchor', 'middle')
    //   .text(d => d.value);
    // g.append('text')
    //   .attr('y', 60)
    //   .attr('x', 100)
    //   // .attr('width', 100)
    //   .attr('text-anchor', 'middle')
    //   .text(d => d.value);
    // this.svg.call(d3.zoom()
    //   .scaleExtent([1 / 2, 4])
    //   .on("zoom", ()=>{
    //     console.log(d3.event);
    //     this.svg
    //     .attr('transform', 'translate(' + d3.event.transform.x + ', ' + d3.event.transform.y+') ' + 
    //     'scale('+d3.event.transform.k+','+ d3.event.transform.k+')');
    //   }));
  }
  createTarget = () => {
    const target = new Target();
    target.setPosition(this.center.x, this.center.y);
    target.create(this.drawCon);
  }
}
export default CausalTree;
// @2017-09-02 end //
