/* eslint-disable react/prop-types */
import Loading from "./Loading";
import Card from "../Card";
export default function LightCard({ lightsData, CollectionName }) {
  return (
    <div className="grid grid-cols-1 w-[80vw] m-auto mt-8 mb-10 gap-12 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {lightsData ? (
        lightsData.map((light) => (
          <Card
            CardHeading={light.name}
            key={light.id}
            value={light.value}
            CollectionName={CollectionName}
            docId={light.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
