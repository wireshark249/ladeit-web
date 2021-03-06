import * as d3 from 'd3'

const IMG = {
    task:`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC4yMTkgMjYuMjQ5Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMGYxNTI0O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44OTEgLTIuNjE0KSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNiwxOC44ODYuODkxLDEwLjc1LDE2LDIuNjE0LDMxLjEwOSwxMC43NVpNNS4xMDksMTAuNzUsMTYsMTYuNjE0LDI2Ljg5MSwxMC43NSwxNiw0Ljg4Niw1LjEwOSwxMC43NVoiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE2LDIzLjczNCwxLjU2LDE2LjY0OGwuODgtMS44TDE2LDIxLjUwOGwxMy41Ni02LjY1Ni44OCwxLjhaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNiwyOC44NjMsMS41NiwyMS43NzdsLjg4LTEuOEwxNiwyNi42MzcsMjkuNTYsMTkuOThsLjg4LDEuOFoiLz48L2c+PC9zdmc+`,
    server:`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAyOCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzBmMTUyNDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1OTggNTQ3MCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjU2NiAtNTQ3Mikgcm90YXRlKDkwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik01LDBIN1Y4SDVaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik01LDIwSDdWMzJINVoiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTYsMThhNCw0LDAsMSwxLDQtNEE0LDQsMCwwLDEsNiwxOFptMC02YTIsMiwwLDEsMCwyLDJBMiwyLDAsMCwwLDYsMTJaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNSwwaDJWMTZIMTVaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNSwyOGgydjRIMTVaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNiwyNmE0LDQsMCwxLDEsNC00QTQsNCwwLDAsMSwxNiwyNlptMC02YTIsMiwwLDEsMCwyLDJBMiwyLDAsMCwwLDE2LDIwWiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjUsMGgyVjRIMjVaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNSwxNmgyVjMySDI1WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjYsMTRhNCw0LDAsMSwxLDQtNEE0LDQsMCwwLDEsMjYsMTRabTAtNmEyLDIsMCwxLDAsMiwyQTIsMiwwLDAsMCwyNiw4WiIvPjwvZz48L2c+PC9zdmc+`,
    global:`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzBmMTUyNDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNiwzMkExNiwxNiwwLDEsMSwzMiwxNiwxNi4wMTksMTYuMDE5LDAsMCwxLDE2LDMyWk0xNiwyQTE0LDE0LDAsMSwwLDMwLDE2LDE0LjAxNSwxNC4wMTUsMCwwLDAsMTYsMloiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE3LjU0NSwyOC41NTlsMS40LTguOTc1LTYuNTE5LTMuMjc1TDE2LjMyMiwxMS41bC0xLjM2Ni0uNDg1LTUuMywxLjIxNUw2LjQzMiw5Ljc2NSw3LjY0Niw4LjE3N2wyLjQ4MywxLjksNC45NDgtMS4xMzYsNC41NzgsMS42MjgtNC4xMDgsNS4wNzEsNS42LDIuODE0LS43OCw0Ljk5LDMuNTkzLTMuMTMzTDI1Ljk5LDEyLjc2bDEuOTMyLjUxOS0yLjE4Nyw4LjEzNloiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTEwLjQ3NiwyNS4xNzdsLTEuOTYzLS4zODUuNjY1LTMuMzlMNS4xMzUsMjFsLjItMS45OSw2LjIyOS42MjhaIi8+PC9zdmc+`
}

let scale = 0.7 // 视图缩放比例
let selectLink = null;// 选择线-数据对象
let dragObject = {x:0,y:0,source:null,target:null,link:null};// 拖拽记录信息对象
let WEIGHT = {}// 记录权重值 变化条件:1、删除线 2、更新线信息 3、删除节点

