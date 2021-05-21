export type ValidAccount = {
  balance: number
}

type InvalidAccount = null

type AccountResponse = {
  data: ValidAccount | InvalidAccount
}

export function getAccountData (): Promise<AccountResponse> {
  return new Promise(resolve => {
    const validAccount = !!Math.floor(Math.random() * 2)
    console.log('conta existe?', validAccount)

    setTimeout(() => {
      resolve({
        data: validAccount ? { balance: 100 } : null
      })
    }, 2000)
  })
}
