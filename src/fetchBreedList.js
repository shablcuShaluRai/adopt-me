const fetchBreedList = async ({ queryKey }) => {
  console.log("query key", queryKey);
  const animal = queryKey[1];
  console.log("id query", animal);
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );
  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }
  return apiRes.json();
};

export default fetchBreedList;
