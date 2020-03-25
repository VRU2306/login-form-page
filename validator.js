import { Field, Schema } from "v4f";




// Create Complex validation, with rules chaining

export default Schema(
  {
    email: Field()
      .string()
      .email({ message: "enter a valid email address" })
      .required({ message: "this field is required" }),
    password: Field()
      .string()
      .not.equals(["#username"], {
        message: "password must not equals to username"
      })
      .required({ message: "this field is required" }),
    cPassword: Field()
      .string()
      .equals(["#password"], {
        message: "Confirmation password not match password"
      })
      .required({ message: "this field is required" })
  },
  { verbose: true, async: true }
);
