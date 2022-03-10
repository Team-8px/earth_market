import { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        console.log(resolved);
        const dataArr = new XMLParser()
          .parseFromString(resolved.data)
          .children[1].children[0].children.filter(
            item => item.name === "item",
          );

        setResolved(dataArr);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };
    process();
  }, [deps]);

  return [loading, resolved, error];
}
