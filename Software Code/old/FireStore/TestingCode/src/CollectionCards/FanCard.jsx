/* eslint-disable react/prop-types */
import Card from "../Card";
import Loading from "./Loading";
export default function FanCard({ fansData, CollectionName }) {
  return (
    <div className="grid grid-cols-1 w-[80vw] m-auto mt-8 mb-10 gap-12 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {fansData ? (
        fansData.map((fan) => ( 
          <Card
            CardHeading={fan.name}
            key={fan.id}
            value={fan.value}
            CollectionName={CollectionName}
            docId={fan.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
