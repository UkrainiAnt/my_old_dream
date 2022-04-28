/* cSpell:disable */

export enum config {
  API_URL = "http://192.168.0.106:5000/",
  GOOGLE_CLIENT_ID = "315929656186-5dg5tvo65hrgmqli859kuqupkf4dkpf8.apps.googleusercontent.com",
  STRIPE_PUBLISHABLE_KEY = "pk_test_51JufUOInFtjHZp0OZN4hIB0C4ahWT6kbo4uqHitHgQBxCTSTamXqXB0tQCa6jDBXrdjBTzhYGwIA7fZbM53LlwKC00lr8S6M1J",
  STRIPE_SECRET_KEY = "sk_test_51JufUOInFtjHZp0OLuAROAkSIx9YCqogdu4LAx8mOiKHJC5aJN3R2PytFOfkzQ5aDLKdLRhwiM81wgelysEYys9v00gtQsCSwV",
}

export const googleConfig = {
  androidClientId: config,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "gender", "email", "location"],
};
