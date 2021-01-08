async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    const body2 = {
        url: "hej"
    }
    console.log("::: Form Submitted :::");

    fetch('/test2', {
        method: "POST",
        body: JSON.stringify(body2)
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res
    })

}

export { handleSubmit }





