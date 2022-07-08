import { useRef } from 'react'
import {
  Anchor,
  Button,
  Group,
  Popover,
  ScrollArea,
  Stack
} from '@mantine/core'
import { useDisclosure, useIntersection } from '@mantine/hooks'
import { ChevronDown, ChevronRight } from 'tabler-icons-react'

import Document from 'components/Document'

import { useStyles } from './useStyles'

type DocumentListProps = {
  documents: {
    name: string
    link: string
    thumbnail: string
  }[]
}

const DocumentList = ({ documents }: DocumentListProps) => {
  const { classes } = useStyles()

  const [opened, handlers] = useDisclosure(false)

  const groupRef = useRef(null)

  const [ref, observedEntry] = useIntersection({
    root: groupRef.current,
    threshold: 1
  })

  return (
    <div className={classes.wrapper}>
      <Group
        ref={groupRef}
        className={`${classes.group} ${
          !observedEntry?.isIntersecting && classes.groupHidden
        }`}
      >
        {documents.map((document, key) => (
          <Document
            key={key}
            ref={key === documents.length - 1 ? ref : undefined}
            {...document}
          />
        ))}
      </Group>

      {!observedEntry?.isIntersecting && (
        <Popover
          opened={opened}
          onClose={() => handlers.close()}
          target={
            <Button
              variant="outline"
              onClick={() => handlers.toggle()}
              rightIcon={opened ? <ChevronDown /> : <ChevronRight />}
            >
              Documents
            </Button>
          }
          position="bottom"
        >
          <ScrollArea type="scroll">
            <div className={classes.scrollDropdown}>
              <Stack>
                {documents.map((document, key) => (
                  <Anchor key={key} href={document.link}>
                    <Document key={key} {...document} />
                  </Anchor>
                ))}
              </Stack>
            </div>
          </ScrollArea>
        </Popover>
      )}
    </div>
  )
}

export default DocumentList
