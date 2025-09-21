const routes = {
  "/quiz1": "quiz1/Homepage.html",
  "/quiz1/profile": "quiz1/Profile.html",
  "/quiz1/hometown": "quiz1/Hometown.html",
  "/quiz1/food": "quiz1/Local_Food.html",
  "/quiz1/tourist": "quiz1/Tourist_Place.html"
};

const route = (event) => {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  window.location.hash = href;
};

const handleLocation = async () => {
  const path = window.location.hash || "/quiz1";
  const routePath = routes[path];

  if (routePath) {
    const html = await fetch(routePath).then(res => res.text());
    document.getElementById("root").innerHTML = html;
  }
};

window.addEventListener("hashchange", handleLocation);
window.route = route;
handleLocation();
