import Axios from "axios";

export const getAreaData = () => Axios("../data/area.json");
export const getGeoJson = () => Axios("../data/china.json");
export const getnCovData = () => Axios("../data/nCov.json");
export const getHospitalData = () => Axios("../data/hospital.json");
