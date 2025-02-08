import { Skeleton } from "../ui/skeleton";

const TableSkeletons = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
      <Skeleton className="w-full h-10 rounded-md" />
    </div>
  );
};

export default TableSkeletons;
