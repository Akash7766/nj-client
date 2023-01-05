import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";

const User = () => {
  const {
    data: users,
    error,
    isError,
    isLoading: loading,
    refetch,
  } = useQuery("packages", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/user");
    return data;
  });
  const makeAdmin = (id) => {
    const user = { id, role: "admin" };
    fetch("http://localhost:5000/api/v1/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  const removeAdmin = (id) => {
    const user = { id, role: "" };
    fetch("http://localhost:5000/api/v1/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  const admins = users?.data?.filter((u) => u?.role == "admin");
  return (
    <div>
      <h5>Admin:</h5>
      <div>
        {admins?.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th> Email</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line jsx-a11y/alt-text
                admins?.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user?.displayName}</td>
                    <td>{user?.email}</td>{" "}
                    <td>
                      {/* <Link
                      to={`/dash-board/slider/update/${user._id}`}
                      className="btn btn-primary m-1"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </Link> */}
                      <button
                        className="btn btn-danger"
                        onClick={() => removeAdmin(user._id)}
                      >
                        remove Admin
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        ) : (
          ""
        )}
      </div>
      <h5 className="mt-5">Users:</h5>
      <div>
        {users?.data?.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th> Name</th>
                <th> Email</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line jsx-a11y/alt-text
                users?.data
                  ?.filter((u) => u.role !== "super-admin")
                  ?.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user?.displayName}</td>
                      <td>{user?.email}</td>
                      <td>
                        {/* <Link
                      to={`/dash-board/slider/update/${user._id}`}
                      className="btn btn-primary m-1"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </Link> */}
                        {user?.role === "admin" ? (
                          <button
                            className="btn btn-danger"
                            onClick={() => removeAdmin(user._id)}
                          >
                            Remove Admin
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={() => makeAdmin(user._id)}
                          >
                            Make Admin
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </Table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default User;
