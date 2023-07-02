<template>
    <div>
        <h2>Add a New Country</h2>
        <form @submit.prevent="addCountry" class="country-form">
            <div class="form-group">
                <label for="name">Country Name:</label>
                <input v-model="name" type="text" id="name" required>
                <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>
            <div class="form-group">
                <label for="image">Country Image:</label>
                <input type="file" id="image" ref="file" accept="image/*" @change="selectImage"  required>
                <span v-if="errors.image" class="error">{{ errors.image }}</span>
            </div>
            <div class="form-group">
                <label for="continent">Continent:</label>
                <select v-model="continent" id="continent" required>
                    <option v-for="item in continents" :key="item.continent">{{ item.continent }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="rank">Rank:</label>
                <input v-model="rank" type="number" id="rank" required>
                <span v-if="errors.rank" class="error">{{ errors.rank }}</span>
            </div>
            <button type="submit">Add Country</button>
        </form>
        <br />
        <router-link to="/" class="back-button">Back to Country List</router-link>
    </div>
</template>
  
<script>
import contryAPI from '../api/country.js'

export default {
    data() {
        return {
            name: '',
            image: null,
            continent: '',
            rank: null,
            errors: {},
            continents: []
        };
    },
    mounted() {
        this.getContinent();
    },
    methods: {
        getContinent() {
            contryAPI.getContry().then((response) => {
                this.continents = response;
            });
        },
        addCountry() {
            this.errors = {};
            if (this.name.length < 3 || this.name.length > 20) {
                this.errors.name = 'Country name must be between 3 and 20 characters.';
            }
            if (!this.image || (this.image.size / 1024 / 1024) > 4) {
                this.errors.image = 'Country image must be a JPG or PNG file and should not exceed 4 MB.';
            }
            console.log('sfsjdkfjsk',this.errors)
            if (Object.keys(this.errors).length > 0) {
                return;
            }else{
                let formData = new FormData();
                formData.append("name", this.name);
                formData.append("image", this.image);
                formData.append("continent", this.continent);
                formData.append("rank", this.rank);
                contryAPI.createContry(formData).then((response) => {
                    this.$router.push({ path: "/" });
                });
                
            }

        },
        selectImage(){
            this.image = this.$refs.file.files.item(0);
        }
    }
};
</script>
  
<style >
.country-form {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input[type="text"],
input[type="number"],
select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
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
</style>