import { pipe, constNull } from 'fp-ts/function'
import { Option, fold } from 'fp-ts/Option'

type OptionalProps<A> = {
  value: Option<A>
  onSome: (a: A) => React.ReactNode
  onNone?: () => React.ReactNode
}

type OptionalType = <A>(props: OptionalProps<A>) => JSX.Element
export const Optional: OptionalType = ({ value, onSome, onNone = constNull }) => (
  <>
    {pipe(
      value,
      fold(onNone, onSome)
    )}
  </>
)
