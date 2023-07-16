export type Photo = {
  id: string;
  created: Date;
  alt_description: string;
  urls: {
    large: string;
    regular: string;
    raw: string;
    thumb: string;
    small: string;
    full: string;
  };
  user: {
    id: string;
    name: string;
    username: string;
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };
  };
  liked: boolean;
};
