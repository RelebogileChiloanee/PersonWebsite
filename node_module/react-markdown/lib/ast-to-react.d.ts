/**
 * @param {Context} context
 * @param {Element|Root} node
 */
export function childrenToReact(
  context: Context,
  node: Element | Root
): React.ReactNode[]
/**
 * <T>
 */
export type ComponentType<T> = import('react').ComponentType<T>
/**
 * <T>
 */
export type ComponentPropsWithoutRef<T> =
  import('react').ComponentPropsWithoutRef<T>
export type ReactNode = import('react').ReactNode
export type Position = import('unist').Position
export type Element = import('hast').Element
export type ElementContent = import('hast').ElementContent
export type Root = import('hast').Root
export type Text = import('hast').Text
export type Comment = import('hast').Comment
export type Doctype = import('hast').DocType
export type Info = import('property-information').Info
export type Schema = import('property-information').Schema
export type ReactMarkdownProps = import('./complex-types').ReactMarkdownProps
export type Raw = {
  type: 'raw'
  value: string
}
export type Context = {
  options: Options
  schema: Schema
  listDepth: number
}
export type TransformLink = (
  href: string,
  children: Array<ElementContent>,
  title: string | null
) => string
export type TransformImage = (
  src: string,
  alt: string,
  title: string | null
) => string
export type TransformLinkTargetType = import('react').HTMLAttributeAnchorTarget
export type TransformLinkTarget = (
  href: string,
  children: Array<ElementContent>,
  title: string | null
) => TransformLinkTargetType | undefined
/**
 * To do: is `data-sourcepos` typeable?
 */
export type ReactMarkdownNames = keyof JSX.IntrinsicElements
export type CodeProps = ComponentPropsWithoutRef<'code'> &
  ReactMarkdownProps & {
    inline?: boolean
  }
export type HeadingProps = ComponentPropsWithoutRef<'h1'> &
  ReactMarkdownProps & {
    level: number
  }
export type LiProps = ComponentPropsWithoutRef<'li'> &
  ReactMarkdownProps & {
    checked: boolean | null
    index: number
    ordered: boolean
  }
export type OrderedListProps = ComponentPropsWithoutRef<'ol'> &
  ReactMarkdownProps & {
    depth: number
    ordered: true
  }
export type TableCellProps = ComponentPropsWithoutRef<'table'> &
  ReactMarkdownProps & {
    style?: Record<string, unknown>
    isHeader: boolean
  }
export type TableRowProps = ComponentPropsWithoutRef<'tr'> &
  ReactMarkdownProps & {
    isHeader: boolean
  }
export type UnorderedListProps = ComponentPropsWithoutRef<'ul'> &
  ReactMarkdownProps & {
    depth: number
    ordered: false
  }
export type CodeComponent = ComponentType<CodeProps>
export type HeadingComponent = ComponentType<HeadingProps>
export type LiComponent = ComponentType<LiProps>
export type OrderedListComponent = ComponentType<OrderedListProps>
export type TableCellComponent = ComponentType<TableCellProps>
export type TableRowComponent = ComponentType<TableRowProps>
export type UnorderedListComponent = ComponentType<UnorderedListProps>
export type SpecialComponents = {
  code: CodeComponent | ReactMarkdownNames
  h1: HeadingComponent | ReactMarkdownNames
  h2: HeadingComponent | ReactMarkdownNames
  h3: HeadingComponent | ReactMarkdownNames
  h4: HeadingComponent | ReactMarkdownNames
  h5: HeadingComponent | ReactMarkdownNames
  h6: HeadingComponent | ReactMarkdownNames
  li: LiComponent | ReactMarkdownNames
  ol: OrderedListComponent | ReactMarkdownNames
  td: TableCellComponent | ReactMarkdownNames
  th: TableCellComponent | ReactMarkdownNames
  tr: TableRowComponent | ReactMarkdownNames
  ul: UnorderedListComponent | ReactMarkdownNames
}
export type Components = Partial<
  Omit<import('./complex-types').NormalComponents, keyof SpecialComponents> &
    SpecialComponents
>
export type Options = {
  sourcePos?: boolean | undefined
  rawSourcePos?: boolean | undefined
  skipHtml?: boolean | undefined
  includeElementIndex?: boolean | undefined
  transformLinkUri?: false | TransformLink | null | undefined
  transformImageUri?: TransformImage | undefined
  linkTarget?: React.HTMLAttributeAnchorTarget | TransformLinkTarget | undefined
  components?:
    | Partial<
        Omit<
          import('./complex-types').NormalComponents,
          keyof SpecialComponents
        > &
          SpecialComponents
      >
    | undefined
}
import React from 'react'
import style from 'style-to-object'
