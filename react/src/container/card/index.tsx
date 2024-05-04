import { Title } from "../../components/title";
import { Picture } from "../../components/picture";
import { Description } from "../../components/description";

function Card(props: any) {
  return (
    <div className="container max-w-full border p-3 mt-5 rounded-xl border-neutral-200 mx-auto">
      <Title title={props.title} />
      <Description description={props.description} />
      <Picture picture={props.picture} />
    </div>
  );
}

export default Card;