let Layout = {
    selectObject:{},//选择节点-数据对象
    domButton:function(){
        let dom = document.getElementById("node_info");
        return dom && dom.querySelector('button');
    },
    getLinkId:function(linkData){
        return `link_${linkData.source.id}_${linkData.target.id}`
    },
    getLinkPercent:function(linkData){
        let all = WEIGHT[linkData.source.id] || 1;
        return `${parseInt(linkData.weight/(all) * 10000) / 100}%`;
    },
    getNodeIconPos:function(d,dir){
        if(dir=='l'){
            return {id:d.id,x:d.x+66, y:d.y+33}
        }else{
            return {id:d.id,x:d.x, y:d.y+33}
        }
    },
    getNodePos:function(xi,yi,ori){
        let offsetx = ori.type == 'pod' ? 280 : 200,offsety=120;
        let ox = 80;
        let oy = 40;
        return _.extend(ori,{x:ox+xi*offsetx,y:oy+yi*offsety})
    },
    getPos:function(list){
        let nodes = d3.stratify()(list);
        let root = d3.tree().separation(function(){return 2;}).nodeSize([60,200])(nodes);
        return root.descendants().map(function (v) {
            return _.extend(v.data,{x:v.y,y:v.x})
        });
    },
    hiddenNodeButton(d){
        let dom = document.getElementById('node_info');
        dom.style = `left:${(d.x+22.5)*scale}px;top:${(d.y-11)*scale}px;`;
        // _.throttle(function(){
        //     dom.style = `left:${(d.x+19.5)*scale}px;top:${(d.y-11)*scale}px;transform:scale(1);`;
        // },100)
    }
}

function dragIconStart(data,flag){
    dragObject = Layout.getNodeIconPos(data,flag)
    dragObject.source = data;
    dragObject.link = d3.select('.links')
        .append('svg:path')
        .attr('sources','link_'+data.id)
        .attr('class','link_active')
        .attr('stroke','rgb(25, 102, 255)')
}

function dragIconTrigger(data,flag){
    if(dragObject.link){
        let pos = Layout.getNodeIconPos(d3.event,flag)
        dragObject.link
            .attr('d',`M${dragObject.x} ${dragObject.y} ${pos.x} ${pos.y}`)
    }
}

function dragIconEnd(){
    if(dragObject.target){// 拖拽成功 - 创建线
        let link = this.insertLink({
            source:dragObject.source,
            target:dragObject.target
        })
        this.clickCreateLink(link._groups[0][0].__data__);
    }
    dragObject.source = null;
    dragObject.target = null;
    dragObject.link = null;
    d3.select('.link_active').remove();
}

// dgraph
function Dgraph(){
    let sc = this;
    sc.clickSelectNode = function(){}
    sc.clickRemoveNode = function(){
        if(Layout.selectObject.id){
            sc.removeNode(Layout.selectObject)
        }
    }
    sc.clickAddNode = function(){}
    sc.clickCreateLink = function(){}
    sc.clickSelectLink = function(){}

    //
    sc.graph = d3.select('svg.flow-strategy')
        .attr('width','100%')
        .attr('height','100%')
        .on('dblclick.zoom', null)
        .on('click', function(){
            //Layout.selectObject = null;
            if(Layout.selectObject){
                let sel = Layout.selectObject;
                Layout.selectObject = {};
                //
                Layout.hiddenNodeButton({x:-3000,y:0})
                sc.activeNode(sel);
            }
        })
        .append('g')
        .attr('transform',`scale(${scale})`)
        .attr('class','graph')

    sc.nodeDom = this.graph
        .append("g")
        .attr('class','notes');

    sc.linkDom = this.graph
        .append("g")
        .attr('class','links');

    sc.tipsDom = this.graph
        .append("g")
        .attr('class','tips');

    return sc;
}

Dgraph.prototype.zoom = function(offset,size){
    let sc = this;
    let delButton = Layout.domButton();
    let zoom = d3.zoom()
        .scaleExtent([0.6, 1.6])
        .on('zoom', function(){
            let tran = d3.event.transform;
            sc.graph.attr('transform', "translate(" + tran.x + "," + tran.y + ") scale(" + tran.k + ")");
            delButton && (delButton.style.transform = `translate3d(${tran.x}px,${tran.y}px,0)`);
        })
    //
    size && (scale = size);
    d3.select('svg.flow-strategy')
        .call(zoom)
        .on("dblclick.zoom", null);

    if(offset){
        d3.select('svg.flow-strategy')
            .on("wheel.zoom", null)
            .call(zoom.transform,d3.zoomIdentity.translate(offset[0],offset[1]).scale(scale))
    }else{
        d3.select('svg.flow-strategy')
            .call(zoom.transform,d3.zoomIdentity.scale(scale))
    }
    //
    return sc;
}

