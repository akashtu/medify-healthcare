import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MyContext = createContext();

export const AppContext = ({ children }) => {
  const [statename, setStateName] = useState("Alaska");
  const [cityname, setCityName] = useState("");

  const [hospitalbystate, setHospitalByState] = useState([]);

  // const [filteredData, setFilteredData] = useState([]);

  // const [newdata, setNewData] = useState([]);

  // setNewData(newArr);

  const [states, setStates] = useState([]);

  const [statechange, setStateChange] = useState("");
  // const [city, setCity] = useState([]);
  const URL = "https://meddata-backend.onrender.com";

  const filteredName = states.filter((value) =>
    value.toLowerCase().includes(statechange.toLowerCase())
  );
  const fetchData = async () => {
    const response = await axios.get(`${URL}/states`);
    const data = response.data;
    setStates(data);
  };
  useEffect(() => {
    if (filteredName) {
      setStates(filteredName);
    }
  }, [statechange]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000);
  }, [states]);

  // const handleClick = () => {
  //   const newArr = hospitalbystate.map((hospital) => ({
  //     ...hospital,
  //     bookingTime: time,
  //     bookingDate: date,
  //   }));

  //   localStorage.setItem("bookings", JSON.stringify(newArr));
  // };

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
        setStates,
        statechange,
        setStateChange,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
