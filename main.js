// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");

// btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement - Test The Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was Hardcore!";
    charImgEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImgEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImgEl.src = "img/monkey.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "So that was 'stealth mode' huh?";
    charImgEl.src = "img/crane.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else if (name === "boss wolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML =
      "I'll tell you what's gonna be yours: my fist in your plush, cuddly, super-soft face!";
    charImgEl.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "The only hero in this town is a dead one!";
    charImgEl.src = "img/croc.png";
  } else if (name === "kai" || name === "the collector") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "The Master of Pain. Beast of Vengeance. Maker of Widows.";
    charImgEl.src = "img/kai.png";
  } else if (name === "mr ping" || name === "po's dad") {
    charNameEl.innerHTML = "Mr Ping";
    charQuoteEl.innerHTML =
      "The secret ingredient of my Secret Ingredient Soup.";
    charImgEl.src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "master oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "My time has come. You must continue your journey without me.";
    charImgEl.src = "img/oogway.png";
  } else if (name === "shen" || name === "lord shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML = "Nothing stands in my way.";
    charImgEl.src = "img/shen.png";
  } else if (name === "shifu" || name === "master shifu") {
    charNameEl.innerHTML = "Master Shifu";
    charQuoteEl.innerHTML = "There is now a level Zero.";
    charImgEl.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "SoothSayer";
    charQuoteEl.innerHTML =
      "Even with his poor eyesight, he can see the truth.";
    charImgEl.src = "img/soothsayer.png";
  } else if (name === "storming ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "It's time to surrender, panda. Kung fu is dead.";
    charImgEl.src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML = "Who are YOU?";
    charImgEl.src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "---------";
    charImgEl.src = "img/question-mark.png";
  }
}

document.getElementById("theme-btn").addEventListener("click", themeChange);

function themeChange() {
  var theme = document.getElementById("theme-in").value;

  if (theme === "dark" || theme === "black") {
    document.getElementById("body").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("div").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("h1").style.color = "white";
    document.getElementById("char-name").style.color = "white";
    document.getElementById("char-quote").style.color = "white";
  } else if (theme === "white" || theme === "light") {
    document.getElementById("body").style.backgroundColor =
      "rgba(255,255,255, 0.7)";
    document.getElementById("div").style.backgroundColor =
      "rgba(255,255,255, 0.7)";
    document.getElementById("h1").style.color = "black";
    document.getElementById("char-name").style.color = "black";
    document.getElementById("char-quote").style.color = "black";
  } else if (theme === "random") {
    var r = Math.floor(Math.random() * 256 - 1);
    var g = Math.floor(Math.random() * 256 - 1);
    var b = Math.floor(Math.random() * 256 - 1);
    document.getElementById("body").style.backgroundColor = `${(r, g, b)}`;
    document.getElementById("div").style.backgroundColor = `${(r, g, b)}`;
    document.getElementById("h1").style.color = `${(r, g, b)}`;
    document.getElementById("char-name").style.color = `${(r, g, b)}`;
    document.getElementById("char-quote").style.color = `${(r, g, b)}`;
    console.log(r, g, b);
  }
}
