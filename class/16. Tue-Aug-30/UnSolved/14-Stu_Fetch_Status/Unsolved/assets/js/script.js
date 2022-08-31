var badRequestUrl = 'https://api.github.com/orgs/nodejs/oerps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(request) {
  fetch(badRequestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
      if(response.status === 404) {
        responseText.textContent = "Error" + " " + response.status;
      }else{
        responseText.textContent = "Good to go"
      }
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
