import { ReactNode } from "react"

export type ItemProps = {
  logo: ReactNode,
  name: string
}

export interface PartnersSliderProps {
  speed?: number
  partners?: ItemProps[]
}