import { useState } from "react";

export default function Checkbox({ label }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <span className="d-flex align-items-center gap-1 cursor-pointer" onClick={()=> setIsSelected(!isSelected)}>
      {isSelected ? (
        <img src="/icons/check_active.svg" alt="checkbox" />
      ) : (
        <div className="border-primary border" style={{width:"1rem", height:"1rem"}}></div>
      )}
      {label}
    </span>
  );
}
