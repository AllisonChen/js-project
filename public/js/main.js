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
	$("#ingredientList").css("left","0%");
	$("#spiceList").css("right","0%");
}

//drag and drop

let stage = new createjs.Stage(canvas);
let repo = new createjs.LoadQueue();

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
	const ingradientList = ["pad_sauce","garlic","red_onion","radish","peanut","thai_sauce","fish_sauce","fructose","rice_noodle","shrimp","egg","pork","dried_tofu","bean_sprout","leek","lemon"];

	for(var i=0;i<dragNode.length;i++){
		//add drag start listener
	  dragNode[i].addEventListener('dragstart',(e)=>{
	  	//get drag element
	  	let dragElement = e.target.id;

	  	//add drag over listener
		 	targetNode.addEventListener('dragover', (e)=>{
				e.preventDefault();
			})

		 	//add drop listener
		 	targetNode.addEventListener('drop',(e)=>{
		 		e.preventDefault();
		 		if(ingradientList.indexOf(dragElement) !== -1) {
		 			//canvas add image
					let element = new createjs.Bitmap(repo.getResult(dragElement));
					element.set({scaleX: 0.3, scaleY: 0.3})
					stage.addChild(element);
		 		}
		 		else {
		 			//pop up wrong window
		 		}
		 		dragElement = undefined ;
		 	})

	 	})
	}
}



