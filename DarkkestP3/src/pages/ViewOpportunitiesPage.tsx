import { NavLink } from "react-router-dom";

function ViewOpportunitiesPage() {
  return (
    <>
      <h1>Opportunities</h1>
      <NavLink to="/app">
        <button className="ProButtons">Apply</button>
      </NavLink>
    </>
  );
}

export default ViewOpportunitiesPage;
