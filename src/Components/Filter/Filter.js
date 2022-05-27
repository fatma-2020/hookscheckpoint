import React from "react";
import "./Filter.css";
const Filter = ({ searching }) => {
  return (
    <div className="main-div">
      <div className="dropdown">
        <input type="checkbox" id="dropdown" />

        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">بحث حسب التصنيف</div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          {[1, 2, 3, 4, 5].map((el) => (
            <li
              key={el}
              onClick={() => {
                searching(el);
              }}
              style={{
                width: "25px",
                borderRadius: "30%",
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>

      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </div>
  );
};

export default Filter;
