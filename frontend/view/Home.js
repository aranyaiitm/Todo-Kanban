import List from "../components/List.js"
import Fetchdata from "../Fetch.js"
import ApiUrl from '../config.js'

export default {
    template: `<div>
        <div class="container" style="min-height: 79vh;">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                    <!-- List -->
                <List v-for="list in Lists" :list = 'list'/>
                <div class="col">
                    <router-link class="card btn btn-light h-100 text-center" style="min-height: 50vh;" :to="{name:'addlist'}">
                        <h1 class="my-auto"><i class="bi bi-file-earmark-plus-fill"></i></h1>
                    </router-link>
                </div>
            </div>
        </div>
    </div>`,

    components: {
        List
    },

    data() {
        return {
            Lists: [["card1", "card2"], ["card3", "card4"], ["card5", "card6", "card7"]],
            user: null,
            error: null,
        }
    },
    methods: {

    },

    mounted() {
        if (this.$store.state.loggedin === false) {
            this.$router.push({ name: 'login' })
        } else {
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