// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './App.css'


// function App() {
//   const [city, setCity] = useState('Ahmedabad')
//   const [weatherData, setWeatherData] = useState({})
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchWeatherData(city).then(data => setWeatherData(data));
//   }, [])

//   // console.log(import.meta.env.VITE_WEATHER_API_KEY) 
//   // mene yaha par ye mistake kari ki mene env variable ko direct hi name se likh ke use kiya but env variables ko use karte time "import.meta.env.VARIABLE_NAME" ese likhna hota hai.

//   // const handleSubmit = (event) => {
//   //   console.log('handle me aa gaya')
//   //   // e.preventdefault() 
//   //   // mene yaha par spelling mistake kari thi uss vajah se page baar baar refresh ho raha tha and output nahi mil raha tha.
//   //   event.preventDefault()
//   //   const weather = async () => {
//   //     // algo
//   //     // get weather data from api
//   //     // validate data
//   //     // extract data
//   //     // set data in weather state
//   //     // iss function ka itna hi kaam hai.


//   //     // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
//   //     // // console.log(response)
//   //     // // console.log(response.data) // output: undefined
//   //     // // console.log(await response.data) // output: undefined
//   //     // // const data = (await response).data // ab jab hame request karte time hi await likh diya hai to eseawait likhne ka koi mtlb nahi banata hai.
//   //     // const data = response.data
//   //     // // upper hame undefined iss liye mil raha tha kyuki response milne se pehle hi vo lines execute ho rahi thi so esa na ho iss liye hame pehle response jo await karvana hai then usme se data print karvana hai.
//   //     // // axios.get(...) ek asynchronous operation hai jo ek Promise return karta hai. Agar hum directly response.data access karenge bina await ke, to response abhi aaya hi nahi hoga, isliye undefined milega. Pehle await se response ka intezaar karna zaroori hai, tabhi data ko access kiya ja sakta hai.
//   //     // console.log(data)

//   //     try {
//   //       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)

//   //       if (!response) {
//   //         return 'no data found'
//   //       }

//   //       const data = response.data

//   //       setWeatherData({ data })
//   //     } catch (error) {
//   //       return 'no data found'
//   //     }
//   //   }
//   //   weather()
//   // }



//   const handleSubmit = async (event) => {
//     // console.log('handle me aa gaya')
//     // event.preventDefault()

//     // const wdata = await fetchWeatherData(city)
//     // // setWeatherData(() => fetchWeatherData())
//     // console.log("wdata:", wdata)

//     // setWeatherData(wdata)
//     // console.log(weatherData)
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const wdata = await fetchWeatherData(city);
//       setWeatherData(wdata);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }



//   const fetchWeatherData = async (city) => {
//     try {
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)

//       if (!response || response === '{}') {
//         return 'no data found'
//       }


//       // console.log(`ye response mila hai ${response}`) // output: ye response mila hai [object Object]
//       // console.log(`ye response mila hai ${JSON.stringify(response)}`) // isse upper vali problem solve ho jayegi.
//       // console.log(`response data: ${response.data}`) // response data: [object Object]
//       // const data = response.data
//       // console.log(`ye data appi se mila hai ${data}`) // ye data appi se mila hai [object Object]
//       // console.log('data: ', data) // iss vale me normal object me jo data mil raha hai vo show kar raha hai.
//       // so problem backtiks me hi hai. and yeh issue JavaScript ki automatic type conversion ki wajah se ho raha hai. Jab tum backticks (template literals) mein kisi object ko directly interpolate (${...}) karte ho, JavaScript use string mein convert karne ki koshish karti hai, aur object ka default string representation [object Object] hota hai.
//       return response.data

//     } catch (error) {
//       console.error('Error in fetching weather data:', error.message);
//       throw error; // Better to re-throw so calling function can handle
//     }

//   }


