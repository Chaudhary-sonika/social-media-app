import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requireAuth = function (request) {
  const encodedToken = request.requestHeader.authorization;
  const decodedToken = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ username: decodedToken.username });
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["This token is invalid. Unauthorised access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
