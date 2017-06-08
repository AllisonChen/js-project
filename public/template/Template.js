$(document).ready(()=>{ // jQuery main
	let stage = new createjs.Stage(canvas);
	let repo = new createjs.LoadQueue();
	
	function setup() {
		// automatically update
		createjs.Ticker.on("tick", e => stage.update());
		createjs.Ticker.setFPS(60);
		// load assets
		repo.loadManifest([{id:'title',src:"image/plane.jpg"}
            				,{id:'pot',src:"image/exp.png"}
            				,{id:'entrance',src:"image/m1.png"}
//            				,{id:'m2',src:"image/m2.png"}
//            				,{id:'m3',src:"image/m3.png"}
//            				,{id:'m4',src:"image/m4.png"}
            				]);
		repo.on('complete', startView); // wait until all assets are loaded
	}
	
	function startView(){
		let rect = new createjs.Shape(); 
		rect.graphics.beginStroke("black").drawRect(0, 0, 900, 700); 
		
		//標題
		let title = new createjs.Bitmap(repo.getResult('title'));
		title.x = canvas.width/2;
		title.y = 10;
		//鍋子
		let pot = new createjs.Bitmap(repo.getResult('pot'));
		pot.x = canvas.width/2;
		pot.y = 100;
		//進入
		let entrance = new createjs.Bitmap(repo.getResult('entrance'));
		entrance.x = canvas.width/2;
		entrance.y = 220;
		
		// click to enter game (remove entrance picture)
		entrance.on('click', e=>{
			stage.removeChild(entrance);
			showItem();
        });
		
		// keyboard "enter" to enter game (remove entrance picture)
		window.addEventListener('keydown', function(e){
			switch(e.keyCode){
		           case 13:// enter
		        	   stage.removeChild(entrance);
		        	   showItem();
			           break;
			}
		});
		
		function showItem() {
			let rectR = new createjs.Shape(); 
			rectR.graphics.beginStroke("black").drawRect(0, 0, 900, 700); 
			let rectL = new createjs.Shape(); 
			rectL.graphics.beginStroke("black").drawRect(0, 0, 900, 700); 
			
						
			
			stage.addChild(rectR, rectL);
		}
		
		
		
		stage.addChild(rect);
		stage.addChild(title,pot,entrance);
		
	}
	
	setup();
	
});



//let text = new createjs.Text('數位','72px 華康郭泰碑W4','black');
//text.x = 0;
//text.y = 0;
//text.textBaseline = "top";
//
//let text2 = new createjs.Text('內容','72px 華康郭泰碑W4','blue');
//text2.x = 0;
//text2.y = 80;
//text2.font = "italic normal 72px 華康郭泰碑W4";
//text2.alpha=0.5
//text2.textBaseline = "top";
//
//let text3 = new createjs.Text('技術','72px 華康郭泰碑W4','red');
//text3.x = 0;
//text3.y = 160;
//text3.textBaseline = "top";
//
//let shadow = new createjs.Shadow("pink", 10, 10, 1);
//text3.shadow = shadow;
//
//let text4 = new createjs.Text('實作','72px 華康郭泰碑W4','#800040');
//text4.x = 0;
//text4.y = 240;
//text4.outline = 2;
//text4.textBaseline = "top";

//entrance.on('click', e=>{
//  let dot = new createjs.Shape();
//  dot.graphics.beginFill('red').drawCircle(plane.x+100,plane.y+50,5);
//  createjs.Tween.get(dot)
//                .to({x:600},1000)
//                .call(()=> {
//              	  stage.removeChild(dot);
//              	  exp.x = 500;
//                    exp.y = plane.y;
//                    stage.addChild(exp);
//                 }).wait(500).call(()=>{stage.removeChild(exp)});
//                
//  stage.addChild(dot);
//	stage.removeChild(entrance);
//});

//key event (enter's keyCode = 13)
//window.addEventListener('keydown', function(e){
//	switch(e.keyCode){
//           case 38:// up
//        	   plane.y -= 10;
//	           break;
//	       case 40:// down
//	    	   plane.y += 10;
//	           break;
//	   }
//});

/* for move item 
function handleImageLoad(event) {
	var image = event.target;
	var bitmap;
	var container = new createjs.Container();
	stage.addChild(container);
	let text = new createjs.Text('數位','72px 華康郭泰碑W4','black');
	text.x = 0;
	text.y = 0;
	text.textBaseline = "top";

	// create and populate the screen with random daisies:
	for (var i = 0; i < 100; i++) {
		bitmap = new createjs.Bitmap(test);
//		container.addChild(bitmap);
//		bitmap.x = canvas.width * Math.random() | 0;
//		bitmap.y = canvas.height * Math.random() | 0;
//		bitmap.rotation = 360 * Math.random() | 0;
//		bitmap.regX = bitmap.image.width / 2 | 0;
//		bitmap.regY = bitmap.image.height / 2 | 0;
//		bitmap.scaleX = bitmap.scaleY = bitmap.scale = Math.random() * 0.4 + 0.6;
//		bitmap.name = "bmp_" + i;
//		bitmap.cursor = "pointer";

		// using "on" binds the listener to the scope of the currentTarget by default
		// in this case that means it executes in the scope of the button.
		bitmap.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
		});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		bitmap.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			this.y = evt.stageY + this.offset.y;
			// indicate that the stage should be updated on the next tick:
			update = true;
		});

		bitmap.on("rollover", function (evt) {
			this.scaleX = this.scaleY = this.scale * 1.2;
			update = true;
		});

		bitmap.on("rollout", function (evt) {
			this.scaleX = this.scaleY = this.scale;
			update = true;
		});

	}

	examples.hideDistractor();
	createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
	// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
	if (update) {
		update = false; // only update once
		stage.update(event);
	}
}
*/


