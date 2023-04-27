const Switch = ({ status, setStatus }) => {
  return (
    <div>
      <button
        className={status === true ? "purple" : "white"}
        onClick={() => {
          setStatus(!status);
        }}
      >
        ON
      </button>
      <button
        className={status === false ? "purple" : "white"}
        onClick={() => {
          setStatus(!status);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
