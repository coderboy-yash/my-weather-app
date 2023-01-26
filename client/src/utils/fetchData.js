export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "064909a84bmsh22cc70b40768faep1048c7jsn348039ac84b9",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

export const fetchdata = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
