import Fetchdata from "../Fetch.js"
import ApiUrl from '../config.js'

export default {
    template: `<div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'home'}">
                            Home
                        </router-link>
                        <router-link class="nav-link" :to="{name:'summary'}">
                            Summary
                        </router-link>
                        <a class="nav-link" href="#">Export</a>
                    </div>
                    <div class="navbar-nav" v-if='$store.state.loggedin'>
                        <span class="navbar-text me-2">
                            {{ user.email }}
                        </span>
                        <button class="nav-link btn" @click='userlogout'>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>`,

    data() {
        return {
            user: {email:"Waiting"},
            error: null
        }
    },
    methods: {
        ...Vuex.mapActions(['userlogout']),
    },
    mounted() {
        if (this.$store.state.loggedin) {
            Fetchdata({  url: `${ApiUrl}/user`, authRequired: true })
            .then((data) => {
                this.user = data
                console.log( this.user)
            })
            .catch((err) => {
                this.error = err.message
            })
        }
    }
}