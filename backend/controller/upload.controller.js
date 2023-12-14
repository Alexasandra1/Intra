class UploadController{

    async uploadAvatar(req,res){

        try{
            if(req.file){
                res.json(req.file)
            }
        }catch(error){
            console.log(eror);
            req.status(500).send(error)
        }
    }
}
module.exports = new UploadController();