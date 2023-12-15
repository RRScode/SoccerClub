const showNavList = () => {
    var x = document.getElementById("navRow2");
    x.classList.toggle("hidden");
    x.classList.toggle("showing")
  }

  
  const photos = [
    {id: 0,
      src: "https://media.gettyimages.com/id/1178753201/photo/a-soccer-player-celebrates-a-goal.jpg?s=612x612&w=0&k=20&c=Poz1uIjc4opwPgOHBIPKOypQ0vpFmsAIQdrtd4zJ5Nc="
    },
    {id: 1,
      src: "https://media.gettyimages.com/id/486401400/photo/children-chasing-soccer-ball-during-a-match.jpg?s=612x612&w=0&k=20&c=Ti414DbxkG8PfV7tzzM-9CmdDh2CgWGQ-fxsU1RA2So="
    },
    {id: 2,
      src: "https://media.gettyimages.com/id/1049704540/photo/womens-soccer-player.jpg?s=612x612&w=0&k=20&c=GmqHxRfeD7Xjx0tJkvz4tGVy4jrCLByTiWyCnNr57ws="
    },
    { id: 3,
        src: "https://media.gettyimages.com/id/200332236-001/photo/young-male-football-player-on-pitch-low-section-night.jpg?s=612x612&w=0&k=20&c=6-DJ93_LZfBsG7Rg6Qz8Fo56P2_ud-PTT0Z5JZOZseU="
    },
    {id: 4,
      src: "https://media.gettyimages.com/id/470755388/photo/fans-at-stadium.jpg?s=612x612&w=0&k=20&c=sBX29xUllKFdvV3LkHAiHDNp9oDxMW40zfXxOIqU-Tg="
    },
    {id: 5,
      src: "https://media.gettyimages.com/id/497811221/photo/shooting-power.jpg?s=612x612&w=0&k=20&c=PRbtGKK-EL_x4U7-37cg_RRDxC4-o4KLfkhsCCOy4SI="
    },
    {id: 6,
      src: "https://media.gettyimages.com/id/557920441/photo/close-up-of-boy-kicking-soccer-ball.jpg?s=612x612&w=0&k=20&c=aj-_JUiBIc4_3Y8AxTCzCB34syyA9Ayq7Qy3OOwKYr8="
    },
    {id: 7,
      src: "https://media.gettyimages.com/id/860880772/photo/determined-bicycle-kick-on-a-soccer-match.jpg?s=612x612&w=0&k=20&c=kRENeJjZP9srSCpM4UwSQN45TLnADccYDfcdaUpVZHI="
    },
    {id: 8,
      src: "https://media.gettyimages.com/id/1360149924/photo/male-soccer-match.jpg?s=612x612&w=0&k=20&c=DgJUuO5kBdFfaHY679DWFDXIngw41GWoGNrvfBwCj4Q="
    },
    {id: 9,
      src: "https://media.gettyimages.com/id/1097457362/photo/skills-with-the-soccer-ball.jpg?s=612x612&w=0&k=20&c=Wl63eH1DJnDKzFQURwNCu807PWDCyThETfmd1Fl5b64="
    },
  ];


  let prev = document.getElementById("prevImg");
  prev.setAttribute("src", photos[0].src);
  let active = document.getElementById("activeImg");
  active.setAttribute("src", photos[1].src);
  let next = document.getElementById("nextImg"); 
  next.setAttribute("src", photos[2].src);


  let prevImg = () => {
    let prev = document.getElementById("prevImg");
    let active = document.getElementById("activeImg");
    let next = document.getElementById("nextImg"); 

    let prevImgObj = photos.find((x)=>{return(x.src == prev.src)});
    let activeImgObj = photos.find((x) => {return(x.src == active.src)});
    let nextImgObj = photos.find((x) => {return(x.src == next.src)});
    
    let newPrevPosition;
    let newActivePosition;
    let newNextPosition;
        
    if (prevImgObj.id == 0) {newPrevPosition = photos.length - 1}
      else {newPrevPosition = prevImgObj.id - 1};
    if (activeImgObj.id == 0) {newActivePosition = photos.length - 1}
      else{newActivePosition = activeImgObj.id -1};
    if (nextImgObj.id == 0){newNextPosition = photos.length - 1}
      else{newNextPosition = nextImgObj.id - 1};
      
      prev.setAttribute("src", photos[newPrevPosition].src);
      active.setAttribute("src", photos[newActivePosition].src);
      next.setAttribute("src", photos[newNextPosition].src);
      
    }

  let nextImg = () => {
    let prev = document.getElementById("prevImg");
    let active = document.getElementById("activeImg");
    let next = document.getElementById("nextImg"); 
        
    let prevImgObj = photos.find((x)=>{return(x.src == prev.src)});
    let activeImgObj = photos.find((x) => {return(x.src == active.src)});
    let nextImgObj = photos.find((x) => {return(x.src == next.src)});

    let newPrevPosition;
    let newActivePosition;
    let newNextPosition;
    
    if (prevImgObj.id == 9) {newPrevPosition = 0}
      else {newPrevPosition = prevImgObj.id + 1};
    if (activeImgObj.id == 9) {newActivePosition = 0}
      else{newActivePosition = activeImgObj.id + 1};
    if (nextImgObj.id == 9){newNextPosition = 0}
      else{newNextPosition = nextImgObj.id + 1};
      
      prev.setAttribute("src", photos[newPrevPosition].src);
      active.setAttribute("src", photos[newActivePosition].src);
      next.setAttribute("src", photos[newNextPosition].src);
  }
  
  let modalToggle = () => {
    let modal = document.getElementById("modal");
    if (modal.style.display = "block") {
      modal.style.display = "none";
    }
  }
  
  
  let modalImg = () => {
    let activeImg = document.getElementById("activeImg")
    let imgX = document.getElementById("imgX");
    let src = imgX.setAttribute("src", activeImg.src);
    let modal = document.getElementById("modal").style.display = "block";
  }
  
  