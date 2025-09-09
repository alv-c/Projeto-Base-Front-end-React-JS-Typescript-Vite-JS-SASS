import { useState } from "react";

export default function Home() {
    const [query, setQuery] = useState("");

    const projects = [
        {
            id: 1,
            name: "New admin Design",
            startDate: "2019-05-02",
            status: "Completed",
            team: [
                "https://bootdey.com/img/Content/avatar/avatar6.png",
                "https://bootdey.com/img/Content/avatar/avatar7.png",
                "https://bootdey.com/img/Content/avatar/avatar8.png",
            ],
            progress: 100,
        },
        {
            id: 2,
            name: "Landing page Design",
            startDate: "2019-06-04",
            status: "Pending",
            team: [
                "https://bootdey.com/img/Content/avatar/avatar2.png",
                "https://bootdey.com/img/Content/avatar/avatar1.png",
            ],
            progress: 78,
        },
        {
            id: 3,
            name: "Multipurpose Landing Template",
            startDate: "2019-06-06",
            status: "Completed",
            team: [
                "https://bootdey.com/img/Content/avatar/avatar3.png",
                "https://bootdey.com/img/Content/avatar/avatar4.png",
                "https://bootdey.com/img/Content/avatar/avatar5.png",
                "https://bootdey.com/img/Content/avatar/avatar6.png",
            ],
            progress: 100,
        },
    ];

    const filteredProjects = projects.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container mt-4">
            {/* Cards superiores */}
            <div className="row mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body d-flex justify-content-between">
                            <div>
                                <h5 className="h3">24</h5>
                                <p className="text-muted mb-0">Total Projects</p>
                            </div>
                            <i className="fa fa-archive text-primary h4"></i>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body d-flex justify-content-between">
                            <div>
                                <h5 className="h3">18</h5>
                                <p className="text-muted mb-0">Completed Projects</p>
                            </div>
                            <i className="fa fa-th text-primary h4"></i>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body d-flex justify-content-between">
                            <div>
                                <h5 className="h3">06</h5>
                                <p className="text-muted mb-0">Pending Projects</p>
                            </div>
                            <i className="fa fa-file text-primary h4"></i>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <label htmlFor="search">Search</label>
                            <div className="input-group">
                                <input
                                    id="search"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-danger" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabela de projetos */}
            <div className="row">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body table-responsive">
                            <table
                                className="table table-hover table-centered table-nowrap"
                                aria-label="Lista de projetos"
                            >
                                <thead className="thead-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Projects</th>
                                        <th>Start Date</th>
                                        <th>Status</th>
                                        <th>Team</th>
                                        <th>Progress</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProjects.map((p) => (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.name}</td>
                                            <td>
                                                <time dateTime={p.startDate}>
                                                    {new Date(p.startDate).toLocaleDateString("pt-BR")}
                                                </time>
                                            </td>
                                            <td>
                                                {p.status === "Completed" ? (
                                                    <span className="text-success">
                                                        <i className="fa fa-circle me-1"></i> Completed
                                                    </span>
                                                ) : (
                                                    <span className="text-primary">
                                                        <i className="fa fa-circle me-1"></i> Pending
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    {p.team.map((avatar, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={avatar}
                                                            alt={`Team member ${idx + 1}`}
                                                            className="rounded-circle mr-2"
                                                            style={{ width: "36px", height: "36px" }}
                                                            loading="lazy"
                                                        />
                                                    ))}
                                                </div>
                                            </td>
                                            <td style={{ minWidth: "150px" }}>
                                                <p className="mb-1">
                                                    Progress <span className="float-right">{p.progress}%</span>
                                                </p>
                                                <div className="progress" style={{ height: "6px" }}>
                                                    <div
                                                        className={`progress-bar ${p.progress === 100 ? "bg-success" : "bg-primary"
                                                            }`}
                                                        role="progressbar"
                                                        style={{ width: `${p.progress}%` }}
                                                        aria-valuenow={p.progress}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    ></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="btn btn-link text-success p-0">
                                                        <i className="fa fa-pencil"></i>
                                                    </button>
                                                    <button className="btn btn-link text-danger p-0">
                                                        <i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Paginação mockada */}
                            <nav>
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <span className="page-link">Previous</span>
                                    </li>
                                    <li className="page-item active">
                                        <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}