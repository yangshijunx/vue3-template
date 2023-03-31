import Mock from "mockjs";
import "./user";
// 这个里面是通用数据
const data = Mock.mock({
  "list|1-10": [
    {
      "id|+1": 1
    }
  ]
});
Mock.mock("/mock/api/list", "get", data);
