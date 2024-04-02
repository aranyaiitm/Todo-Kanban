export default {
    template: `<div class="container" style="min-height: 79vh;">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
                <div class="card-header text-center" aria-current="true">
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Todo
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                </div>
                </div>
                <div class="card-body">
                <div class="progress-stacked">
                    <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                        <div class="progress-bar progress-bar-striped bg-success"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 25%">
                        <div class="progress-bar progress-bar-striped bg-danger"></div>
                    </div>
                </div>
                <div class="mt-3">
                    <p class="fw-normal text-success mb-0">Complete 5/11</p>
                    <p class="fw-normal text-danger mb-0">Passed deadline 3/11</p>
                </div>
                <div class="mt-3">
                    <p>Chart</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>`
}