let bgd;
let hero;
let idle, run, attack, jump, fall, roll;

function preload(){
  bgd = loadImage("img/country-side.png");
  idle = loadAnimation('hero/idle/HeroKnight_Idle_0.png','hero/idle/HeroKnight_Idle_1.png','hero/idle/HeroKnight_Idle_2.png','hero/idle/HeroKnight_Idle_3.png','hero/idle/HeroKnight_Idle_4.png','hero/idle/HeroKnight_Idle_5.png','hero/idle/HeroKnight_Idle_6.png', 'hero/idle/HeroKnight_Idle_7.png');
  
  attack = loadAnimation('hero/attack3/HeroKnight_Attack3_0.png' ,'hero/attack3/HeroKnight_Attack3_1.png' ,'hero/attack3/HeroKnight_Attack3_2.png' ,'hero/attack3/HeroKnight_Attack3_3.png' ,'hero/attack3/HeroKnight_Attack3_4.png' ,'hero/attack3/HeroKnight_Attack3_5.png' ,'hero/attack3/HeroKnight_Attack3_6.png' , 'hero/attack3/HeroKnight_Attack3_7.png');
  
  run = loadAnimation('hero/run/HeroKnight_Run_0.png',
                      'hero/run/HeroKnight_Run_1.png',
                      'hero/run/HeroKnight_Run_2.png',
                      'hero/run/HeroKnight_Run_3.png',
                      'hero/run/HeroKnight_Run_4.png',
                      'hero/run/HeroKnight_Run_5.png',
                      'hero/run/HeroKnight_Run_6.png',
                      'hero/run/HeroKnight_Run_7.png',
                      'hero/run/HeroKnight_Run_8.png',
                      'hero/run/HeroKnight_Run_9.png');
  
  jump = loadAnimation('hero/jump/HeroKnight_Jump_0.png',
                      'hero/jump/HeroKnight_Jump_1.png',
                       'hero/jump/HeroKnight_Jump_2.png');
  
  fall = loadAnimation('hero/fall/HeroKnight_Fall_0.png',
                      'hero/fall/HeroKnight_Fall_1.png',
                       'hero/fall/HeroKnight_Fall_2.png',
                      'hero/fall/HeroKnight_Fall_3.png');
  roll = loadAnimation('hero/roll/HeroKnight_Roll_0.png',
                      'hero/roll/HeroKnight_Roll_1.png',
                      'hero/roll/HeroKnight_Roll_2.png',
                      'hero/roll/HeroKnight_Roll_3.png',
                      'hero/roll/HeroKnight_Roll_4.png',
                      'hero/roll/HeroKnight_Roll_5.png',
                      'hero/roll/HeroKnight_Roll_6.png',
                      'hero/roll/HeroKnight_Roll_7.png',
                      'hero/roll/HeroKnight_Roll_8.png')

}

function setup() {
  createCanvas(300, 200);
  
  hero = createSprite(50, 170, 50, 100);
  // idle.frameDelay = 9;
  run.frameDelay = 5;
  // attack.frameDelay = 20;


  hero.addAnimation('idle',idle);
  hero.addAnimation('jump',jump);
  hero.addAnimation('fall',fall);
  hero.addAnimation('attack',attack);
  hero.addAnimation('run',run);
  hero.addAnimation('roll',roll);


}

function draw() {
  background(0);
  image(bgd,0,0)
  
  hero.changeAnimation("idle");
  hero.velocity.x = 0;
  hero.velocity.y = 0;

  
  if(keyIsDown(RIGHT_ARROW)){
    hero.changeAnimation("run");
    hero.mirrorX(1);
    hero.velocity.x = 2;
  }
  
  else if(keyIsDown(LEFT_ARROW)){
    
    hero.mirrorX(-1);
    hero.changeAnimation("run");
    hero.velocity.x = -2;
  }
  else if(keyIsDown(UP_ARROW)){
        hero.changeAnimation("jump");
        hero.position.y -=5;
        setTimeout(()=>{
          hero.changeAnimation("fall");
          hero.position.y +=5; 
        }, 100);
        
  }
  else if(keyIsDown(DOWN_ARROW)){
        hero.changeAnimation("roll");
        
        hero.velocity.x = 2;
        
  }
  
  

  //draw the sprite
  drawSprites();


}