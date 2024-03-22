await new Promise<void>((resolve) => setTimeout(() => {
  console.log('Hello World')
  resolve()
}, 1000) )