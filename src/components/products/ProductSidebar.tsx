import { TFilter } from "@/types/global.types";
import { FilterIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";

interface ProductSidebarProps {
  setFilters: React.Dispatch<React.SetStateAction<TFilter[]>>;
}

export function ProductSidebar({ setFilters }: ProductSidebarProps) {
  const [searchInput, setSearchInput] = useState("");
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [stockFilter, setStockFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<{
    min: string | null;
    max: string | null;
  }>({
    min: null,
    max: null,
  });

  useEffect(() => {
    const finalFilters: TFilter[] = []; // final filters array
    if (searchText.trim() !== "") {
      finalFilters.push({ key: "search", value: searchText });
    }
    if (categoryFilter.length > 0) {
      categoryFilter.forEach((category) => {
        finalFilters.push({ key: "category", value: category });
      });
    }

    if (stockFilter !== "all") {
      finalFilters.push({ key: "inStock", value: stockFilter! });
    }

    if (priceFilter.min !== null) {
      finalFilters.push({ key: "minPrice", value: priceFilter.min.toString() });
    }
    if (priceFilter.max !== null) {
      finalFilters.push({ key: "maxPrice", value: priceFilter.max.toString() });
    }

    setFilters(finalFilters);
  }, [categoryFilter, stockFilter, priceFilter, setFilters, searchText]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearchText(searchInput);
  };

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setCategoryFilter((prev) => [...prev, name]);
    } else {
      setCategoryFilter((prev) => prev.filter((cat) => cat !== name));
    }
  };

  const handleStockFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setStockFilter(value);
  };

  const handlePriceFilter = () => {
    const minPrice = minPriceInput.trim() === "" ? null : minPriceInput;
    const maxPrice = maxPriceInput.trim() === "" ? null : maxPriceInput;
    setPriceFilter({ min: minPrice, max: maxPrice });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="bg-white p-2 rounded-lg shadow-sm mb-4 flex gap-2">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="border rounded-md px-2 grow"
            placeholder="search here..."
          />
          <Button type="submit" size="sm">
            Search
          </Button>
        </div>
      </form>
      <div className=" rounded-lg shadow-lg p-4 min-w-[250px] h-min sticky top-4 bg-white">
        <p className="text-gray-500 flex items-center gap-2 border-b font-semibold pb-2 text-lg">
          <FilterIcon /> Filter Products
        </p>
        <div>
          <h3 className="text-gray-500  font-semibold mt-4">Category</h3>
          <ul className="mt-2 ml-2">
            <li className="text-gray-500 text-md">
              <input
                checked={categoryFilter.includes("Road")}
                onChange={handleCategoryFilter}
                type="checkbox"
                className="mr-2"
                id="Road"
                name="Road"
              />
              <label htmlFor="Road">Road</label>
            </li>
            <li className="text-gray-500 text-md">
              <input
                checked={categoryFilter.includes("Mountain")}
                onChange={handleCategoryFilter}
                type="checkbox"
                className="mr-2"
                id="Mountain"
                name="Mountain"
              />
              <label htmlFor="Mountain">Mountain</label>
            </li>
            <li className="text-gray-500 text-md">
              <input
                checked={categoryFilter.includes("Hybrid")}
                onChange={handleCategoryFilter}
                type="checkbox"
                className="mr-2"
                id="Hybrid"
                name="Hybrid"
              />
              <label htmlFor="Hybrid">Hybrid</label>
            </li>
            <li className="text-gray-500 text-md">
              <input
                checked={categoryFilter.includes("Electric")}
                onChange={handleCategoryFilter}
                type="checkbox"
                className="mr-2"
                id="Electric"
                name="Electric"
              />
              <label htmlFor="Electric">Electric</label>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-500  font-semibold mt-4">Availability</h3>
          <div className="mt-2 ml-2">
            <div>
              <input
                type="radio"
                id="all"
                name="stock"
                value="all"
                checked={stockFilter === "all"}
                onChange={handleStockFilter}
              />
              <label htmlFor="all" className="text-gray-500 text-md ml-2">
                all
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="inStock"
                name="stock"
                value="true"
                checked={stockFilter === "true"}
                onChange={handleStockFilter}
              />
              <label htmlFor="inStock" className="text-gray-500 text-md ml-2">
                in stock
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="outOfStock"
                name="stock"
                value="false"
                checked={stockFilter === "false"}
                onChange={handleStockFilter}
              />
              <label
                htmlFor="outOfStock"
                className="text-gray-500 text-md ml-2"
              >
                out of stock
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-500  font-semibold mt-4">Price</h3>
          <div className="mt-2 ml-2 grid grid-cols-2 gap-2">
            <div className="">
              <label htmlFor="minPrice" className="text-gray-500 text-md block">
                Min Price:
              </label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={minPriceInput}
                onChange={(e) => setMinPriceInput(e.target.value)}
                onBlur={handlePriceFilter}
                className="border w-full rounded-sm p-1"
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="text-gray-500 text-md block">
                Max Price:
              </label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={maxPriceInput}
                onChange={(e) => setMaxPriceInput(e.target.value)}
                onBlur={handlePriceFilter}
                className="border rounded-sm w-full p-1"
              />
            </div>
          </div>
        </div>
        <Button size="sm" className="mt-4" variant="destructive">
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
