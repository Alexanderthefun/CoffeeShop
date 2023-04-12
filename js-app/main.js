const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            displayBeanVars(beanVarieties);
        })
        
});


function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const displayBeanVars = (beanVars) => {
    let html = ''
    for (const bean of beanVars) {
        html += `${bean.name} <br>`
    }
    document.querySelector('#beanVars').innerHTML = html;
}


const newBeanButton = document.querySelector("#newBeanSubmit");
newBeanButton.addEventListener("click", event => {
    event.preventDefault();
    const beanVariety = {
        name: document.querySelector("#newBean-Name").value,
        region: document.querySelector("#newBean-Region").value,
        notes: document.querySelector("#newBean-Notes").value,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(beanVariety)
    })
        .then(res => res.json())
        .then(newBeanVariety => {
            console.log(newBeanVariety);
        })
})



