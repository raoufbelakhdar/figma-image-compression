import React from "react";
import CheckSuccess from "../img/icons/check-success.svg?raw";
import Icon12 from "../img/icons/icon-12.svg?raw";
import "./Image.css";

interface Props {
  id: number;
  name: string;
  ext: string;
  size: string;
  checked: boolean;
  onSelected: (id: number, val: boolean) => void
}

const ImageItem = ({id,  name, ext, size, checked, onSelected }: Props) => {
  
  return (
    <div className="image-container">
      <div className="form-check">
        <label className="form-check-label second-text-color">
          <input className="form-check-input" type="checkbox"
            onChange={(e) => onSelected(id, e.target.checked)}
            checked={checked}
          />
          {name}
        </label>
      </div>

      <div className="image-details">
        <small className="small second-text-color">{ext.toUpperCase()}</small>
        <h6 className="h6 second-text-color" style={{ marginLeft: "15px" }}>
          {size.toUpperCase()}
        </h6>
        <img
          className="rotate loading-icon"
          src={`data:image/svg+xml;utf8,${Icon12}`}
          alt=""
        />
        <img
          className="success-icon"
          src={`data:image/svg+xml;utf8,${CheckSuccess}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageItem;
