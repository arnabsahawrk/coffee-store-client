import { PacmanLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="sweet-loading mr-10 py-10">
        <PacmanLoader color="#331A15" loading={true} size={30} />
      </div>
    </div>
  );
};

export default Spinner;
