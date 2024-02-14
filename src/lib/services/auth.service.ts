import type { StatusCodes } from 'http-status-codes';

type SignInBody = {
  email: string;
  password: string;
};

type SignInSuccessful = {
  statusCode: StatusCodes.OK;
  data: {
    user: {
      id: number;
      uuid: string;
      fullname: string;
      phone: string;
      username: string;
      birthdate: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string;
    };
    token: {
      accessToken: string;
      refreshToken: string;
    };
  };
  message: string;
};

type SignInFailed = {
  statusCode: StatusCodes.UNAUTHORIZED;
  message: string;
  error: string;
};

type SignInValidationFailed = {
  statusCode: StatusCodes.UNPROCESSABLE_ENTITY;
  message: string[];
  error: string;
};

type SignInResponse = Omit<Response, 'json'> & {
  json: () => Promise<SignInSuccessful | SignInFailed | SignInValidationFailed>;
};

const signIn = async (params: SignInBody) => {
  try {
    const url = new URL('/auth/email/sign-in');
    const response = (await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    })) as SignInResponse;

    return response.json();
  } catch (error) {
    throw new Error('Failed to sign in: ' + (error as Error).message);
  }
};

type SignUpBody = {
  email: string;
  fullname: string;
  username: string;
  phone: string;
  password: string;
};

type SignUpSuccessful = {
  user: {
    id: number;
  };
  token: {
    accessToken: string;
    refreshToken: string;
  };
  message: string;
};

type SignUpFailed = {
  message: string;
};

const signUp = async (params: SignUpBody) => {
  try {
    const url = new URL('/auth/email/sign-up');
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.json() as Promise<SignUpSuccessful>;
    } else if (response.status === 400) {
      return response.json() as Promise<SignUpFailed>;
    }
    return Error('Unexpected response from server');
  } catch (error) {
    throw new Error('Failed to sign up: ' + (error as Error).message);
  }
};

const authService = {
  signIn,
  signUp,
};

export default authService;
