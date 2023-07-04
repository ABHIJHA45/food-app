import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card m-3"
          style={{ width: "16rem", maxHeight: "300px" }}
        >
          <img
            src="https://www.canstockphoto.com/zoom/?height=398.4&width=598.4&id=701034&_ts=1688430537699&scale=2.6737967914438503&left=308&top=117"
            className="card-img-top"
            alt=""
          />
          <div className="card-body bg-black text-light">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to b</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5"> price </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
