export interface Product {
  id: number | string | null | any
  title: string
  price: string
  colors: Array<string>
  editMode: boolean
}
