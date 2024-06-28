import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { WandSparkles, Zap } from "lucide-react";

import { ScrollArea } from "./ui/scroll-area";
import Nodata from "./LayoutComponents/Nodata";
import Loader from "./Reuse/Loader";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { TEMPLATE } from "@/app/(dashboard)/dashboard/page";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Log the formData object on form submission
    userFormInput(formData);
  };

  return (
    <ScrollArea className="h-full w-full">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        {/* <legend className="-ml-1 px-1 text-sm font-medium text-primary">
          {selectedTemplate?.title}
        </legend> */}
        <form className="grid w-full gap-6" onSubmit={handleSubmit}>
          {selectedTemplate?.form?.map((items:any, index:number) => {
            return (
              <div className="grid gap-3" key={index}>
                <Label htmlFor={items.name}>{items.label}</Label>
                {items.field === "input" && (
                  <Input
                    name={items.name}
                    placeholder={items.label}
                    required={items?.required}
                    onChange={handleInputChange}
                  />
                )}
                {items.field === "textarea" && (
                  <Textarea
                    name={items.name}
                    placeholder={items.label}
                    required={items?.required}
                    onChange={handleInputChange}
                  />
                )}
                {items.field === "select" && (
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange(items.name, value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={items.label} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{items.label}</SelectLabel>
                        {items.options?.map((option:any, index:number) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              </div>
            );
          })}

          <Button type="submit" size="sm" className="ml-auto w-full">
            {loading ? (
              <p className="flex justify-center items-center space-x-2">
                <span>
                  <Zap strokeWidth={3} absoluteStrokeWidth className="mr-2 h-4 w-4 animate-spin" />
                </span>
                <span>Thinking...</span>
              </p>
            ) : (
              <p className="flex justify-center items-center space-x-2">
                <span>
                  <WandSparkles className="h-4 w-4" />
                </span>
                <span>Generate</span>
              </p>
            )}
          </Button>
        </form>
      </fieldset>
    </ScrollArea>
  );
};

export default FormSection;
