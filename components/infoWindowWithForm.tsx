// InfoWindowWithForm.tsx

import React, { useState } from "react";
import { InfoWindow } from "@react-google-maps/api";

interface InfoWindowWithFormProps {
  marker: {
    address: string;
    description: string;
    type: string;
    position: { lat: number; lng: number };
  };
  onCloseClick: () => void;
  onDescriptionChange: (description: string) => void;
  disableDescription?: boolean; // New prop to disable modification
}

const InfoWindowWithForm: React.FC<InfoWindowWithFormProps> = ({
  marker,
  onCloseClick,
  onDescriptionChange,
  disableDescription = false, // Default value is false
}) => {
  const [formDescription, setFormDescription] = useState(marker.description);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onDescriptionChange(formDescription);
    onCloseClick();
  };

  return (
    <InfoWindow position={marker.position} onCloseClick={onCloseClick}>
      <div className="info-window-form">
        <h2>{marker.address}</h2>
        <p>
          <strong style={{ fontFamily: "Arial", color: "grey" }}>
            Type of place:
          </strong>{" "}
          <strong style={{ color: "grey" }}>
            <i>{marker.type}</i>
          </strong>
        </p>
        <form onSubmit={handleFormSubmit}>
          <label>
            <strong style={{ fontFamily: "Arial", fontSize: 18 }}>
              {" "}
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 📝✍🏻
            </strong>
            <textarea
              className="custom-textarea"
              value={formDescription}
              onChange={(e) =>
                !disableDescription && setFormDescription(e.target.value)
              }
              readOnly={disableDescription} // Make textarea read-only if modification is disabled
            />
          </label>
          <div className="save-button-container">
            {!disableDescription && (
              <button className="save-button" type="submit">
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </InfoWindow>
  );
};

export default InfoWindowWithForm;
