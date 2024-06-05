import tender from "../utils/tender";

export const locations = [
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    location: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Delhi",
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    location: "Istanbul",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Mumbai",
    latitude: 19.0758,
    longitude: 72.8777,
  },
  {
    location: "Bangkok",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    location: "Shanghai",
    latitude: 31.2304,
    longitude: 121.4737,
  },
  {
    location: "Jakarta",
    latitude: -6.2146,
    longitude: 106.8451,
  },
  {
    location: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "Hong Kong",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
];

export async function getLocation(location) {
  try {
    const response = await fetch(
      `https://geocode.maps.co/search?q=${location}&api_key=665eb3db77200194243843fgm2cf36c`
    );

    const data = await response.json();
    console.log(data);
    return data[0];
  } catch (error) {
    console.log(error);
  }
}