Dgraph.prototype.createAddNode = function(data){
    let sc = this;
    let node = this.nodeDom
        .append('g')
        .data([data])
        .attr('class','node')
        .attr('id',`node_${data.id}`)
        .attr('opacity','.4')
        .attr('transform',d => {return `translate(${d.x},${d.y})`})

    node.on('click', function (d,i,node){
            sc.clickAddNode(d);
        })
        .on('mouseover',function(){
            d3.select(this)
                .transition()
                .duration(220)
                .attr('opacity','.8')
        })
        .on('mouseout',function(){
            d3.select(this)
                .transition()
                .duration(220)
                .attr('opacity','.4')
        })
    //
    node.append('svg:rect')
        .attr('class','box')
        .attr('width','66')
        .attr('height','66')
        .attr('filter','url(#dropShadow)')
        .attr('rx','33')
        .attr('ry','33')
        .attr('stroke','#e2e1e1')
        .attr('stroke-width','1px')
        .attr('fill','#f8f8f8')

    node.append('svg:text')
        .attr('width',30)
        .attr('height',30)
        .attr('transform','matrix(1,0,0,1,23,43)')
        .append('svg:tspan')
        .attr('style','font-size:2.5rem;stroke:#ddd')
        .text('+')

}

Dgraph.prototype.createEnvNode = function(data){
    let sc = this;
    let node = this.nodeDom
        .append('g')
        .data([data])
        .attr('class','node')
        .attr('id',`node_${data.id}`)
        .attr('transform',d => {return `translate(${d.x},${d.y})`})

    node.on('click', function (d,i,node){
        sc.clickSelectNode(d);
    })
    //
    node.append('svg:rect')
        .attr('class','box')
        .attr('width','66')
        .attr('height','66')
        .attr('filter','url(#dropShadow)')
        .attr('rx','33')
        .attr('ry','33')
        .attr('stroke',d => {return d.id==Layout.selectObject.id ? '#0041ff':'#cbcbcb' })
        .attr('stroke-width',d => {return d.id==Layout.selectObject.id ? '2px':'1px'})
        .attr('fill','#f8f8f8')

    node.append('svg:image')
        .attr('width',30)
        .attr('height',30)
        .attr('transform','matrix(1,0,0,1,18.1,18.1)')
        .attr('xlink:href',IMG.global)

    node.append('svg:text')
        .attr('fill','#181818')
        .attr('font-size',15)
        .attr('font-weight',500)
        .attr('y',10)
        .attr('transform','matrix(1,0,0,1,33,80)')
        .attr('text-anchor','middle')
        .append('svg:tspan')
        .attr('name','text')
        .text(function(d){return d.text})

    // trag - icon
    if(data.actived_l){
        node.append('svg:circle') // left
            .attr('class','moveIcon left')
            .attr('stroke-width','2.5px')
            .attr('r',5.5)
            .attr('stroke','#1966ff')
            .attr('fill','#1966ff')
            .attr('display',d => {return 'block'})
            .attr('transform','matrix(1,0,0,1,0,33)')
    }

    if(data.actived_r){
        node.append('svg:circle') // right
            .attr('class','moveIcon right')
            .attr('stroke-width','2.5px')
            .attr('r',5.5)
            .attr('stroke',"#1966ff")
            .attr('fill',"#1966ff")
            .attr('transform','matrix(1,0,0,1,66,33)')
    }
}

