import { HeroesList } from "../component";

export const DcPage = () => {
  return (
    <div>
      <h1 className="mt-4">DC HEROES</h1>
      <hr />
      <HeroesList publisher="DC Comics" />
    </div>
  );
};
