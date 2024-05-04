import { Content } from "./content";
import { Dashboard } from "./dashboard";
import { Trending } from "./trending";

export function Body() {
  return (
    <div className="flex flex-row mx-auto">
      <div className="basis-1/4 mx">
        <Dashboard />
      </div>
      <div className="basis-2/4 mx-5">
        <Content />
      </div>
      <div className="basis-1/4">
        <Trending />
      </div>
    </div>
  );
}
