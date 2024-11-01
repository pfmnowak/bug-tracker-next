import { fakeTasks } from "@/mock/tasks";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function Tasks() {
  const tasks = fakeTasks;

  if (!tasks || tasks.length === 0) {
    return <p>{`There are no tasks! Start off by creating one :)`}</p>;
  }

  return (
    <Box>
      <Typography>All Tasks</Typography>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell>DEVELOPER</TableCell>
              <TableCell>TESTER</TableCell>
              <TableCell>AUTHOR</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>SPRINT</TableCell>
              <TableCell>DATE_CREATED</TableCell>
              <TableCell>DATE_MODIFIED</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.developerAssigned}</TableCell>
                <TableCell>{task.testerAssigned}</TableCell>
                <TableCell>{task.author}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.sprint}</TableCell>
                <TableCell>{task.dateCreated.toString()}</TableCell>
                <TableCell>{task.dateModified.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* PAGINATION */}
      </Box>
    </Box>
  );
}
