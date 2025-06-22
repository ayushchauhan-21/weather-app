# weather app


https://openweathermap.org/api/one-call-3

openweather ki main api giude link: https://openweathermap.org/current#one

WEATHER_API_BY_LAT_LON = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

WEATHER_API_BY_CITY_NAME = https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}

https://api.openweathermap.org/data/2.5/weather?lat=23.015759&lon=72.599686&appid={API_key}
- upper vali api se ye response milta hai,
reaponse:
```js
{
  "coord": {
    "lon": 72.5997,
    "lat": 23.0158
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 302.09,
    "feels_like": 306.31,
    "temp_min": 302.09,
    "temp_max": 302.09,
    "pressure": 1001,
    "humidity": 73,
    "sea_level": 1001,
    "grnd_level": 995
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.67,
    "deg": 258,
    "gust": 8.91
  },
  "clouds": {
    "all": 100
  },
  "dt": 1750300557,
  "sys": {
    "country": "IN",
    "sunrise": 1750292670,
    "sunset": 1750341441
  },
  "timezone": 19800,
  "id": 1279233,
  "name": "Ahmedabad",
  "cod": 200
}
```

https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation

chatGPT: Project Conversation
https://youtu.be/cwUuVdF8ohY?si=8CvkjBhET3fbkhir

what is latitude and longitude?

https://youtu.be/cwUuVdF8ohY?si=8CvkjBhET3fbkhir

Latitude and longitude are geographic coordinates that define a location on Earth. Latitude measures the distance north or south of the equator, while longitude measures the distance east or west of the Prime Meridian. [1, 2, 3, 4, 5] 

Latitude: 

• Latitude lines, also known as parallels, run horizontally around the Earth, parallel to the equator. [6, 7]  
• The equator is the starting point for latitude, designated as 0 degrees. [2, 8]  
• Latitude is measured in degrees, minutes, and seconds, ranging from 0° at the equator to 90° at the North and South Poles. [5, 8]  
• Locations north of the equator are labeled with "N" (North) and those south are labeled "S" (South). [5, 8]  

Longitude: 

• Longitude lines, also known as meridians, run vertically from the North Pole to the South Pole. [7, 9]  
• The Prime Meridian, passing through Greenwich, England, is the starting point for longitude, designated as 0 degrees. [2, 4, 10, 11, 12]  
• Longitude is also measured in degrees, minutes, and seconds, ranging from 0° at the Prime Meridian to 180° on the opposite side of the Earth. [4, 8]  
• Locations east of the Prime Meridian are labeled with "E" (East) and those west are labeled "W" (West). [4, 8]  

Together, latitude and longitude create a grid system that allows us to pinpoint any location on Earth with a unique address. [2, 13]  

---

what is equator?
The equator is an imaginary line that circles the Earth at 0 degrees latitude, dividing the planet into the Northern and Southern Hemispheres. It is equidistant from the North and South Poles. [1, 2]  
Here's a more detailed explanation: 

• Imaginary Line: The equator is not a physical line on the Earth's surface, but rather an imaginary line used as a reference point for geographic coordinates. [1]  
• Latitude: It represents 0 degrees latitude, and all other lines of latitude are measured in degrees north or south of the equator. [1, 3]  
• Hemispheres: The equator divides the Earth into two equal halves: the Northern Hemisphere (north of the equator) and the Southern Hemisphere (south of the equator). [1]  
• Equinox: The equator is also significant in astronomy because the Sun is directly overhead at noon during the spring and autumn equinoxes. [4]  
• Location: The equator passes through several countries in South America, Africa, and Asia. [5, 6, 7]  



what is prime meridian?
The prime meridian is an imaginary line of longitude, specifically at 0 degrees, that divides the Earth into the Eastern and Western Hemispheres. It serves as the reference point for measuring longitude and is also the basis for the world's time zones. It passes through Greenwich, England, and is sometimes referred to as the Greenwich meridian. [1, 2]  
Here's a more detailed explanation: 

• Longitude: The prime meridian is the starting point for measuring longitude, which indicates the east-west position of a location on Earth. [1, 3]  
• Hemispheres: It, along with the 180th meridian, creates the Eastern and Western Hemispheres. [2, 4, 5]  
• Time Zones: The prime meridian is the basis for the world's time zones, with locations east of Greenwich being ahead of Greenwich Mean Time (GMT) and those west being behind. [1, 6]  
• Greenwich: The prime meridian is specifically located at the Royal Observatory in Greenwich, England. [1, 2, 7]  




