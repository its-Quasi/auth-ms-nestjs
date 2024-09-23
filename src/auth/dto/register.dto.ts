import { IsEmail, IsString } from "class-validator";

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
  // @IsStrongPassword({
  //   minLength: 8,
  //   minNumbers: 1,
  //   minSymbols: 1,
  //   minUppercase: 1
  // })
  password: string;
}
