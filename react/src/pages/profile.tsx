import { NavLink } from "react-router-dom";

export function Profile() {
  return (
    <div>
      <NavLink className="text-blue-800" to="/">
        Home
      </NavLink>
      <div>Profile Page</div>
    </div>
  );
}
