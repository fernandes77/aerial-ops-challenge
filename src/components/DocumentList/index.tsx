import { useState, useEffect } from 'react'
import {
  Anchor,
  Button,
  Group,
  Popover,
  ScrollArea,
  Stack
} from '@mantine/core'
import { useDisclosure, useResizeObserver } from '@mantine/hooks'
import { ChevronDown, ChevronRight } from 'tabler-icons-react'

import Document from 'components/Document'

import { DOCUMENT_LIST_MAX_HEIGHT } from 'config/documentList'

type DocumentListProps = {
  documents: {
    name: string
    link: string
    thumbnail: string
  }[]
}

const DocumentList = ({ documents }: DocumentListProps) => {
  const [opened, handlers] = useDisclosure(false)

  const [ref, rect] = useResizeObserver()

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    if (rect.height > DOCUMENT_LIST_MAX_HEIGHT) {
      setIsCollapsed(true)
    }
  }, [rect.height])

  return (
    <div ref={ref}>
      {isCollapsed ? (
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
            <div style={{ maxHeight: 256 }}>
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
      ) : (
        <Group>
          {documents.map((document, key) => (
            <Document key={key} {...document} />
          ))}
        </Group>
      )}
    </div>
  )
}

export default DocumentList
