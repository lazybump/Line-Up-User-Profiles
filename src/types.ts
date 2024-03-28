// Type for each user
export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// Type for props in User component
export interface UserPropsType {
  id: number;
  avatar: string;
}