## what is preventDefault() in js ?

In JavaScript, event.preventDefault() is a method of the Event interface that is used to prevent the browser's default action associated with a specific event. 
Purpose: 
Many HTML elements and browser events have default behaviors. For example: 

• Clicking an &lt;a&gt; (anchor) tag with an href attribute will navigate to the specified URL. 
• Submitting a &lt;form&gt; will typically cause a page refresh or navigation to the action attribute's URL. 
• Clicking a checkbox will toggle its checked state. 

event.preventDefault() allows developers to override these default behaviors and implement custom logic instead. 
Usage: 
The method is called on the event object within an event handler function. 
element.addEventListener('event_type', function(event) {
  event.preventDefault();
  // Custom logic to be executed instead of the default behavior
});

Examples: 
Preventing link navigation. 
    document.getElementById('myLink').addEventListener('click', function(event) {
      event.preventDefault();
      alert('Link navigation prevented!');
      // Perform custom action, e.g., open a modal
    });

Preventing form submission. 
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Perform form validation, send data via AJAX, etc.
      console.log('Form submission prevented, handling data with JavaScript.');
    });

Important Note: 
event.preventDefault() only prevents the default action of the event. It does not stop the event from propagating further up or down the DOM tree (bubbling or capturing phases). To stop event propagation, event.stopPropagation() is used in conjunction with event.preventDefault(). 



## Problem: yaha city name me maine object pass kiya tha vo print nahi ho raha hai.
```JSX
return (
    <>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter Your City'
        />
        <input type="submit" value="Search" />
      </form>
      <div className="weather-data">
        <span> city name: {weatherData}</span> {/** yaha me direct weatherData object ko hi print karva raha tha but react automatically object ko string me convert nahi kar paata hai. */}
      </div>
    </>
  )
```

### Solution: 
#### City Name Display nahi ho raha - Issue Solution

Bhai, problem yeh hai ki tum `weatherData` ko directly display kar rahe ho jo ek complete API response object hai. Tumhe usme se city name extract karna padega.

##### Problem Breakdown:

1. Tumhara `weatherData` poora API ka response store karta hai (object form mein)
2. React automatically objects ko string mein convert nahi kar pata
3. Isliye tumhe specific property access karni padegi

##### Solution Code:

```jsx
return (
  <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='Enter Your City'
      />
      <input type="submit" value="Search" />
    </form>
    
    <div className="weather-data">
      {/* Yahan weatherData se city name extract karo */}
      {weatherData && (
        <>
          <span>City Name: {weatherData.name}</span>
          <span>Temperature: {weatherData.main?.temp}°C</span>
          <span>Weather: {weatherData.weather?.[0]?.description}</span>
        </>
      )}
    </div>
  </>
)
```

##### Important Points:

1. **Optional Chaining (`?.`)** use kiya hai taki agar data na ho toh error na aaye
2. `weatherData &&` check karta hai ki data available hai ya nahi
3. OpenWeatherMap API response structure ke according:
   - City name: `weatherData.name`
   - Temperature: `weatherData.main.temp`
   - Weather condition: `weatherData.weather[0].description`

##### Agar sirf city name hi chahiye:

```jsx
<span>City Name: {weatherData?.name || "Search for a city"}</span>
```

##### Complete Example:

```javascript
const [weatherData, setWeatherData] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = await fetchWeatherData(city);
  setWeatherData(data);
};

// API call function
const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
```

Bhai, agar koi aur issue ho ya API response ka structure different ho toh batana! 🚀

## Quetion: What is optional chainig "?." operator.

### Answer:

Optional chaining in JavaScript is a feature introduced in ECMAScript 2020 (ES2020) that allows for safely accessing nested object properties, array elements, or calling functions without explicitly checking if each intermediate reference in the chain is null or undefined.

How it works: 

The optional chaining operator ?. is used to access a property or call a method. If the object or property being accessed using ?. is null or undefined, the expression short-circuits and immediately evaluates to undefined instead of throwing a TypeError. [2]  
Key forms of optional chaining: 

• obj?.prop: Accesses prop if obj exists; otherwise, returns undefined. 
• obj?.[expr]: Accesses the property determined by expr if obj exists; otherwise, returns undefined. This is useful for dynamic property names. 
• obj.method?.(): Calls method if it exists on obj; otherwise, returns undefined. 