Dgraph.prototype.createNode = function(data){
    let sc = this;
    let node = this.nodeDom
        .append('g')
        .data([data])
        .attr('class','node')
        .attr('id',`node_${data.id}`)
        .attr('transform',d => {return `translate(${d.x},${d.y})`})
    //
    node.on('mouseenter', function (d,i,node){
            if(d.disabled){return;}
            //
            let sel = Layout.selectObject;
            Layout.selectObject = d;
            sc.activeNode(sel);
            sc.activeNode(Layout.selectObject);
            if(d.type=='pod'){
                Layout.hiddenNodeButton({x:-3000});
            } else{
                Layout.hiddenNodeButton(d);
            }
            d3.event.stopPropagation();
        })
        .on('click',function (d,i,node) {
            if(d.disabled){return;}
            //
            sc.clickSelectNode(d);
            d3.event.stopPropagation();
        })
        .on('mouseover', function(d, i) {
            if(dragObject.link && d.type == 'pod'){
                dragObject.target = d;
            }
        })
        .on('mouseout', function(d, i) {
            if(dragObject.link){
                dragObject.target = null;
            }
        })

    node.append('svg:rect')
        .attr('class','box')
        .attr('width','66')
        .attr('height','66')
        .attr('filter','url(#dropShadow)')
        .attr('rx','33')
        .attr('ry','33')
        .attr('stroke',d => {
            let index = (d.error && 1) || (d.id==Layout.selectObject.id?2:3)
            return ["","red",'#0041ff','#cbcbcb'][index];
        })
        .attr('stroke-width',d => {
            let index = (d.error && 1) || (d.id==Layout.selectObject.id?2:3)
            return ["","2px",'2px','1px'][index];
        })
        .attr('fill','#f8f8f8')

    node.append('svg:image')
        .attr('width',30)
        .attr('height',30)
        .attr('transform','matrix(1,0,0,1,18.1,18.1)')
        .attr('xlink:href',function(d){
            return d.type == 'server' ? IMG.server : IMG.task;
        })

    node.append('svg:text')
        .attr('fill','#181818')
        .attr('font-size',15)
        .attr('font-weight',500)
        .attr('y',10)
        .attr('transform','matrix(1,0,0,1,33,80)')
        .attr('text-anchor','middle')
        // .on('mouseover',function(d){
        //     if(d.type=="server" && d.data.rule){
        //         let text = getRule(d.data.rule);
        //         let width = text.length/16 * 100
        //         sc.tipsDom
        //             .attr('style','pointer-events: none')
        //             .attr('transform',`translate(${d.x},${d.y+100})`)
        //             .html(`
        //             <rect id="ttr" x="0" y="0" rx="5" ry="5" width="${width}" height="30" fill="rgba(0,0,0,.6)"/>
        //             <text fill="white" transform="translate(8,18)" style="font-size:1.2rem">${text}</text>
        //         `)//${getRule(d.rule)}
        //     }
        // })
        // .on('mouseout',function(d){
        //     sc.tipsDom.html('');
        // })
        .append('svg:tspan')
        .attr('name','text')
        .text(function(d){return d.text})

    // trag - icon
    node.append('svg:circle') // left
        .attr('class','moveIcon left')
        .attr('stroke-width','2.5px')
        .attr('r',5.5)
        .attr('stroke',d => {return d.actived_l ? 'transparent':'#1966ff' })
        .attr('fill',d => {return d.actived_l ? '#1966ff':'white' })
        .attr('display',d => {return 'block'})
        .attr('transform','matrix(1,0,0,1,0,33)')

    node.append('svg:circle') // right
        .attr('class','moveIcon right')
        .attr('stroke-width','2.5px')
        .attr('r',5.5)
        .attr('stroke',d => {return d.actived_r ? 'transparent':'#1966ff' })
        .attr('fill',d => {return d.actived_r ? '#1966ff':'white' })
        .attr('display',d => {return d.type!='server' ? 'none':'block'})
        .attr('transform','matrix(1,0,0,1,66,33)')
        .call(d3.drag()
            .on('start',function(d){
                if(d.disabled){return;}
                dragIconStart(d,'l')
            })
            .on('drag',function(d){dragIconTrigger(d,'l')})
            .on('end',function(d){dragIconEnd.call(sc,d,'l')}))

}

Dgraph.prototype.createLink = function(data){
    let sc = this;
    data.weight || (data.weight = 0);
    //
    let link = this.linkDom
        .append('g')
        .attr('class','link')
        .data([data])
        .attr('id',d => {
            return `link_${d.source.id}_${d.target.id}`
        })
        .attr('source',`${data.source.id}`)
        .attr('target',`${data.target.id}`)

    link.on('mousedown',function(d){
        if(!d.disabled){
            selectLink = d;
            sc.clickSelectLink(d)
        }
        d3.event.stopPropagation();
    })

    link.append('svg:path')
    //.attr('stroke-dasharray', '13 7')
        .attr('id',d => {
            return `path_${d.source.id}_${d.target.id}`
        })
        .attr('stroke-width',function(d,i,list){
            return d.strokeWidth || '2px';
        })
        .attr('stroke',function(d,i,list){
            return d.stroke || 'rgb(25, 102, 255)';
        })

    // TODO safari 不支持path内的text的click事件？
    // link.append('svg:text')
    //     .attr('transform',d => {
    //         let from = Layout.getNodeIconPos(data.source,'l');
    //         return `translate(${from.x},${from.y})`
    //     })
    //     .attr('stroke',"red")
    //     .attr("dy","-10")
    //     .text(function(d){
    //         return d.text==void 0?'0%':'';
    //     })

    //link.on('click',function(d,i,list){})
    if(!data.disabled){
        link.append('svg:text')
            .attr('y',8)
            .attr('x',60)
            .attr('dy',-4)
            .append('svg:textPath')
            .attr('name','text')
            .attr('xlink:href',function(d){
                return `#path_${d.source.id}_${d.target.id}`
            })
            .attr('stroke','#444')
            .attr('style','font-weight: 300;stroke-width: 1px;fill: black;')
            .text(function(d){
                return d.weight||0;
            })
    }
    //
    selectLink = data;
    return link;
}

