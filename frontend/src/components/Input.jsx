export default function Input({
  value,
  placeholder,
  onChange,
  type,
  icon,
}) {
  return (
    <div className="input-group flex-nowrap">
      <span className="input-group-text bg-secondary rounded-start-4 ctext-dark-subtle shadow-none border-0 p-3">
        {typeof icon === "string" ? <img src={icon} alt="icon" /> : icon}
      </span>
      {icon && (
        <div className="cbg-dark-subtle my-2" style={{ width: "2px" }}></div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-control p-3 bg-secondary shadow-none outline-0 text-white border-0 rounded-end-4"
        placeholder={placeholder}
      />
    </div>
  );
}
