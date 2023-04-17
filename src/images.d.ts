import { Value } from "sass"

declare module "*.png" {
  const value: string
  export default value
}

export {}
