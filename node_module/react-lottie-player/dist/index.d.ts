declare module 'react-lottie-player' {
  import type {
    AnimationConfig,
    AnimationDirection,
    AnimationEventCallback,
    AnimationItem,
    AnimationSegment,
    RendererType
  } from 'lottie-web'

  export type LottieProps = React.PropsWithoutRef<React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >> &
    Partial<Pick<AnimationConfig<RendererType>, 'path', 'animationData', 'loop' | 'renderer' | 'rendererSettings' | 'audioFactory'>> & {
      play?: boolean
      goTo?: number
      speed?: number
      direction?: AnimationDirection
      segments?: AnimationSegment | AnimationSegment[]
      useSubframes?: boolean

      onComplete?: AnimationEventCallback
      onLoopComplete?: AnimationEventCallback
      onEnterFrame?: AnimationEventCallback
      onSegmentStart?: AnimationEventCallback

      /** Lottie `AnimationItem` Instance */
      ref?: React.Ref<AnimationItem | undefined>
    } & ({ path?: string } | { animationData?: object })

  const Lottie: React.FC<LottieProps>

  export default Lottie
}
