async function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Url submitted :::")

    //if any hide previous results 
    document.getElementById('results').classList.add("results--hidden");

    //Add message to user
    document.getElementById('pending').classList.remove("pending--hidden");

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
            //make sure status code is OK!
            if(res.status.code !== "0") {
                console.log("Error due to respons code:",res.status.code);
                document.getElementById('pending').classList.add("pending--hidden");
                alert("Something went wrong! Make sure you enter a valid URL.")
            } else {
                console.log(res);
    
                //update UI with new data
                //collect the html elements
                const elementScore = document.getElementById('score');
                const elementSubj = document.getElementById('subj');
                const elementIrony = document.getElementById('irony');
    
                //set score tag to proper meaning.
                if(res.score_tag === "NEU") {
                    res.score_tag = "Neutral";
                } else if(res.score_tag === "P+") {
                    res.score_tag = "Strong Positive";
                } else if(res.score_tag === "P") {
                    res.score_tag = "Positive";
                } else if(res.score_tag === "N") {
                    res.score_tag = "Negative";
                } else if(res.score_tag === "N+") {
                    res.score_tag = "Strong Negative";
                } else if(res.score_tag === "NONE") {
                    res.score_tag = "Without Sentiment";
                }
    
                //set the inner html to the result
                elementScore.innerHTML = res.score_tag;
                elementSubj.innerHTML = res.subjectivity;
                elementIrony.innerHTML = res.irony;
    
                //render the results and remove message to user
                document.getElementById('pending').classList.add("pending--hidden");
                document.getElementById('results').classList.remove("results--hidden");
            }
        })
        .catch(err => {
            console.log("error:", err)
            //Error message to user
            document.getElementById('pending').classList.add("pending--hidden");
            alert("Something went wrong! Make sure you enter a valid URL.")
        })
    } else {
        console.log("::: Invalid Url, break! :::");
        //Error message to user
        alert("Please enter a valid URL and try again")
        return;
    };
}



export { handleSubmit }





