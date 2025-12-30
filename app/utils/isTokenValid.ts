import { jwtDecode } from "jwt-decode";

export function isTokenValid(token: string) {
  try {
    const decoded: any = jwtDecode(token);
    if (!decoded.exp) return false;

    const now = Math.floor(Date.now() / 1000);
    return decoded.exp > now;
  } catch {
    return false;
  }
}
