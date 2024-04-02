export default {
    template: `<li class="list-group-item">
        <div class="card">
            <div class="card-body">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ card.title }}
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                            </ul>
                        </div>
                    </h5>
                    <div class="p-2" v-if='card.flag'><span class="badge bg-success">Complete</span></div>
                    <div class="p-2" v-else ><span class="badge bg-danger">Expired</span></div>
                </div>
            <p class="card-text mb-1">
                {{ card.content }}
            </p>
            <small class="text-primary float-end">Deadline {{ card.deadline }}</small>
            </div>
        </div>
    </li>`,

    props: ['card'],
}