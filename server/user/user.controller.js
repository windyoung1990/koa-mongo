import userService from './user.service';
class User {
    constructor() {

    }
    async getAllUsers(ctx) {
        const data = {
            code: 200,
            data: await userService.getAllUsers(),
            message: 'Success'
        }
        ctx.body = data;
    }
    async getUser(ctx) {
        const id = ctx.params.id;
        const data = {
            code: 200,
            data: await userService.getUser(id),
            message: 'Success.'
        }
        ctx.body = data;

    }
    async addUser(ctx) {
        const req = ctx.req;
        const body = ctx.request.body;
        await userService.addUser(body);
        ctx.body = {
            code: 200,
            message: 'Success'
        }
    }
    async deleteUser(ctx) {
        const id = ctx.params.id; 
        await userService.deleteUser(id);
        ctx.body = {
            code: 200,
            message: 'Success'
        }
    }
    async updateUser(ctx) {
        const body = ctx.request.body;
        await userService.updateUser(body.id, body);
       ctx.body = {
            code: 200,
            message: 'Success'
        }
    }

}
export default new User()