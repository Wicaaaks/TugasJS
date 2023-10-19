function getDataUser() {
  const dataUser = localStorage.getItem("user");
  const conData = JSON.parse(dataUser);

  const imgElm = document.getElementById("img_user");
  imgElm.src = conData.imgUrl;
  console.log(conData, "data");
}

getDataUser();
