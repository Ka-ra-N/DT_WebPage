import "./style.css";
import TaskData from "./TaskData";

import home from "/home.png";
import binoculars from "/binoculars.png";
import bell from "/bell.png";
import tools from "/tools.png";
import threeDot from "/threeDots.png";
import info from "/info.png";
import arrow from "/arrow.png";
import bulb from "/bulb.png";
import comment from "/comment.png";
import chat from "/chat.png";
import design from "/design.png";
import greydot from "/grey-threedot.png";
import curveLeft from "/arrow-curve-left-down.png";
import curveRight from "/arrow-curve-left-right.png";
import arrowExpand from "/arrow-expand.png";
import paragraph from "/paragraph.png";

// Header Section

const infoHeading = document.querySelector(
  "main .heading-section-two-comps .info-about h3"
);
const infoDescription = document.querySelector(
  "main .heading-section-two-comps .info-about p"
);

infoHeading.textContent = TaskData[0].task_title;
infoDescription.textContent = TaskData[0].task_description;

const navUl = document.querySelector("nav ul");

const icons = [home, binoculars, tools, bell, threeDot];

icons.map((icon, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${icon}" alt="Icons">`;
  navUl.appendChild(li);
});

// Creating Cards

const cardContainer = document.querySelector(".cards-section");

function cardComponent(heading, description, content) {
  const card = document.createElement("div");
  card.className = "card box-shadow";

  const cardHeading = document.createElement("h3");
  cardHeading.className = "heading";
  cardHeading.innerHTML = `<p>${heading}</p> <img src="${info}" alt="Info icon" class="info-icon">`;

  const cardDescription = document.createElement("p");
  cardDescription.className = "description";
  cardDescription.innerHTML = `<strong>Description:</strong> ${description}`;

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardContent.innerHTML = content;

  card.appendChild(cardHeading);
  card.appendChild(cardDescription);
  card.appendChild(cardContent);

  return card;
}

const videoLink = TaskData[0].assets[0].asset_content;

// First Card
const video = `<iframe width="100%" height="315" src=${videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

// End of First Card

// Second Card

const categoryIcons = [bulb, chat, comment, design];

const ctIcon = categoryIcons.map((icon) => {
  return `<img src="${icon}" alt="Category icon">`;
});

const threadContent = `<div class="thread-container mt-3">
<h2 class="thread-heading"><img src="${arrow}" alt="Arrow icon"> Thread A</h2>
<div class="thread-main-content mt-5">
    <div class="sub-threads">
        <div class="sub-thread1">
            <h5>Sub Thread 1</h5>
            <textarea rows="3" placeholder="Enter text here"></textarea>
        </div>
        <div class="sub-thread2">
            <h5>Sub Interpretation 1</h5>
            <textarea rows="3" placeholder="Enter text here"></textarea>
        </div>
    </div>
    <div class="all-categories flex-between mt-3">
        <div class="category-icons">
            ${ctIcon.join(" ")}
        </div>

        <select>
            <option value="1">Select Category</option></select>
        <select>
            <option value="1">Select Process</option></select>
    </div>

    <button class="mt-3">
    + Sub-thread
    </button>

    <div class="thread-summary mt-3">
            <h5>Sub Thread 1</h5>
            <textarea rows="3" placeholder="Enter text here"></textarea>
        </div>
</div>
</div>`;


// End of Second Card

// Third Card

const menuItems = [
  "file",
  "edit",
  "view",
  "insert",
  "format",
  "tools",
  "table",
  "help",
];

const item = menuItems.map((item) => {
  return `<li>${item}</li>`;
});

const contentIcons = [curveRight, curveLeft, arrowExpand, paragraph, greydot];

const contentIcon = contentIcons.map((icon) => {
  return `<li><img src="${icon}" alt="Content icon"></li>`;
});

const thirdCardContent = `<div class="third-card-content">
    <div class="title">
        <h3>Title</h3>
        <textarea></textarea>
    </div>
    <div class="content mt-5">
        <h3>Content</h3>

        <div class="mt-3">
        <ul class="flex-between">
            ${item.join(" ")}
        </ul>
        
        <ul class="content-icons flex-gap">
            ${contentIcon.join(" ")}
        </ul>

        <textarea rows="5"></textarea>

        </div>

    </div>
</div>`;


// End of Third Card

// Fourth Card

const fourthCardContent = `<div class="fourth-card-content">
<div class="introduction content">
    <h2><img src="${arrow}" alt="Arrow icon">Introduction</h2>
    <p>The 4SA Method , How to bring a idea into progress ?</p>
    <div class="see-more-btn">
        <button>See More</button>
    </div>
</div>
<div class="thread-A content mt-5">
    <h2><img src="${arrow}" alt="Arrow icon">Thread A</h2>
    <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
    <div class="see-more-btn">
        <button>See More</button>
    </div>
</div>

<div class="example-content content">
    <h3>Example 1</h3>
    <p>You have a concept , How will you put into progress?</p>
</div>


</div>`;


// End of Fourth Card

// Creating Cards

const allCardsContent = [video, threadContent, thirdCardContent, fourthCardContent]; 

function creatingCards(title, description, content) {
  const card = cardComponent(title, description, content);
  cardContainer.appendChild(card);
}

for (let i = 0; i < TaskData[0].assets.length; i++) {
  const asset = TaskData[0].assets[i]
  const content = allCardsContent[i]
  creatingCards(asset.asset_title, asset.asset_description, content)
}

// End of Creating Cards

const leftPanelList = [
  "Technical Project Management",
  "Threadbuild",
  "Structure your Pointers",
  "4SA Method",
];
const panelListContainer = document.querySelector(".panel-list");

leftPanelList.map((item) => {
  const li = document.createElement("li");
  li.innerHTML = `${item}`;
  panelListContainer.appendChild(li);
});

const panelArrow = document.querySelector(".left-panel .panel-heading img");
panelArrow.addEventListener("click", () => {
  const leftPanel = document.querySelector(".left-panel");
  leftPanel.classList.toggle("opened");
});
