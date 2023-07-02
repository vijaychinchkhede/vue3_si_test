<template>
    <div>
        <h2>List of Countries</h2>
        <router-link to="/add" class="back-button">Add Country </router-link>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>Sr.NO</th>
                    <th>Country Name</th>
                    <th>Image</th>
                    <th>Rank</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(country, index)  in countries" :key="country.name">
                    <td>{{ index + 1 }}</td>
                    <td>{{ country.name }}</td>
                    <td><img :src="country.image" :alt="country.name" width="100"></td>
                    <td>{{ country.rank }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>

import contryAPI from '../api/country.js'
export default {
    components: {
        
    },
    data() {
        return {
            countries: [],
            selectedCountry: null
        };
    },
    created() {
        this.getContryList();
    },
    methods: {
        getContryList(){
            contryAPI.getContry().then((response) => {
                this.countries = response;
            });
        },
        selectCountry(country) {
            this.selectedCountry = country;
        }
    }
};
</script>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

.back-button {
    display: inline-block;
    padding: 8px 16px;
    background-color: #f2f2f2;
    color: #333;
    text-decoration: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.back-button:hover {
    background-color: #e6e6e6;
}

.back-button:active {
    background-color: #d9d9d9;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back-button {
    margin-left: 1000px;
  }
</style>