Dgraph.prototype.activeNode = function(data){
    let sc = this;
    let node = this.nodeDom.select(`[id="node_${data.id}"]`);
    //
    node.each(function(d) {
        for (let key in data) {
            d[key] = data[key];
        }
        //
        node.attr('transform', d => {
            return `translate(${d.x},${d.y})`
        })
        node.select('rect.box')
            .attr('stroke',d => {
                if(d.type=="server" && d.data){
                    d.error = !d.data.redirect && !sc.hasServerLink(d);
                }
                let index = (d.error && 1) || (d.id==Layout.selectObject.id?2:3)
                return ["","red",'#0041ff','#cbcbcb'][index];
            })
            .attr('stroke-width',d => {
                if(d.type=="server" && d.data){
                    d.error = !d.data.redirect && !sc.hasServerLink(d);
                }
                let index = (d.error && 1) || (d.id==Layout.selectObject.id?2:3)
                return ["","2px",'2px','1px'][index];
            })
        node.select('circle.left')
            .attr('stroke', d => {
                return d.actived_l ? 'transparent' : '#1966ff'
            })
            .attr('fill', d => {
                return d.actived_l ? '#1966ff' : 'white'
            })
        node.select('circle.right')
            .attr('stroke', d => {
                return d.actived_r ? 'transparent' : '#1966ff'
            })
            .attr('fill', d => {
                return d.actived_r ? '#1966ff' : 'white'
            })
        node.select('[name="text"]')
            .text(function (d) {
                if (d.type == "server" && d.data.rule) {
                    return getRuleStr(d.data.rule);
                } else {
                    return d.text;
                }
            })
    })
}

Dgraph.prototype.activeLink = function(linkData){
    let id = Layout.getLinkId(linkData)
    let link = this.linkDom.select(`[id="${id}"]`);
    if(!link.empty()){
        link.select('path')
            .attr('stroke',function(d,i,list){
                return d.stroke || 'rgb(25, 102, 255)';
            })
            .attr('d',function(d){
                let from = Layout.getNodeIconPos(linkData.source,'l');
                let to = Layout.getNodeIconPos(linkData.target,'r');
                return d3.linkHorizontal()
                    .x(d => d.x)
                    .y(d => d.y)({source:{x:from.x,y:from.y},target:{x:to.x,y:to.y}})
            })

        link.select('[name="text"]')
            .text(linkData.weight)

        if(linkData.moveable){// 是否启用移动点
            link.append("svg:rect")
                .attr("x",'0')
                .attr("y",'0')
                .attr("transform","matrix(1,0,0,1,0,-2)")
                .attr("width",'3')
                .attr("height",'3')
                .attr("fill",'blue')
                .attr("stroke",'black')
                .attr('stroke-width',"1")
                .append("svg:animateMotion")
                .attr('path',function(d){
                    let from = Layout.getNodeIconPos(linkData.source,'l');
                    let to = Layout.getNodeIconPos(linkData.target,'r');
                    return d3.linkHorizontal()
                        .x(d => d.x)
                        .y(d => d.y)({source:{x:from.x,y:from.y},target:{x:to.x,y:to.y}})
                })
                .attr('rotate','auto')
                .attr('dur','2s')
                .attr('fill','freeze')
                .attr('repeatCount','indefinite')
        }
    }
}

Dgraph.prototype.removeNode = function(nodeData){
    const sc = this;
    Layout.hiddenNodeButton({x:-3000,y:0})// 删除按钮
    sc.linkDom.selectAll(".link").each((d,i,list)=>{// 删除节点关联线
        if(d.source.id == nodeData.id || d.target.id == nodeData.id){
            list[i].remove();
        }
    })
    sc.nodeDom.select(`[id="node_${nodeData.id}"]`).remove();
    // 删除节点 并 排序（当前列的所有节点)
    let addNode = null;
    let nodes = [];
    sc.nodeDom.selectAll(".node").each(function (d,i) {
        if('add$match' == d.id){
            addNode = d;
        }else if('env' == d.type){
            nodes.push(d)
        }else if('server' == d.type){
            nodes.push(d)
        }
    })
    nodes.push(addNode);
    Layout.getPos(nodes);
    sc.refreshLink();
}

