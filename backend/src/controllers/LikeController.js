const Dev = require('../models/Dev')
module.exports = {
    async store(req,res){
        const  { devId } = req.params;
        const { user } = req.headers;

        const LoggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: "Dev not exists"});
        }

        if(targetDev.likes.includes(LoggedDev._id)){
            const LoggedSocket = req.connectUsers[user]
            const TargeSocket = req.connectUsers[devId]
            if(LoggedSocket){
                req.io.to(LoggedSocket).emit('match', targetDev)
            }
     
            if(TargeSocket){
                req.io.to(TargeSocket).emit('match', LoggedDev)
            }
        }

        LoggedDev.likes.push(targetDev._id);

        await LoggedDev.save();

        return res.json(LoggedDev);
    }
}
