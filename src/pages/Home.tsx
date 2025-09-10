import { useState, useEffect } from "react";
import { useBodyId } from "../components/useBodyId";

interface Project {
    id: number;
    name: string;
    startDate: string;
    status: string;
    team: string[];
    progress: number;
}

export default function Home() {
    const [query, setQuery] = useState("");
    const [tableData, setTableData] = useState<Project[]>([]);
    useBodyId('home-page');

    const mockData: Project[] = [
        {
            id: 1,
            name: "New Admin Design",
            startDate: "2019-05-02",
            status: "Completed",
            team: [
                "https://bootdey.com/img/Content/avatar/avatar6.png",
                "https://bootdey.com/img/Content/avatar/avatar7.png",
                "https://bootdey.com/img/Content/avatar/avatar8.png"
            ],
            progress: 100
        },
        {
            id: 2,
            name: "Landing page Design",
            startDate: "2019-06-04",
            status: "Pending",
            team: [
                "https://bootdey.com/img/Content/avatar/avatar2.png",
                "https://bootdey.com/img/Content/avatar/avatar1.png"
            ],
            progress: 78
        },
        {
            id: 3,
            name: "M Template",
            startDate: "2019-06-06",
            status: "Completed",
            team: [
                "https://bootdey.com/img/Content/avatar/avatar3.png",
                "https://bootdey.com/img/Content/avatar/avatar4.png",
                "https://bootdey.com/img/Content/avatar/avatar5.png",
                "https://bootdey.com/img/Content/avatar/avatar6.png"
            ],
            progress: 100
        }
    ];

    useEffect(() => {
        setTableData(mockData);
    }, []);

    const filteredProjects = tableData.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container-fluid mt-4">
            <div className="contain-table">
                <div className="table-header">
                    <div className="contain-subtitulo-split">
                        <span>WorkFlow Tracker</span>
                    </div>
                    <div className="split-text-container">
                        <span className="text-part left">New</span>
                        <span className="text-part right">Line</span>
                    </div>
                </div>
                <div className="table-wrapper">
                    <table className="modern-table" role="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="header-content">
                                        <span>Project</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="header-content">
                                        <span>Start Date</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="header-content">
                                        <span>Status</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="header-content">
                                        <span>Team</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="header-content">
                                        <span>Progress</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="header-content">
                                        <span>Actions</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProjects.map((p) => (
                                <tr key={p.id} className="table-row">
                                    <td className="project-cell">
                                        <div className="project-info">
                                            <span className="project-name">{p.name}</span>
                                            <span className="project-id">ID: {p.id}</span>
                                        </div>
                                    </td>
                                    <td className="date-cell">
                                        <time dateTime={p.startDate}>
                                            {new Date(p.startDate).toLocaleDateString("pt-BR")}
                                        </time>
                                    </td>
                                    <td className="status-cell">
                                        <div className="status-badge">
                                            {p.status === "Completed" ? (
                                                <span className="text-success">
                                                    <i className="fa fa-circle me-1"></i> Completed
                                                </span>
                                            ) : (
                                                <span className="text-primary">
                                                    <i className="fa fa-circle me-1"></i> Pending
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="team-cell">
                                        <div className="team-avatars">
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
                                    <td className="progress-cell">
                                        <div className="progress-container">
                                            <div className="progress-bar" style={{ height: "6px" }}>
                                                <div
                                                    className={`progress-fill ${p.progress === 100 ? "bg-success" : "bg-primary"}`}
                                                    role="progressbar"
                                                    style={{ width: `${p.progress}%` }}
                                                    aria-valuenow={p.progress}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                >
                                                    <div className="progress-glow"></div>
                                                </div>
                                            </div>
                                            <span className="progress-text">{p.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="actions-cell">
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
                </div>
            </div>
        </div>
    );
}