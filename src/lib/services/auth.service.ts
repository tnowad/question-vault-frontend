type SignInBody = {
  email: string;
  password: string;
};

type SignInSuccessful = {
  accessToken: string;
  refreshToken: string;
};

type SignInFailed = {
  message: string;
};

const signIn = async (params: SignInBody): Promise<SignInSuccessful | SignInFailed | Error> => {
  try {
    const url = new URL('/auth/email/sign-in');
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.json() as Promise<SignInSuccessful>;
    } else if (response.status === 400) {
      return response.json() as Promise<SignInFailed>;
    }
    return Error('Unexpected response from server');
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
