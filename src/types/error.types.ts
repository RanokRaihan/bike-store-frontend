export interface TError extends Error {
  data: {
    success: boolean;
    message: string;
    stack?: string;
    statusCode: number;
    errorSources?: {
      path: string;
      message: string;
    }[];
  };
}
