const content = [
  {
    img: "LearnSomethingNew.png",
    title: "Learn Something New",
    subTitle: "Many topics you can learn for free",
  },
  {
    img: "ShareTopics.png",
    title: "Wanna share your topic?",
    subTitle: "Many topics you can learn for free",
  },
  {
    img: "makeCv.png",
    title: "Make CV",
    subTitle: "Many topics you can learn for free",
  },
];
const Menu = [
  {
    link: "../Public/assets/icon/Tutorial.svg",
    text: "Tutorial",
  },
  {
    link: "../Public/assets/icon/CoursesTryOut.svg",
    text: "Try Out",
  },
  {
    link: "../Public/assets/icon/merch.svg",
    text: "Merchendise",
  },
];

document.getElementById("dialogContent").innerHTML = content
  .map((item, index) =>
    index === 1
      ? `<div class="flex " style="justify-content:center;padding:134px 0;" >
      <div style="justify-content: center;
      display: flex;
      text-align: center;
      flex-direction: column;
      font-family:Montserrat;
      padding-right:32px;
      width:40%;"
      >
      <div id="titleMenu"> ${item.title}</div>
      <div id="subTitleMenu" > ${item.subTitle}</div>
      <div>
      <button id="buttonMenu">Go To Page</button>
      </div>
      </div>
      <div id="MenuContent" style=" background-image: url(../Public/assets/${item.img});height:328px;width:436px;border-radius:20px"> </div>
            </div>`
      : `<div id="Halos${index}" class="flex my-5" style="justify-content:center;" >
            <div id="MenuContent" style=" background-image: url(../Public/assets/${item.img});height:328px;width:436px;border-radius:20px"> </div>
            <div style="justify-content: center;
            display: flex;
            text-align: center;
            flex-direction: column;
            font-family:Montserrat;
            padding-left:32px;
            width:40%;
            "
            >
            <div id="titleMenu"> ${item.title}</div>
            <div id="subTitleMenu" > ${item.subTitle}</div>
            <div>
            <button id="buttonMenu">Go To Page</button>
            </div>
            </div>
        </div>`
  )
  .join("");

document.getElementById("menuLittle").innerHTML = Menu.map(
  (items, index) =>
    `<div id="wrapperMenuLittle" style="border-radius=100%;">
          <div id="menuLittleContent" style=" background-image: url(${items.link})"> 
          </div>
          <div id="textMenuLittle" style=" padding-top:4px"> ${items.text}</div>
      </div>`
).join("");

const menuLittle = document.querySelectorAll("div#menuLittleContent");
const textMenuLittle = document.querySelectorAll("div#textMenuLittle");
console.log(menuLittle);
for (let i = 0; i < textMenuLittle.length; i++) {
  menuLittle[i].addEventListener("mouseover", () => {
    console.log("hover");
    textMenuLittle[i].style.borderBottom = "3px solid #2F3C67";


    textMenuLittle[i].style.color = "#303c66";
    menuLittle[i].addEventListener("mouseleave", () => {
      textMenuLittle[i].style.borderBottom = "none";
      textMenuLittle[i].style.color = "black";
    });
  });
}

const bodyBg=document.getElementById("bg")
const bgChange=()=>{
  bodyBg.style.backgroundImage="url('../../Public/assets/BackgroundRegister.png')"
  // setTimeout(()=>bodyBg.style.left="100%",3000)
  // setTimeout(()=>bodyBg.style.transition="left ease-in-out 3000ms")
  
}
bgChange()
