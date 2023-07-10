var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a4a5d9b1473e48439c7f229bd917f18e';

var req = new Request(url);

fetch(req)
  .then(function(response) {
    return response.json(); // Return the JSON Promise
  })
  .then(function(data) {
    console.log(data); // Access the data in the resolved Promise
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
