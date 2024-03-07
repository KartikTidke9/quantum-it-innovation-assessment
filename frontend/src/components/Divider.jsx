export default function Divider({ height, bgColor }) {
  return (
    <div
      className={`w-100 ${bgColor} my-3`}
      style={{ height, backgroundColor: bgColor }}
    ></div>
  );
}
