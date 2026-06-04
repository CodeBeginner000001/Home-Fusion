/*
Don't change below this commet line and if you want to add new collection name and want to have card for that collection ,
please add name of the collection in the collectionName and the heading in the file called CollectionName.js ,
their you can write the collection Name in the collectionName section and give the heading in the name.
*/
import { useEffect, useState } from "react";
import collectionData from "./Utils/Firebase_GetData.js";
import CollectionCard from "./CollectionCard.jsx";
import Collections from "./Utils/CollectionsName.js"
export default function App() {
//  useStates to store collections data
 const [collectionDataMap, setCollectionDataMap] = useState({});

  useEffect(() => {
   // collection names variables
  // let FanCollection = "Fans";
  
// //  useStates to store collections data
//   const [fansData, setFansData] = useState([]);

//   useEffect(() => {
//    // Fetch data from each collection and set it to respective state variables
//    const unsubscribeFans = collectionData(FanCollection, setFansData);


   const unsubscribeList = Collections.map((Collection) => {
    const unsubscribe = collectionData(Collection.CollectionName, (data) => {
      setCollectionDataMap((prevData) => ({
        ...prevData,
        [Collection.CollectionName]: data, // Store data for each collection dynamically
      }));
    });
    return unsubscribe; // Return unsubscribe function for cleanup
  });

  // Cleanup function to unsubscribe when the component is unmounted
  return () => {
    unsubscribeList.forEach((unsubscribe) => unsubscribe());
  };
  }, []);
  return (
    <>
      {
        Collections.map((Collection)=>{
          // console.log(collectionDataMap);
          const data = collectionDataMap[Collection.CollectionName] || [];
          return (
            <div key = {Collection.name}>
             <h2 className="text-3xl ml-6">{Collection.name}</h2>
             <CollectionCard CollectionData={data} CollectionName={Collection.CollectionName}/>
            </div>
          )
        })
      }
    </>
  );
}
