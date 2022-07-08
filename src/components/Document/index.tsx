import { ForwardedRef, forwardRef, memo } from 'react'
import { Anchor, Image } from '@mantine/core'

import { useStyles } from './useStyles'

type DocumentProps = {
  link: string
  name: string
  thumbnail: string
}

const Document = forwardRef(
  ({ link, name, thumbnail }: DocumentProps, ref: ForwardedRef<any>) => {
    const { classes } = useStyles()

    return (
      <div ref={ref} className={classes.wrapper}>
        <div className={classes.thumbnail}>
          <Image width={40} height={40} src={thumbnail} alt="Document" />
        </div>

        <div className={classes.linkWrapper}>
          <Anchor href={link} target="_blank">
            {name}
          </Anchor>
        </div>
      </div>
    )
  }
)

export default memo(Document)
