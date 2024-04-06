document.getElementById('cardForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  var name = document.getElementById('nameInput').value;
  var message = document.getElementById('messageInput').value;
  updateCard(name, message);
});

function updateCard(name, message) {
  document.getElementById('cardMessage').textContent = message;
  document.getElementById('userName').textContent = "From: " + name;
  
  // Generate card image URL
  // You'll need to replace the image URL with your own card image
  var imageURL = "https://example.com/card-image.jpg";
  var cardImage = document.createElement('img');
  cardImage.src = imageURL;
  
  var cardPreview = document.getElementById('cardPreview');
  cardPreview.appendChild(cardImage);
}
