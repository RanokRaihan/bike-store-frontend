import AllProducts from "@/components/products/AllProducts";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { TFilter } from "@/types/global.types";
import { Filter } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const isMobile = useIsMobile(1048);
  const [filters, setFilters] = useState<TFilter[]>([]);
  return (
    <div className="bg-gray-50 p-4">
      <div className="container mx-auto flex gap-4">
        {!isMobile && (
          <div>
            <ProductSidebar setFilters={setFilters} />
          </div>
        )}

        <main className=" ">
          <div>
            <div className="flex justify-between items-center my-6">
              {isMobile && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="text-primary">
                      <Filter />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side={"left"} className="pt-10">
                    <ProductSidebar setFilters={setFilters} />
                  </SheetContent>
                </Sheet>
              )}
              <h1 className="text-4xl text-primary  font-semibold ">
                All Products
              </h1>
            </div>

            <AllProducts filters={filters} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
