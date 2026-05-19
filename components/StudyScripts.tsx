import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../quartz/quartz/components/types"

const StudyScripts: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const staticBase = `https://${cfg.baseUrl}/static/study`
  return (
    <div id="jasyti-study-root" data-static-base={staticBase}>
      <script src={`${staticBase}/progress.js`} defer={true} />
      <script src={`${staticBase}/lesson-visit.js`} defer={true} />
    </div>
  )
}

export default (() => StudyScripts) satisfies QuartzComponentConstructor
