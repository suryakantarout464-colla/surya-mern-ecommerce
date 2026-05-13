import User from '../models/user-schema.js';

export const userSignup = async (request, response) => {
  try {
   
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      console.log("⚠️ Username already exists:", request.body.username);
      return response.status(401).json({ message: 'Username already exist' });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

   
    response.status(200).json({ message: user });
  } catch (error) {
    console.log("❌ Signup Error:", error.message);
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
 

    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username, password: password });

    if (user) {
      return response.status(200).json({ data: user });
    } else {
      console.log("❌ Invalid login attempt:", username);
      return response.status(401).json('invalid login');
    }
  } catch (error) {
    console.log("❌ Login Error:", error.message);
    response.status(500).json({ message: error.message });
  }
};
