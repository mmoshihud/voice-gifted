import CountUp from "react-countup";

const Counter = ({ number, title, color }) => {
  return (
    <div className={`text-center text-4xl font-bold ${color}`}>
      <CountUp duration={10} className="counter" end={number} />
      <div className="text-3xl">{title}</div>
    </div>
  );
};

export default Counter;
