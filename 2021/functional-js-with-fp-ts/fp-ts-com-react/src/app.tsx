import { useEffect, useState } from 'react'
import { Option, none, fromNullable, map } from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import { getAccountData } from './services'
import { Optional } from './optional'

type BankAccountBalance = number
type BalanceState = Option<BankAccountBalance>

function App () {
  const [balance, setBalance] = useState<BalanceState>(none)
  const [isFetching, setIsFetching] = useState(true)
  console.log('balance:', balance)

  useEffect(() => {
    getAccountData().then(result => {
      console.log('result:', result)

      pipe(
        result.data,
        fromNullable,
        map(o => o.balance),
        setBalance
      )

      setIsFetching(false)
    })
  }, [])

  return (
    <>
      {isFetching && <h1>--</h1>}

      {!isFetching && (
        <Optional
          value={balance}
          onSome={(value) => <h1>Saldo: {value}</h1>}
          onNone={() => <p>Conta não encontrada</p>}
        />
      )}
    </>
  )
}

export default App
