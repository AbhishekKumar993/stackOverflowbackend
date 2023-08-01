const config = {
  jwtSecret: process.env.JWT_SECRET || "test",
  mongoUri:
    process.env.CONNECTION_URL
      ||
    'mongodb+srv://Namasivaayam007:6383512055@cluster0.zaxrt3p.mongodb.net/stackoverflowclone?retryWrites=true&w=majority'
}

export default config