Dgraph.prototype.removeLink = function(linkData){
    const id = Layout.getLinkId(linkData);
    this.linkDom.select(`[id="${id}"]`).remove();
    //
    let source = this.linkDom.select(`[source="${linkData.source.id}"]`);
    let target = this.linkDom.select(`[target="${linkData.target.id}"]`);
    linkData.source.actived_r = false;
    source.empty() && (this.activeNode(linkData.source))
    linkData.target.actived_l = false;
    target.empty() && (this.activeNode(linkData.target))
}

Dgraph.prototype.insertLink = function(linkData){
    let id = Layout.getLinkId(linkData);
    let link = this.linkDom.select(`[id="${id}"]`);
    let source = this.linkDom.select(`[source="${linkData.source.id}"]`);
    let target = this.linkDom.select(`[target="${linkData.target.id}"]`);
    if(link.empty()){
        link = this.createLink(linkData);
        // 激活线2端连接点样式
        linkData.source.actived_r = true;
        source.empty() && (this.activeNode(linkData.source))
        linkData.target.actived_l = true;
        target.empty() && (this.activeNode(linkData.target))
    }
    return link;
}

Dgraph.prototype.result = function(){
    let result = {};
    let match = [];
    let route = [];
    let matchRouteMap = [];
    let error = false;
    this.nodeDom.selectAll('.node').each(function(d,i,list){
        if('env' == d.type){
            result.host = d.data;
        }else if('server' == d.type){
            match.push(d.data);
            if(d.error){
                error = d.error;
            }
        }else if('pod' == d.type){
            route.push(d.data);
        }
    })
    this.linkDom.selectAll('.link').each(function(d,i,list){
        if('server' == d.source.type){
            let matchId = d.source.id;
            let routeId = d.target.id;
            matchRouteMap.push({matchId:matchId,routeId:routeId,weight:d.weight})
        }
    })
    result.match = match;
    result.route = route;
    result.map = matchRouteMap;
    if(error){
        window.Store.notice.add({text:`节点配置错误。 （ 节点配置 redirect 和 节点连线都不存在 ）`,type:'warning',time:18000})
    }else{
        return result;
    }
}

Dgraph.prototype.refreshLink = function(){
    let sc = this;
    let allNodeId = [];
    WEIGHT = {};
    sc.nodeDom.selectAll('.node').each(function(d,i,list){
        d.actived = false;
    })
    let links = sc.linkDom.selectAll('.link')
    links.each(function(d,i,list){
        let val = WEIGHT[d.source.id] || 0;
        WEIGHT[d.source.id] =  val + d.weight;
        //
        d.source.actived_r = true;
        d.target.actived_l = true;
    })
    //
    sc.nodeDom.selectAll('.node').each(function(d,i,list){
        sc.activeNode(d);
    })
    links.each(function(d,i,list){
        sc.activeLink(d);
    })
}

Dgraph.prototype.getNodeLink = function(nodeData){// 1、更新节点权重总值 2、获取节点输出线信息列表
    let sc = this;
    let res = [];
    let allWeight = 0;
    if(nodeData.id){
        sc.linkDom.selectAll(".link").each(function(d,i,list){
            if(d.source.id == nodeData.id){
                d.weight_text = d.weight;
                allWeight += d.weight;
                res.push(d)
            }
        })
    }
    res.weight = allWeight;
    WEIGHT[nodeData.id] = allWeight;
    return res;
}

Dgraph.prototype.hasPodLink = function(nodeData,noWeightValid){
    let link = '';
    this.linkDom.selectAll(`[target="${nodeData.id}"]`).each(function (d) {
        if(noWeightValid || d.weight){
            link = d;
        }
        return;
    })
    return Boolean(link);
}

Dgraph.prototype.hasServerLink = function(nodeData){
    let link = '';
    this.linkDom.selectAll(`[source="${nodeData.id}"]`).each(function (d) {
        if(d.weight){
            link = d;
        }
        return;
    })
    return Boolean(link);
}

