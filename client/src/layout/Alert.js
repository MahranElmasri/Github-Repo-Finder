import React from "react";

export default function Alert({ alert }) {
  return (
    alert !== null && (
      <div className={`alert alert-danger`}>
        <i className="fas fa-info-circle">{alert}</i>
      </div>
    )
  );
}
