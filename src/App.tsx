import "./styles.css";

const heights = [0,1,0,2,1,0,1,3,2,1,2,1]

export default function App() {
  return (
    <div style={{flex: 1, flexDirection: "row"}}>
    {heights.map((height, index) => (
<div>{height}</div>
    ))}
    </div>
  );
}