//   return (
//     <>
//       <form onSubmit={handleSubmit} >
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder='Enter Your City'
//         />
//         <input type="submit" value="Search" />
//       </form>
//       <div className="weather-data">
//         {/*<span> city name: {weatherData}</span>*/} {/** yaha me direct weatherData object ko hi print karva raha tha but react automatically object ko string me convert nahi kar paata hai. */}
//         {weatherData && (
//           <>
//             <h3>City Name: {weatherData.name}</h3>
//             {/* <h3>Temperature: {(weatherData.main?.temp - 273).toLocaleString().slice(0, 5)}°C</h3> */}
//             <h3>Temperature: {Math.round(weatherData.main?.temp - 273.15)}°C</h3>
//             <h3>Weather: {weatherData.weather?.[0]?.description}</h3>
//           </>
//         )}
//       </div>
//     </>
//   )
// }

// export default App


// // https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/
// // https://openweathermap.org/current#list
// // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
// // chat gpt project conversation




//-----------------------------------------------------------------------------------------------//
//                                        code by deepseek
//-----------------------------------------------------------------------------------------------//



// import { useEffect, useState } from 'react';
// import axios from 'axios';
// // import './App.css';

// function App() {
//   const [city, setCity] = useState('Ahmedabad');
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchWeatherData(city);
//       setWeatherData(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!city.trim()) {
//       setError('Please enter a city name');
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);
//       const data = await fetchWeatherData(city);
//       setWeatherData(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchWeatherData = async (city) => {
//     if (!import.meta.env.VITE_WEATHER_API_KEY) {
//       throw new Error('API key missing');
//     }

//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
//       );

//       if (!response?.data) {
//         throw new Error('Invalid API response');
//       }

//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Weather App</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder='Enter Your City'
//           disabled={loading}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </form>

//       {error && <div className="error-message">{error}</div>}

//       {loading && <div className="loading">Loading...</div>}

//       {weatherData && !loading && (
//         <div className="weather-card">
//           <h2>{weatherData.name}, {weatherData.sys?.country}</h2>
//           <div className="weather-info">
//             <div className="temperature">
//               {Math.round(weatherData.main?.temp - 273.15)}°C
//             </div>
//             <div className="details">
//               <div>Feels like: {Math.round(weatherData.main?.feels_like - 273.15)}°C</div>
//               <div>Humidity: {weatherData.main?.humidity}%</div>
//               <div>Wind: {weatherData.wind?.speed} m/s</div>
//             </div>
//           </div>
//           <div className="weather-condition">
//             <img 
//               src={`http://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`} 
//               alt={weatherData.weather?.[0]?.description}
//             />
//             <div>{weatherData.weather?.[0]?.description}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





//-----------------------------------------------------------------------------------------------//
//                                        code by chatGPT
//-----------------------------------------------------------------------------------------------//

// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [city, setCity] = useState("Surat");
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setWeatherData(null);

//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
//       );
//       setWeatherData(response.data);
//     } catch (err) {
//       setError("❌ City not found or API error!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
//       <h1 className="text-3xl font-bold mb-6 text-blue-800">🌤️ Weather App</h1>

//       <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter your city"
//           className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           Search
//         </button>
//       </form>

//       {loading && <p className="text-gray-700 text-lg">Fetching weather... 🔄</p>}

//       {error && <p className="text-red-600 text-lg">{error}</p>}

//       {weatherData && weatherData.name && (
//         <div className="bg-white shadow-lg rounded-xl p-6 text-center w-80 mt-4">
//           <h2 className="text-2xl font-semibold text-blue-700">{weatherData.name}</h2>
//           <p className="text-xl mt-2">
//             🌡️ Temp: {(weatherData.main?.temp - 273.15).toFixed(2)}°C
//           </p>
//           <p className="text-lg mt-1">
//             ☁️ Weather: {weatherData.weather?.[0]?.description}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




//--------------------------------------------------------------------//

// import { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// function App() {
//   const [city, setCity] = useState("Surat");
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setWeatherData(null);

//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
//       );
//       setWeatherData(response.data);
//     } catch (err) {
//       setError("❌ City not found or API error!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-200 to-blue-400 p-4 transition-all">
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold mb-6 text-blue-900 text-center"
//       >
//         ☀️ Weather App
//       </motion.h1>

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
//       >
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter your city"
//           className="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//         />
//         <button
//           type="submit"
//           className="px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
//         >
//           Search
//         </button>
//       </form>

