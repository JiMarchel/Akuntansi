import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface TextInputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  type?: string;
  enum1?: Record<string, string>
  enum2?: Record<string, string>
  disabled?: boolean
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  name,
  placeholder,
  control,
  label,
  type,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SelectInputField = ({
  control,
  label,
  name,
  placeholder,
  enum1,
  enum2,
  disabled
}: TextInputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select disabled={disabled} onValueChange={field.onChange} defaultValue={undefined}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {enum1 &&
                Object.keys(enum1).map((tipe) => (
                  <SelectItem key={tipe} value={tipe}>
                    {enum1[tipe]}
                  </SelectItem>
                ))}
              {enum2 &&
                Object.keys(enum2).map((tipe) => (
                  <SelectItem key={tipe} value={tipe}>
                    {enum2[tipe]}
                  </SelectItem>
                ))}

            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
