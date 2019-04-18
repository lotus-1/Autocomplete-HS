var inputField = document.getElementById("search").addEventListener("keyup", function(event) {
  event.preventDefault();
  fetchDataFromServer(inputField.value, appendDataFromServer);
});
// function fetchDataFromServer(userQuery, callback) {
//   var xhr = new XMLHttpRequest();
//   userQuery = userQuery.toLowerCase();
//   var url = "/search" + "?q=" + userQuery;
//   var encoded = encodeURI(url);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       console.log(xhr.responseText);
//       var response = JSON.parse(xhr.responseText);
//       callback(response);
//     }
//   };
//   xhr.open("GET", encoded, true);
//   xhr.send();
// }
  fetch("/search")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
});
