AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },
  },

  init: function () 
  { var duration = 120; 
    var timerEl = document.querySelector("#timer"); 
    this.startTimer(duration, timerEl); 
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },
  startTimer: function (duration, timerEl) 
  { var minutes; 
    var seconds;
     setInterval(()=> { if (duration >=0)
      { minutes = parseInt(duration / 60);
       seconds = parseInt(duration % 60);
        if (minutes < 10) { minutes = "0" + minutes; } 
        if (seconds < 10) { seconds = "0" + seconds; } 
        timerEl.setAttribute("text", { value: minutes + ":" + seconds, });
         duration -= 1;
         }
          else { this.gameOver();
         } },1000) },
  isCollided: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#ring")) {
        console.log(elementId + " collision");
      } else if (elementId.includes("#hurdle")) {
        console.log("bird collision");
        if(element.includes ("rings")){
        this.currentscore
        this.updateTarget
        element.setAttribute ("visible", false)
        }
        else{this.gameOver}
      }
    });
  },
  updateTarget: function(){
    const element =document.querySelector("Target");
    var count=element.getAttribute("text").value
    let currentTarget=parseInt(count)
    currentTarget-=1
    element.setAttribute("text",{value:currentTarget} )

  },

  updateScore: function(){
    const element =document.querySelector("score");
    var count=element.getAttribute("text").value
    let currentscore=parseInt(count)
    currentscore-=1
    element.setAttribute("text",{value:currentscore} )

  },
  gameOver: function(){
    var planeE1=document.querySelector("plane_model")
    var element=document.querySelector("game_over_text")
    element.setAttribute("visible",true)
    planeE1.setAttribute("dynamic-body",{mass:1})
  }
});
