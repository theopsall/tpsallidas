import http from "services/http";
import { GithubModel } from "./dtos/GithubModel";

class GithubService {
  public getRepositories = async (username: string): Promise<GithubModel[]> => {
    const response = await http.get(`/users/${username}/repos`);
    return response.data;
  };
}

export default new GithubService();
