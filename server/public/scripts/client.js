console.log('script sourced.');

function getQuotes() {
    // Axios GET request (http request for information from the server)
    axios({
        method: 'GET',
        url: '/quotes'  // Error FIXED BUG 3
    }).then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let quotesFromServer = response.data;
        let contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';
        let i = 0;
        // ??? Loop over array of quotes and append to the content div - FIXED BUG 6
        for(let quote of quotesFromServer) {
            // console.log('Quote being rendered:', quote);
            contentDiv.innerHTML += `
                <p>
                    "${quote.text}" -${quote.author}
                </p>
            `;
            i += 1;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
// Call the function
getQuotes();

function submitForm(event) {
    // stop page from refreshing
    event.preventDefault();
    console.log('In submitForm function');
    let quote = document.querySelector('#quoteInput').value;
    let author = document.querySelector('#authorInput').value;
    console.log('Inputs ', quote, author);
    let quoteForServer = {
        text: quote,
        author: author,
    };

    // clear input fields - FIXED BUG 9
    document.querySelector('#quoteInput').value = null;
    document.querySelector('#authorInput').value = null;

    // ??? - FIXED BUG 8
    axios({
        method: 'POST',
        url: '/quotes', 
        data: quoteForServer
    }).then((response) => {
        console.log(response);
        getQuotes();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    });
}