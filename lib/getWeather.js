export async function getWeather(search) {
  const res = await fetch(
    `${process.env.BASE_URL}/forecast.json?key=${process.env.API_KEY}&q=${search}&days=7&aqi=no&alerts=no`
  );
  const data = await res.json();
  return data;
}
