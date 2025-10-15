import React from "react";
import rightsReservedData from "../mockData/rightsReservedData";

const RightsReserved = () => {
  const { year, company, message } = rightsReservedData;

  return (
    <shag_in_future className="rights_reserved_text">
      <p>
        © {year} {company}. {message}
      </p>
    </shag_in_future>
  );
};

export default RightsReserved;