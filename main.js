const button = document.querySelector(`#button`)

const resButt = () => {
let request = axios.get('https://swapi.dev/api/planets/?search=Alderaan')
console.log(request)
request.then((response) => {
    let reqArray = response.data.results[0].residents
    for(let i = 0; i < reqArray.length; i++){
        let somethingElse = axios.get(reqArray[i]);
        somethingElse.then((anything) => {
            let body = document.querySelector('body')
            let name = anything.data.name 
            let h2 = document.createElement('h2')
            h2.textContent = name
            body.appendChild(h2)
            // console.log(anything.data.name)
        })
    }
   
    })
}
button.addEventListener(`click`, resButt)