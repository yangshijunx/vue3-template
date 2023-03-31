import http from "@/api";
import { ReqPage, ResultData } from "../interface";

/**
 *@functionName userList
 *@param page,pageSize
 *@description 用户模块
 */

export const userList = (params: ReqPage) => {
  console.log(params);
  return http.post<ResultData>("/mock/api/userList", params);
};
