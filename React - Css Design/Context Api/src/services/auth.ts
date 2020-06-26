interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'sdpfodf[sdpjfdpssdqwjde2132sadsadad',
        user: {
          name: 'Destroyeer',
          email: 'destroyeer@gmail.com'
        }
      })
    }, 1000)
  })
}
