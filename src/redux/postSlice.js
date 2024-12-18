import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async Thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return await response.json();
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    currentPage: 1,
    loading: true,
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    removeCard: (state, action) => {
      const index = state.allPosts.findIndex((post) => post.id === action.payload);
      if (index !== -1) {
        state.allPosts.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.allPosts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setCurrentPage, removeCard } = postSlice.actions;
export default postSlice.reducer;
