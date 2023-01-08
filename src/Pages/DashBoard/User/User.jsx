import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";

const User = () => {
  const { user } = useAuth();
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

  console.log(user?.email === "super@admin.com");
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
                admins?.map((u, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{u?.displayName}</td>
                    <td>{u?.email}</td>{" "}
                    {user?.email === "super@admin.com" ? (
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeAdmin(u._id)}
                        >
                          remove Admin
                        </button>
                      </td>
                    ) : (
                      "No Permission"
                    )}
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
                  ?.map((usr, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{usr?.displayName}</td>
                      <td>{usr?.email}</td>
                      {user?.email === "super@admin.com" ? (
                        <td>
                          {/* <Link
                      to={`/dash-board/slider/update/${user._id}`}
                      className="btn btn-primary m-1"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </Link> */}
                          {usr?.role === "admin" ? (
                            <button
                              className="btn btn-danger"
                              onClick={() => removeAdmin(usr._id)}
                            >
                              Remove Admin
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary"
                              onClick={() => makeAdmin(usr._id)}
                            >
                              Make Admin
                            </button>
                          )}
                        </td>
                      ) : (
                        "No Permission"
                      )}
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
