export class UserDto {
  user_id: string;
  login: string;
  password: string;
  name: string;
  email: string;
}

export class UserIdDto {
  user_id: string;
}

export class UserIdRequest {
  user_id: string;
}

export class UserLoginRequest {
  login: string;
}