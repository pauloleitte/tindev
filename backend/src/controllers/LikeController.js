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
            console.log('DEU MATCH!')
        }

        LoggedDev.likes.push(targetDev._id);

        await LoggedDev.save();

        return res.json(LoggedDev);
    }
}
