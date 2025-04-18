import type {ReactNode, ComponentType, ComponentPropsWithoutRef} from 'react'
import type {Position} from 'unist'
import type {Element} from 'hast'
export interface ReactMarkdownProps {
  node: Element
  children: ReactNode[]
  /**
   * Passed when `options.rawSourcePos` is given
   */
  sourcePosition?: Position
  /**
   * Passed when `options.includeElementIndex` is given
   */
  index?: number
  /**
   * Passed when `options.includeElementIndex` is given
   */
  siblingCount?: number
}
export declare type NormalComponents = {
  [TagName in keyof JSX.IntrinsicElements]:
    | keyof JSX.IntrinsicElements
    | ComponentType<ComponentPropsWithoutRef<TagName> & ReactMarkdownProps>
}
