// Press Enter
window.addEventListener('keydown', (e)=>{
	switch(e.keyCode){
  	case 13:// enter
	  	show();
    	break;
	}
});

function show(){
	$("#startBtn").hide();
	$("#discriptionBlock").css("opacity","1");
	$("#progress").css("opacity","1");
	$("#progressBar").css("opacity","1");
	$("#ingredientList").css("left","0%");
	$("#spiceList").css("right","0%");
}

//drag and drop
let stage = new createjs.Stage(canvas);
let repo = new createjs.LoadQueue();
let count = 0;

// automatically update
createjs.Ticker.on("tick", e => stage.update());
createjs.Ticker.setFPS(60);
// load assets
repo.loadManifest([
	{id:'lemon',src:"../img/lemon.png"},
	{id:'bean_sprout',src:"../img/bean_sprout.png"},
	{id:'dried_tofu',src:"../img/dried_tofu.png"},
	{id:'egg',src:"../img/egg.png"},
	{id:'fish_sauce',src:"../img/fish_sauce.png"},
	{id:'garlic',src:"../img/garlic.png"},
	{id:'leek',src:"../img/leek.png"},
	{id:'peanut',src:"../img/peanut.png"},
	{id:'pork',src:"../img/pork.png"},
	{id:'radish',src:"../img/radish.png"},
	{id:'red_onion',src:"../img/red_onion.png"},
	{id:'rice_noodle',src:"../img/rice_noodle.png"},
	{id:'shrimp',src:"../img/shrimp.png"},
	{id:'thai_sauce',src:"../img/thai_sauce.png"},
]);
repo.on('complete', drag); // wait until all assets are loaded

function drag(){
	let dragNode = document.querySelectorAll('.listItem');
	let targetNode = document.querySelector('#canvas');
	const ingradientList = 
	[
		{
			"name": "pad_sauce",
			"description": ""
		},
		{
			"name": "garlic",
			"description": "蒜頭是"
		},
		{
			"name": "red_onion",
			"description": ""
		},
		{
			"name": "radish",
			"description": ""
		},
		{
			"name": "peanut",
			"description": ""
		},
		{
			"name": "thai_sauce",
			"description": ""
		},
		{
			"name": "fish_sauce",
			"description": ""
		},
		{
			"name": "fructose",
			"description": ""
		},
		{
			"name": "rice_noodle",
			"description": ""
		},
		{
			"name": "shrimp",
			"description": ""
		},
		{
			"name": "egg",
			"description": ""
		},
		{
			"name": "pork",
			"description": ""
		},
		{
			"name": "dried_tofu",
			"description": ""
		},
		{
			"name": "bean_sprout",
			"description": ""
		},
		{
			"name": "leek",
			"description": ""
		},
		{
			"name": "lemon",
			"description": ""
		}
	];

	for(var i=0;i<dragNode.length;i++){

		//add drag start listener
	  dragNode[i].addEventListener('dragstart',(e)=>{

	  	//get drag element
	  	dragElement = e.target.id;
	  	dragJudgment = false;

	  	for(obj of ingradientList){
		  	if(obj["name"] === dragElement){
		  		dragJudgment = true;
		  		dragDiscription = obj["description"];
		  	}
			}


	  	//add drag over listener
		 	targetNode.addEventListener('dragover', (e)=>{
				e.preventDefault();
			})

		 	//add drop listener
		 	targetNode.addEventListener('drop',(e)=>{
		 		e.preventDefault();

		 		//change element status
			  	$("#"+dragElement).attr("draggable","false");
			  	$("#"+dragElement).css({
			  		"opacity": "0.6",
			  		"cursor": "not-allowed"
			  	});

			  // conditional judgment
		 		if(dragJudgment) {

		 			//progress bar
		 			count += 1;
		 			$("#progressBar").css({
		 				"width": (6.25*count)+"%",
		 				"background": "#f63a0f"
		 			});
		 			$("#progressBar").text((6.25*count)+"%");
		 			//canvas add image
		 			stage.removeAllChildren();
					let element = new createjs.Bitmap(repo.getResult(dragElement));
					element.set({scaleX: 0.3, scaleY: 0.3})
					stage.addChild(element);

					//change description
					$("#discriptionBlock").text(dragDiscription);	
		 		}

		 		else {
		 			//pop up wrong window
		 			stage.removeAllChildren();
		 			$("#wrongWindow").show();
		 			window.addEventListener('keydown', (e)=>{
		 				switch(e.keyCode){
				  	case 13:// enter
					  	$("#wrongWindow").hide();
				    	break;
						}	
		 			});
		 		}
		 		delete dragElement;
		 		delete dragJudgment;
		 	})
	 	})
	}
}




