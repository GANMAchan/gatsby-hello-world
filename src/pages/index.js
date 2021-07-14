import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://pbs.twimg.com/media/E58epAzVcAIom_6?format=jpg&name=medium" alt="" />
    </div>
  )
}