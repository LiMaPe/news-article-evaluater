async function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Url submitted :::")
    // collect user input from textfield
    let formText = document.getElementById('name').value;

    //check if user input is valid url
    if (Client.checkUrl(formText)) {
        console.log("::: Valid Url, continue :::");
        
        //send url to server. Get Analysis data back.
        fetch('/test2', {
            method: "POST",
            body: JSON.stringify(formText)
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res
        })
    } else {
        console.log("::: Invalid Url, break! :::");
        return;
    };
}

export { handleSubmit }





