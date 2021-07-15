let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", "https://api.jsonbin.io/s", true);
req.setRequestHeader("secret-key", "<$2b$10$iDkYE7Unw8IB5oe5eHwqguCaTvHTT6ePueg7T4ltE3rUwOw5.7U0i>");
req.send();