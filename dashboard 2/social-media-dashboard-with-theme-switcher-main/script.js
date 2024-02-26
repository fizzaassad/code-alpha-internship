let darkModeSwitch = document.getElementById("switch");
let darkModeSwitchContainer = document.getElementsByClassName("switch-container")[0];
let darkModeMessage = document.getElementById("switch-message");
let titleHeaders = document.getElementsByClassName("title-header");
let totalFollowersHeader = document.getElementsByClassName("total-followers-header")[0];
let followerCards = document.getElementsByClassName("follower-card");
let socialMediaHandles = document.getElementsByClassName("sm-handle");
let followerCountNumbers = document.getElementsByClassName("follower-count-number");
let followerCountText = document.getElementsByClassName("follower-count-text");
let metricCards = document.getElementsByClassName("metric-card");
let metricHeaders = document.getElementsByClassName("metric-header");
let metricNumber = document.getElementsByClassName("metric-number");
let topHeaderContainer = document.getElementsByClassName("top-header-container")[0];


darkModeSwitch.addEventListener("click", function() {
  function checkList() {
    let i = 0;
    for (i = 0; i < darkModeSwitch.classList.length; i++) {
      if (darkModeSwitch.classList[i] === "move-switch") {
        return true;
      }
    }
    return false;
  }

  if (checkList()) {
    darkModeSwitchContainer.classList.add("dark-mode-switch-bg");
    darkModeSwitchContainer.classList.remove("light-mode-switch-bg");
    darkModeSwitch.classList.remove("move-switch");
    darkModeSwitch.classList.add("reset-switch");
    darkModeMessage.textContent = "Dark Mode";
    setTimeout(function() {
      darkModeSwitch.classList.remove("reset-switch");
    }, 500);
  } else {
    darkModeSwitch.classList.add("move-switch");
    darkModeMessage.textContent = "Light Mode";
    darkModeSwitchContainer.classList.remove("dark-mode-switch-bg");
    darkModeSwitchContainer.classList.add("light-mode-switch-bg");
  }

  setLightMode();
})

function setLightMode() {
  if (document.body.classList[0] === "dark-bg") {
    document.body.classList.remove("dark-bg");
    document.body.classList.add("light-bg");
    totalFollowersHeader.classList.remove("dark-secondary-text");
    totalFollowersHeader.classList.add("light-secondary-text");
    let i = 0;
    for (i = 0; i < titleHeaders.length; i++) {
      titleHeaders[i].classList.remove("dark-main-text");
      titleHeaders[i].classList.add("light-main-text");
    }
    for (i = 0; i < followerCards.length; i++) {
      followerCards[i].classList.remove("dark-card-bg");
      followerCards[i].classList.add("light-card-bg");
    }
    for (i = 0; i < socialMediaHandles.length; i++) {
      socialMediaHandles[i].classList.remove("dark-secondary-text");
      socialMediaHandles[i].classList.add("light-secondary-text");
    }
    for (i = 0; i < followerCountNumbers.length; i++) {
      followerCountNumbers[i].classList.remove("dark-main-text");
      followerCountNumbers[i].classList.add("light-main-text");
    }
    for (i = 0; i < followerCountText.length; i++) {
      followerCountText[i].classList.remove("dark-secondary-text");
      followerCountText[i].classList.add("light-secondary-text");
    }
    for (i = 0; i < metricCards.length; i++) {
      metricCards[i].classList.remove("dark-card-bg");
      metricCards[i].classList.add("light-card-bg");
    }
    for (i = 0; i < metricHeaders.length; i++) {
      metricHeaders[i].classList.remove("dark-secondary-text");
      metricHeaders[i].classList.add("light-secondary-text");
    }
    for (i = 0; i < metricNumber.length; i++) {
      metricNumber[i].classList.remove("dark-main-text");
      metricNumber[i].classList.add("light-main-text");
    }
  } else {
    document.body.classList.add("dark-bg");
    document.body.classList.remove("light-bg");
    totalFollowersHeader.classList.add("dark-secondary-text");
    totalFollowersHeader.classList.remove("light-secondary-text");
    let i = 0;
    for (i = 0; i < titleHeaders.length; i++) {
      titleHeaders[i].classList.add("dark-main-text");
      titleHeaders[i].classList.remove("light-main-text");
    }
    for (i = 0; i < followerCards.length; i++) {
      followerCards[i].classList.add("dark-card-bg");
      followerCards[i].classList.remove("light-card-bg");
    }
    for (i = 0; i < socialMediaHandles.length; i++) {
      socialMediaHandles[i].classList.add("dark-secondary-text");
      socialMediaHandles[i].classList.remove("light-secondary-text");
    }
    for (i = 0; i < followerCountNumbers.length; i++) {
      followerCountNumbers[i].classList.add("dark-main-text");
      followerCountNumbers[i].classList.remove("light-main-text");
    }
    for (i = 0; i < followerCountText.length; i++) {
      followerCountText[i].classList.add("dark-secondary-text");
      followerCountText[i].classList.remove("light-secondary-text");
    }
    for (i = 0; i < metricCards.length; i++) {
      metricCards[i].classList.add("dark-card-bg");
      metricCards[i].classList.remove("light-card-bg");
    }
    for (i = 0; i < metricHeaders.length; i++) {
      metricHeaders[i].classList.add("dark-secondary-text");
      metricHeaders[i].classList.remove("light-secondary-text");
    }
    for (i = 0; i < metricNumber.length; i++) {
      metricNumber[i].classList.add("dark-main-text");
      metricNumber[i].classList.remove("light-main-text");
    }
  }
}

let x = window.matchMedia("(max-width: 375px)");

function addHorizontalLine(x) {
  if (x.matches) {
    let line = document.createElement("div");
    line.classList.add("line-style");
    topHeaderContainer.appendChild(line);
  } else {
    if (topHeaderContainer.children.length === 3) {
      topHeaderContainer.removeChild(topHeaderContainer.lastChild);
    }
  }
}
addHorizontalLine(x);
x.addListener(addHorizontalLine);
