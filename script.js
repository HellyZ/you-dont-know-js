// get the aprent element
const booksContainer = document.querySelector(".books");
const li = document.createElement("li");
// function for getting the book number value from the element
function getBookNumber(ele) {
  return Number(ele.querySelector("a").textContent.trim()[6]) || 0;
}

function sortElements(parentEl) {
  Array.from(parentEl.children)
    .sort(function (a, b) {
      return getBookNumber(a) - getBookNumber(b);
    })
    .forEach(function (ele) {
      parentEl.appendChild(ele);
    });
}

sortElements(booksContainer);

// Заменить картинку заднего фона на другую из папки image
const body = document.querySelector("body");
const changeBackgroundImg = function (imgSource) {
  return (body.style.background = `url(${imgSource})`);
};
changeBackgroundImg("./image/you-dont-know-js.jpg");

// Удалить рекламу со страницы
const promout = document.querySelector(".adv");
promout.remove();

// Fix title
const a = booksContainer.children[2].querySelector("a");
a.text = "Книга 3. this и Прототипы Объектов";

// Sort books 2, 5 chapters
function sortChapters(bookEl) {
  let parts = bookEl.querySelector("ul");
  Array.from(parts.children)
    .slice(2)
    .filter((el) => el.innerText.startsWith("Глава"))
    .sort(function (a, b) {
      return Number(a.innerText[6]) - Number(b.innerText[6]);
    })
    .forEach(function (ele) {
      parts.appendChild(ele);
    });

  Array.from(parts.children)
    .slice(2)
    .filter((el) => el.innerText.startsWith("Приложение"))
    .sort((a, b) => a.innerText.localeCompare(b.innerText))
    .forEach(function (ele) {
      parts.appendChild(ele);
    });
}

sortChapters(booksContainer.children[1]);
sortChapters(booksContainer.children[4]);
//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

li.appendChild(document.createTextNode("Глава 8: За пределами ES6"));
booksContainer.children[5].children[1].appendChild(li);
sortChapters(booksContainer.children[5]);

