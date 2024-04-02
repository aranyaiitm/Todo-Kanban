import Card from "./Card.js"

export default {
    template: `
    <div class="col">
        <div class="card h-100">
            <div class="card-header text-center" aria-current="true">
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ list.list_name }}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Edit</a></li>
                        <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                </div>
            </div>

            <ul class="list-group list-group-flush" style="overflow-y: auto; max-height: 58vh;">
                <!-- Cards -->
                <Card v-for="card in list.cards" :card = 'card'/>
            </ul>
            
            <div class="card-body text-center">
                <button @click="addCard" type="button" class="btn btn-outline-primary px-2 py-0" style="font-size: 2rem; color: cornflowerblue;"><i class="bi bi-plus-square-fill"></i></button>
            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-light">Export</button>
            </div>
        </div>
    </div>`,

    props: ['list'],

    components: {
        Card
    },

    methods: {
        addCard() {
            this.$router.push({ name: 'addtask' })
        }
    }
}