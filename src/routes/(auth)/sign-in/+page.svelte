<script lang="ts">
  import { Label, Input, Toast } from 'flowbite-svelte';
  import SignIn from '$lib/components/features/authentication/sign-in.svelte';
  import { userStore } from '$lib/stores/user.store';
  import authService from '$lib/services/auth.service';
  import { StatusCodes } from 'http-status-codes';
  import { goto } from '$app/navigation';
  let title = 'Sign in to platform';
  let site = {
    name: 'Question Vault',
    img: '/favicon.png',
    link: '/',
    imgAlt: 'Question Vault Logo',
  };
  let rememberMe = true;
  let lostPassword = true;
  let createAccount = true;
  let lostPasswordLink = 'forgot-password';
  let loginTitle = 'Login to your account';
  let registerLink = 'sign-up';
  let signInSuccessfulLink = '/';
  let createAccountTitle = 'Create account';

  const onSubmit = async (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement);

    const data: Record<string, string> = {};
    for (const field of formData.entries()) {
      const [key, value] = field;
      data[key] = value as string;
    }

    try {
      const response = await authService.signIn({
        email: data['email'],
        password: data['password'],
      });

      switch (response.statusCode) {
        case StatusCodes.OK:
          console.log('SignIn Successful!', response);
          userStore.set(response.data.user);

          // TODO: refactor it
          localStorage.setItem('accessToken', response.data.token.accessToken);
          localStorage.setItem('refreshToken', response.data.token.refreshToken);

          goto(signInSuccessfulLink);
          break;
        case StatusCodes.UNPROCESSABLE_ENTITY:
          console.log('Validation Failed!', response);

          // TODO: Iterator each message to show error and focus each input

          break;
        case StatusCodes.UNAUTHORIZED:
          // TODO: Show toast

          console.log('Authentication Failed!', response);
          break;
      }
    } catch (error) {
      console.log('Something went wrong!', error);
    }
  };
</script>

<SignIn
  {title}
  {site}
  {rememberMe}
  {lostPassword}
  {createAccount}
  {lostPasswordLink}
  {loginTitle}
  {registerLink}
  {createAccountTitle}
  on:submit={onSubmit}
>
  <div>
    <Label for="email" class="mb-2">Your email</Label>
    <Input type="email" name="email" id="email" placeholder="name@email.com" required />
  </div>
  <div>
    <Label for="password" class="mb-2">Your password</Label>
    <Input type="password" name="password" id="password" placeholder="••••••••" required />
  </div>
</SignIn>
