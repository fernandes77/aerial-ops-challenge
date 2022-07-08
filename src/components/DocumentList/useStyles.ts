import { createStyles } from '@mantine/core'

import { DOCUMENT_LIST_MAX_HEIGHT } from 'config/documentList'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative'
  },
  group: {
    height: DOCUMENT_LIST_MAX_HEIGHT,
    overflowY: 'hidden'
  },
  groupHidden: {
    position: 'absolute',
    visibility: 'hidden'
  },
  scrollDropdown: {
    maxHeight: 256
  }
}))
