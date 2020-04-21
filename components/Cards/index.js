// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

var removeChilds = function (node) {
    var last;
    while (last = node.lastChild) node.removeChild(last);
};

function buildCard(article) {

    console.log("hello");
    const card = document.createElement('div');
    card.classList.add('card');
    
    

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    card.dataset.content = article.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    const authorImage = document.createElement('img');
    authorImage.src = article.authorPhoto;
    imageContainer.appendChild(authorImage);
    author.appendChild(imageContainer);

    const authorName = document.createElement('span');
    authorName.textContent = article.authorName;
    author.appendChild(authorName);

    card.appendChild(author);

    return card;

}

function getArticlesFromServer(specificArticle) {
    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
        .then((response) => {
            const newArticle = document.querySelector('.cards-container');
            // clear the container
            removeChilds(newArticle);

            for (let articleArray in response.data.articles) {
                response.data.articles[articleArray].map((article) => {
                    if(specificArticle !== 'show all'){
                    // Search the headline for a 'specific article'
                    if (article.headline.toLowerCase().search(specificArticle.toLowerCase()) !== -1) {
                        newArticle.appendChild(buildCard(article));
                    }
                }else {
                    newArticle.appendChild(buildCard(article));
                }
                })
            }

        })
        .catch((err) => { // Somthing bad happen
            console.log(err);
        })

}

getArticlesFromServer('show all');

