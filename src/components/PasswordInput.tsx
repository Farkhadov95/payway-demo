import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { User } from "../types/user";
import hookForm from "../utils/hookForm";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { useState } from "react";

type Props = {
  register: UseFormRegister<User>;
  errors: FieldErrors<User>;
};

const PasswordInput = ({ register, errors }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <FormControl isRequired>
      <FormLabel>Пароль</FormLabel>
      <InputGroup>
        <Input
          border={"1px solid"}
          placeholder="Ваш пароль"
          borderColor={errors.password ? "red.300" : "gray.300"}
          borderRadius={0}
          type={isVisible ? "text" : "password"}
          {...register("password", {
            required: hookForm.required,
          })}
        />
        <InputRightElement>
          <IconButton
            size="sm"
            icon={isVisible ? <BiHide /> : <BiShowAlt />}
            variant={"ghost"}
            width={"fit-content"}
            aria-label="Показать или спрятать пароль"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        </InputRightElement>
      </InputGroup>
      <Text fontSize={"small"} paddingX={1} color={"red.300"}>
        {errors.password?.message}
      </Text>
      <Link fontSize={"small"} paddingX={1} color={"#4CB8E9"}>
        Забыли пароль?
      </Link>
    </FormControl>
  );
};

export default PasswordInput;
