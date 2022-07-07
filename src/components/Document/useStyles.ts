import { createStyles } from '@mantine/core'

import { DOCUMENT_LIST_MAX_HEIGHT } from 'config/documentList'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: DOCUMENT_LIST_MAX_HEIGHT,
    backgroundColor: theme.white
  },
  thumbnail: {
    backgroundColor: theme.colors.gray[3],
    padding: '0.3rem 0.3rem 0',
    borderRadius: theme.radius.sm,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.5rem',
    border: '1px solid',
    borderRadius: theme.radius.sm,
    borderLeft: 0,
    borderColor: theme.colors.gray[3],
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
}))
