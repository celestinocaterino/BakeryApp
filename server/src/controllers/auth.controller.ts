import { Request, Response } from 'express';
import authService from '../services/auth.service';

class AuthController{

	private service;

	constructor(authService: any) {
		this.service = authService;
	}
	
	login = async (request: Request, response: Response) => {
		try {
      const loginResponse = await this.service.login(request.body);

			response.status(200).json(loginResponse);
    } catch (error) {
      response.status(400).json(error.message);
		}
	};
}

export default new AuthController(authService);
