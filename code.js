var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bede450e-2823-4f52-81b9-8cba977e7ed7","4d3d77b3-e739-41e6-9dfa-76e11ecd5c27","a1ece94c-6b08-474c-882b-13848d1ab8ff","41cad7d8-f7a9-40ae-af19-ee19d81c6554"],"propsByKey":{"bede450e-2823-4f52-81b9-8cba977e7ed7":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"4d3d77b3-e739-41e6-9dfa-76e11ecd5c27":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"a1ece94c-6b08-474c-882b-13848d1ab8ff":{"name":"tennisball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"},"41cad7d8-f7a9-40ae-af19-ee19d81c6554":{"name":"dingo_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xISWm91StiQQ4m_8EgGr4O4cUpTGfOBM/category_animals/dingo.png","frameSize":{"x":306,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"xISWm91StiQQ4m_8EgGr4O4cUpTGfOBM","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xISWm91StiQQ4m_8EgGr4O4cUpTGfOBM/category_animals/dingo.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var finish = createSprite(371,190,52,140);
finish.shapeColor = "yellow";
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
sam.setAnimation("tennisball_1");
sam.scale = 0.03;
  


  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("dingo_1")
  car1.scale = 0.05;  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("dingo_1")
  car2.scale = 0.05;  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("dingo_1")
  car3.scale = 0.05;  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("dingo_1")
  car4.scale = 0.05;  
  
 
//add the velocity to make the car move.
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;
function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  

// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
if(keyWentDown(RIGHT_ARROW)){
  sam.velocityX = 2;
}
if(keyWentDown(LEFT_ARROW)){
  sam.velocityX = -2;
}

//Add the condition to reduce the life of sam if it touches the car.
  if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)) {
    life = life-1;
    sam.x = 20;
    sam.y = 190;
    
  }
  if(life ==0){
    sam.velocityX = 0;
    sam.velocityY = 0;
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    car4.velocityY = 0;
    textSize(30);
    fill("red");
    text("GAME OVER-YOU LOST",10,200);
  }
  
  if(sam.isTouching(finish)){
    sam.velocityX = 0;
    sam.velocityY = 0;
    textSize(30);
    fill("red");
    text("YOU WON",100,200);
    
  }
  createEdgeSprites();
  sam.bounceOff(edges);
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
