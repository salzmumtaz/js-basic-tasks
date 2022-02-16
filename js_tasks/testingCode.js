let taskList = [];
const getData = async () => {
  const api = `http://localhost:3000/users`;
  let response = await fetch(api);
  response = await response.json();
  return response;
};
getData().then((data) => {
  taskList = data;
  searchTask();
  createNav(taskList);
  homePage(preState);

  // changePath();
});
const createNav = (taskList) => {
  const list = document.getElementById("tasks");
  const navList = taskList.map((task) => {
    const { id, name } = task;
    if (id == 1) {
      return `
    
  <li class="clicked" id="${id}">
   ${name}
  </li>
`;
    } else {
      return `
    
  <li id="${id}">
   ${name}
  </li>
`;
    }
  });
  list.innerHTML = navList.join(" ");
  changePath();
};

const idIframe = document.getElementById("iframe");

const searchTask = () => {
  const searchForm = document.querySelector("form");
  searchForm.addEventListener("keyup", (e) => {
    let searchField = e.target.value;
    searchField = searchField.trim().split(" ");
    let thirdIf = "1";
    if (searchField) {
      let filteredArray = taskList.filter(
        (item) =>
          String(item.name).startsWith(searchField) ||
          String(item.name).includes(searchField)
      );
      createNav(filteredArray);

      if (filteredArray.length == 1) {
        // console.log(filteredArray[0].path);
        idIframe.src = filteredArray[0].path;
        console.log(idIframe);
        idIframe.classList.add("clicked");
      } else {
        idIframe.src = filteredArray[0].path;
        idIframe.classList.add("clicked");
      }
      thirdIf = "2";
      // homePage(preState);
    } else if (thirdIf == 2) {
      // createNav(taskList);
      // homePage(preState);
    } else {
    }
  });
};
let preState = "1";

const changePath = () => {
  const getList = document.querySelectorAll("li");

  // // document.getElementById("iframe").src = "index.html";

  // let firstPage = getList[0];
  // let preState = "1";

  // const firstPage = (document.getElementById("iframe").src = "index.html");
  getList.forEach((list) => {
    list.addEventListener("click", (event) => {
      const removeClass = document.getElementsByTagName("li");
      // removeClass.classList.remove("clicked");
      const pathId = event.target.getAttribute("id");

      for (let number of removeClass) {
        number.classList.remove("clicked");
      }
      // preState = pathId;
      event.target.classList.add("clicked");
      const task = taskList.find((x) => x.id == pathId);

      idIframe.src = task.path;
    });
  });
};
const homePage = (id) => {
  // console.log(id);
  if (id >= 1) {
    let homeFrame = idIframe;
    const homeIframe = taskList[0].path;
    homeFrame.src = homeIframe;
    // homeFrame.src = "/task1/index.html";
    // homeFrame.classList.add("homeFrame");
    // let li = document.getElementsByTagName("li")[0];
  }
};

const myIframeWindow = (filteredArray) => {
  const iframeWin = document.getElementById("iframe");
  const iframeWindow = document.getElementsByTagName("li");
  const myHover = iframeWin.contentWindow.document.title;
  console.log(myHover);
  if (filteredArray.length == 1) {
    for (let number of iframeWindow) {
      number.classList.add("clicked");
    }
  } else {
    for (let number of iframeWindow) {
      console.log(number.innerText);
      if (myHover == number.innerText) {
        number.classList.add("clicked");
        console.log("class added");
      }
    }
  }

  // for (let number of iframeWindow) {
  //   console.log(number.innerText);
  //   if (myHover == number.innerText) {
  //     number.classList.add("clicked");
  //     console.log("class added");
  //   }
  // }
};
