import { UsersTable } from "@/components/tables/UsersTable";
import { Separator } from "@/components/ui/separator";

const ManageUsers = () => {
  return (
    <main>
      <h1 className="text-4xl text-primary font-semibold">Manage Users</h1>
      <Separator />
      <UsersTable />
    </main>
  );
};

export default ManageUsers;
