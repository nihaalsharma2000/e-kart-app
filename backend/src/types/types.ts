export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}
export interface JwtPayload {
  id: string;
  role: string;
}
