import axios from "axios";
import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import MultipleValueTextInput from "react-multivalue-text-input";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../Components/Spinner/Spinner";

const Packages = () => {
  const [image, setImage] = useState(null);
  const [load, setLoad] = useState(false);
  const [allPack, setAllPack] = useState([]);
  const {
    data: packages,
    error,
    isError,
    isLoading: loading,
    refetch,
  } = useQuery("packages", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/package");
    return data;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let price = e.target.price.value;
    let pack = e.target.packages.value;
    const packages = allPack.concat(pack);
    setLoad(true);
    console.log(image);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "NJ_images");
    formData.append("cloud_name", "dvmwear6h");

    fetch("https://api.cloudinary.com/v1_1/dvmwear6h/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.asset_id) {
          const img = data.url;
          const result = { name, price, packages, img };
          const res = await axios.post(
            "http://localhost:5000/api/v1/package",
            result
          );

          if (res) {
            setLoad(false);
            refetch();
            if (res.data.success) {
              toast("package Post added Successfull");
              name = "";
              pack = "";
              price = "";
            }
          }
        }
      })
      .catch((err) => {
        setLoad(false);
        console.log(err);
        toast("something went wrong");
      });

    //clear all input field
  };
  const deletePackage = (id) => {
    setLoad(true);

    fetch(`http://localhost:5000/api/v1/package/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setLoad(false);
          refetch();
          toast("package deleted successfully");
        } else {
          toast("Something went wrong");
        }
      });
  };
  if (load) {
    return <Spinner />;
  }
  return (
    <>
      <div style={{ maxWidth: "500px" }} className="ms-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Package Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Package name"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Price
            </label>
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="Amount in Dollar"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              images
            </label>
            <input
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              type="file"
            />
          </div>
          <div className="mb-3">
            <div id="serviceField" className="mb-2">
              <MultipleValueTextInput
                onItemAdded={(item, allItems) => setAllPack(allItems)}
                onItemDeleted={(item, allItems) => setAllPack(allItems)}
                label="Services: "
                name="packages"
              ></MultipleValueTextInput>
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <h5 className="mt-5">Package list</h5>
        <div className="container">
          {packages?.data?.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>Id</th>

                  <th> Name</th>
                  <th> Price</th>
                  <th> Service</th>

                  <th> Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  // eslint-disable-next-line jsx-a11y/alt-text
                  packages?.data?.map((pkg, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>{" "}
                      <td>
                        {" "}
                        <img
                          style={{ width: "40px", height: "35px" }}
                          src={`${pkg.img}`}
                        />{" "}
                        <h5 className="p-2 d-inline">{pkg.name}</h5>
                      </td>
                      <td>{pkg?.price}</td>
                      <td>
                        {pkg?.packages.map((item) => (
                          <>
                            <span>{item} </span>
                          </>
                        ))}
                      </td>
                      <td>
                        {/* <Link
                      to={`/dash-board/slider/update/${pkg._id}`}
                      className="btn btn-primary m-1"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </Link> */}
                        <button
                          className="btn btn-danger"
                          onClick={() => deletePackage(pkg._id)}
                        >
                          <i class="bi bi-trash-fill"></i>
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
      </div>
    </>
  );
};

export default Packages;
