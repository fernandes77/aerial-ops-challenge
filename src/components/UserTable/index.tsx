import { Table } from '@mantine/core'

import DocumentList from 'components/DocumentList'

import { usersData } from './mock'

const UserTable = () => {
  const rows = usersData.map((element, key) => (
    <tr key={key}>
      <td>{element.name}</td>
      <td>{element.level}</td>
      <td>{element.salary}</td>
      <td>
        <DocumentList documents={element.documents} />
      </td>
    </tr>
  ))

  return (
    <Table striped verticalSpacing="md" fontSize="md">
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Salary</th>
          <th>Documents</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default UserTable
