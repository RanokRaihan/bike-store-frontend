import { bikeBrands, bikeCategories } from "@/constants";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/redux/features/admin/productManagement.api";
import AddProductSchema from "@/schemas/product.validation";
import { TError } from "@/types/error.types";
import { FormFieldType } from "@/types/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import CustomFormField from "../ui/CustomFormField";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import SubmitButton from "../ui/SubmitButton";

const defaultValues = {
  brand: "",
  model: "",
  description: "",
  price: "",
  quantity: "",
  discount: "",
};
type ProductFormProps = {
  initialValues?: z.infer<typeof AddProductSchema>;
  id?: string;
};

const ProductForm = ({ initialValues, id }: ProductFormProps) => {
  const [createProduct, { isLoading: isCreateLoading }] =
    useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdateLoadnig }] =
    useUpdateProductMutation();
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fileError, setFileError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const form = useForm<z.infer<typeof AddProductSchema>>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: initialValues || defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof AddProductSchema>) => {
    if (!file) {
      setFileError("Please select an image");
      return;
    } else {
      setFileError(null);
    }
    const formData = new FormData();
    formData.append("image", file);
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const res = await createProduct(formData).unwrap();
      if (res.success) {
        toast.success("Product created successfully");
        form.reset(defaultValues);
        setFile(null);
        setFileError(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        throw new Error("Product creation failed");
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error.message || "Product creation failed! ");

      //TODO: Refactor this to a separate function
      if (error?.data?.errorSources) {
        error.data.errorSources.forEach((source) => {
          if (
            form.getValues()[
              source.path as keyof z.infer<typeof AddProductSchema>
            ]
          ) {
            form.setError(
              source.path as keyof z.infer<typeof AddProductSchema>,
              {
                type: "manual",
                message: source.message,
              }
            );
          } else {
            form.setError("root", {
              type: "manual",
              message: source.message,
            });
          }
        });
      }
    }
  };

  const onUpdate = async (values: z.infer<typeof AddProductSchema>) => {
    const updateValues = {
      ...values,
      price: parseInt(values.price),
      discount: parseInt(values.discount),
      quantity: parseInt(values.quantity),
    };
    try {
      const res = await updateProduct({ id, data: updateValues }).unwrap();
      if (res.success) {
        toast.success("Product updated successfully");
        navigate("/admin/products");
      } else {
        throw new Error("Product update failed");
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error.message || "Product update failed! ");
    }
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 w-full max-w-[768px]"
        onSubmit={
          initialValues
            ? form.handleSubmit(onUpdate)
            : form.handleSubmit(onSubmit)
        }
      >
        <CustomFormField
          name="brand"
          fieldType={FormFieldType.SELECT}
          label="Brand"
          control={form.control}
          placeholder="Select a brand"
        >
          {bikeBrands.sort().map((brand) => (
            <SelectItem key={brand} value={brand}>
              {brand}
            </SelectItem>
          ))}
        </CustomFormField>
        <CustomFormField
          name="model"
          fieldType={FormFieldType.INPUT}
          label="Model"
          control={form.control}
        />
        <CustomFormField
          name="description"
          fieldType={FormFieldType.TEXTAREA}
          label="Description"
          control={form.control}
        />
        <CustomFormField
          name="category"
          fieldType={FormFieldType.SELECT}
          label="Category"
          control={form.control}
          placeholder="Select a category"
        >
          {bikeCategories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </CustomFormField>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CustomFormField
            name="price"
            fieldType={FormFieldType.INPUT}
            label="Price"
            control={form.control}
          />
          <CustomFormField
            name="discount"
            fieldType={FormFieldType.INPUT}
            label="Discount"
            control={form.control}
          />
          <CustomFormField
            name="quantity"
            fieldType={FormFieldType.INPUT}
            label="Quantity"
            control={form.control}
          />
        </div>
        {!initialValues && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input
              id="image"
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            {fileError && <p className="text-red-500">{fileError}</p>}
          </div>
        )}

        <SubmitButton isLoading={isCreateLoading || isUpdateLoadnig}>
          {initialValues ? "Update Product" : "Create Product"}
        </SubmitButton>
      </form>
    </Form>
  );
};

export default ProductForm;
