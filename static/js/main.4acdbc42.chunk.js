(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=n(11),s=n(8),u=n(18),l=n(19),h=(n(29),n(2)),d=n(3),b=n(5),p=n(4),m=n(6),E=function(e){var t=e.email,n=e.name,r=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},f=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(E,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},O=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba ba--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},g=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"600px"}},e.children)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. That is not good."):this.props.children}}]),t}(r.Component),j=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(p.a)(t).call(this))).updateCount=function(){e.setState(function(t){return{count:e.state.count+1}})},e.state={count:0},e}return Object(m.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),a.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log("Header"),a.a.createElement("div",null,a.a.createElement("h1",null,"RoboFriends"),a.a.createElement(j,{color:"red"}))}}]),t}(r.Component),C=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(y,null),a.a.createElement(O,{searchChange:n}),a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement(f,{robots:c}))))}}]),t}(r.Component),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(9),w={searchField:""},k={isPending:!1,robots:[],error:""},_=(n(30),Object(u.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object(S.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(S.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(S.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(S.a)({},e,{error:t.payload,isPending:!1});default:return e}}})),T=Object(s.d)(_,Object(s.a)(l.a));c.a.render(a.a.createElement(i.a,{store:T},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.4acdbc42.chunk.js.map