// @refresh disable

import { useLoadScript, Libraries } from "@react-google-maps/api";
import { AuthProvider } from "../pages/AuthContext";
import Map from "../components/map";

// Définissez les bibliothèques en dehors de la fonction du composant
const libraries2: Libraries = ["places"];

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries2,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
