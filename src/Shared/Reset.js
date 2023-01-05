import React from "react";

const Reset = () => {
  return (
    <div>
      <form>
        <div className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Reset Password
            </label>{" "}
            <br />
            <input required type="email" className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
