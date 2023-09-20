import jwt from 'jsonwebtoken';

const authMiddleware = (handler) => {
  return async (req, res) => {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'No authorization header' });
    }

    const token = req.headers.authorization.split(' ')[1]; // Bearer <token>

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    return handler(req, res);
  };
};

export default authMiddleware;