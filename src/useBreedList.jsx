import { useEffect, useState } from "react";

const localCache = {};
export default function useBreedList(animal) {
  const [breedLists, setBreedLists] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreedLists([]);
    } else if (localCache[animal]) {
      setBreedLists(localCache[animal]);
    } else {
      requestBrredList();
    }

    async function requestBrredList() {
      setBreedLists([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedLists(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedLists, status];
}
