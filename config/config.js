const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    "mongodb+srv://root:mypass@cluster0.smpx3tk.mongodb.net/?retryWrites=true&w=majority",
  serverUrl: process.env.serverUrl || "http://localhost:3000",
};

export default config;
