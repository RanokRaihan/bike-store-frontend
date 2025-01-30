import { FilterIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ProductSidebar() {
  return (
    <div>
      <div className="bg-white p-2 rounded-lg shadow-sm mb-4 flex gap-2">
        <input
          type="text"
          className="border rounded-md px-2"
          placeholder="search here..."
        />
        <Button size="sm">Search</Button>
      </div>
      <div className=" rounded-lg shadow-lg p-4 min-w-[250px] h-min sticky top-4 bg-white">
        <p className="text-gray-500 flex items-center gap-2 border-b font-semibold pb-2 text-lg">
          <FilterIcon /> Filter Products
        </p>
        <div>
          <h3 className="text-gray-500  font-semibold mt-4">Category</h3>
          <ul className="mt-2 ml-2">
            <li className="text-gray-500 text-md">
              <input type="checkbox" className="mr-2" id="road" name="road" />
              <label htmlFor="road">Road</label>
            </li>
            <li className="text-gray-500 text-md">
              <input
                type="checkbox"
                className="mr-2"
                id="mountain"
                name="mountain"
              />
              <label htmlFor="mountain">Mountain</label>
            </li>
            <li className="text-gray-500 text-md">
              <input
                type="checkbox"
                className="mr-2"
                id="hybrid"
                name="hybrid"
              />
              <label htmlFor="hybrid">Hybrid</label>
            </li>
            <li className="text-gray-500 text-md">
              <input
                type="checkbox"
                className="mr-2"
                id="electric"
                name="electric"
              />
              <label htmlFor="electric">Electric</label>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-500  font-semibold mt-4">Availability</h3>
          <div className="mt-2 ml-2">
            <div>
              <input type="radio" id="all" name="stock" />
              <label htmlFor="all" className="text-gray-500 text-md ml-2">
                all
              </label>
            </div>
            <div>
              <input type="radio" id="inStock" name="stock" />
              <label htmlFor="inStock" className="text-gray-500 text-md ml-2">
                in stock
              </label>
            </div>
            <div>
              <input type="radio" id="outOfStock" name="stock" />
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
