(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"alt":"Alpine train over bridge","src":"images/Alpine-train-over-bridge.JPG"},{"id":2,"alt":"Building near Guarda","src":"images/Building-near-Guarda.JPG"},{"id":3,"alt":"Chapel Bridge, Lucerne","src":"images/Chapel-Bridge-Lucerne.JPG"},{"id":4,"alt":"City overlook Switzerland","src":"images/City-overlook-Switzerland.JPG"},{"id":5,"alt":"Ferry to Thun","src":"images/Ferry-to-Thun.JPG"},{"id":6,"alt":"Lake Zurich kayakers","src":"images/Lake-Zurich-kayakers.JPG"},{"id":7,"alt":"Lion of Lucerne","src":"images/Lion-of-Lucerne.JPG"},{"id":8,"alt":"Lucern building","src":"images/Lucern-building.JPG"},{"id":9,"alt":"Mountain-river","src":"images/Mountain-river.JPG"},{"id":10,"alt":"Pink flowers in Thun","src":"images/Pink-flowers-in-Thun.JPG"},{"id":11,"alt":"Schilthorn","src":"images/Schilthorn.JPG"},{"id":12,"alt":"Staubbach Falls Lauterbrunnen","src":"images/Staubbach-Falls-Lauterbrunnen.JPG"},{"id":13,"alt":"Stream near Lauterbrunnen","src":"images/Stream-near-Lauterbrunnen.JPG"},{"id":14,"alt":"Swans on Lake Zurich","src":"images/Swans-on-Lake-Zurich.JPG"},{"id":15,"alt":"Swiss cows","src":"images/Swiss-Cows.jpg"},{"id":16,"alt":"Swiss mountains with trees","src":"images/Swiss-mountains-with-trees.jpeg"},{"id":17,"alt":"Swiss train","src":"images/Swiss-train.JPG"},{"id":18,"alt":"Thun Castle","src":"images/Thun-Castle.JPG"},{"id":19,"alt":"Trummelbach Falls in Lauterbrunnen","src":"images/Trummelbach-Falls-in-Lauterbrunnen.JPG"},{"id":20,"alt":"View from Thun Castle","src":"images/View-from-Thun-Castle.JPG"},{"id":21,"alt":"View of Zurich","src":"images/View-of-Zurich.JPG"},{"id":22,"alt":"Walking bridge in Zurich","src":"images/Walking-bridge-in-Zurich.JPG"},{"id":23,"alt":"Zurich clock tower","src":"images/Zurich-clock-tower.JPG"},{"id":24,"alt":"Zurich National Museum","src":"images/Zurich-National-Museum.JPG"}]')},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(3),i=t.n(n),c=t(4),l=t(5),o=t(7),u=t(6),m=t(8);t(14);var d=function(e){return s.a.createElement("div",{className:"optionsContainer"},s.a.createElement("h3",null,e.message),s.a.createElement("div",{className:"buttonHolder"},s.a.createElement("button",{id:"easy",className:"gameLevel",onClick:function(){return e.startGame("easy")}},"Easy"),s.a.createElement("button",{id:"medium",className:"gameLevel",onClick:function(){return e.startGame("medium")}},"Medium"),s.a.createElement("button",{id:"hard",className:"gameLevel",onClick:function(){return e.startGame("hard")}},"Hard")))};t(15);var h=function(e){return s.a.createElement("header",null,s.a.createElement("h1",{className:"title"},"Swiss Memory Game"),s.a.createElement("h2",null,"Click an image to begin!"),s.a.createElement("h2",null,"Score: ",e.score),s.a.createElement("h2",null,"Top Score: ",e.top))};t(16);var g=function(e){return s.a.createElement("div",{className:"card",onClick:function(){return e.checkClicked(e.id)}},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.alt,src:e.src})))};t(17);var f=function(e){return s.a.createElement("div",{className:"wrapper"},e.children)},v=t(1),k=(t(18),function(e){function a(){var e,t;Object(c.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={game:"start",activeCards:v,clicked:[],score:0,topScore:0,wins:0},t.startGame=function(e){var a=[],r=[];switch(e){case"easy":for(;a.length<8;){var s=Math.trunc(24*Math.random());!0!==a.includes(s)&&a.push(s)}for(var n=0;n<a.length;n++){var i=a[n];r.push(v[i])}t.setState({activeCards:r,game:"play",clicked:[],score:0}),console.log(r),console.log(a);break;case"medium":for(;a.length<16;){var c=Math.trunc(24*Math.random());!0!==a.includes(c)&&a.push(c)}for(var l=0;l<a.length;l++){var o=a[l];r.push(v[o])}t.setState({activeCards:r,game:"play",clicked:[],score:0}),console.log(r),console.log(a);break;case"hard":for(;a.length<24;){var u=Math.trunc(24*Math.random());!0!==a.includes(u)&&a.push(u)}for(var m=0;m<a.length;m++){var d=a[m];r.push(v[d])}t.setState({activeCards:r,game:"play",clicked:[],score:0}),console.log(r),console.log(a);break;default:console.log("ERROR")}var h=e;console.log(h)},t.shuffle=function(e){for(var a,t,r=e.length;0!==r;)t=Math.floor(Math.random()*r),a=e[r-=1],e[r]=e[t],e[t]=a;return e},t.checkClicked=function(e){var a=t.state.clicked;if(!0!==a.includes(e)&&a.length<7){var r=t.state.activeCards;console.log(r);var s=t.shuffle(r);console.log(s),a.push(e),console.log(a);var n=t.state.score;++n>t.state.topScore&&t.setState({topScore:n}),t.setState({clicked:a,score:n,activeCards:s})}else if(!0!==a.includes(e)&&7===a.length){var i=t.state.activeCards,c=t.shuffle(i);console.log(c);var l=t.state.score;++l>t.state.topScore&&t.setState({topScore:l});var o=t.state.wins;o++,t.setState({wins:o,game:"win",score:l,activeCards:c})}else t.setState({game:"over"})},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e,a=this;switch(this.state.game){case"start":e=s.a.createElement(d,{startGame:this.startGame,message:"Choose your difficulty: "});break;case"play":e=this.state.activeCards.map((function(e){return s.a.createElement(g,{checkClicked:a.checkClicked,id:e.id,key:e.id,alt:e.alt,src:e.src})}));break;case"over":e=s.a.createElement(d,{startGame:this.startGame,message:"Whoops! You had already clicked that image. Play Again? "});break;case"win":e=s.a.createElement(d,{startGame:this.startGame,message:"You've successfully clicked through all the images. Play Again? "});break;default:console.log("ERROR")}return s.a.createElement(f,null,s.a.createElement(h,{score:this.state.score,top:this.state.topScore}),e)}}]),a}(s.a.Component));t(19);i.a.render(s.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.55ad9d1f.chunk.js.map