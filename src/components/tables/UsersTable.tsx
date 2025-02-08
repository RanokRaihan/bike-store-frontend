import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { TFilter, TMeta } from "@/types/global.types";

import { useState } from "react";
import TableSkeletons from "../skeletons/TableSkeletons";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
import {
  useChangeUserStatusMutation,
  useGetAllUsersQuery,
} from "@/redux/features/admin/userManagement.api";
import { TUser } from "@/types/user.types";
import { toast } from "sonner";
import Pagination from "../ui/Pagination";
import { Button } from "../ui/button";

export function UsersTable() {
  const [paginate, setPaginate] = useState<TFilter[]>([]);
  const { data, isLoading, isFetching } = useGetAllUsersQuery(paginate);
  const [toggleStatus, { isLoading: isChangeLoading }] =
    useChangeUserStatusMutation();
  const users: TUser[] = data?.data?.result;
  const meta: TMeta = data?.data?.meta;

  const tableData = users?.map((user) => {
    return {
      id: user?._id,
      email: user?.email,
      name: user?.name,
      status: user?.isActive ? "Active" : "Inactive",
    };
  });

  const handleStatusChange = async (id: string) => {
    try {
      await toggleStatus(id);
      toast.success("user status updated successfully");
    } catch (error) {
      console.log(error);

      toast.error("Failed to update user status");
    }
  };
  if (isLoading) {
    return <TableSkeletons />;
  }

  return (
    <div>
      <Table className={cn({ "opacity-50": isFetching })}>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map(({ id, name, status, email }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell
                className={cn("font-semibold", {
                  "text-destructive": status === "Inactive",
                  "text-primary": status === "Active",
                })}
              >
                {status}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleStatusChange(id)}
                  disabled={isChangeLoading}
                  variant={status === "Active" ? "destructive" : "default"}
                  size="sm"
                >
                  {status === "Active" ? "Deactivate user" : "Activate user"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination meta={meta} onPageChange={setPaginate} />
    </div>
  );
}
