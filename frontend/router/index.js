import Home from '../view/Home.js'
import Summary from '../view/Summary.js'
import LogIn from '../view/LogIn.js'
import Register from '../view/Register.js'
import Add_List from '../view/Add_List.js'
import Add_Card from '../view/Add_Card.js'

const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/summary', name: 'summary', component: Summary},
    { path: '/login', name: 'login', component: LogIn},
    { path: '/register', name: 'register', component: Register},
    { path: '/addlist', name: 'addlist', component: Add_List},
    { path: '/addtask', name: 'addtask', component: Add_Card},
]

const router = new VueRouter({
    routes
})

export default router