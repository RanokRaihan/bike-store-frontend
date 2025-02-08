import {
  GalleryVerticalEnd,
  LayoutDashboard,
  NotebookPen,
  Package,
  User,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  teams: [
    {
      name: "Admin Panel",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/admin/dashboard",
        },
      ],
    },
    {
      title: "Product Management",
      url: "#",
      icon: Package,
      isActive: true,
      items: [
        {
          title: "Add Product",
          url: "/admin/products/add",
        },
        {
          title: "All Products",
          url: "/admin/products",
        },
      ],
    },
    {
      title: "Order Management",
      url: "#",
      icon: NotebookPen,
      isActive: true,
      items: [
        {
          title: "All Orders",
          url: "/admin/orders",
        },
      ],
    },
    {
      title: "User Management",
      url: "#",
      icon: User,
      isActive: true,
      items: [
        {
          title: "Users",
          url: "/admin/users",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
