import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import hookForm from "../utils/hookForm";
import { User } from "../types/user";

type Props = {
  register: UseFormRegister<User>;
  errors: FieldErrors<User>;
};

const EmailInput = ({ register, errors }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>Email / Телефон</FormLabel>
      <Input
        type="email"
        border={"1px solid"}
        placeholder="Email или номер телефона"
        borderColor={errors.login ? "red.300" : "gray.300"}
        borderRadius={0}
        {...register("login", {
          required: hookForm.required,
        })}
      />
      <Text fontSize={"small"} paddingX={1} color={"red.300"}>
        {errors.login?.message}
      </Text>
    </FormControl>
  );
};

export default EmailInput;