//       {loading && (
//         <p className="text-lg text-white mt-4 animate-pulse">Loading... ⏳</p>
//       )}

//       {error && (
//         <p className="text-red-100 bg-red-500 px-4 py-2 rounded mt-4 shadow">
//           {error}
//         </p>
//       )}

//       {weatherData && weatherData.name && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mt-6 bg-white rounded-xl p-6 shadow-xl w-full max-w-md text-center"
//         >
//           <h2 className="text-2xl font-semibold text-blue-800">
//             📍 {weatherData.name}
//           </h2>
//           <img
//             src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
//             alt="Weather icon"
//             className="mx-auto w-20 h-20"
//           />
//           <p className="text-xl text-gray-700">
//             🌡️ {(weatherData.main?.temp - 273.15).toFixed(2)}°C
//           </p>
//           <p className="text-lg capitalize text-gray-600">
//             ☁️ {weatherData.weather?.[0]?.description}
//           </p>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default App;



//------------------------------------------------------------------------//
//                              approved
//------------------------------------------------------------------------//


// import { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// function App() {
//   const [city, setCity] = useState("Surat");
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setWeatherData(null);

//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
//       );
//       setWeatherData(response.data);
//     } catch (err) {
//       setError("❌ City not found or API error!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-200 to-red-300 p-4 transition-all">
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold mb-6 text-red-900 text-center drop-shadow"
//       >
//         🌞 Live Weather Report
//       </motion.h1>

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
//       >
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name..."
//           className="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//         />
//         <button
//           type="submit"
//           className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//         >
//           🔍 Search
//         </button>
//       </form>

//       {loading && (
//         <p className="text-lg text-red-900 mt-4 animate-pulse">Loading... ⏳</p>
//       )}

//       {error && (
//         <p className="text-red-100 bg-red-500 px-4 py-2 rounded mt-4 shadow">
//           {error}
//         </p>
//       )}

//       {weatherData && weatherData.name && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mt-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-2xl w-full max-w-md text-center"
//         >
//           <h2 className="text-2xl font-bold text-red-800">
//             📍 {weatherData.name}, {weatherData.sys?.country}
//           </h2>

//           <img
//             src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
//             alt="Weather icon"
//             className="mx-auto w-20 h-20"
//           />

//           <div className="text-lg text-gray-700 space-y-1 mt-2">
//             <p>
//               🌡️ Temp:{" "}
//               <span className="font-medium">
//                 {(weatherData.main?.temp - 273.15).toFixed(2)}°C
//               </span>
//             </p>
//             <p>
//               🤒 Feels Like:{" "}
//               {(weatherData.main?.feels_like - 273.15).toFixed(2)}°C
//             </p>
//             <p>💧 Humidity: {weatherData.main?.humidity}%</p>
//             <p>🌬️ Wind Speed: {weatherData.wind?.speed} m/s</p>
//             <p>📋 Pressure: {weatherData.main?.pressure} hPa</p>
//             <p className="capitalize">
//               ☁️ Condition: {weatherData.weather?.[0]?.description}
//             </p>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default App;



//------------------------------------------------------------------------------//
//                                  approved
//------------------------------------------------------------------------------//


