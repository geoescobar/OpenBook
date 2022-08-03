import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import BasicSelect from "./Select";

export const PendingTable = () => {
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
              Req. Date
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
            <TableCell
              sx={{
                bgcolor: "#003049",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Status
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
              <TableCell>{row.req}</TableCell>
              <TableCell>{row.apt}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.status}</TableCell>
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
    first_name: "Beret",
    last_name: "Lennard",
    email: "blennard0@pcworld.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 2,
    first_name: "Tera",
    last_name: "Choke",
    email: "tchoke1@theatlantic.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 3,
    first_name: "Lyn",
    last_name: "Bowart",
    email: "lbowart2@odnoklassniki.ru",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 4,
    first_name: "Bert",
    last_name: "Huckett",
    email: "bhuckett3@tinypic.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 5,
    first_name: "Drew",
    last_name: "Jenicke",
    email: "djenicke4@businessinsider.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 6,
    first_name: "Deloria",
    last_name: "Pepperill",
    email: "dpepperill5@meetup.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 7,
    first_name: "Spense",
    last_name: "Ivashnyov",
    email: "sivashnyov6@hexun.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 8,
    first_name: "Elden",
    last_name: "Chaucer",
    email: "echaucer7@mozilla.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 9,
    first_name: "Sholom",
    last_name: "Deetch",
    email: "sdeetch8@so-net.ne.jp",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
  {
    id: 10,
    first_name: "Genovera",
    last_name: "Colby",
    email: "gcolby9@dagondesign.com",
    phone: "214-207-9744",
    req: "July 27, 2022",
    apt: "August 06, 2022",
    time: "03:00 PM",
    status: <BasicSelect />,
  },
];
