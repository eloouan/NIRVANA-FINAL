import { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

type PlacesProps = {
  setOffice: (
    address: string,
    description: string,
    type: string,
    position: google.maps.LatLngLiteral
  ) => void;
  createMarker: (type: string) => void;
};

export default function Places({ setOffice, createMarker }: PlacesProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [markerType, setMarkerType] = useState<string>("default");
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [showMarkerInput, setShowMarkerInput] = useState(false);
  const [typeValue, setTypeValue] = useState<string>("");

  const handleMarkerTypeSelect = (selected: string) => {
    setMarkerType(selected);
    setTypeValue(selected); // Store the selected type
    createMarker(selected);
    setIsOptionSelected(true);
  };

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    const address = val;
    const type = typeValue; // Access the stored type
    const description = val;
    setOffice(address, description, type, { lat, lng });

    setShowMarkerInput(true);
  };

  return (
    <div>
      <Combobox onSelect={handleMarkerTypeSelect}>
        <ComboboxInput
          value={typeValue}
          onChange={(e) => {
            setTypeValue(e.target.value);
            setIsOptionSelected(false);
            setShowMarkerInput(false);
          }}
          disabled={!ready}
          className="combobox-input input-field"
          placeholder="What type of place is this?"
        />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption value="restaurant 🍗" />
            <ComboboxOption value="shopping 🎁" />
            <ComboboxOption value="cinema 🎥" />
            <ComboboxOption value="school 👨‍🏫" />
            <ComboboxOption value="park 🌲" />
            <ComboboxOption value="gym 💪" />
            <ComboboxOption value="transport 🚊" />
            <ComboboxOption value="bar 🍺" />
            <ComboboxOption value="theater 🎭" />
            <ComboboxOption value="swimming pool 🏊" />
            <ComboboxOption value="ice cream shop 🍦" />
            <ComboboxOption value="church ⛪" />
            <ComboboxOption value="clothing store 👜" />
            <ComboboxOption value="bakery 🥐" />
            <ComboboxOption value="hotel 🛏️" />
            <ComboboxOption value="museum 🎨" />
            <ComboboxOption value="night club 🍸" />
            <ComboboxOption value="tourist attraction 🗿" />
            <ComboboxOption value="sport 🏓" />
            <ComboboxOption value="beach ⛱️" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      {isOptionSelected && (
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setShowMarkerInput(false);
            }}
            disabled={!ready}
            className="combobox-input input-field"
            placeholder="What's the place's address?"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      )}
    </div>
  );
}
