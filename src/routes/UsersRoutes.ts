import { Request, Response, Router} from 'express'

import User from '../models/User'

class UserRoutes{

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public async getUsers(req: Request, res: Response): Promise<void>{
        const users = await User.find();
        res.json(users);
    }

    public async getUser(req: Request, res: Response): Promise<void>{
        const user = await User.findOne({userId: req.params.userId});
        res.json(user);
    }

    public async createUser(req: Request, res: Response): Promise<void>{
        const newUser = new User(req.body);
        await newUser.save();
        res.json({data: newUser});
    }

    public async updateUser(req: Request, res: Response): Promise<void>{
        const {userId} = req.params;
        const user = await User.findOneAndUpdate({userId}, req.body, {new: true});
        res.json(user);
    }

    public async deleteUser(req: Request, res: Response): Promise<void>{
        const {userId} = req.params;
        await User.findOneAndDelete({userId});
        res.json({response: 'User Deleted succsessfully'});
    }

    public async deleteAllUsers(req: Request, res: Response): Promise<void>{
        const users = await User.deleteMany();
        res.json({response: 'All users deleted succsesfully'})
    }

    routes(){
        this.router.get('/', this.getUsers);
        this.router.get('/:userId', this.getUser);
        this.router.post('/createUser', this.createUser);
        this.router.put('/:userId', this.updateUser);
        this.router.delete('/:userId', this.deleteUser);
        this.router.delete('/', this.deleteAllUsers);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;