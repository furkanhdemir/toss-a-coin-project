import React from "react";
import Alert from "@mui/material/Alert";

function Spin() {
  let coin = document.querySelector(".coin");

  let i = Math.floor(Math.random() * 2);

  console.log(i);
  coin.style.animation = "";
  if (i) {
    setTimeout(() => (coin.style.animation = "spin-tura 3s forwards"));
    setTimeout(function () {
      alert("Yazı Geldi");
    }, 3000);
  } else {
    setTimeout(() => (coin.style.animation = "spin-yazi 3s forwards"));
    setTimeout(function () {
      alert("Tura Geldi!");
    }, 3000);
  }
  return;
}

export default Spin;
