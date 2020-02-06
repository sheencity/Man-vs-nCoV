import Axios from "axios";

export const getAreaData = () => Axios("../data/area.json");