import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [city, setCity] = useState("Ahmedabad");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [cords, setCords] = useState({
  //   latitude: '',
  //   longitude: ''
  // })
  // upper mene jese cords banaye hai vese na bana ke isse me null set kar deta hu jese weatherData ko GPT ne null set kiya hai then usme weather data ka object set karva diya tha vese hi me iss cords me pura coords ka object hi set karva dunga and usme se latitude and lonngitude ki values le lunga. 
  const [cords, setCords] = useState(null) // i think hamne ye cords ka use hi nahi kiya direct hi kaam kar liya.


  // useEffect(() => {

  //   // const userLocation = navigator.geolocation.getCurrentPosition() // isse ham ese hi use nahi kar skte hai ham iske liye getCurrentPosition() me ek callback functino dena padega. joki hame latitude and longitude batayega, i think return nahi karega only batayega.
  //   // const userLocation = navigator.geolocation.getCurrentPosition((position) => { // upper hame iss variable ko alag se banane ki koi jaroorat nahi hai, kyuki usme koi value hi store nahi ho rahi hai, kyuki navigator and uske functions kuch return nahi rahe hai
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log('cords data:', position.coords)

  //     setCords(position.coords)
  //   })
  //   // console.log("user location:", userLocation) // yaha hame data kyu nahi mila iska reason mene yaha likha hai, const userLocation = navigator.geolocation.getCurrentPosition()

  //   if (cords && Object.keys(cords).length !== 0) {
  //     fetchWeatherByCords(cords.latitude, cords.longitude)
  //     return
  //   }

  //   setLoading(true);
  //   fetchWeatherData(city);

  // }, [])
  /**
   * upper vale useEffect me thodi dikkar ho gayi hai,and if me dependecy array me cords ko pass karta hu to ek infinite loop fas jata hai and esa iss liye ho raha hai kyuki, React me setState() asynchronous hoti hai, to cords turant update nahi hoti — isliye if (cords...) usi moment pe undefined ya purani value rehti hai and cords chenge hota hai and hame cords ko dependensy array me daal rakha hai iss liye useEffect() bar bar run ho raha hai.
   * 
   * iska solution hamne README.md me likha hai.
   */

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      fetchWeatherByCords(coords.latitude, coords.longitude);
    }, (err) => {
      // user denied or failed — fallback to default city
      setLoading(true);
      // console.log("city ko calling....")
      fetchWeatherData(city);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setWeatherData(null);

    // try {
    //   const response = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    //   );
    //   setWeatherData(response.data);
    // } catch (err) {
    //   setError("❌ City not found or API error!");
    // } finally {
    //   setLoading(false);
    // }
    fetchWeatherData(city)
  };

  const fetchWeatherData = async (cityName) => {
    // console.log("fetch city function call")
    try {
      // console.log("city called try")
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
      if (!response || Object.keys(response).length === 0) {
        // console.log("response hi nahi mila")
        setError("response hi nahi mila")
        return
      }
      setWeatherData(response.data);
    } catch (err) {
      // console.log("city called catch")
      setError("❌ City not found or API error! by city");
    } finally {
      setLoading(false);
      setCity("")
    }
  };

  const fetchWeatherByCords = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
      setWeatherData(response.data);
    } catch (err) {
      setError("❌ City not found or API error! by cords");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 text-white transition-all">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-cyan-300 tracking-wide text-center drop-shadow"
      >
        {/* 🌙 Night Weather App */}
        Weather App
      </motion.h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
        >
          🔍 Search
        </button>
      </form>

      {loading && (
        <p className="text-lg text-cyan-300 mt-4 animate-pulse">Loading... 🌌</p>
      )}

      {error && (
        <p className="text-red-400 bg-red-800 px-4 py-2 rounded mt-4 shadow">
          {error}
        </p>
      )}

      {weatherData && weatherData.name && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 bg-gray-800/70 backdrop-blur-xl rounded-xl p-6 shadow-2xl w-full max-w-md text-center border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-cyan-300">
            📍 {weatherData.name}, {weatherData.sys?.country}
          </h2>

          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
            alt="Weather icon"
            className="mx-auto w-20 h-20"
          />

          <div className="text-lg text-gray-300 space-y-1 mt-2">
            <p>
              🌡️ Temp:{" "}
              <span className="text-cyan-300 font-medium">
                {(weatherData.main?.temp - 273.15).toFixed(2)}°C
              </span>
            </p>
            <p>🤒 Feels Like: {(weatherData.main?.feels_like - 273.15).toFixed(2)}°C</p>
            <p>💧 Humidity: {weatherData.main?.humidity}%</p>
            <p>🌬️ Wind Speed: {weatherData.wind?.speed} m/s</p>
            <p>📋 Pressure: {weatherData.main?.pressure} hPa</p>
            <p className="capitalize">
              ☁️ Condition: {weatherData.weather?.[0]?.description}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;


