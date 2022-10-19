import React from "react";
import { Link } from "react-router-dom";

const STEP_AMOUNT = 3;

const StepperNav = ({ prevDisabled, nextDisabled, current }) => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "300px"
      }}
    >
      <Link
        className={[
          "navigation-button",
          prevDisabled ? "navigation-button--disabled" : ""
        ].join(" ")}
        to={current - 1 === 0 ? "/" : `/Step${current - 1}`}
      >
        Prev
      </Link>
      <div>
        <ul className="navigation">
          {new Array(STEP_AMOUNT).fill(true).map((v, i) => (
            <li
              className={[
                "navigation-item",
                i + 1 === current ? "navigation-item--active" : ""
              ].join(" ")}
              key={i}
            />
          ))}
        </ul>
      </div>
      <Link
        to={`/Step${current + 1}`}
        className={[
          "navigation-button",
          nextDisabled ? "navigation-button--disabled" : ""
        ].join(" ")}
      >
        Next
      </Link>
    </nav>
  );
};

export default StepperNav;