import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesRes, ConfirmStoriesItem, StoriesItems } from "./types";
import { getListStories } from "./thunks";
import { ProductsData } from "../products/types";

const initialState: ConfirmStoriesItem[] = [] as ConfirmStoriesItem[];

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getListStories.fulfilled,
      (state, { payload }: PayloadAction<CategoriesRes>) => {
        if (payload) {
          const newState: ConfirmStoriesItem[] = [];
          payload.message.map((item) => {
            let mas = [item];
            let obj = {
              user_id: item.id,
              user_image: item.preview_picture,
              story_image: item.detail_picture,
              name: item.name,
              stories: mas,
            };
            newState.push(obj);
          });
          state = newState;
          return state;
        }
      }
    );
  },
});

const actions = { ...storiesSlice.actions };
const reducer = storiesSlice.reducer;

export { actions, reducer };
