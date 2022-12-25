declare namespace NodeJS {
  interface ProcessEnv {
    readonly ENV_MODE: 'development' | 'production' | 'test';
    readonly APP_PORT: string;
    readonly DATABASE_HOST: string;
    readonly DATABASE_NAME: string;
    readonly DATABASE_PORT: string;
    readonly DATABASE_USER: string;
    readonly DATABASE_PASSWORD: string;
  }
}
