import { NavLink } from "react-router-dom";
import { Inner } from "./inner";

export function Outer() {
  return (
    <div className="flex flex-row h-screen">
      <div className="bg-red-500 flex-1">
        <div className="flex-col">
          <div>
            <NavLink className="text-blue-800 text-xl" to="/content/1">
              Title 1
            </NavLink>
          </div>
          <div>
            <NavLink className="text-blue-800 text-xl" to="/content/2">
              Title 2
            </NavLink>
          </div>
          <div>
            <NavLink className="text-blue-800 text-xl" to="/content/3">
              Title 3
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Inner />
      </div>
      <div className="bg-blue-500 flex-1">right</div>
    </div>
  );
}