Dgraph.prototype.getAddNode = function(matchData){// 创建节点并返回
    let sc = this;
    let id = 'new'+ _.udid();
    let newNode = {id:id,type:'server',text:getRuleStr(matchData.rule),parentId:'env0',error:!matchData.redirect,data:matchData};
    let newLink = {source:'',target:newNode,disabled:true};
    let addNode = null;
    let nodes = [];
    matchData.id = id;
    sc.nodeDom.selectAll(".node").each(function (d,i) {
        if('add$match' == d.id){
            addNode = d;
        }else if('env' == d.type){
            newLink.source = d;
            nodes.push(d)
        }else if('server' == d.type){
            nodes.push(d)
        }
    })
    //
    nodes.push(newNode);
    nodes.push(addNode);
    Layout.getPos(nodes); // node定位
    //
    sc.createNode(newNode);
    sc.createLink(newLink);
    sc.refreshLink();
    return newNode;
}

Dgraph.prototype.init = function(data,link){
    let sc = this;
    let dataMap = {};
    data.map((one)=>{
        dataMap[one.id] = one;
        if(one.type=='env'){
            sc.createEnvNode(one);
        }else if(one.type=='add'){
            sc.createAddNode(one);
        }else{
            sc.createNode(one);
        }
    })
    //
    console.log(link)
    link.map(function(v){
        let from = dataMap[v.from];
        let to = dataMap[v.to];
        let res = {source:from,target:to,text: v.text,disabled: v.disabled,stroke:v.stroke,strokeWidth:v.strokeWidth,weight: v.weight};
        sc.createLink(res);
    })
    sc.refreshLink();
}

Dgraph.prototype.initGroup = function(data,link){
    let sc = this;
    let dataMap = {};
    data.map((one)=>{
        dataMap[one.id] = one;
        if(one.type=='env'){
            sc.createEnvNode(one);
        }else if(one.type=='add'){
            sc.createAddNode(one);
        }else{
            sc.createNode(one);
        }
    })
    //
    link.map(function(v){
        let from = dataMap[v.from];
        let to = dataMap[v.to];
        let res = {source:from,target:to,text: v.text,disabled: v.disabled,stroke:v.stroke,strokeWidth:v.strokeWidth,moveable:true,weight: v.weight};
        sc.createLink(res);
    })
    sc.refreshLink();
}

//     [
//         {id:'0',type:'env', x:100, y:100 , text:'In',disabled:true},
//         {id:'11',type:'server', x:330, y:100 , text:'Default',disabled:true}
//     ],[
//     { from:'0', to:'11',text:'',disabled:true }
// ]
export default function(object){
    let dg = new Dgraph();
    if(object.env){
        let data = filterGroupData(object);
        dg.initGroup(data.nodeList,data.linkList);
    }else{
        let data = filterData(object);
        dg.init(data.nodeList,data.linkList);
    }
    //
    globalEvent(dg);
    return dg;
}

// 自动布局
function filterData(data){
    let nodeList = [],linkList = [];
    // host
    let text = data.host.length>0 ? data.host[0] : 'HOST';
    nodeList.push({id:`env0`,type:'env', text:text,actived_r:true,disabled:true,data:data.host})
    linkList.push({from:`env0`,to:`add$match`,disabled:true,stroke:'rgba(234, 233, 233,.8)',strokeWidth:'2px'})
    // match
    let splitArr = [];
    data.match.map(function (v,i) {
        let node = {id:`${v.id}`,type:'server', text:getRuleStr(v.rule),parentId:'env0',data:v};
        splitArr.push(node);
        if(v.id=='default'){
            node.disabled = true;
        }
        nodeList.push(node)
        linkList.push({from:'env0',to:node.id,disabled:true})
    })
    nodeList.push({id:`add$match`,type:'add',parentId:'env0'})
    // route
    let splitIndex = Math.floor(data.match.length/2);// TODO 均匀分配。 取中间match作为父级节点
    let parent = splitArr[splitIndex];
    data.route.map(function (v,i) {
        nodeList.push({id:`${v.id}`,type:'pod',text:v.subset,parentId:parent.id,data:v})
    })
    // link
    data.map.map(function (v,i) {
        linkList.push({from:`${v.matchId}`,to:`${v.routeId}`,weight:v.weight,stroke:(v.weight?'':'rgba(234, 233, 233,.8)')})
    })
    return {nodeList:Layout.getPos(nodeList),linkList}
}


