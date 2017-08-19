/* Build a Roguelike Dungeon Crawler Game (I'm going to give mine a Clue theme) */

var ClueHouse = React.createClass({
    
    getInitialState: function() {
      var rooms = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      var tempVal, randIndex;
      for (var currIndex = rooms.length - 1; currIndex > 0; currIndex--) {
        randIndex = Math.floor(Math.random() * currIndex);
        tempVal = rooms[currIndex];
        rooms[currIndex] = rooms[randIndex];
        rooms[randIndex] = tempVal;
      }
      var victims = [0, 1, 2, 3, 4, 5];
      for (var currIndex = victims.length - 1; currIndex > 0; currIndex--) {
        randIndex = Math.floor(Math.random() * currIndex);
        tempVal = victims[currIndex];
        victims[currIndex] = victims[randIndex];
        victims[randIndex] = tempVal;
      }
      var weapons = [0,1,2,3,4,5]
      for (var currIndex = weapons.length - 1; currIndex > 0; currIndex--) {
        randIndex = Math.floor(Math.random() * currIndex);
        tempVal = weapons[currIndex];
        weapons[currIndex] = weapons[randIndex];
        weapons[randIndex] = tempVal;
      }
      var roomContent = [];
      var room = "";
      for (var i = 0; i < 9; i++) {
        if (rooms[i] == 0) {
          room = "study";
        } else if (rooms[i] == 1) {
          room = "hall";
        } else if (rooms[i] == 2) {
          room = "lounge";
        } else if (rooms[i] == 3) {
          room = "library";
        } else if (rooms[i] == 4) {
          room = "billiard";
        } else if (rooms[i] == 5) {
          room = "dining";
        } else if (rooms[i] == 6) {
          room = "conservatory";
        } else if (rooms[i] == 7) {
          room = "ballroom";
        } else if (rooms[i] == 8) {
          room = "kitchen";
        }
        roomContent.push({
          room: room, 
          victim: "", 
          victimPosition: "", 
          victimHealth: "", 
          victimHealthMax: "", 
          weapon: "",
          weaponPosition: "",
          health: "",
          healthPosition: "",
          style: {opacity: 1}
        });
      }
      roomContent.push({
        room: "cellar", 
        victim: "drBrown", 
        victimPosition: "r14c12", 
        victimHealth: 20, 
        victimHealthMax: 20, 
        weapon: "",
        weaponPosition: "",
        health: "health6",
        healthPosition: "r8c9",
        style: {opacity: 1}
      });
      var roomIndex = 0;
      var victim = "";
      for (var i = 0; i < victims.length; i++) {
        if (victims[i] == 0) {
          victim = "missScarlett";
        } else if (victims[i] == 1) {
          victim = "profPlum";
        } else if (victims[i] == 2) {
          victim = "mrsPeacock";
        } else if (victims[i] == 3) {
          victim = "mrGreen";
        } else if (victims[i] == 4) {
          victim = "colMustard";
        } else if (victims[i] == 5) {
          victim = "mrsWhite";
        }
        roomContent[roomIndex].victim = victim;
        roomIndex++;
      }
      var weapon = "";
      for (var i = 0; i < weapons.length; i++) {
        if (weapons[i] == 0) {
          weapon = "candlestick";
        } else if (weapons[i] == 1) {
          weapon = "gun";
        } else if (weapons[i] == 2) {
          weapon = "knife";
        } else if (weapons[i] == 3) {
          weapon = "leadpipe";
        } else if (weapons[i] == 4) {
          weapon = "rope";
        } else if (weapons[i] == 5) {
          weapon = "wrench";
        }
        roomContent[roomIndex].weapon = weapon;
        roomIndex++;
        if (roomIndex>8) {
          roomIndex = 0;
        }
      }
      for (var i = 1; i < 6; i++) {
        roomContent[roomIndex].health = "health" + i;
        roomIndex++;
        if (roomIndex>8) {
          roomIndex = 0;
        }
      }
      for (var roomIndex = 0; roomIndex < 9; roomIndex++) {
        if (roomContent[roomIndex].room == "study") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r1c1";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r3c2";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r0c4";
          }
        }
        if (roomContent[roomIndex].room == "hall") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r4c11";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r1c10";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r1c14";
          }
        }
        if (roomContent[roomIndex].room == "lounge") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r4c22";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r1c18";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r0c23";
          }
        }
        if (roomContent[roomIndex].room == "library") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r7c1";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r6c5";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r9c6";
          }
        }
        if (roomContent[roomIndex].room == "billiard") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r12c1";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r15c1";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r16c3";
          }
        }
        if (roomContent[roomIndex].room == "dining") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r13c18";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r15c19";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r15c20";
          }
        }
        if (roomContent[roomIndex].room == "conservatory") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r23c1";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r21c5";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r20c2";
          }
        }
        if (roomContent[roomIndex].room == "ballroom") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r21c12";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r17c8";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r23c10";
          }
        }
        if (roomContent[roomIndex].room == "kitchen") {
          if (roomContent[roomIndex].victim != "") {
            roomContent[roomIndex].victimPosition = "r19c21";
            roomContent[roomIndex].victimHealth = 10;
            roomContent[roomIndex].victimHealthMax = 10;
          }
          if (roomContent[roomIndex].weapon != "") {
            roomContent[roomIndex].weaponPosition = "r22c22";
          }
          if (roomContent[roomIndex].health != "") {
            roomContent[roomIndex].healthPosition = "r23c19";
          }
        }
      }
      var position = Math.floor(Math.random() * 8);
      if (position == 0) {
        position = "r0c7";
      } else if (position == 1) {
        position = "r0c16";
      } else if (position == 2) {
        position = "r7c23";
      } else if (position == 3) {
        position = "r17c23";
      } else if (position == 4) {
        position = "r23c14";
      } else if (position == 5) {
        position = "r23c9";
      } else if (position == 6) {
        position = "r18c0";
      } else if (position == 7) {
        position = "r11c0";
      } else if (position == 8) {
        position = "r4c0";
      }
      var message = "You're name is Sgt. Black, and you are trapped in the Clue House, which is now inhabitted by ghosts of the original inhabitants. Destroy the ghosts with weapons from the house, and you can escape. However, defeating the evil Dr. Brown won't be easy."
      var player = {position: position, 
                    weapon: "fists", 
                    level: 1, 
                    XP: 0, 
                    health: 10, 
                    healthMax: 10, 
                    style: {opacity: 1}, 
                    message: message};
      var row = position.substring(1, position.indexOf("c"));
      var col = position.substring(position.indexOf("c")+1,position.len);
      var top = -350 + (25 * row);
      var left = -400 + (25 * col);
      var hole = {style: {top: top, left: left}};
      if (left < -100) {
        left = 400;
      } else {
        left = 0;
      }
      var edgeLR = {style: {top: 0, left: left}};
      if (top < -100) {
        top = 400;
      } else {
        top = 0;
      }
      var edgeTB = {style: {top: top, left: 0}};
      var breaker = {flipped: "off"};
      return {
        roomContent: roomContent,
        player: player,
        hole: hole,
        edgeLR: edgeLR,
        edgeTB: edgeTB,
        breaker: breaker
      };
    },
  
    flipBreaker: function() {
      var breaker = this.state.breaker;
      if (breaker.flipped == "off") {
        breaker.flipped = "on";
      } else {
        breaker.flipped = "off";
      }
      this.setState({breaker: breaker});
    },
    
    moveDrBrown: function(newPos) {
      var roomObj = this.state.roomContent;
      var brownPos = roomObj[9].victimPosition;
      if (brownPos == "r14c12" && (newPos == "r9c10" || newPos == "r9c12" || newPos == "r10c11")) {
        brownPos = "r13c11";
      } else if (brownPos == "r13c11" && newPos != "r12c12") {
        brownPos = "r12c12";
      } else if (brownPos == "r12c12" && newPos != "r11c11") {
        brownPos = "r11c11";
      } else if (brownPos == "r11c11" && newPos != "r10c12") {
        brownPos = "r10c12";
      } else if (brownPos == "r10c12" && newPos != "r9c11") {
        brownPos = "r9c11";
      } else if (brownPos == "r9c11" && newPos != "r8c12") {
        brownPos = "r8c12";
      } else if (brownPos == "r8c12" && newPos != "r7c11") {
        brownPos = "r7c11";
        var player = this.state.player;
        player.message = <span>{"Oh, so sorry, but Dr. Brown just escaped, and he locked you in the cellar. He also just called the police. By the way, all those ghosts you killed... they were people and not ghost."}<br /><br />&nbsp;</span>
        this.setState({player: player});
      }
      roomObj[9].victimPosition = brownPos;
      this.setState({roomContent: roomObj});
    },
    
    attackVictim: function(newPos, oldPos) {
      if (this.refs[newPos].innerHTML.indexOf("weapon") != -1) return newPos;  // return newPos if position is a weapon
      if (this.refs[newPos].innerHTML.indexOf("sgtBlack") != -1) return newPos;  // return newPos if position is the player
      if (this.refs[newPos].innerHTML.indexOf("id=") == -1) return newPos;     // return newPos if position doesn't have a victim
      var roomObj = this.state.roomContent;
      var playerObj = this.state.player;
      var startOfVictim = this.refs[newPos].innerHTML.indexOf("id=")+4;
      var endOfVictim = this.refs[newPos].innerHTML.indexOf(" style", startOfVictim+1)-1;
      var victim = this.refs[newPos].innerHTML.substring(startOfVictim, endOfVictim);
      for (var i = 0; i < roomObj.length; i++) {
        if (roomObj[i].victim == victim) {
          var damage = Math.floor(Math.random() * 3);
          if (victim == "profPlum" || victim == "mrGreen" || victim == "drBrown") {
            damage += 2;
          } else if (victim == "missScarlett" || victim == "colMustard") {
            damage += 2;
          }
          playerObj.health -= damage;
          damage = Math.floor(Math.random() * 3);
          if (playerObj.weapon == "gun") {
            damage += 5;
          } else if (playerObj.weapon == "knife") {
            damage += 4;
          }  else if (playerObj.weapon == "candlestick" || playerObj.weapon == "leadpipe" || playerObj.weapon == "wrench") {
            damage += 3;
          } else if (playerObj.weapon == "rope") {
            damage += 2;
          } else {
            damage += 1;
          }
          if (playerObj.level > 4) {
            damage += 1;  // This is just to meet the user story requirement -- 1/10th damage per level rounded to nearest integer
          }
          roomObj[i].victimHealth -= damage;
          if (playerObj.health < 1) {
            playerObj.health = 0;
            if (roomObj[i].victim == "drBrown") {
              playerObj.message = <span>{"You got past everyone except for Dr. Brown. Maybe in another life you'll learn to handle yourself better."}<br /><br />{"YOU LOSE!!!"}<br />&nbsp;</span>
            } else if (roomObj[i].victim == "colMustard") {
              playerObj.message = <span>{"Col. Mustard is no slouch, and he just beat you senseless. In fact... you're dead."}<br /><br />{"YOU LOSE!!!"}<br />&nbsp;</span>
            } else if (roomObj[i].victim == "missScarlett") {
              playerObj.message = <span>{"Miss Scarlett just took you out. You didn't know she was trained on \"The Farm\" in Quantico, did you?"}<br /><br />{"YOU LOSE!!!"}<br />&nbsp;</span>
            } else if (roomObj[i].victim == "mrGreen") {
              playerObj.message = <span>{"Mr. Green may be one fat old dude, but he was still bad enough to put an end to you."}<br /><br />{"YOU LOSE!!!"}<br /></span>
            } else if (roomObj[i].victim == "profPlum") {
              playerObj.message = <span>{"Prof. Plum may look like a dandy, but he managed to eradicate, immolate, and obliterate you."}<br /><br />{"YOU LOSE!!!"}<br />&nbsp;</span>
            } else if (roomObj[i].victim == "mrsPeacock") {
              playerObj.message = <span>{"Oh, that's just embarassing! Mrs. Peacock just ended your life. Absolutely pathetic."}<br /><br />{"YOU LOSE!!!"}<br />&nbsp;</span>
            } else if (roomObj[i].victim == "mrsWhite") {
              playerObj.message = <span>{"You lost to Mrs. White? How on earth could you let that happen? You're a straight up painsy."}<br /><br />{"YOU LOSE!!!"}<br />&nbsp;</span>
            }
          }
          if (roomObj[i].victimHealth < 1) {
            if (roomObj[i].victim == "colMustard") {
              playerObj.message = <span>{"You killed Col. Mustard with a "}{playerObj.weapon}{" in the "}{roomObj[i].room}{"."}<br /><br />{"Nice job!"}<br /><br />&nbsp;</span>
              playerObj.XP += 500;
            } else if (roomObj[i].victim == "missScarlett") {
              playerObj.message = <span>{"You killed Miss Scarlett with a "}{playerObj.weapon}{" in the "}{roomObj[i].room}{"."}<br /><br />{"Nice job!"}<br /><br />&nbsp;</span>
              playerObj.XP += 500;
            } else if (roomObj[i].victim == "mrGreen") {
              playerObj.message = <span>{"You killed Mr. Green with a "}{playerObj.weapon}{" in the "}{roomObj[i].room}{"."}<br /><br />{"Nice job!"}<br /><br />&nbsp;</span>
              playerObj.XP += 250;
            } else if (roomObj[i].victim == "profPlum") {
              playerObj.message = <span>{"You killed Prof. Plum with a "}{playerObj.weapon}{" in the "}{roomObj[i].room}{"."}<br /><br />{"Nice job!"}<br /><br />&nbsp;</span>
              playerObj.XP += 250;
            } else if (roomObj[i].victim == "mrsPeacock") {
              playerObj.message = <span>{"You killed Mrs. Peacock with a "}{playerObj.weapon}{" in the "}{roomObj[i].room}{"."}<br /><br />{"Nice job!"}<br /><br />&nbsp;</span>
              playerObj.XP += 100;
            } else if (roomObj[i].victim == "mrsWhite") {
              playerObj.message = <span>{"You killed Mrs. White with a "}{playerObj.weapon}{" in the "}{roomObj[i].room}{"."}<br /><br />{"Nice job!"}<br /><br />&nbsp;</span>
              playerObj.XP += 100;
            } else if (roomObj[i].victim == "drBrown" && playerObj.health > 0) {
              playerObj.message = <span>{"CONGRATULATIONS!!!"}<br />{"YOU WIN!!!"}<br /><br /><br />&nbsp;</span>
              playerObj.XP += 1000;
            }
            roomObj[i].victim = "";
            roomObj[i].victimPosition = "";
            playerObj.level += 1;
          } else {
            newPos = oldPos;
          }
          playerObj.style.opacity = playerObj.health / playerObj.healthMax;
          roomObj[i].style.opacity = roomObj[i].victimHealth / roomObj[i].victimHealthMax;
        }
      }
      this.setState({roomContent: roomObj});
      this.setState({player: playerObj});
      return newPos;
    },
  
    updateWeapon: function(newPos) {
      if (this.refs[newPos].innerHTML.indexOf("weapon") == -1) return;  // return if position doesn't have a weapon
      var roomObj = this.state.roomContent;
      var startOfWeapon = this.refs[newPos].innerHTML.indexOf("id=")+4;
      var endOfWeapon = this.refs[newPos].innerHTML.indexOf(">", startOfWeapon+1)-1;
      var weapon = this.refs[newPos].innerHTML.substring(startOfWeapon, endOfWeapon);
      for (var i = 0; i < roomObj.length; i++) {
        if (roomObj[i].weapon == weapon) {
          roomObj[i].weapon = "";
          roomObj[i].weaponPosition = "";
        }
      }
      this.setState({roomContent: roomObj});
      var playerObj = this.state.player;
      playerObj.weapon = weapon;
      this.setState({player: playerObj});
    },
  
    updateHealth: function(newPos) {
      if (this.refs[newPos].innerHTML.indexOf("health") == -1) return;  // return if position doesn't have a health icon
      var roomObj = this.state.roomContent;
      var startOfHealth = this.refs[newPos].innerHTML.indexOf("id=")+4;
      var endOfHealth = this.refs[newPos].innerHTML.indexOf(">", startOfHealth+1)-1;
      var health = this.refs[newPos].innerHTML.substring(startOfHealth, endOfHealth);
      for (var i = 0; i < roomObj.length; i++) {
        if (roomObj[i].health == health) {
          roomObj[i].health = "";
          roomObj[i].healthPosition = "";
        }
      }
      this.setState({roomContent: roomObj});
      var playerObj = this.state.player;
      health = 6;
      playerObj.health += health;
      if (playerObj.health > playerObj.healthMax) {
        playerObj.health = playerObj.healthMax;
      }
      playerObj.style.opacity = playerObj.health / playerObj.healthMax;
      this.setState({player: playerObj});
    },
    
    handleKeyPress: function(event) {
      if (this.state.player.health == 0) {
        event.preventDefault();
        return;
      }
      const KEY_LEFT = 37;
      const KEY_UP = 38;
      const KEY_RIGHT = 39;
      const KEY_DOWN = 40;
      var newPos = "";
      if (event.which == KEY_LEFT) {
        var playerObj = this.state.player;
        var col = Number(playerObj.position.substring(playerObj.position.indexOf("c")+1,playerObj.position.length)) != 0 ?
            Number(playerObj.position.substring(playerObj.position.indexOf("c")+1,playerObj.position.length))-1 : 0;
        var currClasses = this.refs[playerObj.position].className;
        newPos = playerObj.position.substring(0,playerObj.position.indexOf("c")+1) + col;
        var newClasses = this.refs[newPos].className;
        if (newClasses.indexOf("borderRight") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
        } else if (currClasses.indexOf("borderLeft") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
          if (playerObj.position == "r0c0") {  //secret door
            newPos = "r23c23";
          } else if (playerObj.position == "r23c0") {  //secret door
            newPos = "r0c23";
          } 
        }
      } else if (event.which == KEY_UP) {
        var playerObj = this.state.player;
        var row = Number(playerObj.position.substring(1,playerObj.position.indexOf("c"))) != 0 ?
            Number(playerObj.position.substring(1,playerObj.position.indexOf("c")))-1 : 0;
        var currClasses = this.refs[playerObj.position].className;
        newPos = "r" + row + playerObj.position.substring(playerObj.position.indexOf("c"),playerObj.position.length);
        var newClasses = this.refs[newPos].className;
        if (newClasses.indexOf("borderBottom") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
        } else if (currClasses.indexOf("borderTop") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
          if (playerObj.position == "r0c0") {  //secret door
            newPos = "r23c23";
          } else if (playerObj.position == "r0c23") {  //secret door
            newPos = "r23c0";
          } 
        }
      } else if (event.which == KEY_RIGHT) {
        var playerObj = this.state.player;
        var col = Number(playerObj.position.substring(playerObj.position.indexOf("c")+1,playerObj.position.length)) != 23 ?
            Number(playerObj.position.substring(playerObj.position.indexOf("c")+1,playerObj.position.length))+1 : 23;
        var currClasses = this.refs[playerObj.position].className;
        newPos = playerObj.position.substring(0,playerObj.position.indexOf("c")+1) + col;
        var newClasses = this.refs[newPos].className;
        if (newClasses.indexOf("borderLeft") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
        } else if (currClasses.indexOf("borderRight") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
          if (playerObj.position == "r0c23") {  //secret door
            newPos = "r23c0";
          } else if (playerObj.position == "r23c23") {  //secret door
            newPos = "r0c0";
          } 
        }
      } else if (event.which == KEY_DOWN) {
        var playerObj = this.state.player;
        var row = Number(playerObj.position.substring(1,playerObj.position.indexOf("c"))) != 23 ?
            Number(playerObj.position.substring(1,playerObj.position.indexOf("c")))+1 : 23;
        var currClasses = this.refs[playerObj.position].className;
        newPos = "r" + row + playerObj.position.substring(playerObj.position.indexOf("c"),playerObj.position.length);
        var newClasses = this.refs[newPos].className;
        if (newClasses.indexOf("borderTop") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
        } else if (currClasses.indexOf("borderBottom") != -1) {
          newPos = playerObj.position;  // don't walk thru walls
          if (playerObj.position == "r23c0") {  //secret door
            newPos = "r0c23";
          } else if (playerObj.position == "r23c23") {  //secret door
            newPos = "r0c0";
          } 
        }
      } 
      if (event.which == KEY_LEFT || event.which == KEY_UP || event.which == KEY_RIGHT || event.which == KEY_DOWN) {
        this.updateWeapon(newPos);
        this.updateHealth(newPos);
        newPos = this.attackVictim(newPos, playerObj.position);
        playerObj.position = newPos;
        this.moveDrBrown(newPos);
        this.setState({player: playerObj});
        event.preventDefault();
        var position = this.state.player.position;
        var row = position.substring(1, position.indexOf("c"));
        var col = position.substring(position.indexOf("c")+1,position.len);
        var top = -350 + (25 * row);
        var left = -400 + (25 * col);
        var hole = this.state.hole
        hole.style = {top: top, left: left};
        this.setState({hole: hole});
        if (left < -100) {
          left = 400;
        } else {
          left = 0;
        }
        var edgeLR = {style: {top: 0, left: left}};
        this.setState({edgeLR: edgeLR});
        if (top < -25) {
          top = 400;
        } else {
          top = 0;
        }
        var edgeTB = {style: {top: top, left: 0}};
        this.setState({edgeTB: edgeTB});
      }
    },
    
    componentDidMount: function() {
      this.focusDiv();
    },
    
    componentDidUpdate: function() {
      if(this.state.active) {
        this.focusDiv();
      }
    },
    
    focusDiv: function() {
      this.refs.wrapper.focus();
    },
    
    house: function () {
      var floor = [];
      var key = "";
      var item = "";
      var classNames = "";
      for (var row = 0; row < 24; row++) {
        for (var col = 0; col < 24; col++) {
          key = "r" + row + "c" + col;
          classNames = "square";
          if (row == 0) {
            classNames += " borderTop";
          }
          if (col == 23) {
            classNames += " borderRight";
          }
          if (row == 23) {
            classNames += " borderBottom";
          }
          if (col == 0) {
            classNames += " borderLeft clear";
          }
          // Study
          if (row == 3 && col == 6) {
            classNames += " borderRight";
          } else if (row < 4 && col == 6) {
            classNames += " borderRight";
          } else if (row == 3 && col < 6) {
            classNames += " borderBottom";
          }
          // Hall
          if (row == 6 && col == 9) {
            classNames += " borderLeft";
            classNames += " borderBottom";
          } else if (row == 6 && col == 14) {
            classNames += " borderRight";
            classNames += " borderBottom";
          } else if (row < 7 && col == 9 && row != 4) {
            classNames += " borderLeft";
          } else if (row < 7 && col == 14) {
            classNames += " borderRight";
          } else if (row == 6 && (col == 10 || col == 13)) {
            classNames += " borderBottom";
          } 
          // Lounge
          if (row == 5 && col == 17) {
            classNames += " borderLeft";
          } else if (row < 6 && col == 17) {
            classNames += " borderLeft";
          } else if (row == 5 && col > 17) {
            classNames += " borderBottom";
          } 
          // Library
          if (row == 6 && col == 5) {
            classNames += " borderTop";
            classNames += " borderRight";
          } else if (row == 7 && col == 6) {
            classNames += " borderTop";
            classNames += " borderRight";
          } else if (row == 9 && col == 6) {
            classNames += " borderBottom";
            classNames += " borderRight";
          } else if (row == 10 && col == 5) {
            classNames += " borderBottom";
            classNames += " borderRight";
          } else if (row == 6 && col < 5) {
            classNames += " borderTop";
          } else if (row == 10 && (col < 3 || col == 4)) {
            classNames += " borderBottom";
          } 
          // Billiard Room
          if (row == 12 && col == 5) {
            classNames += " borderTop";
            classNames += " borderRight";
          } else if (row == 16 && col == 5) {
            classNames += " borderBottom";
            classNames += " borderRight";
          } else if (row == 16 && col < 5) {
            classNames += " borderBottom";
          } else if (row == 12 && col < 5 && col != 1) {
            classNames += " borderTop";
          } else if ((row == 13 || row == 15) && col == 5) {
            classNames += " borderRight";
          }
          // Cellar
          if (row == 8 && col == 9) {
            classNames += " borderLeft";
            classNames += " borderTop";
          } else if (row == 8 && col == 13) {
            classNames += " borderRight";
            classNames += " borderTop";
          } else if (row == 14 && col == 9) {
            classNames += " borderLeft";
            classNames += " borderBottom";
          } else if (row == 14 && col == 13) {
            classNames += " borderRight";
            classNames += " borderBottom";
          } else if (row == 8 && (col > 9 && col < 13)) {
            if (this.state.player.level > 6 && col == 11 && this.state.roomContent[9].victimPosition != "r7c11") {
              classNames += " borderLeft";
            } else {
              classNames += " borderTop";
            }
          } else if (row == 14 && (col > 9 && col < 13)) {
            classNames += " borderBottom";
          } else if ((row > 8 && row < 14) && col == 9) {
            classNames += " borderLeft";
          } else if ((row > 8 && row < 14) && col == 13) {
            classNames += " borderRight";
          }
          // Dining Room
          if (row == 9 && col == 16) {
            classNames += " borderLeft";
            classNames += " borderTop";
          } else if (row == 14 && col == 16) {
            classNames += " borderLeft";
            classNames += " borderBottom";
          } else if (row == 15 && col == 19) {
            classNames += " borderLeft";
            classNames += " borderBottom";
          } else if (row == 9 && col > 17) {
            classNames += " borderTop";
          } else if ((row == 10 || row == 11 || row == 13) && col == 16) {
            classNames += " borderLeft";
          } else if (row == 14 && (col == 17 || col == 18)) {
            classNames += " borderBottom";
          } else if (row == 15 && col > 19) {
            classNames += " borderBottom";
          }
          // Conservatory
          if (row == 19 && col < 5) {
            classNames += " borderTop";
          } else if (row == 20 && col == 5) {
            classNames += " borderRight";
            classNames += " borderTop";
          } else if (row > 20 && col == 5) {
            classNames += " borderRight";
          }
          // Ballroom
          if (row == 17 && col == 8) {
            classNames += " borderLeft";
            classNames += " borderTop";
          } else if (row == 22 && col == 8) {
            classNames += " borderLeft";
            classNames += " borderBottom";
          } else if (row == 17 && col == 15) {
            classNames += " borderRight";
            classNames += " borderTop";
          } else if (row == 22 && col == 15) {
            classNames += " borderRight";
            classNames += " borderBottom";
          } else if (row == 17 && (col > 9 && col <14)) {
            classNames += " borderTop";
          } else if ((row == 18 || row == 20 || row == 21) && col == 8) {
            classNames += " borderLeft";
          } else if ((row == 18 || row == 20 || row == 21) && col == 15) {
            classNames += " borderRight";
          } else if (row == 22 && (col == 9)) {
            classNames += " borderBottom";
          } else if (row == 23 && (col == 10)) {
            classNames += " borderLeft";
          } else if (row == 22 && (col == 14)) {
            classNames += " borderBottom";
          } else if (row == 23 && (col == 13)) {
            classNames += " borderRight";
          }
          // Kitchen
          if (row == 18 && col == 18) {
            classNames += " borderLeft";
            classNames += " borderTop";
          } else if (row == 18 && col > 19) {
            classNames += " borderTop";
          } else if (row > 18 && col == 18) {
            classNames += " borderLeft";
          }
          var doneFlag = false;
          for (var i = 0; i < 10; i++) {
            if (key == this.state.roomContent[i].victimPosition) {
              item = <div key={key} ref={key} className={classNames}>
                       <div key={this.state.roomContent[i].victim} 
                            id={this.state.roomContent[i].victim}
                            style={this.state.roomContent[i].style}>
                       </div>
                     </div>;
              floor.push(item);
              doneFlag = true;
            }
            if (key == this.state.roomContent[i].weaponPosition) {
              item = <div key={key} ref={key} className={classNames}>
                       <abbr title={this.state.roomContent[i].weapon}>
                         <div className="weapon" key={this.state.roomContent[i].weapon} 
                           id={this.state.roomContent[i].weapon}>
                           {this.state.roomContent[i].weapon.substring(0,1).toUpperCase()}
                         </div>
                       </abbr>
                     </div>;
              floor.push(item);
              doneFlag = true;
            }
            if (key == this.state.roomContent[i].healthPosition &&
               this.state.roomContent[i].health.substring(6,7) < this.state.player.level) {
               item = <div key={key} ref={key} className={classNames}>
                        <div className="health" key={this.state.roomContent[i].health} 
                          id={this.state.roomContent[i].health}>&hearts;</div>
                      </div>;
              floor.push(item);
              doneFlag = true;
            }
          }
          if (key == this.state.player.position) {
            item = <div key={key} ref={key} className={classNames}>
                     <div key="sgtBlack" 
                          id="sgtBlack" 
                          onKeyPress={this.handleKeyPress} 
                          style={this.state.player.style}>
                     </div>
                   </div>;
            floor.push(item);
            doneFlag = true;
          }
          if (doneFlag == false) {
            item = <div key={key} ref={key} className={classNames}></div>;
            floor.push(item);
          }
        }
      }
      item = <div key="study" id="study" className="label">STUDY</div>
      floor.push(item);
      item = <div key="hall" id="hall" className="label">HALL</div>
      floor.push(item);
      item = <div key="lounge" id="lounge" className="label">LOUNGE</div>
      floor.push(item);
      item = <div key="library" id="library" className="label">LIBRARY</div>
      floor.push(item);
      item = <div key="billiard" id="billiard" className="label">BILLIARD<br />ROOM</div>
      floor.push(item);
      item = <div key="cellar" id="cellar" className="label">CELLAR</div>
      floor.push(item);
      item = <div key="dining" id="dining" className="label">DINING<br />ROOM</div>
      floor.push(item);
      item = <div key="conservatory" id="conservatory" className="label">CONSERV-<br />ATORY</div>
      floor.push(item);
      item = <div key="ballroom" id="ballroom" className="label">BALLROOM</div>
      floor.push(item);
      item = <div key="kitchen" id="kitchen" className="label">KITCHEN</div>
      floor.push(item);
      return <div>{floor.map((line) => { return line;})}</div>;
    },
    
    breakerOn: function () {
      return (
        <div tabIndex="0" id="wrapper" ref="wrapper" onfocusout={this.focusDiv} onKeyDown={this.handleKeyPress}>
          <div className="background">
            {this.house()}
          </div>
          <div id="rightSide">
            <div id="innerWrap">
              <h1>The Haunted Clue House</h1>
              <span className="hr"><hr /></span>
              <h3>Player Name: <span className="normalText">Sgt. Black</span></h3>
              <h3>Health: <span className="normalText">{this.state.player.health} out of {this.state.player.healthMax} max.</span></h3>
              <div className="width100">
                <h3 className="alignLeft">Level: <span className="normalText">{this.state.player.level}</span></h3>
                <h3 className="alignRight">XP: <span className="normalText">{this.state.player.XP}</span></h3>
              </div>
              <div className="width100">
                <h3 className="alignLeft">Weapon: <span className="normalText">{this.state.player.weapon}</span></h3>
                <button className="alignRight" onClick={this.flipBreaker}>Flip Breaker</button>
              </div>
              <br />&nbsp;
              <span className="hr"><hr /></span>
              <h3><span className="normalText">{this.state.player.message}</span></h3>
            </div>
          </div>
        </div>
      );
    },
    
    breakerOff: function () {
      return (
        <div tabIndex="0" id="wrapper" ref="wrapper" onfocusout={this.focusDiv} onKeyDown={this.handleKeyPress}>
          <div className="background">
            {this.house()}
            <div className="hole" style={this.state.hole.style}></div>
            <div className="edgeLR" style={this.state.edgeLR.style}></div>
            <div className="edgeTB" style={this.state.edgeTB.style}></div>
          </div>
          <div id="rightSide">
            <div id="innerWrap">
              <h1>The Haunted Clue House</h1>
              <span className="hr"><hr /></span>
              <h3>Player Name: <span className="normalText">Sgt. Black</span></h3>
              <h3>Health: <span className="normalText">{this.state.player.health} out of {this.state.player.healthMax} max.</span></h3>
              <div className="width100">
                <h3 className="alignLeft">Level: <span className="normalText">{this.state.player.level}</span></h3>
                <h3 className="alignRight">XP: <span className="normalText">{this.state.player.XP}</span></h3>
              </div>
              <div className="width100">
                <h3 className="alignLeft">Weapon: <span className="normalText">{this.state.player.weapon}</span></h3>
                <button className="alignRight" onClick={this.flipBreaker}>Flip Breaker</button>
              </div>
              <br />&nbsp;
              <span className="hr"><hr /></span>
              <h3><span className="normalText">{this.state.player.message}</span></h3>
            </div>
          </div>
        </div>
      );
    },
    
    render() {
      if (this.state.breaker.flipped == "on") {
        return this.breakerOn();
      } else {
        return this.breakerOff();
      }
    }
  });
  
  ReactDOM.render(
    <ClueHouse />,
    document.getElementById('root')
  );