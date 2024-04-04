import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MyContext = createContext();

export const AppContext = ({ children }) => {
  const [statename, setStateName] = useState("Alaska");
  const [cityname, setCityName] = useState("");

  const [hospitalbystate, setHospitalByState] = useState([]);

  const [states, setStates] = useState([]);
  // const [city, setCity] = useState([]);
  const URL = "https://meddata-backend.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${URL}/states`);
      const data = await response.data;
      setStates(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataByStateName = async () => {
      if (cityname) {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${statename}&city=${cityname}`
        );
        const data = response.data;
        setHospitalByState(data);
        return;
      }
      const response = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${statename}`
      );
      const data = response.data;
      setHospitalByState(data);
    };
    fetchDataByStateName();
  }, [statename, cityname]);

  return (
    <MyContext.Provider
      value={{
        states,
        hospitalbystate,
        statename,
        setStateName,
        cityname,
        setCityName,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
