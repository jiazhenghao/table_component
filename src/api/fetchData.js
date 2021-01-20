export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const fetchDetails = async (urls) => {
  return Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
    return results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value.json());
  });
};
