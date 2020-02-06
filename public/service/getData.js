import Axios from "axios";

export const getAreaData = () => Axios("../data/area.json");
export const getGeoJson = () => Axios("../data/china.json");
