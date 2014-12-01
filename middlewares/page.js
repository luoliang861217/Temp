/**
 * Created by Asura on 2014/10/30.
 */



/**
 * 获取分页参数
 * @param req
 * @param res
 * @param next
 */
exports.getQuery = function(req,res,next){
    try{
        req.query.pageIndex = req.query.pageIndex === undefined ? 1 : parseInt(req.query.pageIndex) > 0 ? parseInt(req.query.pageIndex) : 1;
        req.query.pageSize = req.query.pageSize === undefined ? 10 : parseInt(req.query.pageSize) >0 ? parseInt(req.query.pageSize) : 10;
        req.query.pageSort = req.query.pageSort === undefined ? 1 : parseInt(req.query.pageSort);
        req.query.Total = 0;
    }catch(e) {
        this.log(true,'参数不合法：' + e.message,log.type.exception ,req, function(err,result){});
    }
    next();
};
