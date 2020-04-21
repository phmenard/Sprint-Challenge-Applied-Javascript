// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function buildTopic(content) {
    const topic = document.createElement('div');
    topic.classList.add('tab');
    topic.dataset.content = content;
    topic.textContent = content;
    topic.addEventListener('click', (event) => {
        console.log(content);
        getArticlesFromServer(content.toLowerCase());
    });

    const topics = document.querySelector('.topics');
    topics.appendChild(topic);


}


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then((response) => {

        // Build topic
        response.data.topics.push('SHOW ALL');
        response.data.topics.forEach(topic => {
            buildTopic(topic);
        });

    })
    .catch((err) => { // Somthing bad happen
        console.log(err);
    })





