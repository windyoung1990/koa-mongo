import  userModel from "./user.model"
class UserService {
    constructor() {

    }
    async getAllUsers() {
        const users = await userModel.find();
        return users;
    }
    async getUser(id) {
        return userModel.findOne({id:id})

    }
    async addUser(body) {
        console.log(body)
        await userModel.create(body)
    }
    async deleteUser(id) {
        await userModel.remove({id}, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log('用户删除成功')
            }
        });
    }
    async updateUser(id, body) {
        // await userModel.findByIdAndUpdate(id, body)
        await userModel.update({
            id: id
        },
        {
            $set: body
        },
        function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('更新成功')
            }
        }
        )
    }
}
export default new UserService()