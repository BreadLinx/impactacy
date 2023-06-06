import ky from "ky";

export const api = ky.create({
  throwHttpErrors: false,
  prefixUrl: "http://localhost:5000",
});

export const authApi = ky.create({
  throwHttpErrors: false,
  prefixUrl: "http://localhost:5000",
});
