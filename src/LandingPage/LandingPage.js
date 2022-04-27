const content = [
  {
    img: "LearnSomethingNew.png",
    title: "Learn Something New",
    subTitle: "Many topics you can learn for free",
  },
  {
    img: "LearnSomethingNew.png",
    title: "Wanna share your topic?",
    subTitle: "Many topics you can learn for free",
  },
  {
    img: "LearnSomethingNew.png",
    title: "Make CV",
    subTitle: "Many topics you can learn for free",
  },
];

document.getElementById("dialogContent").innerHTML = content
  .map(
    (item) =>
      `<div>
                <div> ${item.img}</div>
            </div>`
  )
  .join("");
