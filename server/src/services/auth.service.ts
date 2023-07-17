import { Repository } from 'typeorm';
import { User } from './../entities/user.entity';
import { dataSource } from './../config/database';
import config from './../config/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {

  private userRepository;

	constructor(
    userRepository: Repository<User>,
  ) {
		this.userRepository = userRepository;
	}

  login = async (user: Partial<User>) => {
    const foundUser = await this.userRepository.findOne({ where: { email: user.email } });
    const isMatch = bcrypt.compareSync(user.password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign({ _id: foundUser.id?.toString(), email: foundUser.email }, config.jwt_secret, {
        expiresIn: '2 days',
      });

      return { user: foundUser.email, token };
    } else {
      throw new Error('Password is not correct');
    }
  };
}

export default new AuthService(
  dataSource.getRepository(User)
);