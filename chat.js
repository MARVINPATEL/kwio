// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE



function addUser()
{
    user_name = document.getElementById("user_name").value;
   
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function getData() {
    firebase
      .database()
      .ref("/" + room_name)
      .on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if (childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
            //Start code
            console.log(firebase_message_id);
            name = message_data["name"];
            message = message_data["message"];
            like = message_data["like"];
            name_width_tag =
              "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
            message_width_tag = "<h4 clsdd = 'message_h4'>" + message + "</h4>";
            like_buttonm =
              "<button class='btn btn-warning' id=" +
              firebase_message_id +
              " value=" +
              like +
              " onclick='updateLike(this.id)'>";
            span_width_tag =
              "<span class='glyphicon glyphicon-thumbs-up'>Like: " +
              like +
              "</span></button><hr>";
              row =name_width_tag+message_width_tag+like_buttonm+span_width_tag;
              document.getElementById("output").innerHTML +=row;
            //End code
          }
        });
      });
  }
  getData();