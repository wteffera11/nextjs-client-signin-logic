import { PageLinks } from "components/PageLinks"

export default function Protected() {
  return (
    <div>
      <h1>Protected Page One</h1>
      <PageLinks />
    </div>
  )
}

Protected.requireAuth = true