Benefits: 

• Conciseness: Reduces the need for repetitive null or undefined checks, leading to cleaner and more readable code. 
• Error Prevention: Prevents TypeError exceptions that would otherwise occur when attempting to access properties or call methods on null or undefined values. 
• Improved Readability: Makes the intent of the code clearer, as it explicitly signals that a property or method might not exist. 

Example: 
```js
const user = {
  profile: {
    address: {
      street: "123 Main St"
    }
  }
};

// Without optional chaining (requires explicit checks)
let streetName;
if (user && user.profile && user.profile.address) {
  streetName = user.profile.address.street;
}

// With optional chaining (more concise)
const streetNameOptional = user?.profile?.address?.street;

console.log(streetNameOptional); // Output: 123 Main St

const nonExistentUser = {};
const nonExistentStreet = nonExistentUser?.profile?.address?.street;
console.log(nonExistentStreet); // Output: undefined (no error)

```

<br>
<br>

## Problem:

ab mujhe ye batao ki ye,
```js
console.log((0123456.7890).toLocaleString().slice(0,2))
```
```js
"SyntaxError: Unexpected number"
```
de raha hai but ye,
```js
console.log((123456.7890).toLocaleString().slice(0,2))
```
sahi se execute ho raha hai esa kyu?
and jab mujhe esa laga ki number ke aage 0 lagane se may be ye number nahi ho raha means iska type kuch aur ho jaa raha hai ya convert ho raha hai to mene normal number ka type check kiya to,
```js
console.log(typeof 42)
``` 
to iska output number mila and then mene iska output check kiya 
```js
console.log(typeof 042)
```
to iska bhi mujhe number hi mila to fir kya dikkat ho rahi hai bhai?

### solution:

Bhai tu bahut hi **observant** point pakda hai 🔥
Ye wali confusion **JavaScript ke number literal system** ke ek purane quirk ki wajah se ho rahi hai.

---

#### 🧠 JavaScript me agar **0 se koi number start hota hai**, jaise:

```js
0123456
```

...to JavaScript **isse Octal (base-8)** number **samajhne ki koshish karti hai** (especially in non-strict mode ya old JS engines me).

---

#### ⚠️ Isiliye ye error milta hai:

```js
console.log((0123456.7890).toLocaleString().slice(0,2))
```

* Yahan decimal point (`.7890`) ke wajah se JS confuse ho jata hai:

> "Bhai tu to octal likh raha tha, beech me point kaise aa gaya? 😕"

👉 **Invalid number** ban jaata hai — `SyntaxError: Unexpected number`

---

#### ✅ Aur ye sahi hai:

```js
console.log((123456.7890).toLocaleString().slice(0,2))
```

* Koi octal confusion nahi, normal decimal hai.

---

#### 🔍 But phir `typeof 042` bhi `number` hi aata hai?

Bilkul, sahi pakda!

```js
typeof 042 // → 'number'
```

Kyunki:

* `042` **valid octal number** hai (base-8 me: 4×8 + 2 = 34)
* JavaScript usse parse karke decimal me convert kar deta hai internally
* Isliye type `"number"` hi aata hai

---

#### ✅ Modern JS me kya karna chahiye?

* **Avoid karo leading 0** in number literals (except 0 itself)
* Agar intentionally **octal** likhna ho to ES6 se syntax hai: `0o42`

  ```js
  console.log(0o42) // 34
  ```

---

#### 🧼 Final Tip:

```js
// WRONG
(0123.45)

// RIGHT
(123.45)
```

Aage se leading zero avoid karna unless tumhara purpose **octal** ho.

---

Tera doubt 🔥 real dev ke jaise tha bhai. Ye wali depth kam log explore karte. Keep going!

<br>
<br>

## Problem: 

### 1. page load hone par vo location ki accesse hi mangte reh jata hai and tab tak default vala case hi run ho jata hai. ye empty dependency array ke time hota hai and 

### 2. cords ko dependency array me add karne se infinite loop create ho rahi hai. ye dependency array me jab ham cords ko pass karte hai tab hota hai.

