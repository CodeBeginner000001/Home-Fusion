/* eslint-disable react/prop-types */
import Loading from "./CollectionCards/Loading";
import Card from "./Card";
export default function CollectionCard({ CollectionData, CollectionName }) {
  return (
    <div className="grid grid-cols-1 w-[80vw] m-auto mt-8 mb-10 gap-12 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {CollectionData ? (
        CollectionData.map((data) => (
          <Card
            CardHeading={data.name}
            key={data.id}
            value={data.value}
            CollectionName={CollectionName}
            docId={data.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
