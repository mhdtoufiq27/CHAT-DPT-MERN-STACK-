// Clean in-memory sliding window rate limiter
const rateLimitMap = new Map();

const rateLimiter = (options = { windowMs: 60 * 1000, max: 30 }) => {
  return (req, res, next) => {
    const identifier = req.user ? String(req.user._id) : (req.ip || req.guestId || "client_default");
    const now = Date.now();

    let record = rateLimitMap.get(identifier);
    if (!record) {
      record = { count: 1, startTime: now };
      rateLimitMap.set(identifier, record);
      return next();
    }

    if (now - record.startTime > options.windowMs) {
      record.count = 1;
      record.startTime = now;
      rateLimitMap.set(identifier, record);
      return next();
    }

    record.count += 1;
    if (record.count > options.max) {
      return res.status(429).json({
        message: "You are sending requests too quickly. Please wait a moment before trying again.",
      });
    }

    rateLimitMap.set(identifier, record);
    next();
  };
};

module.exports = rateLimiter;
