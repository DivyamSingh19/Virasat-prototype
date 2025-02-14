declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string;
        JWT_SECRET: string;
        MONGODB_URI:string
        CLOUDINARY_API_KEY: string;
        CLOUDINARY_SECRET_KEY:string;
        CLOUDINARY_NAME:string;
        ADMIN_EMAIL:string;
        ADMIN_PASSWORD : string;
      }
    }
  }
  