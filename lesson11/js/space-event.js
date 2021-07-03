fetch('https://lldev.thespacedevs.com/2.0.0/event/upcoming/?limit=1')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
        let title = jsObject.results[0].description;
        let description = jsObject.results[0].description;
        const vidurl = jsObject.results[0].video_url;
    
        document.getElementById('title').textContent = (title);
        document.getElementById('description').textContent = (description);

        const imagesrc = jsObject.results[0].feature_image;
        const desc = jsObject.title;
        document.getElementById('photo').setAttribute('src', imagesrc);
        document.getElementById('photo').setAttribute('alt', desc);
        document.getElementById('photo').setAttribute('loading', 'lazy');

        document.getElementById('watch').setAttribute('onclick', `location.href='${vidurl}'`)
    
    });