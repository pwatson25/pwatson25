fetch('https://ll.thespacedevs.com/2.0.0/event/upcoming/?limit=1')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
        let title = jsObject.title;
        let explanation = jsObject.explanation;
    
        document.getElementById('title').textContent = (title);
        document.getElementById('explanation').textContent = (explanation);

        const imagesrc = jsObject.url;
        const desc = jsObject.title;
        document.getElementById('photo').setAttribute('src', imagesrc);
        document.getElementById('photo').setAttribute('alt', desc);
    
    });