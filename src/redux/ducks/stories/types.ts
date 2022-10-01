export type StoriesItems = {
  id: number;
  name: string;
  detail_picture: string;
  preview_picture: string;
  text: string;
  button_text: string;
  button_link: string;
  show_desc: boolean;
};

export type CategoriesRes = {
  code: string;
  status: string;
  message: StoriesItems[];
  timestamp: number;
};

export type ConfirmStoriesItem = {
  user_id: number;
  user_image: string;
  stories: StoriesItems[];
};
