// 函数式中间件
export function logger(req, res, next) {
  console.log('Request...');
  next();
}
