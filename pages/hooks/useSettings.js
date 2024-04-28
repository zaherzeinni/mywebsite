import { SettingsContext } from "@/functions/context/SettingContext";
import { useContext } from "react";
const useSettings = () => useContext(SettingsContext);
export default useSettings;