// {
//     env:true,
//         host:["dev.ladeit.io",'test.ladeit.io'],
//     match:[
//     {
//         id:'default',
//         name:'default',
//         rule:[
//             {
//                 name:'xx',
//                 stringMatch:[
//                     {
//                         type:'method',
//                         expression:'=',
//                         value:'xxx'
//                     }
//                 ]
//             }
//         ],
//         redirect:'xxx'
//     }
// ],
//     route:[
//     {id:'1',host:'xxx',subset:'v0.3.1'}
// ],
//     map:[{matchId:'default',routeId:'1',disabled:true,weight:8}]
// }
function filterGroupData(topo){
    let nodeList = [],linkList = [];
    topo.list.map(function (data) {
        let text = data.host.length>0 ? data.host[0] : 'HOST';
        let hostId = `host${data.id}`;
        //
        nodeList.push({id:hostId,type:'env', text:text,parentId:'env',actived_l:true,actived_r:true,disabled:true,data:data.host})
        linkList.push({from:`env`,to:`host${data.id}`,disabled:true,moveable:true})
        // match
        let splitArr = [];
        data.match.map(function (v) {
            let node = {id:`${v.id}`,type:'server', text:getRuleStr(v.rule),disabled:true,parentId:hostId,data:v};
            splitArr.push(node);
            if(v.id=='default'){
                node.name = 'default';
                node.disabled = true;
            }
            nodeList.push(node)
            linkList.push({from:hostId,to:node.id,disabled:true,moveable:true})
        })
        // route
        let splitIndex = Math.floor(data.match.length/2);// TODO 均匀分配。 取中间match作为父级节点
        let parent = splitArr[splitIndex];
        data.route.map(function (v,i) {
            nodeList.push({id:`${v.id}`,type:'pod',text:v.subset,disabled:true,parentId:parent.id,data:v})
        })
        // link
        data.map.map(function (v,i) {
            linkList.push({from:`${v.matchId}`,to:`${v.routeId}`,weight:v.weight,moveable:true})
        })
    })
    nodeList.push({id:`env`,type:'env', text:"ENV",actived_r:true,disabled:true,moveable:true});
    return {nodeList:Layout.getPos(nodeList),linkList}
}


function getRuleStr(rule){
    let item = '',text = '',subfix = '';
    if(rule && rule.length){
        rule.length > 1 && (subfix = ' ... ');
        let arr = rule[0].stringMatch;
        if(arr && arr.length){
            arr.length > 1 && (subfix = ' ... ');
            item = arr[0];
        }
    }
    // match-rule
    let EXPRESSION_OPTONS = {exact:'=',prefix:'prefix',regex:'regex'};
    if(!item){
        //
    }else if(['headers'].indexOf(item.type)>-1){
        text = `${item.type} : ${item.key} = ${item.value}` + subfix;
    }else{
        text = `${item.type} ${EXPRESSION_OPTONS[item.expression]}  ${item.value}` + subfix;
    }
    return text;
}

// function getRule(value){
//     let res = [];
//     value && value.map((one,index)=>{
//         let arr = one.stringMatch;
//         if(arr instanceof Array){
//             if(arr.length){
//                 res.push(' ( ')
//                 arr.map((v,i)=>{
//                     res.push(getStr(v))
//                     if(i<arr.length-1){
//                         res.push(' and ')
//                     }
//                 })
//                 res.push(' ) ')
//                 if(index<value.length-1){
//                     res.push(' or ')
//                 }
//             }
//         }else{
//             res.push(getStr(one))
//             if(index<value.length-1){
//                 res.push(' or ')
//             }
//         }
//     })
//
//     function getStr(item){
//         let text = "",EXPRESSION_OPTONS = {exact:'=',prefix:'prefix',regex:'regex'};
//         if(!item){
//             //
//         }else if(['headers'].indexOf(item.type)>-1){
//             text = `${item.type} : ${item.key} = ${item.value}`;
//         }else{
//             text = `${item.type} ${EXPRESSION_OPTONS[item.expression]}  ${item.value}`;
//         }
//         return text;
//     }
//
//     return res.join('');
// }

function globalEvent(dg){//
    window.dg = dg;
    let width = 1000
    window.d3 = d3;
    window.tree = data => {
        const root = d3.hierarchy(data).sort((a, b) => d3.descending(a.height, b.height) || d3.ascending(a.data.name, b.data.name));
        root.dx = 10;
        root.dy = width / (root.height + 1);
        return d3.cluster().nodeSize([root.dx, root.dy])(root);
    }
    //document.onkeydown = function(e){// bug : 操作权重值时,事件误触发
    //    if(e.keyCode==8 && selectLink){
    //        dg.removeLink(selectLink);
    //    }
    //}
}