import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { USERS } from "../data/data";

export default function Dashboard() {
  const navigate = useNavigate();
  const { state } = useLocation();
  
  //handling logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  //navigating user to login if not logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !state.loggedIn) {
      navigate("/login");
    }
  }, [navigate, state?.loggedIn]);

  return (
    <div className="container d-flex flex-column gap-5 cgradient">
      <button
        className="p-2 col-2 hover offset-10 bg-danger text-white fw-bold fs-5 rounded-pill mt-2"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((user) => {
              let bgColor = "bg-success";

              if (user.status === "Suspended") {
                bgColor = "bg-danger";
              } else if (user.status === "Inactive") {
                bgColor = "bg-warning";
              } else {
                bgColor = "bg-success";
              }
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className="d-flex align-items-center gap-2">
                    <img
                      src={user.pic}
                      className="col-1 rounded-circle"
                      alt={user.name}
                    />
                    <span className="ctext-dark fw-semibold">{user.name}</span>
                  </td>
                  <td className="text-secondary">{user.createdAt}</td>
                  <td className="text-secondary">{user.role}</td>
                  <td className="text-secondary">
                    <span
                      className={`${bgColor} me-2`}
                      style={{
                        padding: "0.1rem",
                      }}
                    ></span>
                    {user.status}
                  </td>
                  <td>
                    <button className="btn">
                      <img src="/icons/trash.svg" alt="trash" />
                    </button>
                    <button className="btn">
                      <img src="/icons/edit.svg" alt="edit" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
