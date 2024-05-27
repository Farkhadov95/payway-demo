import { VStack, Box, HStack, Button, Image } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { md5 } from "js-md5";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import logo from "../../public/logo.svg";
import Navbar from "./Navbar";
import UserError from "./UserError";
import { User } from "../types/user";
import { loginUser } from "../services/user";

const Login = () => {
  const form = useForm<User>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [error, setError] = useState("");

  const displayError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const onSubmit = (data: { login: string; password: string }) => {
    const encodedPassword = md5(data.password);
    const postData = new URLSearchParams();
    postData.append("login", data.login);
    postData.append("passHash", encodedPassword);

    console.log(postData.toString());

    loginUser(postData.toString())
      .then((res) => {
        res.data.success ? alert("Success!") : displayError(res.data.message);
      })
      .catch((err) => {
        displayError(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <VStack marginTop={"10svh"} position={"relative"}>
        {error && <UserError error={error} />}
        <Box width={"150px"} height={"170px"}>
          <Image src={logo} />
        </Box>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          width={{
            base: "85vw",
            sm: "50vw",
            md: "50vw",
            lg: "40vw",
            xl: "30vw",
          }}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
        >
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />

          <HStack mt={2} justify={"space-between"}>
            <Button
              type="submit"
              backgroundColor={"#4CB8E9"}
              width={"100%"}
              borderRadius={0}
            >
              Войти
            </Button>
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

export default Login;
