import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'; 

const contryAPI = {
    createContry (data) {
        return new Promise((resolve, reject) => {
            // axios.post( '/api/user/create', data).then((response) => {
            // resolve(response.data)
            const formEntries = data.entries();
const formDataObject = Object.fromEntries(formEntries);
            console.log(formDataObject)
            localStorage.setItem('countryData', JSON.stringify(formDataObject));
            let response = 'success';
             resolve(response);
            // }, (error) => {
            // reject(error)
            // })
        })
    },
    getContry(){
        return new Promise((resolve, reject) => {
            let data =  [
                {
                    "name": "Australia",
                    "continent": "Oceania",
                    "flag": "images/australia.png",
                    "rank": 4
                },
                {
                    "name": "England",
                    "continent": "Europe",
                    "flag": "images/england.png",
                    "rank": 5
                },
                {
                    "name": "Namibia",
                    "continent": "Africa",
                    "flag": "images/namibia.png",
                    "rank": 8
                },
                {
                    "name": "New Zealand",
                    "continent": "Oceania",
                    "flag": "images/newzealand.png",
                    "rank": 3
                },
                {
                    "name": "Pakistan",
                    "continent": "Asia",
                    "flag": "images/pakistan.png",
                    "rank": 6
                },
                {
                    "name": "Zimbabwe",
                    "continent": "Africa",
                    "flag": "images/zimbabwe.png",
                    "rank": 7
                },
                {
                    "name": "South Africa",
                    "continent": "Africa",
                    "flag": "images/southafrica.png",
                    "rank": 2
                },
                {
                    "name": "India",
                    "continent": "Asia",
                    "flag": "images/india.png",
                    "rank": 1
                }
            ]
            const storedData = localStorage.getItem('countryData');
            if (storedData) {
     
                const storedCountryData = JSON.parse(storedData);
                data.push(storedCountryData);
            }
            resolve(data)
        })
    }
}

export default contryAPI