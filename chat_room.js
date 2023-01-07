const firebaseConfig = {
  apiKey: "AIzaSyDlMW7Bk7KAj005rEEc1AiM_-AKjv3o7jU",
  authDomain: "kwitter-aca52.firebaseapp.com",
  databaseURL: "https://kwitter-aca52-default-rtdb.firebaseio.com",
  projectId: "kwitter-aca52",
  storageBucket: "kwitter-aca52.appspot.com",
  messagingSenderId: "496840553260",
  appId: "1:496840553260:web:41de05d78e057ec6f57289"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });
  localStorage.setItem("room_name", room_name);

  window.location = "chat_room.html";
}
function getData() {
    firebase
      .database()
      .ref("/")
      .on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code
          console.log("room name - " + Room_names);
          row =
            "<div class='room_name' id=" +
            Room_names +
            " onclick='redirectToRoomName(this.id)' >#" +
            Room_names +
            "</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
        });
      });
  }
  getData();
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_room.html";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }