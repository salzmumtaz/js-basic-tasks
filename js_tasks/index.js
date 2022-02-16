let taskList = [];
let preSelectedId = "";
const idIframe = document.getElementById("iframe");
const tagList = document.getElementsByTagName("li");
const getData = async () => {
  const api = `http://localhost:3000/users`;
  let response = await fetch(api);
  response = await response.json();
  return response;
};
getData().then((data) => {
  taskList = data;
  preSelectedId = taskList[0].id;
  searchTask();
  createNav(taskList, preSelectedId);
  homePage(preState);
});
const createNav = (taskList, selectedId) => {
  const list = document.getElementById("tasks");
  const navList = taskList.map((task) => {
    const { id, name } = task;
    return id == selectedId
      ? `<li class="clicked" id="${id}"> ${name}</li>`
      : `<li id="${id}"> ${name}</li>`;
  });
  list.innerHTML = navList.join(" ");
  changePath();
};

const searchTask = () => {
  const searchForm = document.querySelector("form");
  searchForm.addEventListener("keyup", (e) => {
    let searchField = e.target.value;
    searchField = searchField.trim().split(" ");
    let thirdIf = "1";
    if (searchField) {
      // let filteredArray = taskList.filter(
      //   (item) =>
      //     String(item.name).includes(searchField) ||
      //     String(item.name).startsWith(searchField)
      // );

      // const filteredArray = taskList.filter((value) =>
      //   value.name
      //     .split(" ")
      //     .some((token) => token.toLowerCase().startsWith(searchField))
      // );

      // let filteredSearch = (value) => {
      //   // const reg = `(?:^|[ ])${value}`;
      //   const regex = new RegExp(`(?:^|[ ])${value}`);
      //   const result = taskList.filter((v) => regex.test(v.name));
      //   return result;
      // };
      //
      const filteredArray = (function (value) {
        const regex = new RegExp(`(?:^|[ ])${value}`);
        const result = taskList.filter((v) => regex.test(v.name));
        return result;
      })(searchField);

      //
      // const filteredArray = filteredSearch(searchField);
      createNav(filteredArray, preSelectedId);
      // myIframeWindow(filteredArray);
      if (filteredArray.length == 1) {
        idIframe.src = filteredArray[0].path;

        preSelectedId = filteredArray[0].id;

        createNav(filteredArray, preSelectedId);
      } else if (filteredArray.length < 1) {
        // idIframe.src = filteredArray[0].path;
        // idIframe.classList.add("clicked");
      }
      thirdIf = "2";
      // homePage(preState);
      // createNav(filteredArray);
    } else if (filteredArray.length == 0) {
      // createNav(taskList);
      // homePage(preState);
    }
  });
};

let preState = "1";
const changePath = () => {
  const getList = document.querySelectorAll("li");
  getList.forEach((list) => {
    list.addEventListener("click", (event) => {
      const removeClass = tagList;
      const pathId = event.target.getAttribute("id");
      for (let number of removeClass) {
        number.classList.remove("clicked");
      }
      event.target.classList.add("clicked");
      const task = taskList.find((x) => x.id == pathId);
      idIframe.src = task.path;
      preSelectedId = task.id;
    });
  });
};

const homePage = (state) => {
  if (state >= 1) {
    let homeFrame = idIframe;
    const homeIframe = taskList[0].path;
    homeFrame.src = homeIframe;
  }
};
//IFRAME LOCATION matching
// const myIframeWindow = (filteredArray) => {
//   const iframeWin = idIframe;
//   const iframeWindow = tagList;
//   const myHover = iframeWin.contentDocument.title;
//   console.log(myHover);
//   if (filteredArray.length == 1) {
//     for (let number of iframeWindow) {
//       number.classList.add("clicked");
//     }
//   } else {
//     for (let number of iframeWindow) {
//       if (myHover == number.innerText) {
//         number.classList.add("clicked");
//       }
//     }
//   }
// };
