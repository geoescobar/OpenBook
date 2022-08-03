import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const DeniedTable = () => {
  return (
    <TableContainer sx={{ maxHeight: "800px" }} component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Id
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              First Name
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Last Name
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Phone
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              App. Date
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Time
            </TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.apt}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "John",
    last_name: "Mayer",
    email: "johnM@gmail.com",
    phone: "214-207-9744",
    apt: "August 31, 2022",
    time: "01:00 PM",
  },
  {
    id: 2,
    first_name: "Usain",
    last_name: "Bolt",
    email: "bolt@theatlantic.com",
    phone: "214-207-9744",
    apt: "September 04, 2022",
    time: "03:00 PM",
  },
  {
    id: 3,
    first_name: "LeBron",
    last_name: "James",
    email: "leGoat@goat.com",
    phone: "214-550-9744",
    apt: "October 14, 2022",
    time: "02:00 PM",
  },
  {
    id: 4,
    first_name: "Ricky",
    last_name: "Bobby",
    email: "gofast@nascar.com",
    phone: "512-207-3352",
    apt: "December 12, 2022",
    time: "04:00 PM",
  },
];
