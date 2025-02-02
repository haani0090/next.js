import Link from 'next/link'
import { nanoid } from 'nanoid'

export default function Page() {
  return (
    <>
      <h1 id="render-id">{nanoid()}</h1>
      <Link href="/navigation">
        <a id="link">To Navigation</a>
      </Link>
    </>
  )
}
