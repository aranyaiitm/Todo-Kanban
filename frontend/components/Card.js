export default {
    template: `<li class="list-group-item">
        <div class="card">
            <div class="card-body">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Submit Asignment
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                            </ul>
                        </div>
                    </h5>
                    <div class="p-2"><span class="badge bg-success">Complete</span></div>
                </div>
            <p class="card-text mb-1">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            <small class="text-primary float-end">Last updated 02/10/2022</small>
            </div>
        </div>
    </li>`,

    props: ['card'],
}