import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading" />
      <h1>Loading Data</h1>
    </div>
  );
};

export default Spinner;
