import Mock from "mockjs";
// 这个里面是通用数据
const userList = Mock.mock({
  "userList|55": [
    {
      id: "@increment",
      name: "@cname()",
      address: "@city(true)",
      date: "@date(yyyy-MM-dd)"
    }
  ]
});

Mock.mock("/mock/api/userList", "post", params => {
  const data = userList.userList;
  const info = JSON.parse(params.body);
  const [index, size, total] = [info.pageNum, info.pageSize, data.length];
  const len = total / size;
  const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
  const newDataList = data.slice(index * size, (index + 1) * size);
  return {
    code: 200,
    message: "success",
    data: {
      pageIndex: index,
      pageSize: size,
      data: newDataList,
      total: total,
      totalPages: totalPages
    }
  };
});

Mock.mock("/mock/api/userListAll", "get", userList);
