import { http, HttpResponse, delay } from "msw";
import type { Post } from "../App.tsx";

export const handlers = [
  http.get<never, never, Array<Post>>(
    "https://api.example.com/posts",
    async () => {
      await delay(995);

      return HttpResponse.json([
        {
          id: "1",
          title: "First post",
          body: "This is my first post",
        },
        {
          id: "2",
          title: "Second post",
          body: "And here is the second one",
        },
      ]);
    }
  ),
];