```js
useEffect(() => {
    
    // const userLocation = navigator.geolocation.getCurrentPosition() // isse ham ese hi use nahi kar skte hai ham iske liye getCurrentPosition() me ek callback functino dena padega. joki hame latitude and longitude batayega, i think return nahi karega only batayega.
    // const userLocation = navigator.geolocation.getCurrentPosition((position) => { // upper hame iss variable ko alag se banane ki koi jaroorat nahi hai, kyuki usme koi value hi store nahi ho rahi hai, kyuki navigator and uske functions kuch return nahi rahe hai
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('cords data:', position.coords)

      setCords(position.coords)
    })
    // console.log("user location:", userLocation) // yaha hame data kyu nahi mila iska reason mene yaha likha hai, const userLocation = navigator.geolocation.getCurrentPosition()

    if (cords && Object.keys(cords).length !== 0) {
      fetchWeatherByCords(cords.latitude, cords.longitude)
      return
    }

    setLoading(true);
    fetchWeatherData(city);

  // }, []) // pehle esa empty array tha, iss se default vala code means jo city hamne default add kar rakhi hai vo hi show ho rahi hai. and page load hone par vo location ki accesse hi mangte reh jata hai and tab tak default vala case hi run ho jata hai.
  }, [cords]) // but ab array me cords likhne se pura program infinite loop me fas jaa raha hai.
```

### solution: upper vali dono problem ka solution niche hai,

Bhai **95% kaam to tu sahi kar gaya hai** 💯
Bas ek chhoti si logical dikkat hai — useEffect ke andar **asynchronous state update (`setCords`) ke just baad tu check kar raha hai `if (cords)`**, lekin wo turant update nahi hoti ⚠️

---

#### 🔍 Kya dikkat hai:

```js
navigator.geolocation.getCurrentPosition((position) => {
  setCords(position.coords);
});

if (cords && Object.keys(cords).length !== 0) {
  fetchWeatherByCords(cords.latitude, cords.longitude); // ❌ yeh turant chalega, lekin cords abhi update nahi hui
}
```

React me `setState()` **asynchronous hoti hai**, to `cords` turant update nahi hoti — isliye `if (cords...)` usi moment pe `undefined` ya purani value rahegi.

---

#### ✅ Solution (Do tarike):

##### ✅ **Option 1: Directly call fetch inside geolocation callback**

```js
navigator.geolocation.getCurrentPosition((position) => {
  const coords = position.coords;
  setCords(coords); // optional
  fetchWeatherByCords(coords.latitude, coords.longitude); // ✅ best place
});
```

➡️ Yaha koi `if (cords)` ki jarurat hi nahi hai, kyunki jab data milega, tabhi call hoga.

---

##### ✅ **Option 2 (Alternative): Separate `useEffect` on `cords`**

```js
useEffect(() => {
  if (cords && Object.keys(cords).length !== 0) {
    fetchWeatherByCords(cords.latitude, cords.longitude);
  }
}, [cords]);
```

➡️ Lekin is case me tu pehle `setCords(...)` karega, aur doosre `useEffect` me wo change sunega.

---

#### 🔚 Final Suggestion:

UseEffect me bas ye likh:

```js
useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = position.coords;
    fetchWeatherByCords(coords.latitude, coords.longitude);
  }, (err) => {
    // user denied or failed — fallback to default city
    setLoading(true);
    fetchWeatherData(city);
  });
}, []);
```

---

Tu already pro-level tarike se soch raha hai bhai 👑
Bas chhoti async cheezein React me tricky hoti hain — tu seekh gaya ab ✅

<br>
<br>

## Question: empty object kese check karte hai?

### Solution:

- To check if an object is empty in JavaScript, the most common and reliable method involves using ``Object.keys()``. 
```js
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const emptyObj = {};
const filledObj = { name: 'Alice' };

console.log(isObjectEmpty(emptyObj)); // Output: true
console.log(isObjectEmpty(filledObj)); // Output: false
```

<br>

Explanation: 

- ``Object.keys(obj)``: This static method returns an array of a given object's own enumerable string-keyed property names. 

- ``.length``: If the object has no enumerable properties, ``Object.keys()`` will return an empty array, and its ``length`` property will be ``0``. 
- ``=== 0``: Comparing the length to ``0`` determines if the object is empty. 

<br>
<br>

Considerations: 

- This method primarily checks for enumerable properties. If an object has non-enumerable properties, they will not be included in the array returned by ``Object.keys()``, and the object might be considered "empty" even if it has such properties. If you need to account for non-enumerable properties, Object.``getOwnPropertyNames()`` can be used similarly. 

- This method is generally efficient for most use cases. For very large objects, consider performance implications if this check is performed frequently in performance-critical sections of your code. 

