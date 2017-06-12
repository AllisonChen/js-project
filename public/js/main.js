
	function show(){
		$("#startBtn").hide();
		$("#ingredientList").css("left","0%");
		$("#spiceList").css("right","0%");
	}

	// Press Enter
	window.addEventListener('keydown', (e)=>{
			switch(e.keyCode){
	    	case 13:// enter
	  	  	show();
	      	break;
			}
	});

	//drag and drop
	
	let dragNode = document.querySelectorAll('.listItem');
 	let targetNode = document.querySelector('#pot');
	
	for(var i=0;i<dragNode.length;i++){
	  dragNode[i].addEventListener('dragstart',(e)=>{
 		console.log(123);
 		})
	}

	targetNode.addEventListener('dropover', (e)=>{

	})


 	targetNode.addEventListener('drop',(e)=>{
 		console.log(123)
 	})



 // 	function addEvent(ele, eve, func) {
 //    if (ele.addEventListener) {
 //        ele.addEventListener(eve, func, false);
 //    } else if (ele.addEvent) {
 //        ele.addEvent('on' + eve, func);
 //    }
	// };

 // 	/* These are events for the draggable object */
	// addEvent(dragNode, 'dragstart', dragStartEvent);
	// addEvent(dragNode, 'drag', dragEvent);
	// addEvent(dragNode, 'dragend', dragEndEvent);

 // 	 These are events for the object to be dropped 
	// addEvent(targetNode, 'dragover', dragOverEvent);
	// addEvent(targetNode, 'drop', dropEvent);

 // 	function dragStartEvent(e) {
 //   	console.log(123)
 //   }

 //   function dragEvent(e) {
 //   	console.log(123)
 //   }

 //   function dragEndEvent(e) {
 //   	console.log(123)
 //   }

 //   function dragOverEvent(e) {
 //   	// console.log(123)
 //   }

 //   function dropEvent(e) {
 //   	console.log(123)
 //   }


















// $(document).ready(()=>{ // jQuery main

	// let stage = new createjs.Stage(canvas);
	// let repo = new createjs.LoadQueue();
	
	// function setup() {
	// 	// automatically update
	// 	createjs.Ticker.on("tick", e => stage.update());
	// 	createjs.Ticker.setFPS(60);
	// 	// load assets
	// 	repo.loadManifest([{id:'title',src:"image/plane.jpg"}
            			
 //            				]);
	// 	repo.on('complete', startView); // wait until all assets are loaded
	// }
	
	// 
		
	// 	function showItem() {
			
	// 	}
		
		
		
	// 	stage.addChild(rect);
	// 	stage.addChild(title,pot,entrance);
		
	// }
	
	// setup();
	
// });



