const darkBtn = document.querySelector('.fas');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if(setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if(setDarkMode === 'on') {
    darkMode();
}



let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=41a9dcc94cd846c8a1e464047cfb0643';



fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let data = result;
        Object.keys(data).forEach((item, key) => {

            let arr = data.articles;
            arr.forEach(item => {
                console.log(data.articles[key].content);

                let div = document.getElementById('app');
                let img = document.createElement('img');
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
                let cont = document.createElement('div');
                let date = document.createElement('p');

                date.innerText = item.publishedAt;
                h1.innerHTML = item.title;
                p.innerHTML = item.description;
                img.src = item.urlToImage;
                cont.setAttribute('class', 'cont');
                date.setAttribute('class', 'date');



                cont.appendChild(h1);
                cont.appendChild(date);
                cont.appendChild(p);
                cont.appendChild(img);

                const visit = () => {
                    location.href = item.url;
                    preventDefault();
                    
                }
                cont.onclick = () => {
                    visit();
                }
                div.appendChild(cont);
            })
        });
    });


