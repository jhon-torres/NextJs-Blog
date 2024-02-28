export default function BlogDetailsComponent({blogDetails}) {
  
  return (
    <div className="p-4 flex flex-col gap-4 border border-red-600">
      <p className="text-white">{blogDetails?.title}</p>
      <p className="text-white">{blogDetails?.description}as</p>
    </div>
  );
}
