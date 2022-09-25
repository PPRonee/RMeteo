fetch("https://www.prevision-meteo.ch/services/json/Bagnolet")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#ville").innerHTML = data.city_info.name;
    document.querySelector("#temperature").innerHTML =
      data.current_condition.tmp + "°C";
    document.querySelector("#heure").innerHTML = data.current_condition.hour;

    document.querySelector("#icon").innerHTML =
      '<img src"' + data.current_condition.icon + '">';

    document.querySelector("#condition").innerHTML =
      data.current_condition.condition;
  });
