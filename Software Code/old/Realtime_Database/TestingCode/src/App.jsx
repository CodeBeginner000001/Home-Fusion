/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "./Card";
import db from "./Firebase";
export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetch(
          "https://iot-smartroom-1abef-default-rtdb.asia-southeast1.firebasedatabase.app/.json"
        );
        const jsonData = await fetchedData.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Helper function to format keys
  const formatKey = (key) => key.replace(/(\D)(\d+)/, "$1 $2");

  return (
    <>
      {data ? (
        Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <h1 className="text-3xl ml-6">{key.replace("_"," ")}</h1>
            <div className="grid grid-cols-1 w-[80vw] m-auto mt-8 mb-10 gap-12 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {typeof value === "object" && value !== null ? (
              <>
                {Object.entries(value).map(([subkey, subvalue]) => (
                  <Card key={subkey} CardHeading={formatKey(subkey).replace("_"," ")} value={subvalue} togglePath={`/${key}/${subkey}`}/>
                ))}
              </>
            ) : (
              <p>{String(value)}</p>
            )}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
